import { NextResponse } from "next/server";

import songs from "@/songs";
import { dateDiffDays, shuffle } from "@/functions";

export async function GET() {
  const now = new Date();

  return NextResponse.json(
    shuffle(songs).map((song) => {
      const index = songs.findIndex((x) => x.trackId === song.trackId);
      const songDate = new Date(songs[index].date);

      songDate.setDate(
        songDate.getDate() + index + dateDiffDays(now, songDate) - 1
      );

      return { ...song, date: songDate.toISOString().slice(0, 10) };
    })
  );
}

export const dynamic = "force-dynamic";
