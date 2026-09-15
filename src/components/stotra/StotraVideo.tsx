"use client";

import { useState } from "react";
import Image from "next/image";
import type { StotraView } from "@/lib/data";

type Video = NonNullable<StotraView["video"]>;

/**
 * A recitation of the stotra to listen to. Nothing loads from YouTube
 * until the reader presses play — until then it is a still from the
 * video — so the page stays quick and sets no YouTube cookie.
 */
export function StotraVideo({
  video,
  labels,
}: {
  video: Video;
  labels: { listen: string; play: string; watch: string };
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="stotra-video" aria-label={labels.listen}>
      <div className="stotra-video-frame">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            className="stotra-video-poster"
            onClick={() => setPlaying(true)}
            aria-label={`${labels.play}: ${video.title}`}
          >
            <Image
              src={video.thumb}
              alt=""
              fill
              unoptimized
              sizes="(max-width: 760px) 100vw, 720px"
              style={{ objectFit: "cover" }}
            />
            <span className="stotra-video-play" aria-hidden="true" />
          </button>
        )}
      </div>
      <div className="stotra-video-meta">
        <span className="stotra-video-kicker">{labels.listen}</span>
        <span className="stotra-video-title">{video.title}</span>
        <span className="stotra-video-channel">
          {video.channel} ·{" "}
          <a href={video.url} target="_blank" rel="noopener noreferrer">
            {labels.watch}
          </a>
        </span>
      </div>
    </section>
  );
}
