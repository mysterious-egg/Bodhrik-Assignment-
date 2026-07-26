import { faker } from "@faker-js/faker";
import fs from "fs";
import path from "path";

const mentors = [
  "Sarah Johnson",
  "Michael Chen",
  "Emily Davis",
  "David Wilson",
  "Priya Sharma",
  "Alex Brown",
];

const studentNames = Array.from({ length: 30 }, () =>
  faker.person.fullName()
);

type Trend = "improving" | "declining" | "stable" | "fluctuating";

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function random(min: number, max: number) {
  return faker.number.int({ min, max });
}

function generateMetrics(
  start: Date,
  duration: number,
  trend: Trend
) {
  const entries = random(15, 20);

  let engagement = random(65, 90);
  let clarity = random(60, 90);
  let pacing = random(70, 90);

  const metrics = [];

  for (let i = 0; i < entries; i++) {
    const progress = i / entries;

    switch (trend) {
      case "improving":
        engagement += faker.number.int({ min: 0, max: 2 });
        clarity += faker.number.int({ min: 0, max: 2 });
        pacing += faker.number.int({ min: 0, max: 1 });
        break;

      case "declining":
        engagement -= faker.number.int({ min: 0, max: 2 });
        clarity -= faker.number.int({ min: 0, max: 2 });
        pacing -= faker.number.int({ min: 0, max: 1 });
        break;

      case "fluctuating":
        engagement += faker.number.int({ min: -3, max: 3 });
        clarity += faker.number.int({ min: -3, max: 3 });
        pacing += faker.number.int({ min: -2, max: 2 });
        break;

      case "stable":
        engagement += faker.number.int({ min: -1, max: 1 });
        clarity += faker.number.int({ min: -1, max: 1 });
        pacing += faker.number.int({ min: -1, max: 1 });
        break;
    }

    metrics.push({
      timestamp: new Date(
        start.getTime() + progress * duration * 60000
      ).toISOString(),
      engagement: clamp(Math.round(engagement), 60, 100),
      clarity: clamp(Math.round(clarity), 55, 100),
      pacing: clamp(Math.round(pacing), 65, 100),
    });
  }

  return metrics;
}

const trends: Trend[] = [
  "improving",
  "declining",
  "stable",
  "fluctuating",
];

const sessions = studentNames.map((student, index) => {
  const duration = random(45, 90);

  const date = faker.date.between({
    from: "2026-04-01",
    to: "2026-05-30",
  });

  const metrics = generateMetrics(
    date,
    duration,
    trends[index % trends.length]
  );

  const avg =
    metrics.reduce(
      (sum, m) => sum + m.engagement + m.clarity + m.pacing,
      0
    ) /
    (metrics.length * 3);

  return {
    id: faker.string.uuid(),
    studentName: student,
    mentorName: faker.helpers.arrayElement(mentors),
    date: date.toISOString(),
    duration,
    overallScore: Math.round(avg),
    metrics,
  };
});

const output = path.join(process.cwd(), "data", "sessions.json");

fs.writeFileSync(output, JSON.stringify(sessions, null, 2));

console.log("✅ Generated", sessions.length, "sessions");