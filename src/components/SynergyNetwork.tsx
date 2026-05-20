/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Network, ArrowRight, Building2, ShieldAlert, BadgePlus, HardHat, TrendingUp } from 'lucide-react';
import { NETWORK_PARTNERS } from '../data';

export default function SynergyNetwork() {
  const [activePartnerId, setActivePartnerId] = React.useState<string>('1');

  const selectedPartner = NETWORK_PARTNERS.find(p => p.id === activePartnerId) || NETWORK_PARTNERS[0];

  return (
    <section id="synergy-network" className="py-24 bg-[#00132C] border-t border-white/5 relative">
      <div className="absolute top-1/2 left-10 w-[400px] h-[400px] bg-[#00F2FE]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-[#10B981] tracking-widest uppercase block mb-3">
            STRATEGIC INDUSTRIAL COALITIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight mb-4">
            The Pivotal Synergy Network
          </h2>
          <p className="text-slate-300">
            We operate beyond standard agency bounds. Pivotal maintains deep, ready-to-use business alliances across Lahore’s premier real estate development, construction, and investment sectors.
          </p>
        </div>

        {/* Node Alliance Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Node Map Panel (Col: 7/12) */}
          <div className="lg:col-span-7 bg-[#020617]/90 rounded-2xl border border-white/10 p-6 flex flex-col justify-between min-h-[420px] relative overflow-hidden">
            {/* Background technological grids */}
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.01)_1.5px,transparent_1.5px)] [background-size:16px_16px] pointer-events-none" />

            <div className="flex items-center justify-between border-b border-white/5 pb-3 z-10">
              <span className="text-xs font-mono text-slate-400">INTERACTIVE PARTNERSHIP CONNECTIONS</span>
              <span className="text-[10px] font-mono text-emerald-400">CLICK NODES TO TRACE ROOT LINKS</span>
            </div>

            {/* Simulated Node Graphic Layout */}
            <div className="relative w-full h-[260px] flex items-center justify-center my-6 z-10">
              
              {/* Central Core: Pivotal */}
              <div className="absolute z-20 w-20 h-20 bg-slate-900 border-2 border-[#00F2FE] rounded-full flex flex-col items-center justify-center shadow-[0_0_25px_rgba(0,242,254,0.35)]">
                <span className="text-[9px] font-mono text-[#00F2FE] tracking-widest uppercase">PIVOTAL</span>
                <span className="text-[8px] font-mono text-slate-400 leading-none">CORE</span>
              </div>

              {/* Orbital Path Rings */}
              <div className="absolute w-[160px] h-[160px] border border-dashed border-white/10 rounded-full" />
              <div className="absolute w-[240px] h-[240px] border border-dashed border-white/5 rounded-full" />

              {/* Node 1: Top Lahore Developers */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                onClick={() => setActivePartnerId('1')}
                className={`absolute z-20 top-2 left-1/4 -translate-x-12 p-3 rounded-xl border cursor-pointer transition-all flex items-center gap-2 ${
                  activePartnerId === '1'
                    ? 'bg-slate-900 border-[#00F2FE] text-white shadow-[0_0_15px_rgba(0,242,254,0.2)]'
                    : 'bg-[#020817] border-white/5 text-slate-400 hover:border-white/20'
                }`}
              >
                <Building2 className="w-4 h-4 text-[#00F2FE]" />
                <span className="text-xs font-bold font-sans">Developers Suite</span>
              </motion.div>

              {/* Node 2: Construction Firms */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                onClick={() => setActivePartnerId('2')}
                className={`absolute z-20 bottom-8 left-10 p-3 rounded-xl border cursor-pointer transition-all flex items-center gap-2 ${
                  activePartnerId === '2'
                    ? 'bg-slate-900 border-[#10B981] text-white shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                    : 'bg-[#020817] border-white/5 text-slate-400 hover:border-white/20'
                }`}
              >
                <HardHat className="w-4 h-4 text-[#10B981]" />
                <span className="text-xs font-bold font-sans">Builders Hub</span>
              </motion.div>

              {/* Node 3: Investor Syndicate Brokers */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                onClick={() => setActivePartnerId('3')}
                className={`absolute z-20 top-1/3 right-1 p-3 rounded-xl border cursor-pointer transition-all flex items-center gap-2 ${
                  activePartnerId === '3'
                    ? 'bg-slate-900 border-[#00F2FE] text-white shadow-[0_0_15px_rgba(0,242,254,0.2)]'
                    : 'bg-[#020817] border-white/5 text-slate-400 hover:border-white/20'
                }`}
              >
                <TrendingUp className="w-4 h-4 text-[#00F2FE]" />
                <span className="text-xs font-bold font-sans">Broker Syndicates</span>
              </motion.div>

              {/* Linking SVG Lines connecting central core to orbits */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 350 260">
                {/* Center is at roughly (175, 130) */}
                {/* Developer Suite approx (100, 40) */}
                <line x1="175" y1="130" x2="100" y2="40" stroke={activePartnerId === '1' ? '#00F2FE' : '#334155'} strokeWidth={activePartnerId === '1' ? '1.5' : '1'} strokeDasharray="3 3" />
                
                {/* Builders Hub approx (90, 200) */}
                <line x1="175" y1="130" x2="90" y2="200" stroke={activePartnerId === '2' ? '#10B981' : '#334155'} strokeWidth={activePartnerId === '2' ? '1.5' : '1'} strokeDasharray="3 3" />
                
                {/* Broker Syndicates approx (280, 110) */}
                <line x1="175" y1="130" x2="280" y2="110" stroke={activePartnerId === '3' ? '#00F2FE' : '#334155'} strokeWidth={activePartnerId === '3' ? '1.5' : '1'} strokeDasharray="3 3" />
              </svg>

            </div>

            <div className="text-[10px] font-mono text-slate-500 text-center z-10 uppercase tracking-widest border-t border-white/5 pt-3">
              Direct access allows joint venture introductions, broker syndicate activations, and project-approved materials scaling.
            </div>
          </div>

          {/* Details Sidebar Panel (Col: 5/12) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#020817] border border-white/10 rounded-2xl p-6 shadow-2xl">
            <div className="space-y-6">
              
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-slate-900 border border-white/10 font-mono text-[9px] text-[#00F2FE] uppercase">
                  ACTIVE SYNERGY LINK
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {selectedPartner.relationship}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white font-sans">
                  {selectedPartner.name}
                </h3>
                <span className="text-xs text-slate-400 block mt-0.5 uppercase tracking-widest font-mono">
                  Allied Network Segment
                </span>
              </div>

              <div className="p-4 bg-slate-950/80 border border-white/5 rounded-xl space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold text-[#10B981]">
                  <BadgePlus className="w-4 h-4" />
                  How This Boosts Your Venture:
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {selectedPartner.benefit}
                </p>
              </div>

              <div className="text-xs text-slate-400 leading-relaxed">
                📢 <strong>Why this matters:</strong> Most external marketing agencies spend months understanding builder rules and struggling to access brokers. Pivotal embeds with pre-established lines—linking your project to trust circles instantly.
              </div>

            </div>

            <div className="pt-6 border-t border-white/5 mt-6">
              <span className="text-[10px] font-mono text-[#00F2FE] block mb-1 uppercase tracking-widest">WANT A DIRECT JV INTRODUCTION?</span>
              <span className="text-xs text-slate-300 block">
                Trial partners obtain raw collaboration credentials to all allied sectors.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
