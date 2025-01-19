const emotionPatterns = {
  splitting: /\b(always|never|everyone|no one|everything|nothing)\b/gi,
  blackAndWhite: /(good|bad|perfect|terrible|awful|amazing)\b/gi,
  intensifiers: /(really|very|extremely|totally|absolutely)\b/gi
};

export function analyzeText(text) {
  return {
    sentiment: analyzeSentiment(text),
    emotions: detectEmotions(text),
    patterns: detectPatterns(text)
  };
}

function analyzeSentiment(text) {
  const positiveWords = /(happy|good|great|calm|peaceful|safe|loved|supported)/gi;
  const negativeWords = /(sad|bad|angry|scared|alone|hurt|overwhelmed|anxious)/gi;
  
  const positiveCount = (text.match(positiveWords) || []).length;
  const negativeCount = (text.match(negativeWords) || []).length;
  const totalWords = text.split(/\s+/).length;

  return (positiveCount - negativeCount + totalWords) / (2 * totalWords);
}

function detectEmotions(text) {
  const emotions = [];
  const emotionPatterns = {
    anxiety: /(worried|anxious|nervous|scared|fear)/gi,
    sadness: /(sad|lonely|depressed|empty|hurt)/gi,
    anger: /(angry|mad|frustrated|upset|rage)/gi,
    joy: /(happy|excited|peaceful|grateful|calm)/gi
  };

  Object.entries(emotionPatterns).forEach(([emotion, pattern]) => {
    if (pattern.test(text)) {
      emotions.push(emotion);
    }
  });

  return emotions;
}

function detectPatterns(text) {
  return {
    hasSplitting: emotionPatterns.splitting.test(text),
    hasBlackAndWhite: emotionPatterns.blackAndWhite.test(text),
    hasIntenseEmotions: emotionPatterns.intensifiers.test(text)
  };
}

export default analyzeText;