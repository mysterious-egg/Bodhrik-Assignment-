import SummaryCard from "./summary-card";

interface DashboardSummaryProps {
  totalSessions: number;
  averageScore: number;
  averageDuration: number;
}

export default function DashboardSummary({
  totalSessions,
  averageScore,
  averageDuration,
}: DashboardSummaryProps) {
  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <SummaryCard
        title="Total Sessions"
        value={totalSessions}
      />

      <SummaryCard
        title="Average Overall Score"
        value={`${averageScore.toFixed(1)}%`}
      />

      <SummaryCard
        title="Average Session Duration"
        value={`${averageDuration.toFixed(0)} mins`}
      />
    </section>
  );
}