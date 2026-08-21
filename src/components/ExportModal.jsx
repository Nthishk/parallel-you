import React, { useState } from 'react';
import { Download, Copy, Check, X, Share2, FileText } from 'lucide-react';

export function ExportModal({ isOpen, onClose, timeline }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !timeline) return null;

  const generateMarkdownSummary = () => {
    const { personaTitle, personaSubtitle, motto, choices, milestones, metrics, summary2036 } = timeline;

    let text = `# Parallel You — Alternate Life Snapshot\n\n`;
    text += `**Persona**: ${personaTitle}\n`;
    text += `**Tagline**: ${personaSubtitle}\n`;
    text += `**Motto**: ${motto}\n\n`;
    text += `## Core Choices\n`;
    text += `- **Career**: ${choices.career.title}\n`;
    text += `- **Location**: ${choices.city.cityName}\n`;
    text += `- **Priority**: ${choices.priority.title}\n`;
    text += `- **Turning Point**: ${choices.turningPoint.title}\n`;
    text += `- **Lifestyle**: ${choices.lifestyle.badge}\n\n`;
    text += `## Life Metrics Index\n`;
    Object.entries(metrics).forEach(([k, v]) => {
      text += `- **${k}**: ${v}/100\n`;
    });
    text += `\n## 10-Year Alternate Timeline (2026–2036)\n`;
    milestones.forEach(m => {
      text += `### ${m.year} — ${m.title}\n`;
      text += `${m.story}\n\n`;
    });
    text += `## 2036 Horizon\n${summary2036}\n`;
    return text;
  };

  const handleCopy = () => {
    const summary = generateMarkdownSummary();
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadJSON = () => {
    const jsonStr = JSON.stringify(timeline, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `parallel-you-${timeline.choices.city.id}-${timeline.choices.career.id}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full p-6 shadow-2xl relative space-y-5">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
              <Share2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Export Parallel Life Summary</h3>
              <p className="text-xs text-slate-400">Save or share your alternate timeline snapshot</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Text Preview Area */}
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 max-h-60 overflow-y-auto font-mono text-xs text-slate-300 whitespace-pre-wrap">
          {generateMarkdownSummary()}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end space-x-3 pt-2">
          <button
            onClick={handleCopy}
            className="flex items-center space-x-2 px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Copied Markdown!' : 'Copy Summary'}</span>
          </button>

          <button
            onClick={handleDownloadJSON}
            className="flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md transition"
          >
            <Download className="w-4 h-4" />
            <span>Download JSON Snapshot</span>
          </button>
        </div>
      </div>
    </div>
  );
}
