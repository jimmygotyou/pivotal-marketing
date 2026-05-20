/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, ArrowRight, Compass, Sparkles, AlertCircle, Building2, Landmark, Waves, Users } from 'lucide-react';

interface HeroProps {
  onOpenCalculator: () => void;
  onOpenTrial: () => void;
  onOpenStrategizer: () => void;
}

export default function Hero({ onOpenCalculator, onOpenTrial, onOpenStrategizer }: HeroProps) {
  const [activeNiche, setActiveNiche] = React.useState<'highrise' | 'society' | 'commercial'>('highrise');

  const niches = {
    highrise: {
      title: 'Premium High-Rises',
      tagline: 'Sell out 3D inventories via elite cinematic vlogs & virtual walkthrough renders.',
      color: 'from-cyan-400 to-blue-500',
      artwork: (
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <defs>
            <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00F2FE" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00F2FE" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          
          {/* Grid Background */}
          <g stroke="rgba(255,255,255,0.03)" strokeWidth="1">
            <line x1="0" y1="50" x2="400" y2="50" />
            <line x1="0" y1="150" x2="400" y2="150" />
            <line x1="0" y1="250" x2="400" y2="250" />
            <line x1="0" y1="350" x2="400" y2="350" />
            <line x1="50" y1="0" x2="50" y2="400" />
            <line x1="150" y1="0" x2="150" y2="400" />
            <line x1="250" y1="0" x2="250" y2="400" />
            <line x1="350" y1="0" x2="350" y2="400" />
          </g>

          {/* Lahore Luxury Tower Silhouette with glowing scanning laser indicators */}
          <g fill="url(#glowGrad)" stroke="none">
            {/* Tower Frame */}
            <path d="M120 380 L120 180 L180 120 L240 180 L240 380 Z" />
            <path d="M250 380 L250 220 L290 190 L330 220 L330 380 Z" opacity="0.6" />
          </g>

          {/* Blueprint Laser Lines */}
          <g fill="none" stroke="url(#lineGrad)" strokeWidth="2">
            <path d="M120 380 L120 180 L180 120 L240 180 L240 380" />
            <path d="M250 380 L250 220 L290 190 L330 220 L330 380" />
            {/* Grid wireframe details */}
            <line x1="120" y1="240" x2="240" y2="240" />
            <line x1="120" y1="300" x2="240" y2="300" />
            <line x1="180" y1="120" x2="180" y2="380" strokeDasharray="4 4" opacity="0.5" />
          </g>

          {/* Holographic Marketing Growth Overlays/Nodes */}
          <circle cx="180" cy="120" r="5" fill="#00F2FE" className="animate-ping" />
          <circle cx="180" cy="120" r="4" fill="#00F2FE" />
          
          <circle cx="290" cy="190" r="4" fill="#10B981" />
          
          {/* Connections lines to virtual marketing target boards */}
          <path d="M180 120 L80 160" stroke="#00F2FE" strokeWidth="1" strokeDasharray="3 3" />
          <path d="M290 190 L350 140" stroke="#10B981" strokeWidth="1" strokeDasharray="3 3" />

          {/* Lead Target Radar */}
          <circle cx="80" cy="160" r="14" fill="none" stroke="#00F2FE" strokeWidth="1" opacity="0.4" />
          <circle cx="80" cy="160" r="6" fill="#00F2FE" />
          <text x="70" y="135" fill="#00F2FE" fontSize="10" fontFamily="monospace" letterSpacing="1">CRM HUB</text>

          <circle cx="350" cy="140" r="14" fill="none" stroke="#10B981" strokeWidth="1" opacity="0.4" />
          <circle cx="350" cy="140" r="6" fill="#10B981" />
          <text x="310" y="115" fill="#10B981" fontSize="10" fontFamily="monospace" letterSpacing="1">OVERSEAS FUNNEL</text>

          {/* Interactive Scanning HUD Bar */}
          <motion.line
            animate={{ y: [130, 360, 130] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            x1="100"
            y1="0"
            x2="350"
            y2="0"
            stroke="rgba(0, 242, 254, 0.4)"
            strokeWidth="2"
          />
        </svg>
      )
    },
    society: {
      title: 'Housing Societies',
      tagline: 'Pre-sell plots on active masterplan maps, utilizing elite drone cinematography and trust-building vlogs.',
      color: 'from-emerald-400 to-teal-500',
      artwork: (
        <svg viewBox="0 0 400 400" className="w-full h-full">
          {/* Society Masterplan Map Wireframe */}
          <g stroke="rgba(255,255,255,0.03)" strokeWidth="1">
            <line x1="0" y1="50" x2="400" y2="50" />
            <line x1="0" y1="150" x2="400" y2="150" />
            <line x1="0" y1="250" x2="400" y2="250" />
            <line x1="0" y1="350" x2="400" y2="350" />
            <line x1="50" y1="0" x2="50" y2="400" />
            <line x1="150" y1="0" x2="150" y2="400" />
          </g>
          
          {/* Curving green land contour lines and masterplan plots */}
          <path d="M 50 250 Q 150 180 250 300 T 350 200" fill="none" stroke="#10B981" strokeWidth="3" strokeOpacity="0.7" />
          <path d="M 30 280 Q 150 210 270 340 T 380 240" fill="none" stroke="#10B981" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="5 5" />
          
          {/* Plots */}
          <rect x="110" y="120" width="30" height="20" rx="3" fill="none" stroke="#00F2FE" strokeWidth="1.5" />
          <rect x="150" y="110" width="30" height="20" rx="3" fill="#00F2FE" fillOpacity="0.1" stroke="#00F2FE" strokeWidth="1.5" />
          <rect x="190" y="105" width="30" height="20" rx="3" fill="none" stroke="#00F2FE" strokeWidth="1.5" />
          
          <rect x="90" y="160" width="40" height="25" rx="3" fill="#10B981" fillOpacity="0.15" stroke="#10B981" strokeWidth="1.5" />
          <rect x="140" y="160" width="40" height="25" rx="3" fill="none" stroke="#10B981" strokeWidth="1.5" />
          <rect x="190" y="160" width="40" height="25" rx="3" fill="none" stroke="#10B981" strokeWidth="1.5" />

          {/* Helicopter/Drone Cinematic Node overlay */}
          <g>
            <circle cx="280" cy="110" r="12" fill="none" stroke="red" strokeWidth="1.5" className="animate-pulse" />
            <path d="M280 90 L280 130 M260 110 L300 110" stroke="red" strokeWidth="1" opacity="0.4" />
            <circle cx="280" cy="110" r="3" fill="red" />
            <text x="295" y="114" fill="red" fontSize="9" fontFamily="monospace" fontWeight="bold">DRONE 4K SHOOT</text>
          </g>

          {/* Social Media Lead Stream Nodes */}
          <path d="M50 350 L100 240 L280 110" fill="none" stroke="rgba(0, 242, 254, 0.4)" strokeWidth="2" strokeDasharray="6 4" />
          <circle cx="100" cy="240" r="4" fill="#00F2FE" />
          <text x="70" y="225" fill="#00F2FE" fontSize="9" fontFamily="monospace">LIVE LEAD STREAM</text>
        </svg>
      )
    },
    commercial: {
      title: 'Commercial Hubs',
      tagline: 'Attract anchor brands & regional offices with data-driven yield visualizers and franchise acquisition templates.',
      color: 'from-blue-500 to-indigo-600',
      artwork: (
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <g stroke="rgba(255,255,255,0.03)" strokeWidth="1">
            <line x1="0" y1="50" x2="400" y2="50" />
            <line x1="0" y1="150" x2="400" y2="150" />
            <line x1="0" y1="250" x2="400" y2="250" />
            <line x1="0" y1="350" x2="400" y2="350" />
          </g>
          
          {/* Commercial Grid Structures blocky layout */}
          <rect x="60" y="200" width="100" height="180" fill="rgba(6, 182, 212, 0.05)" stroke="#00F2FE" strokeWidth="2" />
          <rect x="180" y="150" width="160" height="230" fill="rgba(16, 185, 129, 0.05)" stroke="#10B981" strokeWidth="2" />
          
          {/* Franchise Retail shop front overlays style */}
          <rect x="80" y="320" width="60" height="60" fill="none" stroke="#00F2FE" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="110" cy="350" r="8" fill="none" stroke="#00F2FE" strokeWidth="1" />
          <text x="90" y="310" fill="#00F2FE" fontSize="8" fontFamily="monospace">ANCHOR PLAZA</text>

          <rect x="200" y="300" width="120" height="80" fill="none" stroke="#10B981" strokeWidth="1" strokeDasharray="3 3" />
          <text x="210" y="290" fill="#10B981" fontSize="8" fontFamily="monospace">OFFICE FLIGHTS</text>

          {/* Glowing Yield Projection Arc */}
          <path d="M 60 200 C 120 100, 250 80, 340 150" fill="none" stroke="#00F2FE" strokeWidth="3" className="shadow-[0_0_10px_#00F2FE]" />
          <circle cx="340" cy="150" r="5" fill="#00F2FE" />
          <text x="230" y="110" fill="#00F2FE" fontSize="10" fontFamily="monospace">COMMERCIAL ROI: +18.2% YIELD</text>
        </svg>
      )
    }
  };

  return (
    <div id="hero-section" className="relative min-h-screen bg-gradient-to-b from-[#001B3D] via-[#00142D] to-[#000F24] pt-32 pb-24 overflow-hidden flex items-center">
      {/* Background Radial Elegant Dark White Light-Leak Highlights */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 100% 0%, #ffffff 0%, transparent 70%)' }}></div>
      </div>
      <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-white opacity-[0.02] rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Copywriting Pitch */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            {/* Embedded Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-wider text-emerald-400 uppercase">
                Embeddable In-House Model
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-white leading-tight">
              Your Embedded <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F2FE] via-sky-400 to-[#10B981]">
                Marketing Department
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
              We don’t operate as an outside agency. Pivotal embeds is your dedicated 
              <strong className="text-white font-semibold"> in-house team</strong>—bringing Lahore’s elite videographers, 
              ads specialists, brand designers, and marketing consultants under your roof on demand, saving you millions in permanent salaries.
            </p>

            {/* Niche Toggle Selector */}
            <div className="flex flex-col space-y-3 bg-slate-900/50 p-4 border border-white/5 rounded-xl backdrop-blur-md max-w-lg">
              <span className="text-xs font-mono text-slate-400 tracking-widest uppercase">Select your development category:</span>
              <div className="grid grid-cols-3 gap-2">
                {(Object.keys(niches) as Array<keyof typeof niches>).map((n) => (
                  <button
                    key={n}
                    id={`niche-toggle-${n}`}
                    onClick={() => setActiveNiche(n)}
                    className={`px-3 py-2 text-xs font-medium rounded-lg border transition-all cursor-pointer text-center ${
                      activeNiche === n
                        ? 'bg-gradient-to-r from-slate-900 to-slate-800 border-teal-500/50 text-white shadow-[0_0_15px_rgba(0,242,254,0.15)]'
                        : 'bg-transparent border-white/5 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {niches[n].title}
                  </button>
                ))}
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                id="hero-strategy-cta"
                onClick={onOpenStrategizer}
                className="px-6 py-3.5 rounded-lg bg-gradient-to-r from-[#00F2FE] to-teal-500 text-slate-950 font-bold tracking-wide hover:shadow-[0_0_25px_rgba(0,242,254,0.35)] transition-all cursor-pointer flex items-center gap-2 group"
              >
                Custom Strategy Blueprint
                <ArrowRight id="hero-arrow-1" className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button
                id="hero-calculator-cta"
                onClick={onOpenCalculator}
                className="px-6 py-3.5 rounded-lg bg-slate-900 border border-white/15 text-white font-medium hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Calculate Team Savings
              </button>
            </div>

            {/* Trust Anchors */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-white/5 max-w-xl">
              <div>
                <span className="block text-2xl font-bold font-sans text-white">0 Contract</span>
                <span className="text-xs text-slate-400">Lock-ins. Complete transparency</span>
              </div>
              <div>
                <span className="block text-2xl font-bold font-sans text-white">100% Free</span>
                <span className="text-xs text-slate-400">14-Day Pilot before commitment</span>
              </div>
              <div>
                <span className="block text-2xl font-bold font-sans text-[#10B981]">Cost Covered</span>
                <span className="text-xs text-slate-400">Self-funding strategies built-in</span>
              </div>
            </div>

          </div>

          {/* Active Interactive Artwork Preview */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Animated Ring Decor */}
            <div className="absolute w-[115%] h-[115%] rounded-full border border-dashed border-teal-500/10 animate-spin-slow" />
            
            <div className="relative w-full aspect-square bg-[#050B1B]/90 rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden p-6">
              
              {/* Dynamic HUD banner */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between border-b border-white/5 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#00F2FE] animate-ping" />
                  <span className="text-[10px] font-mono tracking-wider text-[#00F2FE] uppercase">ACTIVE NICHE RENDER</span>
                </div>
                <div className="flex items-center gap-1 text-[9px] font-mono text-slate-400">
                  <Compass className="w-3 h-3 text-[#10B981]" />
                  LAHORE CORE GRID
                </div>
              </div>

              {/* Niche Art Animation Change Area */}
              <div className="w-full h-full flex items-center justify-center pt-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeNiche}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full max-w-[340px] max-h-[340px]"
                  >
                    {niches[activeNiche].artwork}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Artwork Overlay Stats Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 border border-white/10 p-3 rounded-xl flex flex-col space-y-1 backdrop-blur-md">
                <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase">Interactive Projection Plan:</span>
                <span className="text-xs font-sans text-white font-semibold">
                  {niches[activeNiche].tagline}
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
