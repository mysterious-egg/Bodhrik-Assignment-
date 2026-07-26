import { CalendarDays } from "lucide-react";

interface DashboardHeaderProps {
  totalSessions: number;
}

export default function DashboardHeader({
  totalSessions,
}: DashboardHeaderProps) {
  return (
    <section className="flex flex-col gap-2 border-b pb-6 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Dashboard
        </h1>

        <p className="text-muted-foreground">
          Monitor mentoring sessions and student performance.
        </p>
      </div>

      <div className="flex items-center gap-2 rounded-lg border bg-card px-4 py-2 text-sm shadow-sm">
        <CalendarDays className="h-4 w-4 text-muted-foreground" />

        <span className="font-medium">
          {totalSessions} Sessions
        </span>
      </div>
    </section>
  );
}
