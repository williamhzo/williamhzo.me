import { getBlogPostMetadata } from "@/lib/blog";
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "william — product engineer";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const metadata = await getBlogPostMetadata(slug);

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
          fontSize: 32,
          fontWeight: 600,
          padding: 64,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 20, color: "#697282", fontWeight: 600 }}>
            williamhzo.me
          </div>
          <div style={{ fontSize: 32 }}>{metadata.title}</div>
        </div>

        <div style={{ color: "#697282", display: "flex", gap: 12 }}>
          <div style={{ fontSize: 20 }}>
            product engineer, builder & learner
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Geist",
          data: geistSemiBold,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}