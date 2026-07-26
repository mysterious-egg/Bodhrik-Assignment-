"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { useSessions } from "@/hooks/use-sessions";

import SessionHeader from "@/components/session/session-header";
import SessionSummary from "@/components/session/session-summary";
import MetricsChart from "@/components/session/metrics-chart";

export default function SessionPage() {
  const { id } = useParams<{ id: string }>();

  const {
    data: sessions = [],
    isLoading,
    isError,
  } = useSessions();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        Loading session...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center gap-4 py-20">
        <p className="text-red-500">
          Failed to load session.
        </p>

        <Link href="/dashboard">
          <Button variant="outline">
            ← Back to Dashboard
          </Button>
        </Link>
      </div>
    );
  }

  const session = sessions.find((s) => s.id === id);

  if (!session) {
    return (
      <div className="flex flex-col items-center gap-4 py-20">
        <h2 className="text-2xl font-semibold">
          Session not found
        </h2>

        <Link href="/dashboard">
          <Button variant="outline">
            ← Back to Dashboard
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6 p-6">
      <Link href="/dashboard">
        <Button variant="outline">
          ← Back to Dashboard
        </Button>
      </Link>

      <SessionHeader session={session} />

      <SessionSummary metrics={session.metrics} />
      <MetricsChart metrics={session.metrics} />
    </div>
  );
}