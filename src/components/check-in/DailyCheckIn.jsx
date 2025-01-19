import { useState } from 'react';
import { motion } from 'framer-motion';
import MoodSlider from './MoodSlider';
import GratitudeSection from './GratitudeSection';
import ActivitySection from './ActivitySection';

function DailyCheckIn({ onSave }) {
  const [checkIn, setCheckIn] = useState({
    mood: 5,
    energyLevel: 5,
    sleepQuality: 5,
    gratitude: [],
    activities: [],
    challenges: [],
    copingStrategies: []
  });

  const updateField = (field, value) => {
    setCheckIn(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg p-6 shadow-md"
      >
        <MoodSlider
          value={checkIn.mood}
          onChange={(value) => updateField('mood', value)}
          label="How are you feeling today?"
        />

        <MoodSlider
          value={checkIn.energyLevel}
          onChange={(value) => updateField('energyLevel', value)}
          label="Energy Level"
          icons={['🔋', '⚡']}
        />

        <MoodSlider
          value={checkIn.sleepQuality}
          onChange={(value) => updateField('sleepQuality', value)}
          label="Sleep Quality"
          icons={['😴', '💤']}
        />
      </motion.div>

      <GratitudeSection
        gratitude={checkIn.gratitude}
        onAdd={(item) => updateField('gratitude', [...checkIn.gratitude, item])}
      />

      <ActivitySection
        activities={checkIn.activities}
        onAdd={(activity) => updateField('activities', [...checkIn.activities, activity])}
      />

      <button
        onClick={() => onSave(checkIn)}
        className="w-full bg-purple-600 text-white font-bold py-3 rounded-lg hover:bg-purple-700 transition-colors"
      >
        Save Check-in
      </button>
    </div>
  );
}

export default DailyCheckIn;