import React, { useState } from 'react';
import { 
  Sparkles, Play, Pause, Volume2, Star, MapPin, 
  CheckCircle, ArrowUpRight, ShieldCheck, Heart, 
  Flame, Music, Filter, Eye, Camera, HardDrive, Info
} from 'lucide-react';
import confetti from 'canvas-confetti';

export function ArtistCard({ artist, onBook, onSelect }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const togglePlay = (e) => {
    e.stopPropagation();
    setIsPlaying(!isPlaying);
  };

  const handleLike = (e) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
    if (!isLiked) {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 }
      });
    }
  };

  return (
    <div 
      onClick={() => onSelect(artist)}
      className="group relative rounded-3xl bg-[#12141e] border-2 border-white/10 hover:border-[#ff2a85] transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(255,42,133,0.3)]"
    >
      {/* Top Media Thumbnail Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/40">
        <img 
          src={artist.image} 
          alt={artist.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#12141e] via-transparent to-black/40"></div>

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className="px-3 py-1 rounded-full text-[11px] font-mono-tag font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-[#ffee00] border border-[#ffee00]/30 flex items-center gap-1.5 shadow-sm">
            <Flame className="w-3.5 h-3.5 fill-[#ffee00]" />
            {artist.categoryName}
          </span>
          <button 
            onClick={handleLike}
            className={`p-2 rounded-full backdrop-blur-md border transition-all ${
              isLiked 
                ? 'bg-[#ff2a85] border-[#ff2a85] text-white' 
                : 'bg-black/50 border-white/20 text-white hover:text-[#ff2a85]'
            }`}
          >
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-white' : ''}`} />
          </button>
        </div>

        {/* Live Audio / Video Preview Pill */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-black/70 backdrop-blur-md px-3 py-2 rounded-2xl border border-white/10">
          <button 
            onClick={togglePlay}
            className="flex items-center gap-2 text-xs font-bold text-white hover:text-[#00f0ff] transition-colors"
          >
            <div className={`w-7 h-7 rounded-full flex items-center justify-center ${isPlaying ? 'bg-[#ff2a85] text-white animate-pulse' : 'bg-white text-black'}`}>
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-black ml-0.5" />}
            </div>
            <div className="text-left">
              <div className="text-[11px] font-mono-tag text-white truncate max-w-[150px]">
                {artist.audioPreview}
              </div>
              <div className="text-[9px] text-[#00f0ff] font-mono-tag">
                {isPlaying ? 'PLAYING PREVIEW 🎵' : artist.audioDuration}
              </div>
            </div>
          </button>

          {artist.rawFootageSupported && (
            <span className="text-[9px] font-mono-tag font-bold px-2 py-0.5 rounded bg-[#00f0ff]/20 text-[#00f0ff] border border-[#00f0ff]/30">
              4K RAW READY
            </span>
          )}
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Header & Rating */}
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <div>
              <h3 className="text-lg font-extrabold text-white group-hover:text-[#ff2a85] transition-colors leading-snug">
                {artist.name}
              </h3>
              <div className="text-xs text-gray-400 font-mono-tag">{artist.handle}</div>
            </div>
            <div className="flex items-center gap-1 bg-[#1a1e2d] px-2.5 py-1 rounded-xl border border-white/10 shrink-0">
              <Star className="w-3.5 h-3.5 fill-[#ffee00] text-[#ffee00]" />
              <span className="text-xs font-bold text-white">{artist.rating}</span>
              <span className="text-[10px] text-gray-400">({artist.reviewsCount})</span>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-xs text-gray-300 mb-4 line-clamp-2 leading-relaxed">
            {artist.tagline}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {artist.tags.map((tag, i) => (
              <span 
                key={i} 
                className="text-[10px] font-mono-tag px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-gray-300"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer: Price + Direct Booking CTA */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <div>
            <div className="text-[10px] font-mono-tag text-gray-400 uppercase tracking-wider">Starts From</div>
            <div className="text-base font-extrabold text-[#ffee00] font-mono-tag">
              {artist.startingPrice}
              <span className="text-[10px] text-gray-400 font-normal"> / {artist.priceUnit}</span>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onBook(artist);
              }}
              className="px-4 py-2 rounded-xl bg-white text-black font-extrabold text-xs uppercase tracking-wider hover:bg-[#ff2a85] hover:text-white transition-all neo-button"
            >
              Book Direct
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
