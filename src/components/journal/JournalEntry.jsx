import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAIAnalysis } from '../../hooks/useAIAnalysis';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

function JournalEntry({ onSave }) {
  const { generateResponse, conversationHistory } = useAIAnalysis();
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async (message) => {
    try {
      setIsLoading(true);
      const response = await generateResponse(message);
      setIsLoading(false);
    } catch (error) {
      console.error('Error generating response:', error);
      setIsLoading(false);
    }
  };

  const handleSaveConversation = () => {
    onSave({
      entry: conversationHistory.map(msg => 
        `${msg.isUser ? 'User' : 'AI'}: ${msg.text}`
      ).join('\n'),
      timestamp: new Date(),
      mood: 5 // You might want to detect this from the conversation
    });
  };

  return (
    <div className="flex flex-col h-[calc(100vh-200px)]">
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-purple-50 rounded-lg">
        {conversationHistory.map((message, index) => (
          <ChatMessage
            key={index}
            message={message.text}
            isUser={message.isUser}
          />
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white text-purple-700 rounded-lg p-4 rounded-bl-none">
              <span className="animate-pulse">...</span>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-white border-t border-purple-100">
        <ChatInput onSend={handleSend} disabled={isLoading} />
        
        {conversationHistory.length > 0 && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={handleSaveConversation}
            className="w-full mt-4 bg-purple-600 text-white font-bold py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Save Conversation
          </motion.button>
        )}
      </div>
    </div>
  );
}

export default JournalEntry;