import React from "react";

const DotBackground = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full bg-[#050505] text-white overflow-hidden">
      {/* Layer 1: Pola Titik-titik */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.15) 2px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      ></div>

      {/* Layer 2: Efek Vignette/Faded agar bagian pinggir lebih gelap */}
      <div className="absolute inset-0 z-1 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)]"></div>

      {/* Layer 3: Konten (Header, Cards, dll) */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
};

export default DotBackground;
