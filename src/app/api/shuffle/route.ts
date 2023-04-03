import { NextResponse } from "next/server";

import songs from "@/songs";

const dayMs = 1000 * 60 * 60 * 24;

function dateDiffDays(a: Date, b: Date) {
  return Math.ceil((a.getTime() - b.getTime()) / dayMs);
}

function shuffle(arr: any[]) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

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
