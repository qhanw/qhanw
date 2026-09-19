"use client";

import "@videojs/react/video/skin.css";
import { VideoPlayer as Player, VideoSkin, Video } from '@videojs/react/video';

type VideoProps = { src: string };

export const VideoPlayer = ({ src }: VideoProps) => {
  return (
    <Player poster="/images/wedding/poster.jpg">
      <VideoSkin className="rounded-none! aspect-video">
        <Video src={src} playsInline loop />
      </VideoSkin>
    </Player>
  );
};
