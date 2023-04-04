import { NextResponse } from "next/server";

import songs from "@/songs";
import { isToday } from "@/functions";

export async function GET() {
  const songIndex = songs.findIndex((x) => isToday(new Date(x.date)));

  if (songIndex < songs.length - 1)
    return NextResponse.json(null, {
      status: 500,
    });

  return NextResponse.json(songs[songIndex - 1]);
}

export const dynamic = "force-dynamic";
