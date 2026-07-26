"use client";

import { useRouter } from "next/navigation";
import { format } from "date-fns";

import { Badge } from "@/components/ui/badge";
import type { Session } from "@/types/session";

interface SessionRowProps {
  session: Session;
}

function getScoreVariant(score: number): string {
  if (score >= 85) {
    return "bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900 dark:text-green-200";
  }

  if (score >= 70) {
    return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-200";
  }

  return "bg-red-100 text-red-800 hover:bg-red-100 dark:bg-red-900 dark:text-red-200";
}

export default function SessionRow({
  session,
}: SessionRowProps) {
  const router = useRouter();

  return (
    <tr
      onClick={() =>
        router.push(`/dashboard/sessions/${session.id}`)
      }
      className="cursor-pointer transition-colors hover:bg-muted/50 hover:shadow-sm"
    >
      <td className="px-4 py-4 font-medium">
        {session.studentName}
      </td>

      <td className="px-4 py-4 text-muted-foreground">
        {session.mentorName}
      </td>

      <td className="px-4 py-4">
        {format(new Date(session.date), "MMM dd, yyyy")}
      </td>

      <td className="px-4 py-4">
        {session.duration} min
      </td>

      <td className="px-4 py-4">
        <Badge
          className={getScoreVariant(session.overallScore)}
        >
          {session.overallScore}
        </Badge>
      </td>
    </tr>
  );
}