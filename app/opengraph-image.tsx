import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/constants";

export const alt = "William - Product Engineer";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  const geistSemiBold = await readFile(
    join(process.cwd(), "assets/Geist-SemiBold.ttf"),
  );

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#fff",
          fontWeight: 600,
          padding: 72,
          fontFamily: "Geist",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ fontSize: 48 }}>William Hzo</div>
          <div style={{ fontSize: 28, color: "#697282" }}>
            AI-native product engineer, building impactful user experiences,
            fast.
          </div>
        </div>
        <div style={{ fontSize: 20, color: "#9ca3af" }}>{site.domain}</div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Geist",
          data: geistSemiBold,
          style: "normal",
          weight: 600,
        },
      ],
    },
  );
}
