import React from 'react';
import { Layers, X, MapPin, Sparkles, Check, ArrowRight } from 'lucide-react';

export function CompareModal({ isOpen, onClose, savedTimelines, currentTimeline }) {
  if (!isOpen) return null;

  // Render comparison between current timeline and first saved timeline (or up to 2)
  const compareList = [currentTimeline, ...savedTimelines].slice(0, 2);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-4xl w-full p-6 shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Parallel Life Comparison</h3>
              <p className="text-xs text-slate-400">Comparing your generated alternate life paths side-by-side</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Side-by-Side Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {compareList.map((tl, index) => (
            <div key={tl.id || index} className="p-5 rounded-xl bg-slate-800/60 border border-slate-700/80 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-700/50 pb-3">
                <span className="text-xs font-bold text-indigo-400 font-mono">
                  {index === 0 ? 'CURRENT TIMELINE' : `SAVED PATH #${index}`}
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-700 font-mono">
                  {tl.choices.city.cityName.split(',')[0]}
                </span>
              </div>

              <div>
                <h4 className="text-base font-bold text-white mb-1">{tl.personaTitle}</h4>
                <p className="text-xs text-slate-400">{tl.personaSubtitle}</p>
              </div>

              {/* Key Choices Summary */}
              <div className="p-3 rounded-lg bg-slate-900/80 text-xs space-y-1.5 border border-slate-800">
                <div className="flex justify-between"><span className="text-slate-500">Career:</span><span className="text-slate-200 font-medium">{tl.choices.career.title}</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Priority:</span><span className="text-slate-200 font-medium">{tl.choices.priority.title}</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Lifestyle:</span><span className="text-slate-200 font-medium">{tl.choices.lifestyle.badge}</span></div>
              </div>

              {/* Metrics Snapshot */}
              <div className="space-y-2 pt-2">
                <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Metrics Snapshot</h5>
                {Object.entries(tl.metrics).map(([key, val]) => (
                  <div key={key} className="flex items-center justify-between text-xs">
                    <span className="capitalize text-slate-300">{key}</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 bg-slate-900 rounded-full h-1.5 overflow-hidden">
                        <div className="bg-indigo-500 h-full rounded-full" style={{ width: `${val}%` }} />
                      </div>
                      <span className="font-mono font-bold text-slate-300 text-[11px] w-6 text-right">{val}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Motto */}
              <div className="p-3 rounded-lg bg-indigo-950/30 border border-indigo-500/20 text-xs text-indigo-200 italic font-serif">
                {tl.motto}
              </div>
            </div>
          ))}
        </div>

        <div className="pt-2 text-center">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition"
          >
            Close Comparison
          </button>
        </div>
      </div>
    </div>
  );
}
