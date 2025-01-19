import { useState } from 'react';

const suggestedActivities = [
  "Deep breathing",
  "Light exercise",
  "Mindful walking",
  "Journaling",
  "Reading",
  "Creative activity",
  "Connecting with others",
  "Self-care routine"
];

function ActivitySection({ activities, onAdd }) {
  const [selectedActivity, setSelectedActivity] = useState('');
  const [customActivity, setCustomActivity] = useState('');

  const handleAdd = () => {
    const activity = selectedActivity === 'custom' ? customActivity : selectedActivity;
    if (activity.trim()) {
      onAdd(activity);
      setSelectedActivity('');
      setCustomActivity('');
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h2 className="text-xl text-purple-800 font-bold mb-4">Activities</h2>
      
      <div className="mb-4">
        <select
          value={selectedActivity}
          onChange={(e) => setSelectedActivity(e.target.value)}
          className="w-full p-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        >
          <option value="">Select an activity...</option>
          {suggestedActivities.map((activity) => (
            <option key={activity} value={activity}>{activity}</option>
          ))}
          <option value="custom">Add custom activity...</option>
        </select>

        {selectedActivity === 'custom' && (
          <input
            type="text"
            value={customActivity}
            onChange={(e) => setCustomActivity(e.target.value)}
            placeholder="Enter your activity..."
            className="w-full mt-2 p-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        )}

        <button
          onClick={handleAdd}
          disabled={!selectedActivity || (selectedActivity === 'custom' && !customActivity.trim())}
          className="mt-2 w-full bg-purple-600 text-white font-bold py-2 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Add Activity
        </button>
      </div>

      {activities.length > 0 && (
        <ul className="space-y-2">
          {activities.map((activity, index) => (
            <li key={index} className="flex items-center text-purple-700">
              <span className="mr-2">✨</span>
              {activity}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ActivitySection;