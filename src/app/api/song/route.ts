import { NextResponse } from "next/server";

import songs from "@/songs";
import { isToday } from "@/functions";

export async function GET() {
  const song = songs.find((x) => isToday(new Date(x.date)));

  if (!song)
    return NextResponse.json(null, {
      status: 500,
    });

  return NextResponse.json(song);
}

export const dynamic = "force-dynamic";
