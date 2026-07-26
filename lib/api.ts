import type { Session } from "@/types/session";

export async function getSessions(): Promise<Session[]> {
  const response = await fetch("/api/sessions", {
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    let message = "Failed to fetch sessions.";

    try {
      const error = (await response.json()) as { error?: string };
      if (error.error) {
        message = error.error;
      }
    } catch {
      // Ignore JSON parsing errors and use the default message.
    }

    throw new Error(message);
  }

  return (await response.json()) as Session[];
}