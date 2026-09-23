import { ImageResponse } from "next/og";
import { business } from "@/lib/data/business";

export const alt = "JS Car Detailing Colchester — Mobile Car Detailing";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(120% 140% at 15% 0%, #2a2620 0%, #16130f 32%, #0a0a0a 68%)",
          color: "#f5f5f5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 30 }}>
          <span style={{ color: "#d4a24c", fontWeight: 700 }}>
            {business.rating.value.toFixed(1)} / 5
          </span>
          <span style={{ color: "#b4b4bb" }}>{business.rating.count} Google reviews</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 66,
            fontWeight: 700,
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          Mobile Car Detailing in Colchester
        </div>
        <div style={{ display: "flex", marginTop: 24, fontSize: 30, color: "#b4b4bb" }}>
          Fully insured · Open 7 days a week
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 48,
            fontSize: 26,
            color: "#d4a24c",
            fontWeight: 600,
          }}
        >
          {business.name}
        </div>
      </div>
    ),
    size
  );
}
