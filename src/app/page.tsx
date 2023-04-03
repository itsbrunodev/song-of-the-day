import { Metadata } from "next";

import Song, { scdn } from "@/components/Song";
import { Song as ISong } from "../..";

async function getSong() {
  const res = await fetch(
    `${
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://song-of-the-day.vercel.app"
    }/api/song`,
    {
      cache: "no-cache",
    }
  ).catch(() => {
    throw new Error("Failed to fetch data");
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json() as Promise<ISong>;
}

export async function generateMetadata(): Promise<Metadata> {
  const song = await getSong();
  const url = `${scdn}/${song.cover}`;
  const title = `${song.artist} - ${song.name}`;

  return {
    title: `${song.artist} - ${song.name}`,
    themeColor: "black",
    icons: {
      icon: url,
    },
    openGraph: {
      title,
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
      images: [url],
    },
  } as Metadata;
}

export default async function App() {
  const song = await getSong();

  return <Song song={song} />;
}
