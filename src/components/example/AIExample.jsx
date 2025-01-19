
import { useState } from 'react';
import { generateAIResponse } from '../../services/ai/openai';

export default function AIExample() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const result = await generateAIResponse(prompt);
      setResponse(result);
    } catch (error) {
      console.error('Error:', error);
      setResponse('An error occurred');
    }
    setIsLoading(false);
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter your prompt"
        />
        <button 
          type="submit" 
          disabled={isLoading}
          className="px-4 py-2 bg-purple-600 text-white rounded"
        >
          {isLoading ? 'Generating...' : 'Generate Response'}
        </button>
      </form>
      {response && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          {response}
        </div>
      )}
    </div>
  );
}
