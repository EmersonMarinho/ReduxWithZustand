import React, { useState } from "react";
import { Header } from "../components/Header";
import { Module } from "../components/Module";
import { Video } from "../components/Video";

export function Player() {
  const [videoUrl, setVideoUrl] = useState("https://www.youtube.com/watch?v=m4_9TFeMfJE");
  const [error, setError] = useState(" ");
  const [playlist, setPlaylist] = useState<{ url: string, duration: number | null }[]>([{ url: "https://www.youtube.com/watch?v=m4_9TFeMfJE", duration: null }]);

  const handleDuration = (duration: number) => {
    setPlaylist(prevPlaylist => {
      return prevPlaylist.map(video => {
        if (video.url === videoUrl) {
          return { ...video, duration };
        }
        return video;
      });
    });
  };

  const handleVideoUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const url = event.target.value;
    if (isValidYoutubeUrl(url) || url === "") {
      if(url !== "") {
        setVideoUrl(url);
        setPlaylist(prevPlaylist => [...prevPlaylist, { url, duration: null }]);
      }
      setError("");
    } else {
      setError("Invalid YouTube URL");
    }
  };

  const isValidYoutubeUrl = (url: string) => {
    const pattern = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
    return pattern.test(url);
  };

  const playvideo = (url: string) => {
    setVideoUrl(url);
  };

  const deleteVideo = (url: string) => {
    setPlaylist(prevPlaylist => prevPlaylist.filter(video => video.url !== url));
  };

  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
      <div className="flex flex-col gap-6 w-full max-w-screen-xl px-4">
        
        <Header handleVideoUrlChange={handleVideoUrlChange} error={error} />

        <main className="relative flex overflow-hidden rounded-lg border-zinc-800 bg-zinc-900 shadow-lg scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800" style={{ paddingRight: '19rem' }}>
          <div className="flex-1">
            <Video videoUrl={videoUrl} handleDuration={handleDuration} />
          </div>
          <aside className="w-80 border-l absolute top-0 bottom-0 right-0 border-zinc-800 bg-zinc-900 h-full lg:w-1/4">
            <Module playlist={playlist} playvideo={playvideo} deleteVideo={deleteVideo} />
          </aside>
        </main>
      </div>
    </div>
  );
}