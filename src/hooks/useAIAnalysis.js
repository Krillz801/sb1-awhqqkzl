import { useState, useCallback } from 'react';
import { generateAIResponse } from '../services/ai/openai';

export function useAIAnalysis() {
  const [conversationHistory, setConversationHistory] = useState([]);

  const generateResponse = useCallback(async (message) => {
    const response = await generateAIResponse(message, conversationHistory);
    setConversationHistory(prev => [...prev, 
      { text: message, isUser: true },
      { text: response, isUser: false }
    ]);
    return response;
  }, [conversationHistory]);

  return {
    generateResponse,
    conversationHistory
  };
}

export default useAIAnalysis;