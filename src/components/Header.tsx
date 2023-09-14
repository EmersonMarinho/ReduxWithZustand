import React from 'react';
import { MessageCircle } from 'lucide-react';

interface HeaderProps {
  handleVideoUrlChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
}

export const Header: React.FC<HeaderProps> = ({ handleVideoUrlChange, error }) => {
  return (
    <div className="flex items-center justify-between flex-wrap">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold">Video Player</h1>
        <span className="text-sm text-zinc-400">Insert your link here</span>
        <input 
          type="text" 
          onChange={handleVideoUrlChange} 
          className="mt-2 p-2 border border-zinc-400 text-white flex-1 rounded bg-zinc-950 flex  focus:outline-none focus:border-violet-500"
        />
        {error && <span className="text-xs text-red-500">{error}</span>}
      </div>
      <button className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white hover:bg-violet-600">
        <MessageCircle className="w-4 h-4" />
        Deixar feedback
      </button>
    </div>
  );
};
