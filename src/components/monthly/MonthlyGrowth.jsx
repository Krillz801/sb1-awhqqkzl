function MonthlyGrowth({ monthlyReviews }) {
  const currentReview = monthlyReviews[0];

  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h2 className="text-xl text-purple-800 font-bold mb-4">Personal Growth</h2>

      {currentReview ? (
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-purple-700 mb-2">Achievements</h3>
            <ul className="space-y-1">
              {currentReview.personalGrowth.achievements.map((achievement, index) => (
                <li key={index} className="flex items-center text-purple-600">
                  <span className="mr-2">🏆</span>{achievement}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-purple-700 mb-2">Key Insights</h3>
            <ul className="space-y-1">
              {currentReview.personalGrowth.insights.map((insight, index) => (
                <li key={index} className="flex items-center text-purple-600">
                  <span className="mr-2">💡</span>{insight}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-purple-700 mb-2">Focus Areas</h3>
            <ul className="space-y-1">
              {currentReview.personalGrowth.areasForFocus.map((area, index) => (
                <li key={index} className="flex items-center text-purple-600">
                  <span className="mr-2">🎯</span>{area}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p className="text-purple-600 text-center">Generate a monthly review to see growth insights</p>
      )}
    </div>
  );
}

export default MonthlyGrowth;