import React, { useState } from 'react';
import { 
  Compass, Sparkles, GitCommit, Globe, Award, Sun, Filter, ChevronRight
} from 'lucide-react';

const ICON_MAP = {
  Compass, Sparkles, GitCommit, Globe, Award, Sun
};

export function TimelineView({ timelineData, onOpenBrancher, branchChoice }) {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Turning Point', 'Career', 'Milestone', 'Personal & Travel', 'Mastery'];

  const filteredMilestones = timelineData.milestones.filter(m => {
    if (filter === 'All') return true;
    return m.category === filter;
  });

  return (
    <div className="space-y-6">
      {/* Category Filter Chips */}
      <div className="flex items-center justify-between flex-wrap gap-2 pb-2 border-b border-slate-800">
        <div className="flex items-center space-x-2">
          <Filter className="w-4 h-4 text-slate-400" />
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Filter Milestones:</span>
        </div>
        <div className="flex items-center gap-1.5 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition ${
                filter === cat
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Vertical Timeline Container */}
      <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-800 space-y-8 my-6">
        {filteredMilestones.map((item, index) => {
          const IconComponent = ICON_MAP[item.icon] || Sparkles;
          const isForkPoint = item.isForkPoint;

          return (
            <div key={item.year} className="relative group">
              {/* Timeline Connector Node */}
              <div className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center border-2 transition duration-300 ${
                isForkPoint 
                  ? 'bg-amber-500 border-slate-900 text-slate-950 ring-4 ring-amber-500/20' 
                  : 'bg-slate-900 border-indigo-500 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white'
              }`}>
                <IconComponent className="w-3.5 h-3.5" />
              </div>

              {/* Milestone Card */}
              <div className={`p-5 rounded-2xl border transition-all duration-300 ${
                isForkPoint
                  ? 'bg-amber-950/20 border-amber-500/40 ring-1 ring-amber-500/20'
                  : 'bg-slate-800/60 border-slate-700/60 hover:bg-slate-800 hover:border-slate-600'
              }`}>
                {/* Year & Category Header */}
                <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-indigo-400 font-mono">{item.year}</span>
                    <span className="text-xs text-slate-500 font-mono">• Age {item.age}</span>
                  </div>
                  <span className={`px-2.5 py-0.5 rounded text-[11px] font-semibold tracking-wide ${
                    isForkPoint ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' : 'bg-slate-900 text-slate-300 border border-slate-700/80'
                  }`}>
                    {item.category}
                  </span>
                </div>

                {/* Milestone Title */}
                <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>

                {/* Story Narrative */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {item.story}
                </p>

                {/* Highlight Callout */}
                <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800/80 flex items-start space-x-2 mb-3">
                  <span className="text-amber-400 text-xs">✨</span>
                  <p className="text-xs text-slate-300 italic">
                    {item.highlight}
                  </p>
                </div>

                {/* Metrics Shift Badge & Interactive Brancher Button */}
                <div className="flex items-center justify-between flex-wrap gap-2 pt-2 border-t border-slate-700/40">
                  <div className="flex items-center space-x-2 text-[11px] text-slate-400">
                    <span className="font-semibold text-slate-300">Shift:</span>
                    {Object.entries(item.metricsShift).map(([key, val]) => (
                      <span key={key} className="px-2 py-0.5 bg-indigo-950 text-indigo-300 rounded border border-indigo-900/60 font-mono">
                        {key}: {val}
                      </span>
                    ))}
                  </div>

                  {isForkPoint && (
                    <button
                      onClick={onOpenBrancher}
                      className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition shadow-sm"
                    >
                      <span>{branchChoice ? 'Change 2030 Fork' : 'Explore 2030 Fork'}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
