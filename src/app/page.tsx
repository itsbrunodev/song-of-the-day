import Image from "next/image";

/* import Button from "@/components/Button"; */
import { Song } from "../..";

async function getSong() {
  const res = await fetch("http://localhost:3000/api/song", {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json() as Promise<Song>;
}

export default async function App() {
  const song = await getSong();

  return (
    <div className="w-full h-full center">
      <div className="flex md:flex-row flex-col items-center md:space-x-8 md:space-y-0 space-y-8">
        <div className="relative md:w-[250px] sm:w-[225px] w-[200px] aspect-square">
          <Image
            className="absolute rounded-2xl h-full w-full blur-3xl animate__animated animate__fadeIn"
            src={`https://i.scdn.co/image/${song.cover}`}
            draggable={false}
            unoptimized
            fill
            alt="img"
            priority
          />
          <Image
            className="rounded-2xl h-full w-full"
            src={`https://i.scdn.co/image/${song.cover}`}
            draggable={false}
            alt={song.name}
            unoptimized
            fill
            priority
          />
        </div>
        <div className="flex-1 flex flex-col justify-center md:text-left text-center animate__animated animate__fadeInUp relative">
          <div className="space-y-2">
            <h1>{song.name}</h1>
            <h2>{song.artist}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
