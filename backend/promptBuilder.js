export function buildPrompt(text, level, rules) {
    return `
    You are a study assistant.

    Create a concise cheat sheet for the topic below.

    RULES (STRICT):
    - Do NOT add new information
    - Do NOT remove important information
    - Use bullet points only
    - Language level: ${level}

    LENGTH LIMITS (MANDATORY):
    - Max sections: ${rules.maxSections}
    - Max bullets per section: ${rules.maxBulletsPerSection}
    - Max words per bullet: ${rules.maxWordsPerBullet}

    If content exceeds limits:
    - Keep definitions, equations, and steps
    - Remove examples and less important details

    FORMAT THE FOLLOWING TEXT ONLY:
    ${text}
    `
}