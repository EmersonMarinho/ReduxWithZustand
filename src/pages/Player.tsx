import { MessageCircle, ChevronDown, Video, Delete } from "lucide-react";
import ReactPlayer from "react-player";
import React, { useState } from "react";

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
                <div className="flex items-center justify-between flex-wrap">
                    {/* HEADER */}
                    <div className="flex flex-col gap-1">
                        <h1 className="text-2xl font-bold">Vídeo Player</h1>
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

                <main className="relative flex overflow-hidden rounded-lg border-zinc-800 bg-zinc-900 shadow-lg">
                    <div className="flex-1">
                        <div className="w-full bg-zinc-950 aspect-video">
                            <ReactPlayer width={"100%"} height={"100%"} controls url={videoUrl} onDuration={handleDuration}/>
                        </div>
                    </div>
                    <aside className="w-80 border-l border-zinc-800 bg-zinc-900 h-full lg:w-1/4">
                        <div>
                            <button className="flex w-full items-center gap-3 bg-zinc-800 p-4">
                                <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-sm">1</div>
                                <div className="flex flex-col gap-1 text-left">
                                    <strong className="text-sm">Video List</strong>
                                    <span className="text-xs text-zinc-400">{playlist.length}</span>
                                </div>
                                <ChevronDown className="w-5 h-5 ml-auto text-zinc-400"/>
                            </button>

                            <nav className="relative flex flex-col gap-4 p-6">
                                {playlist.map((video, index) => (
                                    <button key={index} onClick={() => playvideo(video.url)} className="flex items-center gap-3 text-sm text-zinc-400">
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
                                ))}
                            </nav>
                        </div>
                    </aside>
                </main>
            </div>
        </div>
    )
}
