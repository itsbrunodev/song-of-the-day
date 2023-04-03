import { Poppins } from "next/font/google";
import { Metadata } from "next";

import "animate.css";
import "./globals.css";
import Repo from "@/components/Repo";

export const metadata: Metadata = {
  title: "Song of the Day",
  description: "Daily unique song generator website",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-black w-screen h-screen relative ${poppins.className}`}
      >
        <Repo />
        {children}
      </body>
    </html>
  );
}
