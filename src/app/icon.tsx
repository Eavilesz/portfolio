import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#2f5fe5",
          borderRadius: 8,
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M12 0 C12 6.6 9.75 12 7 12 C9.75 12 12 15.6 12 20 C12 15.6 14.7 12 18 12 C14.7 12 12 6.6 12 0 Z" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
