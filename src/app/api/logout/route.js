// app/api/logout/route.js
import { cookies } from "next/headers";

export async function POST() {
    const cookieStore = await cookies();
  cookieStore.set("token", "", { maxAge: 0, path: "/" });
  return new Response(JSON.stringify({ message: "Logged out" }), { status: 200 });
}