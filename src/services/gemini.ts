/**
 * Gemini API Client Utility for Vite & Vercel
 * Reads API key safely from Vite environment variables
 */

export const getGeminiApiKey = (): string => {
  return import.meta.env.VITE_GEMINI_API_KEY || '';
};

export const hasGeminiApiKey = (): boolean => {
  const key = getGeminiApiKey();
  return Boolean(key && key.trim().length > 0);
};

export interface GeminiGenerateOptions {
  model?: string;
  temperature?: number;
  maxOutputTokens?: number;
}

/**
 * Call Google Gemini REST API directly using standard client fetch
 * Compatible with Vercel SPA deployment without needing Node backend
 */
export async function generateContentWithGemini(
  prompt: string,
  options: GeminiGenerateOptions = {}
): Promise<string> {
  const apiKey = getGeminiApiKey();
  if (!apiKey) {
    throw new Error(
      'VITE_GEMINI_API_KEY is not configured. Please add VITE_GEMINI_API_KEY to your Vercel Environment Variables.'
    );
  }

  const model = options.model || 'gemini-2.5-flash';
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      contents: [
        {
          role: 'user',
          parts: [{ text: prompt }],
        },
      ],
      generationConfig: {
        temperature: options.temperature ?? 0.7,
        maxOutputTokens: options.maxOutputTokens ?? 1000,
      },
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    const message = errorData?.error?.message || `Request failed with status ${response.status}`;
    throw new Error(`Gemini API Error: ${message}`);
  }

  const data = await response.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) {
    throw new Error('No response returned from Gemini API');
  }

  return text;
}
