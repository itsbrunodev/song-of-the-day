import Link from "next/link";
import Spotify from "./icons/Spotify";
import YouTube from "./icons/YouTube";
import AppleMusic from "./icons/AppleMusic";

export default function Button({
  type,
  url,
}: {
  type: "Spotify" | "YouTube" | "Apple Music";
  url: string;
}) {
  return (
    <Link
      className="inline-block hover:opacity-80"
      href={url}
      title={`Listen on ${type}`}
    >
      {type === "Spotify" ? (
        <Spotify />
      ) : type === "YouTube" ? (
        <YouTube />
      ) : (
        <AppleMusic />
      )}
    </Link>
  );
}
