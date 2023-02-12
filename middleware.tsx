// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const cookies = request.cookies.get("Next_User");

  try {
    const cookiesParse = JSON.parse(`${cookies?.value}`);

    if (cookiesParse?.Token == undefined || cookiesParse?.Token == null) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  } catch (error) {
    console.error(error);
    return NextResponse.redirect(new URL("/", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/home/:path*", "/journey/:path*", "/documents/:path*", "/reports/:path*", "/settings/:path*"],
};
