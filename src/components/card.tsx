import React, { useRef, useState, useEffect } from "react"; // Tambahkan useEffect
import { Play, Pause } from "lucide-react";

const MusicCard = ({
  title,
  author,
  imageUrl,
  stats,
  audioSrc,
  shortcutKey,
}) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.currentTime = 0;
      audio.play();
    } else {
      // Jika sedang berhenti, langsung putar
      audio.play();
      setIsPlaying(true);
    }
  };

  // Logika Shortcut Keyboard
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Jika tombol yang ditekan cocok dengan shortcutKey (misal "1")
      if (event.key === shortcutKey) {
        togglePlayPause();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup agar tidak terjadi memory leak atau duplikasi event
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [shortcutKey, isPlaying]); // Re-run jika isPlaying berubah agar fungsi toggle dapat konteks terbaru

  return (
    <div className="w-64 bg-[#141414] rounded-2xl p-4 flex flex-col items-center h-auto shadow-lg transition-transform ">
      {/* Element Audio */}
      <audio
        ref={audioRef}
        src={
          audioSrc ||
          "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        }
        onEnded={() => setIsPlaying(false)}
      />

      {/* Stats Header */}
      <div className="w-full flex justify-start items-center gap-1 mb-3 ">
        <div className="flex items-end gap-0.5 h-3">
          <div
            className={`w-0.5 bg-gray-400 transition-all ${
              isPlaying ? "animate-bounce h-full" : "h-1/2"
            }`}
          ></div>
          <div
            className={`w-0.5 bg-gray-400 transition-all ${
              isPlaying ? "animate-bounce h-2/3" : "h-full"
            }`}
          ></div>
          <div
            className={`w-0.5 bg-gray-400 transition-all ${
              isPlaying ? "animate-bounce h-full" : "h-[70%]"
            }`}
          ></div>
        </div>
        <span className="text-gray-400 text-xs font-medium">{stats}</span>
      </div>

      {/* Bagian Tengah: Image */}
      <div className="w-full aspect-square rounded-xl overflow-hidden mb-4 border border-white/10 relative group">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        {/* Overlay Play saat Hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button
            onClick={togglePlayPause}
            className="bg-white p-3 rounded-full text-black"
          >
            {isPlaying ? (
              <Pause size={20} fill="black" />
            ) : (
              <Play size={20} fill="black" />
            )}
          </button>
        </div>
      </div>

      {/* Bagian Bawah: Info Teks */}
      <div className="w-full text-center space-y-1 mb-5">
        <h3 className="text-white font-bold text-sm truncate px-2">{title}</h3>
        <p className="text-gray-500 text-xs truncate">{author}</p>
      </div>

      {/* Main Action Button */}
      <button
        onClick={togglePlayPause}
        className="flex items-center justify-center gap-2 bg-[#1a1a1a] hover:bg-[#252525] text-white rounded-full px-4 py-2 w-full transition-colors border border-white/5 active:scale-95"
      >
        {isPlaying ? (
          <>
            <Pause size={16} fill="white" />
            <span className="text-xs font-semibold">Pause</span>
          </>
        ) : (
          <>
            <Play size={16} fill="white" />
            <span className="text-xs font-semibold">Play Now</span>
          </>
        )}
      </button>
    </div>
  );
};

export default MusicCard;
