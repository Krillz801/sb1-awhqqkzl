export function generateResponse(analysis) {
  const { sentiment, emotions, patterns } = analysis;

  if (sentiment < 0.3) {
    return generateCrisisResponse();
  }

  if (patterns.hasSplitting) {
    return generateSplittingResponse();
  }

  if (emotions.includes('anxiety')) {
    return generateAnxietyResponse();
  }

  return generateSupportiveResponse();
}

function generateCrisisResponse() {
  return {
    message: "I notice you're having a really hard time. Would you like to try some grounding exercises together?",
    suggestions: [
      "Let's take 3 deep breaths together",
      "Can you name 5 things you can see right now?",
      "Hold something cold or warm - notice how it feels",
      "Listen to a calming sound or song"
    ]
  };
}

function generateSplittingResponse() {
  return {
    message: "I hear how intense these feelings are. Can we explore the gray areas together?",
    suggestions: [
      "Your feelings are valid, even when they're complex",
      "It's okay to have mixed feelings about people and situations",
      "You can hold space for different truths at the same time"
    ]
  };
}

function generateAnxietyResponse() {
  return {
    message: "I can hear the anxiety in your words. Let's take this moment to ground ourselves.",
    suggestions: [
      "Place your feet firmly on the ground",
      "Take a slow, deep breath",
      "Notice something calming in your environment",
      "Remember: this feeling will pass"
    ]
  };
}

function generateSupportiveResponse() {
  return {
    message: "I'm here with you. What kind of support would feel most helpful right now?",
    suggestions: [
      "Would you like to try a gentle grounding exercise?",
      "How about we focus on something soothing?",
      "What's one tiny thing that might help right now?"
    ]
  };
}

export default generateResponse;