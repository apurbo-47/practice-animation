"use client";

import { ReactLenis } from "lenis/react";

interface Props {
  children: React.ReactNode;
}

export default function LenisProvider({ children }: Props) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        smoothWheel: true,
        syncTouch: true,
        touchMultiplier: 1.1,
        wheelMultiplier: 1,
        easing: (t) => 1 - Math.pow(1 - t, 3),
      }}
    >
      {children}
    </ReactLenis>
  );
}
