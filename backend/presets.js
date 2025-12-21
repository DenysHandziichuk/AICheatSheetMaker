export const LENGTH_PRESETS = {
  short: {
    maxSections: 5,
    maxBulletsPerSection: 3,
    maxWordsPerBullet: 12,
  },
  medium: {
    maxSections: 7,
    maxBulletsPerSection: 5,
    maxWordsPerBullet: 18,
  },
  long: {
    maxSections: 9,
    maxBulletsPerSection: 8,
    maxWordsPerBullet: 25,
  },
};

export const LEVEL_PRESETS = {
    basic: {
    tone: "simple",
    maxWordsPerBullet: 12,
    allowedVocabulary: "common",
    sentenceStyle: "short",
    explanationDepth: "minimal",
  },
  academic: {
    tone: "neutral",
    maxWordsPerBullet: 20,
    allowedVocabulary: "academic",
    sentenceStyle: "complete",
    explanationDepth: "standard",
  },
  formal: {
    tone: "formal",
    maxWordsPerBullet: 22,
    allowedVocabulary: "formal",
    sentenceStyle: "precise",
    explanationDepth: "concise",
  },
};