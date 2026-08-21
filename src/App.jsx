import React, { useState } from 'react';
import { Header } from './components/Header';
import { ChoiceWizard } from './components/ChoiceWizard';
import { TimelineView } from './components/TimelineView';
import { LifeMetrics } from './components/LifeMetrics';
import { TimelineBrancher } from './components/TimelineBrancher';
import { CompareModal } from './components/CompareModal';
import { ExportModal } from './components/ExportModal';
import { CloudWorkflowGuide } from './components/CloudWorkflowGuide';
import { generateParallelLife } from './data/generatorEngine';
import { 
  Sparkles, Layers, Share2, Edit3, GitBranch, ArrowRight 
} from 'lucide-react';

export default function App() {
  const [currentChoices, setCurrentChoices] = useState(null);
  const [branchChoice, setBranchChoice] = useState(null);
  const [timeline, setTimeline] = useState(null);
  const [savedTimelines, setSavedTimelines] = useState([]);

  // Modal Visibility States
  const [isBrancherOpen, setIsBrancherOpen] = useState(false);
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [isWorkflowOpen, setIsWorkflowOpen] = useState(false);

  // When user completes choice wizard
  const handleChoicesComplete = (choices) => {
    setCurrentChoices(choices);
    setBranchChoice(null);
    const newTimeline = generateParallelLife(choices, null);
    setTimeline(newTimeline);
  };

  // When user updates 2030 mid-timeline branch choice
  const handleSelectBranch = (branchId) => {
    setBranchChoice(branchId);
    if (currentChoices) {
      const updatedTimeline = generateParallelLife(currentChoices, branchId);
      setTimeline(updatedTimeline);
    }
  };

  // Save current timeline to comparison list
  const handleSaveToCompare = () => {
    if (timeline && !savedTimelines.some(t => t.id === timeline.id)) {
      setSavedTimelines(prev => [...prev, timeline]);
    }
    setIsCompareOpen(true);
  };

  // Reset to wizard mode
  const handleReset = () => {
    setCurrentChoices(null);
    setBranchChoice(null);
    setTimeline(null);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Header Bar */}
      <Header
        currentStep={currentChoices ? 1 : 0}
        onReset={handleReset}
        onOpenWorkflow={() => setIsWorkflowOpen(true)}
        compareCount={savedTimelines.length}
        onOpenCompare={() => setIsCompareOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-8">
        {!currentChoices ? (
          /* Landing & Choice Wizard */
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="text-center max-w-2xl mx-auto space-y-3 pt-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-700/50 text-indigo-300 text-xs font-mono font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Interactive Alternate Life Exploration</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-serif">
                What if you made a different choice?
              </h1>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                Step into a parallel life. Choose your alternate career, city, core priority, and lifestyle to visualize a 10-year storyline unfolding over time.
              </p>
            </div>

            <ChoiceWizard onComplete={handleChoicesComplete} />
          </div>
        ) : (
          /* Generated Parallel Timeline & Metrics Explorer */
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Top Toolbar / Action Bar */}
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-3">
                <button
                  onClick={handleReset}
                  className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold border border-slate-700 transition"
                >
                  <Edit3 className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Modify Choices</span>
                </button>
                <span className="text-xs text-slate-500 hidden sm:inline">•</span>
                <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                  {timeline.choices.city.cityName} | {timeline.choices.career.tag}
                </span>
              </div>

              <div className="flex items-center gap-2.5 flex-wrap">
                <button
                  onClick={() => setIsBrancherOpen(true)}
                  className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-xs font-semibold border border-amber-500/40 transition"
                >
                  <GitBranch className="w-3.5 h-3.5" />
                  <span>{branchChoice ? '2030 Branch Selected' : 'Explore 2030 Fork'}</span>
                </button>

                <button
                  onClick={handleSaveToCompare}
                  className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-indigo-600/30 hover:bg-indigo-600/40 text-indigo-300 text-xs font-semibold border border-indigo-500/40 transition"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Compare Path</span>
                </button>

                <button
                  onClick={() => setIsExportOpen(true)}
                  className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md transition"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Export Summary</span>
                </button>
              </div>
            </div>

            {/* Main Content Grid: Timeline on Left, Metrics & Persona on Right */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2">
                <TimelineView
                  timelineData={timeline}
                  onOpenBrancher={() => setIsBrancherOpen(true)}
                  branchChoice={branchChoice}
                />
              </div>

              <div className="lg:col-span-1 sticky top-20">
                <LifeMetrics timeline={timeline} />
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-6 mt-12 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>Parallel You — Alternate Life Exploration Frontend Application</p>
          <div className="flex items-center space-x-4">
            <button onClick={() => setIsWorkflowOpen(true)} className="hover:text-slate-300 transition">
              Git Workflow & Cloud Deployment Info
            </button>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <TimelineBrancher
        isOpen={isBrancherOpen}
        onClose={() => setIsBrancherOpen(false)}
        currentBranch={branchChoice}
        onSelectBranch={handleSelectBranch}
      />

      <CompareModal
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
        savedTimelines={savedTimelines}
        currentTimeline={timeline}
      />

      <ExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
        timeline={timeline}
      />

      <CloudWorkflowGuide
        isOpen={isWorkflowOpen}
        onClose={() => setIsWorkflowOpen(false)}
      />
    </div>
  );
}
