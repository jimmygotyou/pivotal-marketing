/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle, ShieldAlert, Award, AlertCircle } from 'lucide-react';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
  // Input fields state
  const [developerName, setDeveloperName] = React.useState('');
  const [contactPerson, setContactPerson] = React.useState('');
  const [whatsappPhone, setWhatsappPhone] = React.useState('');
  const [projectBrief, setProjectBrief] = React.useState('');
  const [selectedSpec, setSelectedSpec] = React.useState<string[]>([]);
  const [formSubmitted, setFormSubmitted] = React.useState(false);
  const [formError, setFormError] = React.useState('');

  const availableSpec = [
    { id: 'video', label: 'Cinematic Videographer' },
    { id: 'design', label: 'Luxury Brand Designer' },
    { id: 'ads', label: 'Ads performance Specialist' },
    { id: 'strategy', label: 'Pre-launch Strategist' },
    { id: 'influencer', label: 'Influencer Coordinator' }
  ];

  const handleToggleSpec = (id: string) => {
    setSelectedSpec(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    // Quick validation
    if (!developerName || !contactPerson || !whatsappPhone) {
      setFormError('Please fill out the developer name, contact person, and WhatsApp phone number.');
      return;
    }

    // Success response
    setFormSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div id="contact-dialog" className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        onClick={onClose} 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
      />

      {/* Main modal surface */}
      <div className="relative bg-[#020617] max-w-2xl w-full border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl overflow-y-auto max-h-[90vh] z-10">
        
        {/* Close button inside modal */}
        <button
          id="btn-close-modal"
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors text-lg font-bold cursor-pointer"
        >
          ✖
        </button>

        {!formSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Form heading */}
            <div className="border-b border-white/5 pb-4">
              <span className="text-xs font-mono font-bold text-[#00F2FE] tracking-widest uppercase block mb-1">
                SECURE 14-DAY TRIAL PILOT
              </span>
              <h3 className="text-xl md:text-2xl font-sans font-bold text-white tracking-tight">
                Initiate Embedded Team Trial
              </h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Zero lock-in contracts. Full transparency. Experience our top design, ads, and drone cinematographers on your live Lahore plot before official onboarding.
              </p>
            </div>

            {/* Error Banner */}
            {formError && (
              <div className="p-3.5 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-2 text-xs text-red-400">
                <AlertCircle className="w-4.5 h-4.5 flex-shrink-0" />
                <span>{formError}</span>
              </div>
            )}

            {/* Fields grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono text-slate-400 block uppercase">
                  Developer / Corporate Name *
                </label>
                <input
                  id="inp-developer-name"
                  type="text"
                  required
                  value={developerName}
                  onChange={(e) => setDeveloperName(e.target.value)}
                  placeholder="e.g. Al-Fatah Builders, Royal Group"
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-900 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:ring-1 focus:ring-[#00f2fe]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-mono text-slate-400 block uppercase">
                  Contact Person & Designation *
                </label>
                <input
                  id="inp-contact-person"
                  type="text"
                  required
                  value={contactPerson}
                  onChange={(e) => setContactPerson(e.target.value)}
                  placeholder="e.g. Taimour Baig (Managing Director)"
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-900 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:ring-1 focus:ring-[#00f2fe]"
                />
              </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono text-slate-400 block uppercase">
                  WhatsApp Contact Number *
                </label>
                <input
                  id="inp-whatsapp"
                  type="tel"
                  required
                  value={whatsappPhone}
                  onChange={(e) => setWhatsappPhone(e.target.value)}
                  placeholder="e.g. +92 311 4518485"
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-900 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:ring-1 focus:ring-[#00f2fe]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-mono text-slate-400 block uppercase">
                  Lahore Plot or Development Office Location
                </label>
                <input
                  id="inp-location"
                  type="text"
                  placeholder="e.g. DHA Phase 6 Main Boulevard, Lahore"
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-900 border border-white/10 text-white placeholder-slate-500 text-xs"
                />
              </div>

            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-mono text-slate-400 block uppercase">
                Project Vision (Scope and Land Size)
              </label>
              <textarea
                id="inp-project-brief"
                rows={2}
                value={projectBrief}
                onChange={(e) => setProjectBrief(e.target.value)}
                placeholder="e.g. A 4-Kanal high-rise luxury apartment tower complex in Gulberg III..."
                className="w-full px-4 py-2.5 rounded-lg bg-slate-900 border border-white/10 text-white placeholder-slate-500 text-xs"
              />
            </div>

            {/* Checkboxes for desired team members */}
            <div className="space-y-2">
              <label className="text-[10px] font-mono text-slate-400 block uppercase">
                Select experts to embed in trial:
              </label>
              <div className="flex flex-wrap gap-2">
                {availableSpec.map(s => {
                  const isChecked = selectedSpec.includes(s.id);
                  return (
                    <button
                      key={s.id}
                      type="button"
                      id={`chk-[spec]-${s.id}`}
                      onClick={() => handleToggleSpec(s.id)}
                      className={`px-3 py-1.5 rounded-full border text-xs font-sans transition-colors cursor-pointer ${
                        isChecked
                          ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400'
                          : 'bg-transparent border-white/5 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {s.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Action Submit */}
            <div className="pt-4 border-t border-white/5 flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex items-center gap-2 text-slate-400 text-xs">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>No credit card required. Pure pilot trust.</span>
              </div>
              
              <button
                id="btn-submit-trial-form"
                type="submit"
                className="w-full md:w-auto px-6 py-3 rounded-lg bg-gradient-to-r from-[#00F2FE] to-teal-500 text-slate-950 font-bold tracking-wide hover:shadow-[0_0_20px_rgba(0,242,254,0.3)] transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                Launch Trial Reservation
                <Send className="w-4 h-4" />
              </button>
            </div>

          </form>
        ) : (
          /* Submission success board screen */
          <div className="text-center py-10 space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle className="w-8 h-8" />
            </div>

             <div className="space-y-2">
              <h3 className="text-xl font-bold text-white font-sans">
                Trial Active & Registered!
              </h3>
              <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                Our Lead Embedded Strategist, <strong className="text-[#00F2FE]">Taimour Baig</strong>, has received your brief. He will reach out to you directly on WhatsApp at <strong className="text-white">{whatsappPhone}</strong> within 3 business hours to coordinate camera logistics and launch your 14-day zero-risk trial.
              </p>
            </div>

            <div className="border border-[#10B981]/15 p-4 bg-emerald-500/5 rounded-xl max-w-md mx-auto text-left text-xs leading-relaxed text-slate-400">
              📢 <strong>Preparation Tip:</strong> Have your pre-launch residential plans, blueprints, or drone boundary videos ready to fast-track your visual concept models!
            </div>

            <button
              id="success-close"
              onClick={() => {
                setFormSubmitted(false);
                setDeveloperName('');
                setContactPerson('');
                setWhatsappPhone('');
                setProjectBrief('');
                setSelectedSpec([]);
                onClose();
              }}
              className="px-5 py-2 rounded-lg bg-white text-slate-950 font-bold text-xs hover:bg-slate-200 transition-colors cursor-pointer"
            >
              Return to Workspace
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
