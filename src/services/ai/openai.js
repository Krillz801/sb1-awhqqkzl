
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

const SYSTEM_PROMPT = `You are an empathetic and supportive AI therapist assistant. Your role is to:
- Listen actively and respond with genuine empathy
- Validate feelings and experiences
- Offer gentle guidance and support
- Help users process their emotions
- Suggest healthy coping strategies when appropriate
- Maintain a warm, safe, and non-judgmental space

Important guidelines:
- Always prioritize emotional support over advice
- Use a warm, conversational tone
- Validate emotions before offering suggestions
- Never diagnose or provide medical advice
- Encourage professional help when needed
- Maintain appropriate boundaries`;

export async function generateAIResponse(message, conversationHistory = []) {
  if (!import.meta.env.VITE_OPENAI_API_KEY) {
    throw new Error('OpenAI API key is not configured. Please add it to Replit Secrets.');
  }

  try {
    const messages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...conversationHistory.map(msg => ({
        role: msg.isUser ? 'user' : 'assistant',
        content: msg.text
      })),
      { role: 'user', content: message }
    ];

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages,
      temperature: 0.7,
      max_tokens: 300
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error('OpenAI API Error:', error);
    if (error.code === 'insufficient_quota') {
      throw new Error('OpenAI API quota exceeded. Please check your API usage limits or use a different API key.');
    }
    throw new Error('Failed to generate AI response. Please check your API key configuration.');
  }
}
