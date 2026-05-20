/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TeamConfigurator from './components/TeamConfigurator';
import StrategyPlanner from './components/StrategyPlanner';
import SynergyNetwork from './components/SynergyNetwork';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import { Sparkles, HelpCircle, Layers, Award, Radio, Phone, Mail, MapPin } from 'lucide-react';

export default function App() {
  const [isTrialOpen, setIsTrialOpen] = React.useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#001B3D] text-slate-100 font-sans selection:bg-white selection:text-slate-950 antialiased overflow-x-hidden">
      
      {/* Dynamic floating navigation header */}
      <Navbar
        onOpenCalculator={() => scrollToSection('team-configurator')}
        onOpenStrategizer={() => scrollToSection('strategy-planner')}
        onOpenTrial={() => setIsTrialOpen(true)}
      />

      {/* Main Sections */}
      <main>
        
        {/* Cinematic Hero Pitch & Category blueprint visualizer */}
        <Hero
          onOpenCalculator={() => scrollToSection('team-configurator')}
          onOpenStrategizer={() => scrollToSection('strategy-planner')}
          onOpenTrial={() => setIsTrialOpen(true)}
        />

        {/* Dynamic Pricing Specialist Calculator */}
        <TeamConfigurator onOpenTrial={() => setIsTrialOpen(true)} />

        {/* Dynamic Project Strategizer & Blueprint */}
        <StrategyPlanner onOpenTrial={() => setIsTrialOpen(true)} />

        {/* Nodes interactive synergy mapping alliances */}
        <SynergyNetwork />

        {/* Verified testimonials from Lahore developer executives */}
        <Testimonials />

        {/* Secondary on-page Conversion Strip */}
        <section className="bg-gradient-to-r from-[#001B3D] to-[#000F24] border-t border-b border-white/10 py-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/5 blur-3xl rounded-full" />
          <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
            <span className="text-xs font-mono text-[#00F2FE] tracking-[0.35em] uppercase block">
              LAHORE EMBEDDED MARKETING REVOLUTION
            </span>
            <h2 className="text-2xl sm:text-3xl font-sans font-bold text-white tracking-tight">
              Ready to See Your Venture on the Screen before Breaking Ground?
            </h2>
            <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
              Experience the visual quality of elite drone trails and luxury architectural layouts on-site without any contracts or ongoing salary obligations.
            </p>
            <button
              id="strip-reserve-trial"
              onClick={() => setIsTrialOpen(true)}
              className="px-6 py-3.5 rounded-lg bg-white text-slate-950 font-bold text-sm hover:bg-slate-200 transition-all cursor-pointer shadow-lg hover:shadow-white/5"
            >
              Start Your Free 14-Day Pilot Now
            </button>
          </div>
        </section>

      </main>

      {/* Pristine Minimalist Footer */}
      <footer className="bg-slate-950 border-t border-white/5 py-12 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Branding column */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold tracking-[0.2em] text-white">PIVOTAL.</span>
                <span className="text-[10px] font-mono text-[#10B981]">LAHORE OFFICE</span>
              </div>
              <p className="leading-relaxed">
                Seamlessly integrated, in-house marketing force for Lahore’s premier real estate ventures. Zero contracts. Immediate elite output.
              </p>
            </div>

            {/* Quick action scroll triggers */}
            <div>
              <h5 className="font-mono text-[10px] text-white tracking-wider uppercase mb-4">Workspace Navigation</h5>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => scrollToSection('hero-section')} className="hover:text-white transition-colors cursor-pointer text-left">
                    Embedded Vision
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('team-configurator')} className="hover:text-white transition-colors cursor-pointer text-left">
                    Cost Calculator
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('strategy-planner')} className="hover:text-white transition-colors cursor-pointer text-left">
                    Revenue Strategizer
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('synergy-network')} className="hover:text-white transition-colors cursor-pointer text-left">
                    Alliance Network
                  </button>
                </li>
              </ul>
            </div>

            {/* Address location block details */}
            <div className="space-y-2">
              <h5 className="font-mono text-[10px] text-white tracking-wider uppercase mb-4">Local HQ Details</h5>
              <p className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#00F2FE] flex-shrink-0 mt-0.5" />
                <span>Gulberg III & DHA Phase 6 Main Boulevard, Lahore, Pakistan</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#10B981]" />
                <span>+92 311 4518485 | WhatsApp Support</span>
              </p>
            </div>

            {/* Category / Legal transparency block */}
            <div className="space-y-4">
              <h5 className="font-mono text-[10px] text-white tracking-wider uppercase">Active Trial System</h5>
              <div className="p-3 bg-white/5 border border-white/5 rounded-lg space-y-1.5">
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-[10px] font-mono font-bold text-emerald-400">PILOTS ACTIVE</span>
                </div>
                <p className="text-[10px] leading-relaxed">
                  Trial reservations are allocated weekly based on drone operator schedule and local weather parameters.
                </p>
              </div>
            </div>

          </div>

          <div className="pt-8 mt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500">
            <span>© 2026 Pivotal Marketing Group Lahore. All rights reserved. Built for developers.</span>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <span className="hover:underline cursor-pointer">Terms of Transparency</span>
              <span className="hover:underline cursor-pointer">Anti-Agency Mandate</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Trial modal workspace */}
      <ContactForm
        isOpen={isTrialOpen}
        onClose={() => setIsTrialOpen(false)}
      />

    </div>
  );
}

