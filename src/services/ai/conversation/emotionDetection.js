// Enhanced emotion detection with intensity and context
export function detectEmotionalContext(text) {
  const emotions = {
    joy: /(happy|excited|grateful|peaceful|content)/gi,
    sadness: /(sad|lonely|hurt|disappointed|hopeless)/gi,
    anxiety: /(anxious|worried|nervous|overwhelmed|stressed)/gi,
    anger: /(angry|frustrated|annoyed|mad|irritated)/gi,
    fear: /(scared|afraid|terrified|fearful|panicked)/gi
  };

  const intensifiers = /(really|very|so|extremely|totally)/gi;
  let dominantEmotion = null;
  let intensity = 1;
  let context = '';

  // Check for intensifiers
  const hasIntensifiers = text.match(intensifiers);
  if (hasIntensifiers) {
    intensity = 1.5;
  }

  // Detect emotions and find the dominant one
  for (const [emotion, pattern] of Object.entries(emotions)) {
    const matches = text.match(pattern);
    if (matches && (!dominantEmotion || matches.length > emotions[dominantEmotion]?.length)) {
      dominantEmotion = emotion;
    }
  }

  // Extract situational context
  if (text.includes('because') || text.includes('when')) {
    const contextMatch = text.match(/(because|when) .+?[.!?]/i);
    context = contextMatch ? contextMatch[0] : '';
  }

  return {
    emotion: dominantEmotion,
    intensity,
    context
  };
}