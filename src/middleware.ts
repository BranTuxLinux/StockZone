import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./lib/jwt";

export async function middleware(request: NextRequest) {
  const cookie = cookies();
  const token = cookie.get("token");
  // if (!token) return NextResponse.redirect(new URL("/login", request.url));
  if (request.nextUrl.pathname.startsWith("/api") && token) {
    console.log(token.name);
    console.log("API");
    try {
      const data = await verifyToken(token.value);
      console.log(data);
    } catch (error) {
      console.log(error);
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
}
