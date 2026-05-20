/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Users, HelpCircle, Percent, DollarSign, BadgePercent, CheckCircle } from 'lucide-react';
import { MARKETERS_DATA } from '../data';
import { TeamMember } from '../types';

interface TeamConfiguratorProps {
  onOpenTrial: () => void;
}

export default function TeamConfigurator({ onOpenTrial }: TeamConfiguratorProps) {
  // Store selected team member IDs
  const [selectedIds, setSelectedIds] = React.useState<string[]>(
    MARKETERS_DATA.map(m => m.id) // Default all checked to show massive maximum savings first!
  );

  const toggleSpecialist = (id: string) => {
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const selectedMembers = MARKETERS_DATA.filter(m => selectedIds.includes(m.id));

  // Permanent hiring costs
  const baseSalarySum = selectedMembers.reduce((sum, m) => sum + m.monthlySalaryEstimate, 0);
  const employeeOverhead = Math.round(baseSalarySum * 0.25); // 25% overhead (office space, hardware, medical, HR)
  const totalPermanentCost = baseSalarySum + employeeOverhead;

  // Pivotal's embedded model cost (typically on-demand brings this down by 65% because they only pay for action-oriented days!)
  const pivotalEstimatedCost = Math.round(baseSalarySum * 0.35); // 65% savings on average
  const savingsAmount = totalPermanentCost - pivotalEstimatedCost;
  const savingsPercent = totalPermanentCost > 0 ? Math.round((savingsAmount / totalPermanentCost) * 100) : 0;

  // Format PKR
  const formatPKR = (num: number) => {
    return new Intl.NumberFormat('en-PK', {
      style: 'currency',
      currency: 'PKR',
      maximumFractionDigits: 0
    }).format(num);
  };

  return (
    <section id="team-configurator" className="py-24 bg-[#00132C] border-t border-b border-white/5 relative">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-[#00F2FE] tracking-widest uppercase block mb-3">
            COSTS CO-EFFICIENT ESTIMATOR
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight mb-4">
            Configure Your Embedded Marketing Department
          </h2>
          <p className="text-slate-300">
            Select the elite experts required for your current real estate launch. 
            Compare the massive overheads of permanent Lahore hiring with Pivotal's fluid, embedded partnership.
          </p>
        </div>

        {/* Dynamic Calculator Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* List of Specialists (Col: 7/12) */}
          <div className="lg:col-span-7 space-y-3">
            <div className="bg-slate-950/40 p-3 rounded-lg border border-white/5 flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-slate-400">SELECT SPECIALISTS INVOLVED:</span>
              <button
                id="select-all-btn"
                onClick={() => setSelectedIds(MARKETERS_DATA.map(m => m.id))}
                className="text-xs font-mono text-[#00F2FE] hover:underline cursor-pointer"
              >
                Reset / Select All
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {MARKETERS_DATA.map((member) => {
                const isSelected = selectedIds.includes(member.id);
                return (
                  <div
                    key={member.id}
                    id={`specialist-${member.id}`}
                    onClick={() => toggleSpecialist(member.id)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer select-none group relative overflow-hidden ${
                      isSelected
                        ? 'bg-slate-900/60 border-teal-500/40 shadow-[0_5px_15px_rgba(16,185,129,0.05)]'
                        : 'bg-slate-950/20 border-white/5 opacity-60 hover:opacity-90'
                    }`}
                  >
                    {/* Tick overlay */}
                    {isSelected && (
                      <div className="absolute top-2 right-2">
                        <CheckCircle className="w-4 h-4 text-emerald-400" />
                      </div>
                    )}

                    <div className="flex flex-col h-full justify-between">
                      <div>
                        <h4 className="text-sm font-semibold text-white font-sans flex items-center gap-1.5">
                          {member.role}
                        </h4>
                        <span className="text-[10px] font-mono text-[#00F2FE] uppercase tracking-wider block mt-0.5">
                          {member.title}
                        </span>
                        <p className="text-xs text-slate-400 mt-2 line-clamp-2">
                          {member.description}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                        <span className="text-[10px] font-mono text-slate-500">INDIVIDUAL EST:</span>
                        <span className="text-xs font-mono text-white font-medium">
                          {formatPKR(member.monthlySalaryEstimate)}/mo
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Savings Ledger Dashboard (Col: 5/12) */}
          <div className="lg:col-span-5">
            <div className="bg-[#020817] rounded-2xl border border-white/10 p-6 shadow-2xl relative overflow-hidden">
              
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#00F2FE]/5 rounded-full blur-xl" />

              {/* Header inside Card */}
              <div className="flex items-center gap-3 border-b border-white/5 pb-4 mb-6">
                <div className="p-2 rounded-lg bg-[#00F2FE]/10 text-[#00F2FE]">
                  <Percent className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-md font-bold text-white font-sans">Monthly Savings Quotient</h3>
                  <span className="text-[10px] text-slate-400 font-mono tracking-wider block">LAHORE MARKET DATA MATCHED</span>
                </div>
              </div>

              {/* Numbers Comparison */}
              <div className="space-y-4">
                
                {/* Permanent hiring */}
                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400 font-sans">Permanent In-House hiring</span>
                    <span className="text-[10px] text-slate-500 font-mono">Includes salaries + benefits</span>
                  </div>
                  <span className="text-md font-mono text-red-400 font-semibold">
                    {formatPKR(totalPermanentCost)}
                  </span>
                </div>

                {/* Permanent Details Breakdown if items selected */}
                {selectedMembers.length > 0 && (
                  <div className="p-3 bg-red-400/5 rounded-lg text-[11px] text-slate-400 leading-relaxed border border-red-400/10">
                    💡 <strong>Breakdown:</strong> Base salaries total {formatPKR(baseSalarySum)}/mo + 25% overhead ({formatPKR(employeeOverhead)}) covering workspace, hiring fees, bonuses, and tech licenses per designer & videographer.
                  </div>
                )}

                {/* Pivotal embedded pricing */}
                <div className="flex items-center justify-between py-2 border-b border-[#10B981]/20">
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-emerald-400 font-sans">Pivotal Embedded Cost</span>
                    <span className="text-[10px] text-emerald-500/70 font-mono">Paid on-budget / active trials</span>
                  </div>
                  <span className="text-md font-mono text-emerald-400 font-bold">
                    {formatPKR(pivotalEstimatedCost)}
                  </span>
                </div>

                {/* Savings Gauge */}
                <div className="bg-slate-900/60 p-4 rounded-xl border border-white/5 text-center my-6">
                  <span className="text-xs text-slate-400 block mb-1 uppercase font-mono tracking-widest">NET SAVINGS RATIO:</span>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-extrabold text-white font-mono">{savingsPercent}%</span>
                    <span className="text-xs font-mono text-[#00F2FE]">COST SAVED</span>
                  </div>
                  <p className="text-xs text-[#10B981] font-mono mt-1">
                     You save approx. {formatPKR(savingsAmount)} per month
                  </p>
                </div>

                {/* Benefits List */}
                <ul className="space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-[#10B981] mt-0.5">✔</span>
                    <span>No lock-in agency contracts. Discontinue anytime.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10B981] mt-0.5">✔</span>
                    <span>Full transparency inside your Lahore boardrooms.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5">✔</span>
                    <span className="font-semibold text-white">Free Trial: 14-day zero risk pilot run.</span>
                  </li>
                </ul>

                {/* Next CTA to secure the configured team */}
                <button
                  id="calc-claim-trial"
                  onClick={onOpenTrial}
                  className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold tracking-wide hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  Claim 14-Day Free Pilot
                </button>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
