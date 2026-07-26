import { useQuery } from "@tanstack/react-query";

import { getSessions } from "@/lib/api";

export function useSessions() {
  return useQuery({
    queryKey: ["sessions"],
    queryFn: getSessions,
  });
}