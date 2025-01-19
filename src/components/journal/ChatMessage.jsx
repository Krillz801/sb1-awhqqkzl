import { motion } from 'framer-motion';

function ChatMessage({ message, isUser }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}
    >
      <div
        className={`max-w-[80%] rounded-lg p-4 ${
          isUser
            ? 'bg-purple-600 text-white rounded-br-none'
            : 'bg-white text-purple-700 rounded-bl-none'
        }`}
      >
        {message}
      </div>
    </motion.div>
  );
}

export default ChatMessage;