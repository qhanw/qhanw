"use client";

import "@videojs/react/video/skin.css";
import { createPlayer, videoFeatures } from "@videojs/react";
import { VideoSkin, Video } from "@videojs/react/video";

const Player = createPlayer({ features: videoFeatures });

type VideoProps = { src: string };

export const VideoPlayer = ({ src }: VideoProps) => {
  return (
    <Player.Provider>
      <VideoSkin poster="/images/wedding/poster.jpg" className="rounded-none!">
        <Video src={src} playsInline loop />
      </VideoSkin>
    </Player.Provider>
  );
};
