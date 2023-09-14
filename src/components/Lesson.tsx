import React from 'react';
import { Video, Delete } from 'lucide-react';

interface LessonProps {
  video: { url: string; duration: number | null };
  index: number;
  playvideo: (url: string) => void;
  deleteVideo: (url: string) => void;
}

export const Lesson: React.FC<LessonProps> = ({ video, index, playvideo, deleteVideo }) => {
  return (
    <button onClick={() => playvideo(video.url)} className="flex items-center gap-3 text-sm text-zinc-400">
      <Video className="w-4 h-4 text-zinc-500"/>
      <span>Video {index + 1}</span>
      <span className="ml-auto font-mono text-xs text-zinc-500">
        {video.duration !== null && 
          <p>Duration: {Math.floor(video.duration / 60)}:{Math.floor(video.duration % 60).toString().padStart(2, '0')}</p>
        }
      </span>
      <button onClick={() => deleteVideo(video.url)} className="ml-auto text-zinc-500 hover:text-red-500">
        <Delete className="w-4 h-4" />
      </button>
    </button>
  );
};
