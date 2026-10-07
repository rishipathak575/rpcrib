import React, { useState } from 'react';
import { 
  X, Star, MapPin, CheckCircle, ShieldCheck, 
  Calendar, Flame, Sparkles, HardDrive, Music, 
  Share2, ArrowRight, Layers, Volume2
} from 'lucide-react';

export function DetailModal({ artist, onClose, onBook }) {
  const [activeImage, setActiveImage] = useState(artist.image);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#0f111a] border-2 border-white/20 rounded-3xl overflow-hidden shadow-2xl my-8">
        
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          {/* Left Column: Visuals & Gallery */}
          <div className="md:col-span-6 bg-[#090b10] p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/10">
            <div>
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 border border-white/10">
                <img 
                  src={activeImage} 
                  alt={artist.name} 
                  className="w-full h-full object-cover transition-all"
                />
                <span className="absolute bottom-3 left-3 px-3 py-1 bg-black/70 backdrop-blur-md rounded-full text-xs font-mono-tag font-bold text-[#ffee00] border border-[#ffee00]/30">
                  {artist.categoryName}
                </span>
              </div>

              {/* Gallery Thumbnails */}
              <div className="grid grid-cols-4 gap-2 mb-4">
                <button 
                  onClick={() => setActiveImage(artist.image)}
                  className={`aspect-video rounded-xl overflow-hidden border-2 transition-all ${
                    activeImage === artist.image ? 'border-[#ff2a85] scale-95' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={artist.image} alt="main" className="w-full h-full object-cover" />
                </button>
                {artist.gallery?.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`aspect-video rounded-xl overflow-hidden border-2 transition-all ${
                      activeImage === img ? 'border-[#ff2a85] scale-95' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="gallery" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Technical Rider Specs */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-xs">
              <div className="text-[11px] font-mono-tag text-[#00f0ff] uppercase tracking-wider font-bold">
                ⚡ Tech & Backline Rider Specs
              </div>
              {artist.specs && Object.entries(artist.specs).map(([k, v], i) => (
                <div key={i} className="flex justify-between text-gray-300">
                  <span className="capitalize text-gray-400">{k}:</span>
                  <span className="font-medium text-right text-white max-w-[200px] truncate">{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Information & Booking */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono-tag text-[#ff2a85] font-bold">VERIFIED VENDOR</span>
                <span className="text-gray-500">•</span>
                <span className="text-xs text-gray-400 font-mono-tag flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-gray-400" /> {artist.location}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-1">
                {artist.name}
              </h2>
              <div className="text-xs font-mono-tag text-gray-400 mb-4">{artist.handle}</div>

              {/* Rating and Social Proof */}
              <div className="flex items-center gap-3 mb-6 p-3 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-[#ffee00] text-[#ffee00]" />
                  <span className="text-sm font-bold text-white">{artist.rating}</span>
                </div>
                <span className="text-gray-500">|</span>
                <div className="text-xs text-gray-300">
                  <strong className="text-white">{artist.reviewsCount}</strong> verified Gen-Z wedding reviews
                </div>
                <span className="text-gray-500">|</span>
                <div className="text-xs text-emerald-400 font-bold">
                  {artist.bookedCount} Bookings in 2026
                </div>
              </div>

              {/* Bio & Vibe */}
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-xs font-mono-tag text-gray-400 uppercase tracking-wider mb-1">The Vibe</h4>
                  <p className="text-sm text-gray-200 leading-relaxed">
                    {artist.tagline} Designed specifically for couples who reject monotonous classical wedding routines in favor of high-energy electronic soundscapes, boiler-room cocktails, and modern aesthetics.
                  </p>
                </div>

                {artist.rawFootageSupported && (
                  <div className="p-3 bg-[#00f0ff]/10 border border-[#00f0ff]/30 rounded-2xl flex items-center gap-3">
                    <HardDrive className="w-5 h-5 text-[#00f0ff] shrink-0" />
                    <div className="text-xs">
                      <div className="font-bold text-white">Direct S3 Raw 4K Pipeline Enabled</div>
                      <div className="text-gray-400 text-[11px]">Direct camera card dump to AWS presigned vault with HLS streaming link.</div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <div className="flex items-baseline justify-between">
                <div>
                  <div className="text-[10px] font-mono-tag text-gray-400 uppercase">Direct Booking Price</div>
                  <div className="text-2xl font-black text-[#ffee00] font-mono-tag">
                    {artist.startingPrice}
                    <span className="text-xs text-gray-400 font-normal"> / {artist.priceUnit}</span>
                  </div>
                </div>
                <span className="text-[11px] text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/30">
                  Zero Agency Markup
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => {
                    onClose();
                    onBook(artist);
                  }}
                  className="py-3 px-4 rounded-xl bg-gradient-to-r from-[#ff2a85] to-[#ffee00] text-black font-extrabold text-sm uppercase tracking-wider neo-button flex items-center justify-center gap-2 cursor-pointer"
                >
                  Book Instant <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    navigator.clipboard?.writeText(window.location.href);
                    alert(`Profile link for ${artist.name} copied!`);
                  }}
                  className="py-3 px-4 rounded-xl bg-[#1c2030] hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider border border-white/10 flex items-center justify-center gap-2"
                >
                  <Share2 className="w-4 h-4" /> Share Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
