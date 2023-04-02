import { Poppins } from "next/font/google";

import "animate.css";
import "./globals.css";

export const metadata = {
  title: "Song of the Day",
  description: "Song of the Day",
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
      <body className={`bg-black w-screen h-screen ${poppins.className}`}>
        {children}
      </body>
    </html>
  );
}
