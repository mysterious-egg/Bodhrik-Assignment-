"use client";

import { CalendarDays } from "lucide-react";

import { Button } from "@/components/ui/button";

interface DashboardHeaderProps {
  totalSessions: number;
}

export default function DashboardHeader({
  totalSessions,
}: DashboardHeaderProps) {
  const handleLogout = () => {
    document.cookie =
      "mock-auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";

    window.location.href = "/login";
  };

  return (
    <section className="flex flex-col gap-4 border-b pb-6 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Dashboard
        </h1>

        <p className="text-muted-foreground">
          Monitor mentoring sessions and student performance.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 rounded-lg border bg-card px-4 py-2 text-sm shadow-sm">
          <CalendarDays className="h-4 w-4 text-muted-foreground" />

          <span className="font-medium">
            {totalSessions} Sessions
          </span>
        </div>

        <Button
          variant="outline"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
    </section>
  );
}