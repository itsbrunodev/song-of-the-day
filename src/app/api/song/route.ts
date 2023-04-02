import { NextResponse } from "next/server";

import songs from "@/songs";

export async function GET() {
  return NextResponse.json(songs[Math.floor(Math.random() * songs.length)]);
}
