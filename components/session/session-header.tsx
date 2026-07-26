import { format } from "date-fns";

import { Badge } from "@/components/ui/badge";
import type { Session } from "@/types/session";

interface SessionHeaderProps {
  session: Session;
}

function getScoreVariant(score: number) {
  if (score >= 85) {
    return "bg-green-100 text-green-800";
  }

  if (score >= 70) {
    return "bg-yellow-100 text-yellow-800";
  }

  return "bg-red-100 text-red-800";
}

export default function SessionHeader({
  session,
}: SessionHeaderProps) {
  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            {session.studentName}
          </h1>

          <p className="mt-2 text-muted-foreground">
            Mentored by {session.mentorName}
          </p>
        </div>

        <Badge
          className={getScoreVariant(
            session.overallScore
          )}
        >
          Overall Score: {session.overallScore}
        </Badge>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div>
          <p className="text-sm text-muted-foreground">
            Date
          </p>

          <p className="font-medium">
            {format(
              new Date(session.date),
              "MMMM dd, yyyy"
            )}
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Duration
          </p>

          <p className="font-medium">
            {session.duration} minutes
          </p>
        </div>
      </div>
    </div>
  );
}