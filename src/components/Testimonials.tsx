/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Quote, Star, Award, Sparkles } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  project: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote: "hiring permanent videographers and an art director in Gulberg was draining our capital before we even broke ground. Pivotal Embedded as our inside team. Their cinema walkthrough trailer pre-sold 12 luxury penthouses in 3 weeks, funded our entire marketing stage.",
    author: "Mian Haroon",
    role: "Managing Director",
    project: "Paragon Heights & Residencies"
  },
  {
    quote: "The '0 Lock-In' contract model was what got us to try Pivotal. The 14-day free pilot delivered real high-intent overseas leads from London and Dubai, complete with verified booking interest. Outstanding, transparent execution.",
    author: "Sardar Kamran",
    role: "CEO Real Estate Alliance Partners",
    project: "Pine Meadows housing scheme"
  },
  {
    quote: "Pivotal goes far beyond standard content creation. They restructured our pre-launch allotment vouchers. That self-funding strategy brought in priority deposits that paid for our entire launch billboard & PR campaigns.",
    author: "Zainab Malik",
    role: "Brand Portfolio Lead",
    project: "The Square Commercial Center, DHA Lahore"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <section id="testimonials" className="py-24 bg-[#001B3D] relative">
      <div className="absolute top-1/3 right-1/2 w-[600px] h-[300px] bg-[#00F2FE]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header visual block */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <span className="text-xs font-mono font-bold text-[#00F2FE] tracking-widest uppercase block mb-3">
            VERIFIED LAHORE VENTURES
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight mb-4">
            Endorsed by Premier Real Estate Builders
          </h2>
          <p className="text-slate-300">
            Read how developers across Lahore utilize our embedded model to bypass heavy agency overheads, maintain creative control, and hit high booking records.
          </p>
        </div>

        {/* Modular Testimonial Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Visual Carousel Highlight (Col: 7/12) */}
          <div className="lg:col-span-7 bg-[#00132C]/75 border border-white/10 rounded-3xl p-8 relative shadow-2xl overflow-hidden min-h-[340px] flex flex-col justify-between">
            {/* Quote watermark background */}
            <div className="absolute -top-6 -left-6 opacity-[0.03] text-white pointer-events-none">
              <Quote className="w-48 h-48" />
            </div>

            <div className="space-y-6 z-10">
              
              {/* Star rating indicators */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-emerald-400 fill-emerald-400" />
                ))}
                <span className="text-[10px] font-mono text-slate-400 ml-2">5.0 SCORE PLATINUM TRUST</span>
              </div>

              {/* Dynamic Quote Body */}
              <p className="text-md sm:text-lg text-slate-200 font-sans italic leading-relaxed">
                "{TESTIMONIALS[activeIndex].quote}"
              </p>

            </div>

            <div className="flex items-center justify-between border-t border-white/5 pt-6 mt-8 z-10">
              <div>
                <h4 className="text-sm font-bold text-white font-sans">
                  {TESTIMONIALS[activeIndex].author}
                </h4>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span>{TESTIMONIALS[activeIndex].role}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-500" />
                  <span className="text-[#00F2FE]">{TESTIMONIALS[activeIndex].project}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    id={`testimonial-dot-${idx}`}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                      activeIndex === idx ? 'bg-[#00F2FE] w-6' : 'bg-white/25'
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>

          {/* Core Trust Achievements Sidebar (Col: 5/12) */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-5 bg-slate-950/40 border border-white/5 rounded-2xl flex items-start gap-4">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white font-sans mb-1">Elite Standard Quality</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  We recruit videographers boasting RED/Arri cinematic certifications, ensuring breathtaking property trails.
                </p>
              </div>
            </div>

            <div className="p-5 bg-slate-950/40 border border-white/5 rounded-2xl flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[#00F2FE]/10 text-[#00F2FE]">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white font-sans mb-1">Full Accountability</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Full transparent communication. You get weekly performance logs showing accurate overseas diaspora reach.
                </p>
              </div>
            </div>

            <div className="p-5 bg-slate-950/40 border border-white/5 rounded-2xl flex items-start gap-4">
              <div className="p-3 rounded-xl bg-orange-500/10 text-orange-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white font-sans mb-1">0 Permanent Hiring Fees</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Avoid paying Lahore’s senior employee agency commission fees, heavy HR insurance, and desktop setups.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
