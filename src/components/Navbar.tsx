/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, PhoneCall, Layers, Award, BarChart3, Radio } from 'lucide-react';

interface NavbarProps {
  onOpenCalculator: () => void;
  onOpenTrial: () => void;
  onOpenStrategizer: () => void;
}

export default function Navbar({ onOpenCalculator, onOpenTrial, onOpenStrategizer }: NavbarProps) {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#001B3D]/95 backdrop-blur-lg border-b border-white/10 shadow-[0_10px_35px_rgba(0,27,61,0.5)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Pivotal Logo SVG Recreation */}
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 flex items-center justify-center">
              {/* Circuit board/Starburst Animated Halo */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 opacity-80"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {/* Outer technological radiant nodes */}
                  <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(16, 185, 129, 0.15)" strokeWidth="1" strokeDasharray="3 3" />
                  <circle cx="50" cy="50" r="35" fill="none" stroke="rgba(6, 182, 212, 0.2)" strokeWidth="1" strokeDasharray="5 5" />
                  
                  {/* Cyan Circuit Lines */}
                  <path d="M50 5 L50 25 M50 95 L50 75 M5 50 L25 50 M95 50 L75 50" stroke="#00F2FE" strokeWidth="2" strokeLinecap="round" />
                  <path d="M18 18 L32 32 M82 82 L68 68 M18 82 L32 68 M82 18 L68 32" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
                  
                  {/* Tiny radiant endpoints */}
                  <circle cx="50" cy="5" r="2" fill="#00F2FE" />
                  <circle cx="50" cy="95" r="2" fill="#00F2FE" />
                  <circle cx="5" cy="50" r="2" fill="#00F2FE" />
                  <circle cx="95" cy="50" r="2" fill="#00F2FE" />
                  <circle cx="18" cy="18" r="1.5" fill="#10B981" />
                  <circle cx="82" cy="82" r="1.5" fill="#10B981" />
                </svg>
              </motion.div>

              {/* Central Diamond and Ring Core */}
              <div className="absolute w-7 h-7 bg-slate-900 border border-[#00F2FE] rounded-lg rotate-45 flex items-center justify-center shadow-[0_0_15px_rgba(0,242,254,0.4)]">
                <div className="w-3.5 h-3.5 border-2 border-[#10B981] rounded-full rotate-[-45deg] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                </div>
              </div>
            </div>

            {/* Logo Text Typography */}
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-[0.25em] text-white font-sans flex items-center">
                PIVOTAL
                <span className="text-[#00F2FE] ml-0.5 animate-pulse">.</span>
              </span>
              <span className="text-[9px] font-mono tracking-[0.3em] text-[#10B981] uppercase">
                Marketing Group
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <button
              id="nav-model-btn"
              onClick={onOpenCalculator}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Layers id="icon-layers" className="w-4 h-4 text-[#10B981]" />
              In-House Calculator
            </button>
            <button
              id="nav-strategy-btn"
              onClick={onOpenStrategizer}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <BarChart3 id="icon-[barchart]" className="w-4 h-4 text-[#00F2FE]" />
              Project Strategizer
            </button>
            <span className="h-4 w-px bg-white/20" />
            <div className="flex items-center gap-1.5">
              <Radio className="w-3 h-3 text-red-500 animate-pulse" />
              <span className="text-xs font-mono text-slate-400">Lahore Hub Active</span>
            </div>
          </div>

          {/* Action Call for Trial */}
          <div className="flex items-center gap-3">
            <button
              id="navbar-cta-btn"
              onClick={onOpenTrial}
              className="relative group overflow-hidden px-5 py-2 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-medium text-sm shadow-[0_4px_20px_rgba(0,242,254,0.25)] hover:shadow-[0_4px_25px_rgba(16,185,129,0.4)] transition-all cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-2">
                <PhoneCall className="w-4 h-4" />
                Book Free Trial
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}
