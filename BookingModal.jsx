import React, { useState } from 'react';
import { Sparkles, Calendar, Users, MapPin, CheckCircle, Clock, ShieldCheck, IndianRupee, ArrowRight, Zap, X } from 'lucide-react';
import confetti from 'canvas-confetti';

export function BookingModal({ item, onClose, type = 'artist' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: 'Delhi NCR',
    eventDate: '2026-11-20',
    eventType: 'Cocktail & Afterparty',
    budgetRange: '₹1.5L - ₹3L',
    notes: 'Need high-energy vibes, zero traditional uncle songs!',
    rawFootageAddon: true
  });
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(2);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-xl bg-[#0f111a] border-2 border-[#ff2a85] rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(255,42,133,0.3)] overflow-hidden">
        {/* Top Glow Accent */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#ff2a85]/30 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#00f0ff]/20 rounded-full blur-3xl pointer-events-none"></div>

        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 1 ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-tag text-[#ff2a85] font-bold tracking-widest uppercase mb-1">
              <Zap className="w-4 h-4 fill-[#ff2a85]" /> Instant Verified Booking Portal
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Book {item.name}
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Lock the date instantly with escrow security. 100% direct artist contact with zero hidden agency markups.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono-tag text-gray-300 mb-1">YOUR NAME</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Kiara Advani"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#171a26] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:border-[#ff2a85] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono-tag text-gray-300 mb-1">PHONE NUMBER</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#171a26] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:border-[#ff2a85] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono-tag text-gray-300 mb-1">EVENT DATE</label>
                  <input
                    type="date"
                    required
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full bg-[#171a26] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:border-[#ff2a85] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono-tag text-gray-300 mb-1">EVENT TYPE</label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full bg-[#171a26] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:border-[#ff2a85] focus:outline-none"
                  >
                    <option>Cocktail & Afterparty</option>
                    <option>Baraat & High-Energy Entry</option>
                    <option>Sundowner & Haldi Rave</option>
                    <option>Intimate Vow Ceremony</option>
                    <option>Full 3-Day Wedding Pass</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono-tag text-gray-300 mb-1">SPECIAL REQUEST / VIBE NOTES</label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-[#171a26] border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:border-[#ff2a85] focus:outline-none"
                />
              </div>

              {/* Raw 4K Video Cloud Pass Option */}
              <div className="p-3 bg-[#171a26]/90 border border-white/10 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#00f0ff]/20 text-[#00f0ff] flex items-center justify-center font-bold text-xs">
                    4K
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      Include Raw Cloud Video Vault Access
                      <span className="text-[10px] bg-[#ffee00] text-black px-1.5 py-0.2 rounded font-mono-tag font-black">S3 PIPELINE</span>
                    </div>
                    <div className="text-[11px] text-gray-400">
                      Direct raw multi-cam uncompressed ProRes uploads with HLS streaming link
                    </div>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={formData.rawFootageAddon}
                  onChange={(e) => setFormData({ ...formData, rawFootageAddon: e.target.checked })}
                  className="w-5 h-5 accent-[#ff2a85] rounded cursor-pointer"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#ff2a85] via-[#ff6a00] to-[#ffee00] text-black font-extrabold text-base tracking-wide uppercase neo-button flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="animate-spin inline-block w-5 h-5 border-2 border-black border-t-transparent rounded-full"></span>
                  ) : (
                    <>
                      Lock Date & Check Live Slot <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 text-xs text-gray-400 pt-1">
                <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-emerald-400" /> Escrow Protected</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-sky-400" /> Instant 15-Min Confirmation</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-3xl mx-auto flex items-center justify-center mb-5 border-2 border-emerald-400">
              <CheckCircle className="w-10 h-10" />
            </div>
            <span className="inline-block px-3 py-1 bg-[#ff2a85]/20 text-[#ff2a85] border border-[#ff2a85]/40 rounded-full text-xs font-mono-tag font-bold uppercase mb-3">
              Booking Inquiry Registered #VS-2026-992
            </span>
            <h3 className="text-3xl font-extrabold text-white mb-2">You're On The VIP Guestlist!</h3>
            <p className="text-gray-300 text-sm max-w-md mx-auto mb-6">
              Our artist concierge has notified <span className="text-[#ffee00] font-bold">{item.name}</span>. 
              The verified contract & direct WhatsApp rider have been dispatched to <span className="text-white font-mono-tag">{formData.phone || '+91-9876543210'}</span>.
            </p>

            <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-left mb-6 space-y-2 text-xs">
              <div className="flex justify-between text-gray-400">
                <span>Vendor:</span>
                <strong className="text-white">{item.name}</strong>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Date Locked:</span>
                <strong className="text-[#00f0ff]">{formData.eventDate}</strong>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Starting Base:</span>
                <strong className="text-[#ffee00]">{item.startingPrice || item.price}</strong>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Raw S3 Vault Token:</span>
                <strong className="text-emerald-400 font-mono-tag">ACTIVE (Multi-Part Ready)</strong>
              </div>
            </div>

            <button
              onClick={onClose}
              className="px-8 py-3 rounded-2xl bg-white text-black font-bold uppercase tracking-wider hover:bg-[#ffee00] transition-colors"
            >
              Done & Return to Explore
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
