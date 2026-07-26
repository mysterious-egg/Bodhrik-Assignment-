import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const isAuthenticated =
    request.cookies.get("mock-auth")?.value === "true";

  if (
    request.nextUrl.pathname.startsWith("/dashboard") &&
    !isAuthenticated
  ) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};