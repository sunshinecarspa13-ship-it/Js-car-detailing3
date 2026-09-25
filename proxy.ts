import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ADMIN_SESSION_COOKIE, verifySessionToken } from "@/lib/auth/admin-session";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Paths match case-insensitively in next.config redirects, so the
  // capitalised sitemap URL (submitted once in Search Console) is fixed here.
  if (pathname === "/Sitemap.xml") {
    return NextResponse.redirect(new URL("/sitemap.xml", request.url), 308);
  }

  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  if (pathname.startsWith("/admin")) {
    const token = request.cookies.get(ADMIN_SESSION_COOKIE)?.value;
    if (!verifySessionToken(token)) {
      const loginUrl = new URL("/admin/login", request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/Sitemap.xml"],
};
