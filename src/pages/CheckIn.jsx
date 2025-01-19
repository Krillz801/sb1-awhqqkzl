import DailyCheckIn from '../components/check-in/DailyCheckIn';
import useJournalStore from '../store/journalStore';

function CheckIn() {
  const addCheckIn = useJournalStore(state => state.addCheckIn);

  const handleSave = (checkIn) => {
    addCheckIn(checkIn);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-purple-800 mb-6">Daily Check-in</h1>
      <DailyCheckIn onSave={handleSave} />
    </div>
  );
}

export default CheckIn;