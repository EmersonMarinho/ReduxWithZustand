import React from 'react';
import ReactPlayer from 'react-player';

interface VideoProps {
  videoUrl: string;
  handleDuration: (duration: number) => void;
}

export const Video: React.FC<VideoProps> = ({ videoUrl, handleDuration }) => {
  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer width={"100%"} height={"100%"} controls url={videoUrl} onDuration={handleDuration}/>
    </div>
  );
};
