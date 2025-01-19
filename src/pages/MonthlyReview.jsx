import { useState } from 'react';
import useJournalStore from '../store/journalStore';
import MonthlyStats from '../components/monthly/MonthlyStats';
import MonthlyPatterns from '../components/monthly/MonthlyPatterns';
import MonthlyGrowth from '../components/monthly/MonthlyGrowth';

function MonthlyReview() {
  const { checkIns, monthlyReviews, addMonthlyReview } = useJournalStore();
  const [currentMonth] = useState(new Date().getMonth());

  const generateMonthlyReview = () => {
    const review = {
      month: currentMonth,
      year: new Date().getFullYear(),
      emotionalTrends: {
        dominantEmotions: ['Hopeful', 'Calm', 'Focused'],
        moodRange: { min: 3, max: 8, average: 6.2 }
      },
      significantPatterns: {
        triggers: ['Work stress', 'Social events', 'Sleep changes'],
        copingStrategies: ['Meditation', 'Exercise', 'Journaling'],
        improvements: ['Better emotional awareness', 'Consistent self-care']
      },
      personalGrowth: {
        achievements: ['Regular journaling', 'Daily check-ins'],
        insights: ['Progress takes time', 'Small steps matter'],
        areasForFocus: ['Sleep routine', 'Stress management']
      }
    };

    addMonthlyReview(review);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-purple-800 mb-6">Monthly Review</h1>
      
      <MonthlyStats checkIns={checkIns} />
      <MonthlyPatterns monthlyReviews={monthlyReviews} />
      <MonthlyGrowth monthlyReviews={monthlyReviews} />

      <button
        onClick={generateMonthlyReview}
        className="w-full bg-purple-600 text-white font-bold py-3 rounded-lg hover:bg-purple-700 transition-colors"
      >
        Generate Monthly Review
      </button>
    </div>
  );
}

export default MonthlyReview;