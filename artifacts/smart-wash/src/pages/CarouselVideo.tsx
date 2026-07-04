import { Video } from "lucide-react";
import { HeroShowcaseVideo } from "@/features/home/components/HeroShowcaseVideo";
import { useScreenRecorder } from "@/hooks/useScreenRecorder";

export default function CarouselVideo() {
  const { isRecording, error, isSupported, start } =
    useScreenRecorder("smart-wash-carousel");

  return (
    <div className="relative">
      <HeroShowcaseVideo />

      {/*
        No UI is rendered at all while isRecording is true. The button and
        instructions are removed from the DOM entirely so nothing but the
        carousel itself is ever captured in "this tab" recordings. Feedback
        that recording is active comes only from the browser's own native
        sharing indicator / "Stop sharing" control, which lives outside the
        page and is never part of the captured frame.
      */}
      {!isRecording && (
        <div className="fixed top-6 right-6 z-50 flex flex-col items-end gap-2">
          <button
            onClick={start}
            disabled={!isSupported}
            className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold rounded-full px-5 py-3 text-sm shadow-xl hover:bg-blue-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Video className="w-4 h-4" />
            Record Video
          </button>
          <p className="max-w-[240px] text-right text-xs text-white/80 bg-black/30 rounded-lg px-3 py-2 backdrop-blur-sm">
            Choose "This tab" when prompted. This button disappears once
            recording starts — use your browser's "Stop sharing" control when
            done, and the video downloads automatically.
          </p>
          {!isSupported && (
            <p className="text-xs text-red-100 bg-red-500/80 rounded-lg px-3 py-2">
              Screen recording isn't supported in this browser.
            </p>
          )}
          {error && (
            <p className="text-xs text-red-100 bg-red-500/80 rounded-lg px-3 py-2">
              {error}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
