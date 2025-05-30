export const revalidate = 60;

import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";

import Logo from "@/icons/logo";

const geistBold = readFileSync(join(process.cwd(), "fonts", "Geist-Bold.ttf"));

export async function GET() {
  return new ImageResponse(
    <div
      tw="flex flex-col w-full h-full items-center justify-center bg-black text-2xl text-white text-4xl"
      style={font("Geist")}
    >
      <Logo fill="white" />
      <h1>Will Sather</h1>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Geist",
          data: geistBold,
          weight: 400,
        },
      ],
    },
  );
}

function font(fontFamily: string) {
  return { fontFamily };
}
