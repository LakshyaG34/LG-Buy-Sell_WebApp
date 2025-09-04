import { NextResponse } from "next/server";

const protectedRoutes = ["/home", "/home/add"];
const authRoutes = ["/login", "/signup"];

export async function middleware(req) {
  const token = req.cookies.get("token")?.value;
  const { pathname } = req.nextUrl;

  // If no token and trying to access protected route → redirect to login
  if (!token && protectedRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // If token exists and trying to access login/signup → redirect to items
  if (token && authRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.redirect(new URL("/home", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/home/add/:path*", "/home/:path*", "/login", "/signup"],
};
