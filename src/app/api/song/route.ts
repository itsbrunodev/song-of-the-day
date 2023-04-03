import { NextResponse } from "next/server";

import songs from "@/songs";

function isToday(date: Date) {
  const now = new Date();

  return (
    date.getDate() === now.getUTCDate() &&
    date.getMonth() === now.getUTCMonth() &&
    date.getFullYear() === now.getUTCFullYear()
  );
}

export async function GET() {
  const song = songs.find((x) => isToday(new Date(x.date)));

  if (!song) return Response.error();

  return NextResponse.json(song);
}
