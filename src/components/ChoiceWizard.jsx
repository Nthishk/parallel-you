import React, { useState } from 'react';
import { 
  CAREER_OPTIONS, 
  CITY_OPTIONS, 
  PRIORITY_OPTIONS, 
  TURNING_POINT_OPTIONS, 
  LIFESTYLE_OPTIONS 
} from '../data/choicesData';
import { 
  Cpu, Palette, Utensils, Leaf, Rocket, BookOpen, Waves,
  Building2, Music, Compass, Globe, Zap, Sun,
  TrendingUp, Award, Plane, Heart, ShieldCheck,
  CheckCircle2, ArrowRight, ArrowLeft, Sparkles
} from 'lucide-react';

const ICON_MAP = {
  Cpu, Palette, Utensils, Leaf, Rocket, BookOpen, Waves,
  Building2, Music, Compass, Globe, Zap, Sun,
  TrendingUp, Award, Plane, Heart, ShieldCheck
};

export function ChoiceWizard({ onComplete }) {
  const [step, setStep] = useState(0);
  const [selectedChoices, setSelectedChoices] = useState({
    career: CAREER_OPTIONS[0],
    city: CITY_OPTIONS[0],
    priority: PRIORITY_OPTIONS[0],
    turningPoint: TURNING_POINT_OPTIONS[0],
    lifestyle: LIFESTYLE_OPTIONS[0]
  });

  const STEPS = [
    { title: 'Career & Discipline', subtitle: 'What alternate path did you choose instead of technology?', options: CAREER_OPTIONS, key: 'career' },
    { title: 'Starting Relocation City', subtitle: 'Where did you move to kickstart your alternate life?', options: CITY_OPTIONS, key: 'city' },
    { title: 'Core Life Priority', subtitle: 'What core driver guided your decisions?', options: PRIORITY_OPTIONS, key: 'priority' },
    { title: 'Major Life Turning Point', subtitle: 'What sudden opportunity or fork in the road did you take?', options: TURNING_POINT_OPTIONS, key: 'turningPoint' },
    { title: 'Lifestyle & Personal Pursuit', subtitle: 'How do you spend your non-working hours and living space?', options: LIFESTYLE_OPTIONS, key: 'lifestyle' }
  ];

  const currentStepConfig = STEPS[step];

  const handleSelect = (option) => {
    setSelectedChoices(prev => ({
      ...prev,
      [currentStepConfig.key]: option
    }));
  };

  const handleNext = () => {
    if (step < STEPS.length - 1) {
      setStep(step + 1);
    } else {
      onComplete(selectedChoices);
    }
  };

  const handlePrev = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Progress Tracker */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3 text-xs font-semibold text-slate-400">
          <span>STEP {step + 1} OF {STEPS.length}</span>
          <span className="text-indigo-400 font-medium">{currentStepConfig.title}</span>
        </div>
        <div className="w-full bg-slate-800 rounded-full h-2 flex overflow-hidden">
          {STEPS.map((s, idx) => (
            <div
              key={idx}
              className={`h-full flex-1 transition-all duration-300 ${
                idx <= step ? 'bg-gradient-to-r from-indigo-500 to-purple-500' : 'bg-slate-800'
              } ${idx < STEPS.length - 1 ? 'border-r border-slate-900' : ''}`}
            />
          ))}
        </div>
      </div>

      {/* Step Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
          {currentStepConfig.title}
        </h2>
        <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
          {currentStepConfig.subtitle}
        </p>
      </div>

      {/* Options Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {currentStepConfig.options.map((option) => {
          const IconComponent = ICON_MAP[option.icon] || Sparkles;
          const isSelected = selectedChoices[currentStepConfig.key]?.id === option.id;

          return (
            <button
              key={option.id}
              onClick={() => handleSelect(option)}
              className={`relative text-left p-5 rounded-xl border transition-all duration-200 flex flex-col justify-between ${
                isSelected
                  ? 'bg-indigo-950/40 border-indigo-500 shadow-lg shadow-indigo-500/10 ring-1 ring-indigo-500/50'
                  : 'bg-slate-800/60 border-slate-700/60 hover:bg-slate-800 hover:border-slate-600'
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className={`p-2.5 rounded-lg ${isSelected ? 'bg-indigo-500 text-white' : 'bg-slate-700/70 text-slate-300'}`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  {isSelected && (
                    <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0" />
                  )}
                </div>

                <h3 className="text-base font-semibold text-white mb-1">
                  {option.title || option.cityName}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-3">
                  {option.subtitle || option.description}
                </p>
              </div>

              {(option.tag || option.vibe || option.badge) && (
                <div className="pt-2 border-t border-slate-700/40">
                  <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-medium bg-slate-900/80 text-indigo-300 border border-indigo-900/50">
                    {option.tag || option.vibe || option.badge}
                  </span>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Wizard Footer Controls */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-800">
        <button
          onClick={handlePrev}
          disabled={step === 0}
          className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg text-sm font-medium transition ${
            step === 0
              ? 'opacity-30 cursor-not-allowed text-slate-500'
              : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        <button
          onClick={handleNext}
          className="flex items-center space-x-2 px-6 py-2.5 rounded-lg text-sm font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-400 hover:to-pink-400 text-white shadow-lg shadow-indigo-500/25 transition transform active:scale-95"
        >
          <span>{step === STEPS.length - 1 ? 'Generate Parallel Timeline' : 'Next Choice'}</span>
          {step === STEPS.length - 1 ? (
            <Sparkles className="w-4 h-4" />
          ) : (
            <ArrowRight className="w-4 h-4" />
          )}
        </button>
      </div>
    </div>
  );
}
