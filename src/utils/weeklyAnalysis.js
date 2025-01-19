export function calculateAverageMood(checkIns) {
  if (!checkIns.length) return 5;
  return checkIns.reduce((sum, checkIn) => sum + checkIn.mood, 0) / checkIns.length;
}

export function identifyImprovements(checkIns, entries) {
  return [
    "Used more positive coping strategies",
    "Improved sleep quality",
    "Increased self-reflection",
    "Better emotional awareness"
  ];
}

export function identifyChallenges(entries) {
  return [
    "Managing stress levels",
    "Maintaining consistent routines",
    "Balancing emotions",
    "Setting boundaries"
  ];
}

export function generateInsights(checkIns, entries) {
  return [
    "Better mood when well-rested",
    "Creative activities help lift mood",
    "Regular check-ins increase awareness",
    "Support system helps stability"
  ];
}

export function trackCopingStrategies(checkIns) {
  const strategies = new Set();
  checkIns.forEach(checkIn => {
    checkIn.activities.forEach(activity => strategies.add(activity));
  });
  return Array.from(strategies);
}

export function suggestGoals(checkIns, entries) {
  return [
    "Practice one new coping skill",
    "Maintain daily check-ins",
    "Add one self-care activity",
    "Connect with support system"
  ];
}