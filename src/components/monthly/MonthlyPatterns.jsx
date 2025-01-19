function MonthlyPatterns({ monthlyReviews }) {
  const currentReview = monthlyReviews[0];

  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h2 className="text-xl text-purple-800 font-bold mb-4">Monthly Patterns</h2>

      {currentReview ? (
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-purple-700 mb-2">Common Triggers</h3>
            <ul className="space-y-1">
              {currentReview.significantPatterns.triggers.map((trigger, index) => (
                <li key={index} className="flex items-center text-purple-600">
                  <span className="mr-2">⚡</span>{trigger}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-purple-700 mb-2">Effective Strategies</h3>
            <ul className="space-y-1">
              {currentReview.significantPatterns.copingStrategies.map((strategy, index) => (
                <li key={index} className="flex items-center text-purple-600">
                  <span className="mr-2">✨</span>{strategy}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p className="text-purple-600 text-center">Generate a monthly review to see patterns</p>
      )}
    </div>
  );
}

export default MonthlyPatterns;