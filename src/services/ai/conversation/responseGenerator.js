import { ResponseType } from './responseTypes';
import { templates } from './templates';
import { detectEmotionalContext } from './emotionDetection';

export function generateConversationalResponse(text) {
  const { emotion, intensity, context } = detectEmotionalContext(text);
  const responses = [];

  // Add empathy response
  responses.push(selectAndFillTemplate('empathy', { emotion, situation: context }));

  // Add validation for intense emotions
  if (intensity > 1) {
    responses.push(selectAndFillTemplate('validation', { emotion }));
  }

  // Add support and guidance
  responses.push(selectAndFillTemplate('support'));
  responses.push(generateSuggestion(emotion));

  // Add encouragement for challenging emotions
  if (['sadness', 'anxiety', 'fear'].includes(emotion)) {
    responses.push(selectAndFillTemplate('encouragement'));
  }

  return responses.filter(Boolean).join('\n\n');
}

function selectAndFillTemplate(type, variables = {}) {
  const template = templates[type][Math.floor(Math.random() * templates[type].length)];
  return template.replace(/\{(\w+)\}/g, (_, key) => variables[key] || '');
}

function generateSuggestion(emotion) {
  const suggestions = {
    anxiety: ['taking a few deep breaths', 'grounding ourselves for a moment'],
    sadness: ['focusing on something gentle and soothing', 'sharing what\'s on your mind'],
    fear: ['breaking this down into smaller pieces', 'taking one small step at a time'],
    anger: ['expressing these feelings in a safe way', 'finding healthy ways to release this energy'],
    joy: ['savoring this positive moment', 'building on this good feeling']
  };

  const suggestion = suggestions[emotion]?.[Math.floor(Math.random() * suggestions[emotion].length)];
  return suggestion ? selectAndFillTemplate('guidance', { suggestion }) : '';
}