/* eslint-disable @next/next/no-img-element */
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { personalData, siteUrl } from "@/utils/data/personal-data";

export const alt = `${personalData.name}, ${personalData.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Google Fonts serves TTF to clients without a browser user agent, which is the
// format the image renderer needs. Returns null offline so the build still works
// with the renderer's built-in font.
async function loadFont(weight) {
  try {
    const css = await fetch(`https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@${weight}`).then((res) =>
      res.text()
    );
    const url = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/)?.[1];
    return url ? await fetch(url).then((res) => res.arrayBuffer()) : null;
  } catch {
    return null;
  }
}

export default async function Image() {
  const [photo, regular, medium] = await Promise.all([
    readFile(join(process.cwd(), "public", personalData.profile)),
    loadFont(400),
    loadFont(500),
  ]);
  const fonts = [
    regular && { name: "Plex", data: regular, weight: 400, style: "normal" },
    medium && { name: "Plex", data: medium, weight: 500, style: "normal" },
  ].filter(Boolean);

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "#f6f5f1",
          color: "#171715",
          fontFamily: fonts.length ? "Plex" : undefined,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flex: 1,
            padding: "60px 64px",
          }}
        >
          <div style={{ display: "flex", fontSize: 26, color: "#52514c" }}>
            {`${personalData.title} · Faisalabad, Pakistan`}
          </div>
          <div style={{ display: "flex", fontSize: 58, fontWeight: 500, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            {personalData.headline}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26 }}>
            <span style={{ fontWeight: 500 }}>{personalData.name}</span>
            <span style={{ color: "#6f6d66" }}>{siteUrl.replace("https://", "")}</span>
          </div>
        </div>
        <img
          src={`data:image/jpeg;base64,${photo.toString("base64")}`}
          width={420}
          height={630}
          alt=""
          style={{ objectFit: "cover" }}
        />
      </div>
    ),
    { ...size, ...(fonts.length && { fonts }) }
  );
}
