import JournalEntry from '../components/journal/JournalEntry';
import useJournalStore from '../store/journalStore';

function Journal() {
  const addEntry = useJournalStore(state => state.addEntry);

  const handleSave = (entry) => {
    addEntry(entry);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-purple-800 mb-6">Journal</h1>
      <JournalEntry onSave={handleSave} />
    </div>
  );
}

export default Journal;