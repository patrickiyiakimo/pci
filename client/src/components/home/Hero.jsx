"use client";

import { useRef } from "react";
import Button from "@/components/shared/Button";

export default function Hero() {
  const videoRef = useRef(null);

  const playReel = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else {
        video.muted = false;
        await video.play();
        await video.requestFullscreen();
      }
    } catch {
      video.muted = false;
      await video.play();
    }
  };

  return (
    <section className="relative flex flex-col overflow-hidden bg-base min-h-[82svh] lg:min-h-[calc(100svh-68px)] min-[2000px]:min-h-[calc(70svh-68px)]">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center px-6 pt-16 pb-10 text-center lg:pt-[4.5vw] lg:pb-[5vw]">
        <h1 className="font-heading text-[clamp(2.5rem,6vw,5.75rem)] font-semibold leading-[1.03] tracking-tight text-contrast">
          A Product Agency That
          <br />
          Thinks Beyond The Build
          <span className="text-accent">.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-grey-600 sm:text-lg">
          Your product problem is a business problem wearing a product costume.
          We work the strategy before the build, so what ships actually moves
          the number you&apos;re being measured on.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="mailto:hello@pciapps.com" variant="primary" size="lg">
            Tell Us What You&apos;re Building
          </Button>
          <button
            onClick={playReel}
            className="inline-flex items-center gap-3 rounded-full border border-contrast/20 px-6 py-3 text-base font-semibold text-contrast transition-colors hover:border-accent hover:text-accent"
            aria-label="Play showreel fullscreen"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-white">
              <svg viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 h-3.5 w-3.5">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            Play Reel
          </button>
        </div>
      </div>

      <div className="relative flex-1 min-h-[44svh] overflow-hidden bg-ink sm:min-h-[50svh]">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src="/videos/showreel.mp4"
          poster="/videos/showreel-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="PCI Apps showreel"
        />

        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.05) 30%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.45) 100%)",
          }}
        />
        <div className="grid-overlay absolute inset-0 opacity-50" aria-hidden />

        <button
          onClick={playReel}
          className="group absolute bottom-6 left-1/2 z-10 inline-flex -translate-x-1/2 items-center gap-3 rounded-full bg-white/95 px-6 py-3 text-sm font-semibold text-contrast shadow-lg backdrop-blur transition-all hover:bg-white hover:text-accent"
          aria-label="Play showreel fullscreen"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent text-white transition-transform group-hover:scale-110">
            <svg viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 h-3 w-3">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          Play Reel
        </button>
      </div>
    </section>
  );
}