import { motion } from 'framer-motion';

function WeeklyHighlights({ entries }) {
  const recentEntries = entries.slice(0, 5);

  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h2 className="text-xl text-purple-800 font-bold mb-4">Weekly Highlights</h2>

      <div className="space-y-4">
        {recentEntries.map((entry, index) => (
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-4 bg-purple-50 rounded-lg"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <span className="text-xl mr-2">
                  {entry.mood >= 7 ? '😊' : entry.mood >= 4 ? '😐' : '😔'}
                </span>
                <span className="text-purple-600 font-medium">
                  Mood: {entry.mood}/10
                </span>
              </div>
              <span className="text-sm text-purple-500">
                {new Date(entry.id).toLocaleDateString()}
              </span>
            </div>
            <p className="text-purple-700">{entry.entry}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default WeeklyHighlights;