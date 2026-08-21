import React from 'react';
import { Sparkles, GitBranch, RefreshCw, HelpCircle, Layers, Award } from 'lucide-react';

export function Header({ onReset, onOpenWorkflow, compareCount, onOpenCompare, currentStep }) {
  return (
    <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Logo & Title */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-0.5 shadow-lg shadow-indigo-500/20 flex items-center justify-center">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-indigo-400" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold tracking-tight text-white font-sans">Parallel You</h1>
              <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-950/80 border border-indigo-700/50 text-indigo-300 font-mono font-medium">
                v1.0 (dev)
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Interactive Alternate-Life Timeline Exploration
            </p>
          </div>
        </div>

        {/* Action Buttons & University Project Meta */}
        <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-end">
          <button
            onClick={onOpenWorkflow}
            className="flex items-center space-x-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition"
            title="View Cloud Deployment & Git Branching Info"
          >
            <GitBranch className="w-3.5 h-3.5 text-emerald-400" />
            <span>Branching & Cloud Guide</span>
          </button>

          {compareCount > 0 && (
            <button
              onClick={onOpenCompare}
              className="flex items-center space-x-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-indigo-600/30 hover:bg-indigo-600/40 text-indigo-300 border border-indigo-500/40 transition"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Compare Paths ({compareCount})</span>
            </button>
          )}

          {currentStep > 0 && (
            <button
              onClick={onReset}
              className="flex items-center space-x-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white border border-slate-700 transition"
              title="Start a new alternate life"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Start Over</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
