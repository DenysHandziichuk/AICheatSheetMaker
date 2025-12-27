import { LENGTH_PRESETS, LEVEL_PRESETS } from './presets.js';

export function getMergedRules(level, length) {
  const lengthRules = LENGTH_PRESETS[length];
  const levelRules = LEVEL_PRESETS[level];

  if (!lengthRules) throw new Error(`Invalid length: ${length}`);
  if (!levelRules) throw new Error(`Invalid level: ${level}`);

  return {
    ...lengthRules,
    ...levelRules,
    maxWordsPerBullet: Math.min(
      lengthRules.maxWordsPerBullet ?? Infinity,
      levelRules.maxWordsPerBullet ?? Infinity
    ),
  };
}
