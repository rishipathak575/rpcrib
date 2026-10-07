import React, { useState } from 'react';
import { 
  Sparkles, Flame, Music, Camera, Users, MapPin, 
  Calendar, ShieldCheck, ArrowRight, Zap, Play, CheckCircle2, 
  Layers, HardDrive, Cpu, Search, Heart, SlidersHorizontal,
  ChevronRight, Compass, Stars, MessageSquare, Terminal
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { MOCK_ARTISTS, MOCK_VENUES, MOCK_REVIEWS } from './data';
import { ArtistCard } from './components/ArtistCard';
import { BookingModal } from './components/BookingModal';
import { DetailModal } from './components/DetailModal';
import { RawVideoPipeline } from './components/RawVideoPipeline';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [bookingArtist, setBookingArtist] = useState(null);
  const [filterCity, setFilterCity] = useState('All Cities');

  const filteredArtists = MOCK_ARTISTS.filter(artist => {
    const matchesCat = activeCategory === 'all' || artist.category === activeCategory;
    const matchesSearch = 
      artist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artist.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artist.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCity = filterCity === 'All Cities' || artist.location.includes(filterCity);
    return matchesCat && matchesSearch && matchesCity;
  });

  const triggerVibeConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="min-h-screen bg-[#07080d] text-white selection:bg-[#ff2a85] selection:text-white pb-20">
      
      {/* 1. TOP ANNOUNCEMENT TICKER (GEN-Z VIBE) */}
      <div className="bg-gradient-to-r from-[#ff2a85] via-[#7928ca] to-[#00f0ff] py-1.5 px-4 text-xs font-mono-tag text-black font-extrabold flex items-center justify-between overflow-hidden">
        <div className="flex items-center gap-6 animate-marquee whitespace-nowrap">
          <span>⚡ 2026 TREND: ZERO BORING UNCLE SANGEETS • LIVE101 DIRECT ARTIST BOOKING • 4K RAW S3 PRORES PIPELINE</span>
          <span>🔥 VOGUE EDITORIAL PHOTOGRAPHY • BOILER ROOM WEDDING AFTERPARTIES • 100% ESCROW PROTECTED</span>
          <span>⚡ 2026 TREND: ZERO BORING UNCLE SANGEETS • LIVE101 DIRECT ARTIST BOOKING • 4K RAW S3 PRORES PIPELINE</span>
        </div>
      </div>

      {/* 2. NAVIGATION BAR */}
      <header className="sticky top-0 z-40 bg-[#07080d]/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#ff2a85] to-[#ffee00] flex items-center justify-center font-black text-black text-xl neo-brutalist-badge">
              ⚡
            </div>
            <div>
              <span className="font-heading font-black text-2xl tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                VIBESYNC<span className="text-[#ff2a85]">™</span>
              </span>
              <span className="hidden sm:inline-block ml-2 text-[10px] font-mono-tag bg-[#ffee00] text-black px-1.5 py-0.5 rounded font-black">
                GEN-Z WEDDING OS
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-300">
            <a href="#explore" className="hover:text-[#ff2a85] transition-colors flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-[#ff2a85]" /> Discover Roster
            </a>
            <a href="#venues" className="hover:text-[#00f0ff] transition-colors">
              Neo Venues
            </a>
            <a href="#pipeline" className="hover:text-[#ffee00] transition-colors flex items-center gap-1.5">
              <HardDrive className="w-4 h-4 text-[#ffee00]" /> 4K RAW Vault Pipeline
            </a>
            <a href="#reviews" className="hover:text-purple-400 transition-colors">
              Couples' Intel
            </a>
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => {
                const el = document.getElementById('pipeline');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hidden lg:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/15 text-xs font-mono-tag font-bold text-gray-300 hover:text-white hover:border-[#ffee00] transition-all"
            >
              <Terminal className="w-3.5 h-3.5 text-[#ffee00]" /> AWS S3 Transcoder
            </button>
            <button 
              onClick={() => setBookingArtist(MOCK_ARTISTS[0])}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#ff2a85] to-[#ffee00] text-black font-extrabold text-xs uppercase tracking-wider neo-button flex items-center gap-2 cursor-pointer"
            >
              <Zap className="w-4 h-4 fill-black" /> Instant Book
            </button>
          </div>
        </div>
      </header>

      {/* 3. HERO SECTION (Dribbble Gen-Z / SlidesCarnival Aesthetic) */}
      <section className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        {/* Glow Spheres */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#ff2a85]/20 via-[#7928ca]/20 to-[#00f0ff]/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/15 backdrop-blur-md mb-6 hover:border-[#ff2a85] transition-colors cursor-pointer" onClick={triggerVibeConfetti}>
            <span className="w-2 h-2 rounded-full bg-[#ff2a85] animate-ping"></span>
            <span className="text-xs font-mono-tag font-bold uppercase tracking-wider text-gray-200">
              Not Your Parents' Boring Wedding Portal 🚫👰
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#ffee00]" />
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black tracking-tight leading-[1.05] mb-6">
            WEDDINGS & PARTIES <br />
            <span className="bg-gradient-to-r from-[#ff2a85] via-[#ffee00] to-[#00f0ff] bg-clip-text text-transparent">
              FOR THE UNAPOLOGETIC GEN-Z.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Directly book curated Live Bands, Boiler-Room DJs, Cold-Spark Dhol, and Vogue-style 4K RAW Cinema creators — with <strong>zero agency commissions</strong> and real-time cloud media delivery.
          </p>

          {/* Search & Discovery Bar (Combined WedMeGood filter + Live101 transparency) */}
          <div className="p-2 sm:p-3 bg-[#12141f] border-2 border-white/20 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.6)] max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-3">
            <div className="flex-1 flex items-center gap-3 px-3 w-full">
              <Search className="w-5 h-5 text-gray-400 shrink-0" />
              <input 
                type="text"
                placeholder="Search 'Boiler Room DJ', 'Indie Band', '4K Drone RAW'..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-sm text-white focus:outline-none placeholder:text-gray-500 font-medium"
              />
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <select
                value={filterCity}
                onChange={(e) => setFilterCity(e.target.value)}
                className="bg-[#1b1f2e] border border-white/10 rounded-2xl px-4 py-2.5 text-xs text-white font-mono-tag focus:outline-none cursor-pointer"
              >
                <option value="All Cities">All Locations</option>
                <option value="Delhi NCR">Delhi NCR</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Jaipur">Jaipur / Rajasthan</option>
                <option value="Goa">Goa</option>
              </select>

              <button 
                onClick={() => {
                  const el = document.getElementById('explore');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 rounded-2xl bg-[#ff2a85] text-white font-black text-xs uppercase tracking-wider neo-button whitespace-nowrap cursor-pointer hover:bg-[#ff4395]"
              >
                Find Vibes
              </button>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 max-w-3xl mx-auto text-left">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-2xl font-black text-white font-heading">500+</div>
              <div className="text-xs text-gray-400 font-mono-tag">Verified Live Acts</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-2xl font-black text-[#ffee00] font-heading">0%</div>
              <div className="text-xs text-gray-400 font-mono-tag">Hidden Middleman Fees</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-2xl font-black text-[#00f0ff] font-heading">4K RAW</div>
              <div className="text-xs text-gray-400 font-mono-tag">S3 Multi-Part Vault</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-2xl font-black text-purple-400 font-heading">4.96 ★</div>
              <div className="text-xs text-gray-400 font-mono-tag">Couple Vibe Score</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EXPLORE & ARTIST ROSTER (LIVE101 + WEDMEGOOD FUSION) */}
      <section id="explore" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-tag text-[#ff2a85] font-bold uppercase tracking-wider mb-2">
              <Flame className="w-4 h-4 fill-[#ff2a85]" /> Curated Roster For Modern Nuptials
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              The Anti-Boring Event Artists
            </h2>
            <p className="text-gray-400 text-sm mt-1">
              Listen to authentic live soundboards, inspect gear riders, and book directly.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Vibes' },
              { id: 'live-artist', label: 'Hybrid DJs & Bands' },
              { id: 'photographer', label: '4K Editorial Films' },
              { id: 'anchor', label: 'Interactive Hosts' },
              { id: 'decor', label: 'Y2K Brutalist Decor' },
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-white text-black shadow-lg scale-105'
                    : 'bg-[#131622] text-gray-400 hover:text-white border border-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Artist Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArtists.map(artist => (
            <ArtistCard 
              key={artist.id}
              artist={artist}
              onSelect={setSelectedArtist}
              onBook={setBookingArtist}
            />
          ))}
        </div>

        {filteredArtists.length === 0 && (
          <div className="text-center py-16 bg-[#12141e] rounded-3xl border border-white/10">
            <p className="text-gray-400 text-sm mb-4">No artists matching your filters right now.</p>
            <button
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); setFilterCity('All Cities'); }}
              className="px-4 py-2 rounded-xl bg-[#ff2a85] text-white text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* 5. RAW VIDEO CLOUD PIPELINE (FEATURE REQUEST DEEP-DIVE) */}
      <section id="pipeline" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <RawVideoPipeline />
      </section>

      {/* 6. NEO VENUES SECTION (WEDMEGOOD REDEFINED) */}
      <section id="venues" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-tag text-[#00f0ff] font-bold uppercase tracking-wider mb-2">
              <MapPin className="w-4 h-4 text-[#00f0ff]" /> Zero Cookie-Cutter Banquets
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Curated Neo-Venues & Rooftops
            </h2>
            <p className="text-gray-400 text-sm mt-1">
              Curfew-free till 4 AM, craft cocktail permitted, and drone-ready open skies.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MOCK_VENUES.map(venue => (
            <div 
              key={venue.id}
              className="rounded-3xl bg-[#12141e] border-2 border-white/10 hover:border-[#00f0ff] transition-all overflow-hidden flex flex-col justify-between group"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={venue.image} 
                  alt={venue.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono-tag font-bold text-[#ffee00]">
                  {venue.vibe}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#00f0ff] transition-colors">
                    {venue.name}
                  </h3>
                  <div className="text-xs text-gray-400 font-mono-tag mb-3 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-gray-400" /> {venue.location}
                  </div>

                  <div className="space-y-1.5 mb-4">
                    {venue.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-mono-tag text-gray-400">Pricing Base</div>
                    <div className="text-base font-bold text-[#ffee00] font-mono-tag">{venue.price}</div>
                  </div>
                  <button 
                    onClick={() => setBookingArtist({ name: venue.name, startingPrice: venue.price })}
                    className="px-4 py-2 rounded-xl bg-white/10 hover:bg-[#00f0ff] hover:text-black text-white text-xs font-bold transition-all"
                  >
                    Check Slot
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. REAL GEN-Z COUPLE REVIEWS */}
      <section id="reviews" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono-tag text-[#ffee00] mb-3">
            <Stars className="w-4 h-4" /> VERIFIED SOCIAL PROOF
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            What Couples Say After The Afterparty
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MOCK_REVIEWS.map(rev => (
            <div key={rev.id} className="p-6 rounded-3xl bg-[#12141e] border-2 border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img src={rev.avatar} alt={rev.author} className="w-11 h-11 rounded-full object-cover border border-[#ff2a85]" />
                    <div>
                      <div className="text-sm font-bold text-white">{rev.author}</div>
                      <div className="text-[11px] text-[#00f0ff] font-mono-tag">{rev.weddingType}</div>
                    </div>
                  </div>
                  <div className="flex text-[#ffee00]">
                    {'★'.repeat(rev.rating)}
                  </div>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-white/10 text-[11px] text-gray-500 font-mono-tag">
                Verified Event Booking • {rev.date}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. FOOTER WITH COMPLETE TECH SPECIFICATION */}
      <footer className="mt-20 border-t border-white/10 pt-12 pb-8 bg-[#090a10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-xl bg-[#ff2a85] flex items-center justify-center font-black text-black">
                  ⚡
                </div>
                <span className="font-heading font-black text-xl text-white">VIBESYNC™</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                The next-generation wedding & party OS built for modern couples who want festival energy, direct vendor pricing, and high-performance cloud media streaming.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-mono-tag font-bold text-white uppercase tracking-wider mb-3">
                Full-Stack Architecture
              </h4>
              <ul className="text-xs text-gray-400 space-y-2">
                <li>• <strong>Frontend:</strong> React.js, TailwindCSS v4, Vite</li>
                <li>• <strong>API & Auth:</strong> Node.js / Express, AWS STS</li>
                <li>• <strong>Upload Engine:</strong> Go / TUS Resumable Protocol</li>
                <li>• <strong>Transcoding:</strong> Python 3.12, FFmpeg, Celery</li>
                <li>• <strong>Database:</strong> MongoDB Atlas & Redis Cache</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono-tag font-bold text-white uppercase tracking-wider mb-3">
                Inspiration Hub
              </h4>
              <ul className="text-xs text-gray-400 space-y-2">
                <li>• Live101.in (Direct Live Artist Booking)</li>
                <li>• StarClinch (Verified Performance Riders)</li>
                <li>• WedMeGood Delhi NCR (Venue Discovery)</li>
                <li>• Dribbble Gen-Z (Neon Brutalist Design)</li>
                <li>• SlidesCarnival Gen-Z (Playful Typography)</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono-tag font-bold text-white uppercase tracking-wider mb-3">
                Raw 4K S3 Vault Pass
              </h4>
              <p className="text-xs text-gray-400 mb-3">
                Enables wedding videographers to deliver uncompressed multi-cam ProRes 422 files directly to couple's private cloud bucket with instant HLS preview.
              </p>
              <div className="inline-block px-3 py-1 rounded bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/30 text-[10px] font-mono-tag">
                AWS CloudFront CDN Active
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 font-mono-tag gap-4">
            <div>© 2026 VIBESYNC Technologies Inc. Built for Generation-Z.</div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Escrow Policy</a>
              <a href="#" className="hover:text-white">Vendor API Docs</a>
            </div>
          </div>
        </div>
      </footer>

      {/* MODALS */}
      {selectedArtist && (
        <DetailModal 
          artist={selectedArtist}
          onClose={() => setSelectedArtist(null)}
          onBook={(item) => {
            setSelectedArtist(null);
            setBookingArtist(item);
          }}
        />
      )}

      {bookingArtist && (
        <BookingModal 
          item={bookingArtist}
          onClose={() => setBookingArtist(null)}
        />
      )}
    </div>
  );
}
