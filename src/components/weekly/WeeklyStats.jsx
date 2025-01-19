import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { format } from 'date-fns';

function WeeklyStats({ checkIns }) {
  const weeklyData = checkIns
    .slice(0, 7)
    .map(checkIn => ({
      date: format(new Date(checkIn.id), 'EEE'),
      mood: checkIn.mood,
      energy: checkIn.energyLevel
    }))
    .reverse();

  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h2 className="text-xl text-purple-800 font-bold mb-4">Weekly Trends</h2>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={weeklyData}>
            <XAxis dataKey="date" />
            <YAxis domain={[0, 10]} />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="mood" 
              stroke="#7c3aed" 
              strokeWidth={2}
              name="Mood"
            />
            <Line 
              type="monotone" 
              dataKey="energy" 
              stroke="#60a5fa" 
              strokeWidth={2}
              name="Energy"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default WeeklyStats;