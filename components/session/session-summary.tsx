import { useMemo } from "react";

import MetricCard from "./metric-card";
import type { SessionMetric } from "@/types/session";

interface SessionSummaryProps {
  metrics: SessionMetric[];
}

export default function SessionSummary({
  metrics,
}: SessionSummaryProps) {
  const averages = useMemo(() => {
    if (!metrics.length) {
      return {
        engagement: 0,
        clarity: 0,
        pacing: 0,
      };
    }

    const totals = metrics.reduce(
      (acc, metric) => {
        acc.engagement += metric.engagement;
        acc.clarity += metric.clarity;
        acc.pacing += metric.pacing;

        return acc;
      },
      {
        engagement: 0,
        clarity: 0,
        pacing: 0,
      }
    );

    return {
      engagement:
        totals.engagement / metrics.length,

      clarity:
        totals.clarity / metrics.length,

      pacing:
        totals.pacing / metrics.length,
    };
  }, [metrics]);

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <MetricCard
        title="Average Engagement"
        value={averages.engagement}
      />

      <MetricCard
        title="Average Clarity"
        value={averages.clarity}
      />

      <MetricCard
        title="Average Pacing"
        value={averages.pacing}
      />
    </div>
  );
}