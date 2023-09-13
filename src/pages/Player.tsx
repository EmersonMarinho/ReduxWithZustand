import { MessageCircle } from "lucide-react";

export function Player() {
    return (
        <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
            <div className="flex flex-col gap-6 w-full max-w-screen-xl px-4">
                <div className="flex items-center justify-between flex-wrap">
                    {/* HEADER */}
                    <div className="flex flex-col gap-1">
                        <h1 className="text-2xl font-bold">Fundamentos do Redux</h1>
                        <span className="text-sm text-zinc-400">Módulo "Desevendendo o Redux"</span>
                    </div>

                    <button className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white hover:bg-violet-600">
                        <MessageCircle className="w-4 h-4" />
                        Deixar feedback
                    </button>
                </div>

                <main className="relative flex overflow-hidden rounded-lg border-zinc-800 bg-zinc-900 shadow-lg">
                    <div className="flex-1">
                        video
                    </div>
                    <aside className="w-80 border-l border-zinc-800 bg-zinc-900 h-full lg:w-1/4 lg:h-[600px]">
                    </aside>
                </main>
            </div>
        </div>
    )
}