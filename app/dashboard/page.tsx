"use client";

import DashboardHeader from "@/components/dashboard/dashboard-header";
import SessionTable from "@/components/dashboard/session-table";
import { useSessions } from "@/hooks/use-sessions";

export default function DashboardPage() {
  const {
    data: sessions = [],
    isLoading,
    isError,
  } = useSessions();

  return (
    <section className="space-y-8">
      <DashboardHeader
        totalSessions={sessions.length}
      />

      <SessionTable
        sessions={sessions}
        isLoading={isLoading}
        isError={isError}
      />
    </section>
  );
}