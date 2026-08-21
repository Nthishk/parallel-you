import React, { useState } from 'react';
import { GitBranch, Server, Globe, ArrowRight, ShieldCheck, CheckCircle2, Terminal, ExternalLink, X } from 'lucide-react';

export function CloudWorkflowGuide({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('workflow');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-3xl w-full p-6 shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <GitBranch className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Cloud Deployment & Branching Workflow</h3>
              <p className="text-xs text-slate-400">University Assignment • 3-Environment Branch Structure Guide</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-2 border-b border-slate-800 pb-2">
          <button
            onClick={() => setActiveTab('workflow')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition ${
              activeTab === 'workflow'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            3-Environment Workflow
          </button>
          <button
            onClick={() => setActiveTab('git')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition ${
              activeTab === 'git'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            Git Commands & Default Branch
          </button>
          <button
            onClick={() => setActiveTab('cloud')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition ${
              activeTab === 'cloud'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            Cloud Deployment (Vercel / Netlify)
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'workflow' && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-3">
                Branch Hierarchy & Environment Flow
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-slate-900 border border-indigo-500/40">
                  <div className="flex items-center space-x-2 font-mono font-bold text-indigo-300 mb-1">
                    <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                    <span>dev</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mb-2">Development (DEFAULT Branch)</p>
                  <span className="inline-block px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 text-[10px] border border-indigo-800">
                    Active Development
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-slate-900 border border-amber-500/40">
                  <div className="flex items-center space-x-2 font-mono font-bold text-amber-300 mb-1">
                    <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                    <span>test</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mb-2">Testing & Staging</p>
                  <span className="inline-block px-2 py-0.5 rounded bg-amber-950 text-amber-300 text-[10px] border border-amber-800">
                    Staging Validation
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-slate-900 border border-emerald-500/40">
                  <div className="flex items-center space-x-2 font-mono font-bold text-emerald-300 mb-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span>main</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mb-2">Production Release</p>
                  <span className="inline-block px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 text-[10px] border border-emerald-800">
                    Cloud Deployment Target
                  </span>
                </div>
              </div>
            </div>

            {/* Workflow Pipeline */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <h5 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Promotion Pipeline</h5>
              <div className="flex items-center justify-between text-xs text-slate-300 font-mono py-2 px-3 bg-slate-900 rounded-lg overflow-x-auto">
                <span className="text-indigo-300">dev (default)</span>
                <ArrowRight className="w-4 h-4 text-slate-500 shrink-0 mx-2" />
                <span className="text-slate-400 italic">Pull Request</span>
                <ArrowRight className="w-4 h-4 text-slate-500 shrink-0 mx-2" />
                <span className="text-amber-300">test</span>
                <ArrowRight className="w-4 h-4 text-slate-500 shrink-0 mx-2" />
                <span className="text-slate-400 italic">Pull Request</span>
                <ArrowRight className="w-4 h-4 text-slate-500 shrink-0 mx-2" />
                <span className="text-emerald-300 font-bold">main (Production Cloud)</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'git' && (
          <div className="space-y-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3 font-mono">
              <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider font-sans mb-2">
                1. Local Git Branches Setup
              </h4>
              <pre className="p-3 bg-slate-900 rounded text-slate-300 overflow-x-auto">
{`# Create and switch to dev branch (DEFAULT)
git checkout -b dev

# Create test branch
git checkout -b test

# Create main branch
git checkout -b main

# Return to dev for initial development
git checkout dev`}
              </pre>

              <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider font-sans pt-2 mb-2">
                2. Promotion Workflow (PRs)
              </h4>
              <pre className="p-3 bg-slate-900 rounded text-slate-300 overflow-x-auto">
{`# 1. Merge dev -> test
git checkout test
git merge dev

# 2. Merge test -> main
git checkout main
git merge test`}
              </pre>
            </div>

            <div className="p-3 rounded-lg bg-amber-950/30 border border-amber-500/30 text-amber-200">
              <span className="font-bold">Important Requirement:</span> Set <code className="bg-amber-900/60 px-1 rounded">dev</code> as the Default Branch in GitHub repository settings under <em>Settings → Branches → Switch default branch</em>.
            </div>
          </div>
        )}

        {activeTab === 'cloud' && (
          <div className="space-y-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">
                Deploying to Vercel / Netlify / Render
              </h4>
              <ol className="list-decimal pl-4 space-y-2 text-slate-300">
                <li>Connect your GitHub repository to <strong>Vercel</strong> or <strong>Netlify</strong>.</li>
                <li>In project settings, set the **Production Branch** explicitly to <code className="bg-slate-800 px-1.5 py-0.5 rounded text-emerald-300 font-mono">main</code> (even though <code className="bg-slate-800 px-1.5 py-0.5 rounded text-indigo-300 font-mono">dev</code> is the default GitHub branch).</li>
                <li>Build Command: <code className="bg-slate-800 px-1.5 py-0.5 rounded text-slate-200 font-mono">npm run build</code></li>
                <li>Output Directory: <code className="bg-slate-800 px-1.5 py-0.5 rounded text-slate-200 font-mono">dist</code></li>
                <li>Verify your live production link (e.g. <code className="text-indigo-400">https://parallel-you.vercel.app</code>).</li>
              </ol>
            </div>
          </div>
        )}

        <div className="pt-2 text-center">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
}
