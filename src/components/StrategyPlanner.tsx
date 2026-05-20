/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  ArrowRight,
  TrendingUp,
  Globe2,
  Lock,
  Compass,
  Building2,
  TreePine,
  Layers,
  HelpCircle,
  MapPin,
  CircleDot
} from 'lucide-react';
import { getStrategyDetails } from '../data';

interface StrategyPlannerProps {
  onOpenTrial: () => void;
}

export default function StrategyPlanner({ onOpenTrial }: StrategyPlannerProps) {
  // Wizard state parameters
  const [projectType, setProjectType] = React.useState<'society' | 'highrise' | 'commercial' | 'farmhouse'>('highrise');
  const [projectScale, setProjectScale] = React.useState<'mid' | 'large' | 'mega'>('large');
  const [targetAudience, setTargetAudience] = React.useState<'local_premium' | 'middle_income' | 'overseas'>('overseas');
  const [projectName, setProjectName] = React.useState('');

  const activeStrategy = getStrategyDetails(projectType, projectScale, targetAudience);

  // Type label dictionary
  const typeLabels = {
    society: 'Housing Society / Plots',
    highrise: 'Residential Highrise / Apartments',
    commercial: 'Commercial Square / Plaza',
    farmhouse: 'Luxury Farmhouse Development'
  };

  const scaleLabels = {
    mid: 'Boutique (Under 20 Kanal / Single Tower)',
    large: 'Mid-to-Large Scale (20-100 Kanal / Multi-Tower)',
    mega: 'Mega-Scale Landmark (100+ Kanal / Landmark Hub)'
  };

  const audienceLabels = {
    local_premium: 'Lahore Local Premium Buyers (DHA, Gulberg focus)',
    middle_income: 'Middle Income Installment Investors',
    overseas: 'Overseas Pakistanis (UK, US, Canada, Gulf & UAE focus)'
  };

  return (
    <section id="strategy-planner" className="py-24 bg-[#001B3D] relative">
      <div className="absolute inset-0 bg-radial-gradient from-teal-500/5 via-transparent to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <span className="text-xs font-mono font-bold text-[#00F2FE] tracking-widest uppercase block mb-3">
            INTERACTIVE REVENUE BLUEPRINT
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight mb-4">
            Simulate Your Project’s Self-Funding Launch
          </h2>
          <p className="text-slate-300">
            Tell Pivotal’s embedded strategist about your upcoming real estate project. We will map out three foundational marketing pillars and detail a self-funding campaign model designed to refund your marketing spend.
          </p>
        </div>

        {/* Strategy Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Form Controls (Col: 5/12) */}
          <div className="lg:col-span-5 bg-[#050B1B]/95 p-6 rounded-2xl border border-white/5 shadow-xl space-y-6">
            <h3 className="text-lg font-bold text-white font-sans flex items-center gap-2 border-b border-white/5 pb-3">
              <CircleDot className="w-5 h-5 text-[#00F2FE] animate-pulse" />
              Project Parameters
            </h3>

            {/* Input 1: Project Name */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-slate-400 tracking-wider block uppercase">
                1. Development Project Name
              </label>
              <input
                id="param-project-name"
                type="text"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                placeholder="e.g. Opal Heights Gulberg, DHA Phase 9 Town"
                className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-[#00f2fe]"
              />
            </div>

            {/* Input 2: Project Type */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-slate-400 tracking-wider block uppercase">
                2. Project Category
              </label>
              <div className="grid grid-cols-2 gap-2">
                {(Object.keys(typeLabels) as Array<keyof typeof typeLabels>).map((t) => (
                  <button
                    key={t}
                    id={`opt-type-${t}`}
                    onClick={() => setProjectType(t)}
                    className={`px-3 py-2.5 rounded-lg text-xs font-medium border text-left transition-all cursor-pointer ${
                      projectType === t
                        ? 'bg-slate-900 border-[#00F2FE]/50 text-white'
                        : 'bg-transparent border-white/5 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {typeLabels[t].split(' / ')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Input 3: Project Scale */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-slate-400 tracking-wide block uppercase">
                3. Ground Footprint Scale
              </label>
              <div className="space-y-2">
                {(Object.keys(scaleLabels) as Array<keyof typeof scaleLabels>).map((sc) => (
                  <button
                    key={sc}
                    id={`opt-scale-${sc}`}
                    onClick={() => setProjectScale(sc as any)}
                    className={`w-full px-4 py-2.5 rounded-lg text-xs text-left border transition-all cursor-pointer flex items-center justify-between ${
                      projectScale === sc
                        ? 'bg-slate-900 border-[#10B981]/50 text-white font-semibold'
                        : 'bg-transparent border-white/5 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <span>{scaleLabels[sc]}</span>
                    {projectScale === sc && <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Input 4: Target Audience */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-slate-400 tracking-wider block uppercase">
                4. Focus Investor/Buyer Base
              </label>
              <div className="space-y-2">
                {(Object.keys(audienceLabels) as Array<keyof typeof audienceLabels>).map((aud) => (
                  <button
                    key={aud}
                    id={`opt-aud-${aud}`}
                    onClick={() => setTargetAudience(aud as any)}
                    className={`w-full px-4 py-2.5 rounded-lg text-xs text-left border transition-all cursor-pointer flex items-center justify-between ${
                      targetAudience === aud
                        ? 'bg-slate-900 border-[#00F2FE]/50 text-white font-semibold'
                        : 'bg-transparent border-white/5 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <span>{audienceLabels[aud]}</span>
                    {targetAudience === aud && <span className="w-1.5 h-1.5 rounded-full bg-[#00F2FE]" />}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Simulated Blueprint Result Outputs (Col: 7/12) */}
          <div className="lg:col-span-7 bg-[#020817]/40 border border-white/10 rounded-2xl p-6 relative">
            <div className="absolute -top-3 left-6 px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded text-[10px] uppercase tracking-wider font-mono font-bold text-slate-950">
              CUSTOM BLUEPRINT GENERATED
            </div>

            {/* Project Overview heading */}
            <div className="mb-8 pt-2">
              <span className="text-xs font-mono text-[#00F2FE] tracking-widest uppercase">STRATEGY SCHEMATIC FOR</span>
              <h3 className="text-2xl font-sans font-bold text-white mt-1">
                {projectName || 'Unnamed Prestige Venture'}
              </h3>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-2.5 py-1 rounded bg-white/5 text-[10px] text-slate-300 font-mono">
                  Type: {typeLabels[projectType]}
                </span>
                <span className="px-2.5 py-1 rounded bg-white/5 text-[10px] text-slate-300 font-mono">
                  Scale: {projectScale.toUpperCase()}
                </span>
                <span className="px-2.5 py-1 rounded bg-white/5 text-[10px] text-slate-400 font-mono">
                  Target: {targetAudience === 'overseas' ? 'Overseas / USD' : 'UHNW Local'}
                </span>
              </div>
            </div>

            {/* Core Strategy Pillars */}
            <div className="space-y-6">
              <h4 className="text-xs font-mono text-slate-400 tracking-wider uppercase border-b border-white/5 pb-2">
                Three Foundation Pillars:
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {activeStrategy.pillars.map((p, idx) => (
                  <div key={idx} className="bg-[#050B1B]/50 p-4 rounded-xl border border-white/5 flex flex-col justify-between">
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-[#00F2FE]/10 flex items-center justify-center text-[#00F2FE] mb-3">
                        {idx === 0 ? <Compass className="w-4 h-4" /> : idx === 1 ? <Building2 className="w-4 h-4" /> : <Globe2 className="w-4 h-4" />}
                      </div>
                      <h5 className="text-xs font-bold text-white mb-2 font-sans">{p.title}</h5>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed mt-2">{p.desc}</p>
                  </div>
                ))}
              </div>

              {/* Secret Recipe: Self-funding Engine */}
              <div className="p-4 bg-emerald-500/5 rounded-xl border border-emerald-500/20 mt-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono font-bold text-[9px] uppercase">
                    Pivotal’s Brand Engine
                  </div>
                  <span className="text-xs font-bold text-white font-sans">
                    Marketing Self-Funding Model
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {activeStrategy.fundingStrategy}
                </p>
              </div>

              {/* Overseas Lead Generation Module */}
              <div className="p-4 bg-blue-500/5 rounded-xl border border-blue-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <div className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 font-mono font-bold text-[9px] uppercase">
                    Overseas Capture
                  </div>
                  <span className="text-xs font-bold text-white font-sans">
                    Diaspora Lead Route
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {activeStrategy.overseasTactics}
                </p>
              </div>

              {/* Expected metrics indicator */}
              <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-slate-500">SIMULATED PIPELINE TARGETS</span>
                  <span className="text-xs font-sans text-[#10B981] font-bold">
                    {activeStrategy.expectedMetric}
                  </span>
                </div>
                
                <button
                  id="strategy-submit-brief"
                  onClick={onOpenTrial}
                  className="px-5 py-2.5 rounded-lg bg-white text-slate-950 font-bold text-xs hover:bg-slate-200 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  Deploy This Strategy Blueprint
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
