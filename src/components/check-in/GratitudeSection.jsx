import { useState } from 'react';

function GratitudeSection({ gratitude, onAdd }) {
  const [newGratitude, setNewGratitude] = useState('');

  const handleAdd = () => {
    if (newGratitude.trim()) {
      onAdd(newGratitude);
      setNewGratitude('');
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h2 className="text-xl text-purple-800 font-bold mb-4">Gratitude</h2>
      
      <div className="mb-4">
        <textarea
          value={newGratitude}
          onChange={(e) => setNewGratitude(e.target.value)}
          placeholder="What are you grateful for today?"
          className="w-full p-3 border border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
          rows="3"
        />
        <button
          onClick={handleAdd}
          className="mt-2 w-full bg-purple-600 text-white font-bold py-2 rounded-lg hover:bg-purple-700 transition-colors"
        >
          Add Gratitude
        </button>
      </div>

      {gratitude.length > 0 && (
        <ul className="space-y-2">
          {gratitude.map((item, index) => (
            <li key={index} className="flex items-center text-purple-700">
              <span className="mr-2">💜</span>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default GratitudeSection;