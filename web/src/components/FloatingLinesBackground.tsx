"use client";

import dynamic from "next/dynamic";

const FloatingLines = dynamic(() => import("./FloatingLines"), { ssr: false });

export default function FloatingLinesBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <FloatingLines
        linesGradient={["#C9A84C", "#92792C", "#E8C96A", "#C9A84C"]}
        enabledWaves={["top", "middle", "bottom"]}
        lineCount={[4, 6, 3]}
        lineDistance={[4, 5, 3]}
        animationSpeed={0.6}
        interactive={true}
        bendRadius={5.0}
        bendStrength={-0.5}
        mouseDamping={0.04}
        parallax={true}
        parallaxStrength={0.15}
        mixBlendMode="screen"
      />
    </div>
  );
}
