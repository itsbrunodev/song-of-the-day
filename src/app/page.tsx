import { Metadata } from "next";
import { FastAverageColor } from "fast-average-color";

import Song, { scdn } from "@/components/Song";
import { Song as ISong } from "../..";

async function getSong() {
  try {
    const res = await fetch(
      `${
        process.env.NODE_ENV === "development"
          ? "http://localhost:3000"
          : "https://song-of-the-day.vercel.app"
      }/api/song`,
      {
        cache: "no-cache",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json() as Promise<ISong>;
  } catch {
    /**
     * return the macarena song as the default song if the fetch wasn't successful
     *
     * this is only here because next.js at build time freaks out if the fetch
     * throws an error
     *
     * note: this should be temporary but it works so there isn't really a need
     * to change this
     */
    return {
      name: "Macarena - Bayside Boys Remix",
      artist: "Los Del Rio",
      cover: "ab67616d00001e02a8c284ce171e96a79eabf7de",
      trackId: "7obdw7ZGr6l1GqSBkFiY11",
      videoId: "zWaymcVmJ-A",
      date: new Date().toISOString().slice(0, 10),
    } as ISong;
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const song = await getSong();
  const url = `${scdn}/${song.cover}`;
  const title = `${song.name} - ${song.artist}`;
  const description = "Daily unique song generator website";

  return {
    title,
    description,
    themeColor: "#fff",
    icons: {
      icon: url,
    },
    openGraph: {
      title,
      description,
      images: [
        {
          url: url,
          width: 300,
          height: 300,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [url],
    },
  } as Metadata;
}

export default async function App() {
  const song = await getSong();

  return <Song song={song} />;
}
