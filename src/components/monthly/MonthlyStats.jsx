import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

function MonthlyStats({ checkIns }) {
  const monthlyData = checkIns
    .slice(0, 30)
    .reduce((acc, checkIn) => {
      const week = Math.floor(new Date(checkIn.id).getDate() / 7);
      if (!acc[week]) {
        acc[week] = { week: `Week ${week + 1}`, avgMood: 0, count: 0 };
      }
      acc[week].avgMood += checkIn.mood;
      acc[week].count += 1;
      return acc;
    }, [])
    .map(week => ({
      ...week,
      avgMood: week.avgMood / week.count
    }));

  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h2 className="text-xl text-purple-800 font-bold mb-4">Monthly Mood Trends</h2>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={monthlyData}>
            <XAxis dataKey="week" />
            <YAxis domain={[0, 10]} />
            <Tooltip />
            <Bar dataKey="avgMood" fill="#7c3aed" name="Average Mood" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default MonthlyStats;