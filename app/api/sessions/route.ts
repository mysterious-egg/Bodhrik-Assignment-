import { NextResponse } from "next/server";
import sessions from "@/data/sessions.json";
import type { Session } from "@/types/session";

export async function GET() {
  try {
    return NextResponse.json(sessions as Session[], {
      status: 200,
    });
  } catch (error) {
    console.error("Failed to load sessions:", error);

    return NextResponse.json(
      {
        error: "Failed to load sessions.",
      },
      {
        status: 500,
      }
    );
  }
}