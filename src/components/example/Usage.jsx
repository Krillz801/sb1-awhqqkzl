
import { useState } from 'react';
import { generateText } from '../../services/ai/example';

export default function AIComponent() {
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    setIsLoading(true);
    const result = await generateText('Write a haiku about programming');
    setResponse(result);
    setIsLoading(false);
  };

  return (
    <div>
      <button onClick={handleGenerate} disabled={isLoading}>
        Generate Haiku
      </button>
      {isLoading ? <p>Loading...</p> : <p>{response}</p>}
    </div>
  );
}
