import React from 'react';
import { GitBranch, Shield, Zap, BookOpen, X, Check } from 'lucide-react';

export function TimelineBrancher({ isOpen, onClose, currentBranch, onSelectBranch }) {
  if (!isOpen) return null;

  const BRANCH_OPTIONS = [
    {
      id: 'double_down',
      title: 'Double Down & Scale Studio',
      subtitle: 'Formalize your operation, take on high-stakes leadership, and hire a specialized team.',
      icon: Zap,
      badge: 'High Impact / High Stress',
      impact: '+20% Career Impact, +10% Resilience, -10% Peace'
    },
    {
      id: 'go_independent',
      title: 'Go 100% Independent & Solopreneur',
      subtitle: 'Decline venture/institutional scaling to keep complete location independence and creative control.',
      icon: GitBranch,
      badge: 'Max Freedom / High Mobility',
      impact: '+20% Adventure, +15% Creative Autonomy'
    },
    {
      id: 'sabbatical_research',
      title: 'Sabbatical & Social Research Focus',
      subtitle: 'Step back from high commercial output to mentor, write, and engage in social community work.',
      icon: BookOpen,
      badge: 'High Peace / High Fulfillment',
      impact: '+20% Peace & Balance, +10% Creative Autonomy'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-xl w-full p-6 shadow-2xl relative space-y-5">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
              <GitBranch className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">2030 Mid-Timeline Fork</h3>
              <p className="text-xs text-slate-400">Choose a second-half trajectory for your parallel life</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Options List */}
        <div className="space-y-3">
          {BRANCH_OPTIONS.map((opt) => {
            const Icon = opt.icon;
            const isSelected = currentBranch === opt.id;

            return (
              <button
                key={opt.id}
                onClick={() => {
                  onSelectBranch(opt.id);
                  onClose();
                }}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-200 ${
                  isSelected
                    ? 'bg-amber-950/40 border-amber-500 shadow-md shadow-amber-500/10 ring-1 ring-amber-500/40'
                    : 'bg-slate-800/60 border-slate-700/60 hover:bg-slate-800 hover:border-slate-600'
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-1">
                  <div className="flex items-center space-x-2.5">
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-amber-400' : 'text-slate-400'}`} />
                    <h4 className="text-sm font-semibold text-white">{opt.title}</h4>
                  </div>
                  {isSelected && <Check className="w-4 h-4 text-amber-400 shrink-0" />}
                </div>

                <p className="text-xs text-slate-300 mb-2 pl-6">
                  {opt.subtitle}
                </p>

                <div className="pl-6 flex items-center justify-between flex-wrap gap-2 pt-1 border-t border-slate-700/40">
                  <span className="text-[11px] font-mono text-amber-300">{opt.badge}</span>
                  <span className="text-[11px] text-slate-400 italic">{opt.impact}</span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="pt-2 text-center">
          <p className="text-[11px] text-slate-500">
            Selecting a branch will immediately recalculate post-2030 story milestones and life metrics.
          </p>
        </div>
      </div>
    </div>
  );
}
