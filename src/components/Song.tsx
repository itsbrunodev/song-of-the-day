import Image from "next/image";
import Link from "next/link";

import { Song as ISong } from "../..";

export const scdn = "https://i.scdn.co/image";

export default function Song({ song }: { song?: ISong }) {
  return (
    <div className="w-full h-full center relative">
      <Link
        href={`https://open.spotify.com/track/${song?.trackId}`}
        target="_blank"
        title="Listen on Spotify"
      >
        <div className="flex md:flex-row flex-col items-center md:space-x-8 md:space-y-0 space-y-8 relative">
          <div className="relative md:w-[250px] sm:w-[225px] w-[200px] aspect-square">
            {song?.cover && song.name ? (
              <>
                <Image
                  className="absolute rounded-2xl h-full w-full blur-3xl animate__animated animate__fadeIn blur-image animate__delay-1s"
                  src={`${scdn}/${song.cover}`}
                  draggable={false}
                  unoptimized
                  fill
                  alt="Blur Image"
                  priority
                />
                <Image
                  className="rounded-2xl h-full w-full animate__animated animate__fadeIn animate__slow"
                  src={`${scdn}/${song.cover}`}
                  draggable={false}
                  alt={song.name}
                  unoptimized
                  fill
                  priority
                />
              </>
            ) : (
              <div className="rounded-2xl w-full h-full bg-zinc-700"></div>
            )}
          </div>
          <div
            className=" h-full flex flex-col justify-center md:text-left text-center space-y-2 md:items-start items-center"
            id="data"
          >
            <h1
              className={`animate__animated animate__fadeInUp animate__delay-1s ${
                song?.name
                  ? ""
                  : "md:w-80 md:h-10 sm:w-72 sm:h-9 w-64 h-8 rounded-full bg-zinc-700"
              }`}
            >
              {song?.name}
            </h1>
            <h2
              className={`animate__animated animate__fadeInUp animate__delay-1s ${
                song?.artist
                  ? ""
                  : "md:w-36 md:h-8 sm:w-32 sm:h-7 w-28 h-6 rounded-full bg-zinc-700"
              }`}
            >
              {song?.artist}
            </h2>
          </div>
        </div>
      </Link>
      {song ? (
        <></>
      ) : (
        <div className="absolute w-full h-full bg-black bg-opacity-50 !ml-0 !mt-0 flex center backdrop-blur-md">
          <div className="flex space-x-3 items-center text-red-600">
            <svg
              className="w-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
              <path d="M12 8v4"></path>
              <path d="M12 16h.01"></path>
            </svg>
            <h1 className="text-3xl">Something went wrong.</h1>
          </div>
        </div>
      )}
    </div>
  );
}
