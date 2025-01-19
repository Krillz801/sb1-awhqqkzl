function MoodSlider({ value, onChange, label, icons = ['😔', '😊'] }) {
  return (
    <div className="mb-6">
      <label className="block text-purple-800 font-bold mb-2">{label}</label>
      <div className="flex items-center">
        <span className="text-2xl mr-2">{icons[0]}</span>
        <input
          type="range"
          min="1"
          max="10"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="flex-1 accent-purple-600"
        />
        <span className="text-2xl ml-2">{icons[1]}</span>
      </div>
      <div className="text-center text-purple-600 mt-1">
        {value}/10
      </div>
    </div>
  );
}

export default MoodSlider;