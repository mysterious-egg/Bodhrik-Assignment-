"use client";

import { useMemo, useState } from "react";
import { isSameDay, parseISO } from "date-fns";
import DashboardHeader from "@/components/dashboard/dashboard-header";
import DashboardSummary from "@/components/dashboard/dashboard-summary";
import SessionTable from "@/components/dashboard/session-table";
import { Button } from "@/components/ui/button";
import SearchFilter from "@/components/filters/search-filter";
import MentorFilter from "@/components/filters/mentor-filter";
import DateFilter from "@/components/filters/date-filter";
import ScoreFilter, {
  ScoreFilterValue,
} from "@/components/filters/score-filter";

import { useSessions } from "@/hooks/use-sessions";

export default function DashboardPage() {
  const {
    data: sessions = [],
    isLoading,
    isError,
  } = useSessions();

  const [search, setSearch] = useState("");
  const [mentor, setMentor] = useState("all");
  const [date, setDate] = useState<Date>();
  const [score, setScore] =
    useState<ScoreFilterValue>("all");
  const clearFilters = () => {
  setSearch("");
  setMentor("all");
  setDate(undefined);
  setScore("all");
};
  /**
   * Mentor options
   */
  const mentors = useMemo(() => {
    return [...new Set(sessions.map((s) => s.mentorName))].sort();
  }, [sessions]);

  /**
   * Filter sessions
   */
  const filteredSessions = useMemo(() => {
    return sessions.filter((session) => {
      const matchesSearch =
        session.studentName
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        session.mentorName
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesMentor =
        mentor === "all" ||
        session.mentorName === mentor;



const matchesDate =
  !date || isSameDay(parseISO(session.date), date);
      const matchesScore = (() => {
        switch (score) {
          case "85+":
            return session.overallScore >= 85;

          case "70-84":
            return (
              session.overallScore >= 70 &&
              session.overallScore < 85
            );

          case "below70":
            return session.overallScore < 70;

          default:
            return true;
        }
      })();

      return (
        matchesSearch &&
        matchesMentor &&
        matchesDate &&
        matchesScore
      );
    });
  }, [sessions, search, mentor, date, score]);

  /**
   * Summary statistics
   */
  const averageScore = useMemo(() => {
    if (!filteredSessions.length) return 0;

    return (
      filteredSessions.reduce(
        (sum, session) => sum + session.overallScore,
        0
      ) / filteredSessions.length
    );
  }, [filteredSessions]);

  const averageDuration = useMemo(() => {
    if (!filteredSessions.length) return 0;

    return (
      filteredSessions.reduce(
        (sum, session) => sum + session.duration,
        0
      ) / filteredSessions.length
    );
  }, [filteredSessions]);

  return (
    <div className="space-y-6">
      <DashboardHeader
        totalSessions={filteredSessions.length}
      />
<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
  <SearchFilter
    value={search}
    onChange={setSearch}
  />

  <MentorFilter
    mentors={mentors}
    value={mentor}
    onChange={(value) => setMentor(value ?? "all")}
  />

  <DateFilter
    value={date}
    onChange={setDate}
  />

  <ScoreFilter
    value={score}
    onChange={setScore}
  />

  <Button
    variant="outline"
    onClick={clearFilters}
  >
    Clear Filters
  </Button>
</div>

      <DashboardSummary
        totalSessions={filteredSessions.length}
        averageScore={averageScore}
        averageDuration={averageDuration}
      />

      <SessionTable
        sessions={filteredSessions}
        isLoading={isLoading}
        isError={isError}
      />
      <Button
  variant="outline"
  onClick={clearFilters}
>
  Clear Filters
</Button>
    </div>
  );
}