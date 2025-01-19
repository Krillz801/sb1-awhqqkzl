import { useEffect } from 'react';
import useJournalStore from '../store/journalStore';
import WeeklyStats from '../components/weekly/WeeklyStats';
import WeeklyHighlights from '../components/weekly/WeeklyHighlights';
import WeeklyGoals from '../components/weekly/WeeklyGoals';

function WeeklyReview() {
  const { checkIns, entries, weeklyReviews, addWeeklyReview } = useJournalStore(state => ({
    checkIns: state.checkIns,
    entries: state.entries,
    weeklyReviews: state.weeklyReviews,
    addWeeklyReview: state.addWeeklyReview
  }));

  const generateWeeklyReview = () => {
    const review = {
      weekStartDate: new Date(),
      averageMood: calculateAverageMood(checkIns),
      improvements: identifyImprovements(checkIns, entries),
      challenges: identifyChallenges(entries),
      insights: generateInsights(checkIns, entries),
      copingStrategiesUsed: trackCopingStrategies(checkIns),
      goalsForNextWeek: suggestGoals(checkIns, entries)
    };

    addWeeklyReview(review);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-purple-800 mb-6">Weekly Review</h1>
      
      <WeeklyStats checkIns={checkIns} />
      <WeeklyHighlights entries={entries} />
      <WeeklyGoals weeklyReviews={weeklyReviews} />

      <button
        onClick={generateWeeklyReview}
        className="w-full bg-purple-600 text-white font-bold py-3 rounded-lg hover:bg-purple-700 transition-colors"
      >
        Generate New Weekly Review
      </button>
    </div>
  );
}

export default WeeklyReview;