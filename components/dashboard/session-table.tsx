import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Skeleton } from "@/components/ui/skeleton";
import type { Session } from "@/types/session";
import SessionRow from "./session-row";

interface SessionTableProps {
  sessions: Session[];
  isLoading: boolean;
  isError: boolean;
}

export default function SessionTable({
  sessions,
  isLoading,
  isError,
}: SessionTableProps) {
  if (isLoading) {
    return (
      <div className="space-y-3 rounded-lg border p-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <Skeleton key={index} className="h-10 w-full" />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="rounded-lg border border-destructive/30 bg-destructive/10 p-8 text-center">
        <h2 className="font-semibold text-destructive">
          Failed to load sessions
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          Please try again later.
        </p>
      </div>
    );
  }

  if (sessions.length === 0) {
    return (
      <div className="rounded-lg border p-8 text-center">
        <h2 className="font-semibold">
          No sessions found
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          There are currently no mentoring sessions.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border bg-card shadow-sm">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Student</TableHead>
            <TableHead>Mentor</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>Overall Score</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {sessions.map((session) => (
            <SessionRow
              key={session.id}
              session={session}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}