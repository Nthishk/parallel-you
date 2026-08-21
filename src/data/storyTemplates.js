// Narrative generation templates and milestone builders

export const generateMilestones = (choices, branchChoice = null) => {
  const { career, city, priority, turningPoint, lifestyle } = choices;

  // Year 2026: The Initial Fork
  const year2026 = {
    year: 2026,
    age: 22,
    title: `The Pivot: Choosing ${career.tag} in ${city.cityName.split(',')[0]}`,
    category: 'Turning Point',
    icon: 'Compass',
    story: `Instead of continuing down your expected path, you committed to ${career.title.toLowerCase()} and set up your base in ${city.cityName}. The early months were a flurry of adjusting to a new environment—setting up a workspace in a modest apartment in ${city.cityName.split(',')[0]} and making your peace with starting fresh. Driven by your core focus on ${priority.title.toLowerCase()}, you established your foundation early.`,
    highlight: `Decided to decline traditional offers and move to ${city.cityName.split(',')[0]}.`,
    metricsShift: { creative: '+10%', peace: '+5%' }
  };

  // Year 2028: Early Momentum & Key Choice Integration
  let story2028 = '';
  if (turningPoint.id === 'overseas_fellowship') {
    story2028 = `Two years in, your decision to accept an overseas fellowship bore fruit. Working alongside international practitioners in ${city.cityName.split(',')[0]}, you published your first major project in ${career.title}. You established a recognizable personal voice within the field while embracing a ${lifestyle.badge.toLowerCase()} lifestyle.`;
  } else if (turningPoint.id === 'passion_project_co') {
    story2028 = `Your side initiative co-founded with a close collaborator gained unexpected traction in ${city.cityName.split(',')[0]}. Balancing late nights with client work, you launched a v1 prototype that caught the attention of regional incubators and niche publications.`;
  } else if (turningPoint.id === 'solo_sabbatical') {
    story2028 = `Following your 6-month sabbatical, you returned to active practice in ${city.cityName.split(',')[0]} with unmatched cognitive clarity. Unburdened by conventional rat-race expectations, you produced some of your most authentic work in ${career.title}.`;
  } else {
    story2028 = `Pivoting hard into ${career.title} proved challenging initially, but by 2028 your cross-disciplinary background became your secret weapon in ${city.cityName.split(',')[0]}. You solved problems that seasoned veterans overlooked.`;
  }

  const year2028 = {
    year: 2028,
    age: 24,
    title: `First Breakthrough: ${turningPoint.impactText}`,
    category: 'Career',
    icon: 'Sparkles',
    story: story2028,
    highlight: `Recognized locally in ${city.cityName.split(',')[0]} for an innovative project launch.`,
    metricsShift: { career: '+15%', finance: '+10%' }
  };

  // Year 2030: Mid-Timeline Fork (Interactive Decision Point)
  let story2030 = '';
  let title2030 = 'The 2030 Crossroads';
  if (branchChoice === 'double_down') {
    title2030 = 'Double Down: Scaling Up & Leading Team';
    story2030 = `Faced with the opportunity to scale, you chose to double down in ${city.cityName.split(',')[0]}. You took on leadership, hired three collaborators, and formalized your studio space. While responsibilities grew heavier, your influence expanded dramatically.`;
  } else if (branchChoice === 'go_independent') {
    title2030 = 'Go Independent: Full Nomad & Solopreneur';
    story2030 = `Prioritizing total autonomy, you turned down institutional backing to stay independent. You transitioned your workflow to be 100% location-independent, spending months traveling while delivering high-value work on your own terms.`;
  } else if (branchChoice === 'sabbatical_research') {
    title2030 = 'Sabbatical & Deep Research Focus';
    story2030 = `Feeling the strain of burnout, you stepped back from commercial projects to focus on non-profit research and community mentoring in ${city.cityName.split(',')[0]}. This reset rejuvenated your core passion.`;
  } else {
    // Default 2030 state before user selects branch
    title2030 = 'Establishing Stability & Mid-Career Recognition';
    story2030 = `By 2030, five years into your parallel timeline, your life in ${city.cityName.split(',')[0]} hit a sweet spot of stability. Your unique approach to ${career.title} attracted steady high-profile inquiries. You bought your first piece of serious equipment and established your dream ${lifestyle.badge.toLowerCase()}.`;
  }

  const year2030 = {
    year: 2030,
    age: 26,
    title: title2030,
    category: 'Milestone',
    icon: 'GitCommit',
    story: story2030,
    highlight: `Mid-decade milestone: Formed an established reputation in ${city.cityName.split(',')[0]}.`,
    metricsShift: branchChoice === 'double_down' ? { career: '+20%', peace: '-10%' } : branchChoice === 'go_independent' ? { adventure: '+20%', creative: '+15%' } : { peace: '+20%', creative: '+10%' },
    isForkPoint: true
  };

  // Year 2032: Expansion & Personal Life Evolution
  const year2032 = {
    year: 2032,
    age: 28,
    title: `Global Connections & Maturing Craft`,
    category: 'Personal & Travel',
    icon: 'Globe',
    story: `Your work in ${city.cityName.split(',')[0]} began commanding international interest. You were invited as a guest speaker at a symposium in Kyoto and collaborated on a cross-border residency project. Your personal life flourished alongside a strong network of close friends, fellow creators, and mentors built over the past 6 years.`,
    highlight: `Keynote speaker & international residency participant.`,
    metricsShift: { adventure: '+15%', creative: '+10%' }
  };

  // Year 2034: Retrospective & Mastery
  const year2034 = {
    year: 2034,
    age: 30,
    title: `Entering Mastery: 8-Year Parallel Horizon`,
    category: 'Mastery',
    icon: 'Award',
    story: `Turning 30 in your parallel life, you looked back at the fork in 2026 with immense gratitude. You published a comprehensive retrospection / retrospective book summarizing your journey in ${career.title}. Your lifestyle of ${lifestyle.badge.toLowerCase()} became a model for younger peers coming up in the space.`,
    highlight: `Published major retrospective work and mentored the next generation.`,
    metricsShift: { peace: '+15%', finance: '+15%' }
  };

  // Year 2036: Ten-Year Parallel Life Horizon
  const year2036 = {
    year: 2036,
    age: 32,
    title: `2036: Ten Years Down the Alternate Road`,
    category: 'Present Horizon',
    icon: 'Sun',
    story: `A full decade after making your initial choice, you are now a recognized figure in ${career.tag} based out of ${city.cityName}. You have built an alternate existence defined by ${priority.title.toLowerCase()}, living in harmony with your ${lifestyle.badge.toLowerCase()}. Looking out over the cityscape of ${city.cityName.split(',')[0]}, you realize that every courageously chosen risk in 2026 paved the way for a rich, deeply meaningful life.`,
    highlight: `Established a mature, resilient alternate life legacy in ${city.cityName.split(',')[0]}.`,
    metricsShift: { creative: '+10%', career: '+10%', peace: '+10%' }
  };

  return [year2026, year2028, year2030, year2032, year2034, year2036];
};

export const generateMotto = (career, priority, city) => {
  const mottos = [
    `"Creation over compromise in the heart of ${city.cityName.split(',')[0]}."`,
    `"Taking the unpaved road toward ${career.tag.toLowerCase()} and living with intention."`,
    `"Balancing ${priority.title.toLowerCase()} with the quiet beauty of alternate choices."`,
    `"From a single risk in 2026 to a decade of authentic living."`,
    `"Crafting a life where passion meets autonomy."`
  ];
  const hash = (career.id.length + priority.id.length + city.id.length) % mottos.length;
  return mottos[hash];
};
