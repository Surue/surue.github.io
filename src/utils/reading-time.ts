/**
 * Estimates reading time in minutes from a raw Markdown body string.
 * Uses 220 WPM as average for technical content.
 */
export function readingTime(body: string | undefined): number {
    if (!body) return 1;
    const wordCount = body.trim().split(/\s+/).length;
    return Math.max(1, Math.ceil(wordCount / 220));
}
