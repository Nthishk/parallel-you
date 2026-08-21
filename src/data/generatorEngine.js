import { generateMilestones, generateMotto } from './storyTemplates';

export const calculateLifeMetrics = (choices, branchChoice = null) => {
  const { career, city, priority } = choices;

  // Base metrics from career
  let metrics = {
    creative: career.metrics.creative,
    career: career.metrics.career,
    adventure: career.metrics.adventure,
    peace: career.metrics.peace,
    finance: career.metrics.finance,
  };

  // Apply city bonus
  if (city.metricsBonus) {
    Object.keys(city.metricsBonus).forEach(key => {
      metrics[key] = (metrics[key] || 50) + city.metricsBonus[key];
    });
  }

  // Apply priority modifier
  if (priority.modifier) {
    Object.keys(priority.modifier).forEach(key => {
      metrics[key] = (metrics[key] || 50) + priority.modifier[key];
    });
  }

  // Apply branch choice modifier if 2030 fork decision made
  if (branchChoice === 'double_down') {
    metrics.career = Math.min(100, metrics.career + 15);
    metrics.finance = Math.min(100, metrics.finance + 10);
    metrics.peace = Math.max(20, metrics.peace - 10);
  } else if (branchChoice === 'go_independent') {
    metrics.creative = Math.min(100, metrics.creative + 15);
    metrics.adventure = Math.min(100, metrics.adventure + 15);
    metrics.finance = Math.max(30, metrics.finance - 5);
  } else if (branchChoice === 'sabbatical_research') {
    metrics.peace = Math.min(100, metrics.peace + 20);
    metrics.creative = Math.min(100, metrics.creative + 10);
    metrics.career = Math.max(30, metrics.career - 10);
  }

  // Clamp all values between 20 and 98 for realistic visual representation
  Object.keys(metrics).forEach(key => {
    metrics[key] = Math.min(98, Math.max(25, Math.round(metrics[key])));
  });

  return metrics;
};

export const generateParallelLife = (choices, branchChoice = null) => {
  const metrics = calculateLifeMetrics(choices, branchChoice);
  const milestones = generateMilestones(choices, branchChoice);
  const motto = generateMotto(choices.career, choices.priority, choices.city);

  const personaTitle = `${choices.career.tag} Pioneer in ${choices.city.cityName.split(',')[0]}`;
  const personaSubtitle = `${choices.priority.title} • ${choices.lifestyle.badge}`;

  return {
    id: `timeline_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
    createdAt: new Date().toLocaleDateString(),
    choices,
    branchChoice,
    metrics,
    milestones,
    motto,
    personaTitle,
    personaSubtitle,
    summary2036: `In 2036, living in ${choices.city.cityName}, you have built a 10-year alternate career in ${choices.career.title}. Your life reflects your commitment to ${choices.priority.title.toLowerCase()} and an authentic ${choices.lifestyle.badge.toLowerCase()} lifestyle.`
  };
};
