import * as Collapsible from '@radix-ui/react-collapsible';
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Lesson } from './Lesson';

interface ModuleProps {
  playlist: { url: string; duration: number | null }[];
  playvideo: (url: string) => void;
  deleteVideo: (url: string) => void;
}

export const Module: React.FC<ModuleProps> = ({ playlist, playvideo, deleteVideo }) => {
  return (
    <Collapsible.Root className='group'>
      <Collapsible.Trigger className="flex w-full items-center gap-3 bg-zinc-800 p-4">
        <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-sm">1</div>
        <div className="flex flex-col gap-1 text-left">
          <strong className="text-sm">Video List</strong>
          <span className="text-xs text-zinc-400">{playlist.length}</span>
        </div>
        <ChevronDown className="w-5 h-5 ml-auto text-zinc-400 group-data-[state=open]:rotate-180 transition-transform"/>
      </Collapsible.Trigger>
      <Collapsible.Content>
        <nav className="relative flex flex-col gap-4 p-6">
         {playlist.map((video, index) => (
             <Lesson key={index} video={video} index={index} playvideo={playvideo} deleteVideo={deleteVideo} />
        ))}
      </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  );
};
