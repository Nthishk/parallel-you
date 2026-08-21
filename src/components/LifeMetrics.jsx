import React from 'react';
import { Palette, Briefcase, Compass, Heart, DollarSign, Quote, MapPin, Sparkles } from 'lucide-react';

export function LifeMetrics({ timeline }) {
  const { metrics, motto, personaTitle, personaSubtitle, summary2036, choices } = timeline;

  const METRIC_CONFIG = [
    { key: 'creative', label: 'Creative Autonomy', icon: Palette, color: 'from-pink-500 to-purple-500', text: 'text-pink-400' },
    { key: 'career', label: 'Career / Impact', icon: Briefcase, color: 'from-indigo-500 to-blue-500', text: 'text-indigo-400' },
    { key: 'adventure', label: 'Adventure & Travel', icon: Compass, color: 'from-emerald-500 to-teal-500', text: 'text-emerald-400' },
    { key: 'peace', label: 'Peace & Balance', icon: Heart, color: 'from-amber-500 to-orange-500', text: 'text-amber-400' },
    { key: 'finance', label: 'Financial Resilience', icon: DollarSign, color: 'from-cyan-500 to-blue-600', text: 'text-cyan-400' },
  ];

  return (
    <div className="space-y-6">
      {/* Persona Header Card */}
      <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
          <Sparkles className="w-32 h-32 text-indigo-400" />
        </div>

        <div className="flex items-center space-x-2 text-xs font-semibold text-indigo-400 mb-2">
          <MapPin className="w-3.5 h-3.5" />
          <span>{choices.city.cityName}</span>
          <span className="text-slate-600">•</span>
          <span>{choices.career.tag}</span>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">
          {personaTitle}
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mb-4">
          {personaSubtitle}
        </p>

        {/* Motto Callout */}
        <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-700/50 flex items-start space-x-3">
          <Quote className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-slate-200 font-serif italic">
            {motto}
          </p>
        </div>
      </div>

      {/* Life Metrics Progress Bars */}
      <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80">
        <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-4 flex items-center justify-between">
          <span>Life Metrics Index</span>
          <span className="text-xs text-slate-500 font-normal">Score out of 100</span>
        </h3>

        <div className="space-y-4">
          {METRIC_CONFIG.map(({ key, label, icon: Icon, color, text }) => {
            const score = metrics[key] || 50;

            return (
              <div key={key} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-2">
                    <Icon className={`w-4 h-4 ${text}`} />
                    <span className="font-semibold text-slate-200">{label}</span>
                  </div>
                  <span className="font-mono font-bold text-slate-300">{score}</span>
                </div>
                <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden p-0.5">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${color} transition-all duration-500`}
                    style={{ width: `${score}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2036 Horizon Summary Card */}
      <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-950/40 to-slate-900 border border-indigo-500/30">
        <h4 className="text-xs font-bold text-indigo-300 uppercase tracking-wider mb-2">
          2036 Horizon Outcome
        </h4>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          {summary2036}
        </p>
      </div>
    </div>
  );
}
