function WeeklyGoals({ weeklyReviews }) {
  const currentGoals = weeklyReviews[0]?.goalsForNextWeek || [];

  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h2 className="text-xl text-purple-800 font-bold mb-4">Goals for Next Week</h2>

      {currentGoals.length > 0 ? (
        <ul className="space-y-3">
          {currentGoals.map((goal, index) => (
            <li key={index} className="flex items-start">
              <span className="text-purple-600 mr-2">🎯</span>
              <span className="text-purple-700">{goal}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-purple-600 text-center">
          Generate a weekly review to set goals for next week
        </p>
      )}
    </div>
  );
}

export default WeeklyGoals;