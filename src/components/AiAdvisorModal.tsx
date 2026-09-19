import { useState } from 'react';
import { Sparkles, Send, X, Bot, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { generateContentWithGemini, hasGeminiApiKey } from '../services/gemini';
import { STAR_PACKAGES } from '../data/packages';

interface AiAdvisorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AiAdvisorModal({ isOpen, onClose }: AiAdvisorModalProps) {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isKeyConfigured = hasGeminiApiKey();

  const handleAskAi = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!query.trim() || isLoading) return;

    setIsLoading(true);
    setError(null);
    setResponse('');

    try {
      const packageListText = STAR_PACKAGES.map(
        (p) => `${p.name}: ${p.starsDisplay} Stars - ${p.priceDisplay}`
      ).join(', ');

      const prompt = `You are a helpful Bangla/English assistant for "FB Star Lagbe" (a trusted Facebook Stars service in Bangladesh).
Our available packages are: ${packageListText}.
User question: "${query}".
Answer politely and clearly in natural conversational Bangla (with English terminology if needed). Recommend the best star package based on their requirement, explain the pricing or benefits, and remind them they can easily order via WhatsApp. Keep it concise (3-4 sentences max).`;

      const aiResponse = await generateContentWithGemini(prompt);
      setResponse(aiResponse);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'AI পরামর্শ নিতে সমস্যা হয়েছে';
      setError(msg);
    } finally {
      setIsLoading(false);
    }
  };

  const sampleQuestions = [
    'গেমিং লাইভ স্ট্রিমের জন্য কোন প্যাকেজ ভালো?',
    'সবচেয়ে সাশ্রয়ী স্টার প্যাকেজ কোনটি?',
    'আমি নতুন ক্রিয়েটর, কত স্টার নেওয়া উচিত?',
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-blue-100 overflow-hidden z-10 flex flex-col max-h-[90vh]"
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 p-4 sm:p-5 text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center border border-white/20">
                  <Sparkles className="w-5 h-5 text-amber-300" />
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg flex items-center gap-2">
                    AI Star Advisor
                    <span className="text-[10px] bg-amber-400 text-slate-900 font-extrabold px-1.5 py-0.5 rounded-full uppercase">
                      Gemini
                    </span>
                  </h3>
                  <p className="text-xs text-blue-100">
                    আপনার প্রয়োজন অনুযায়ী সেরা প্যাকেজ সাজেশন নিন
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-4 text-slate-700 text-sm">
              {!isKeyConfigured && (
                <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-800 text-xs flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Vercel Environment Variable:</span>
                    <p className="mt-0.5">
                      Vercel ড্যাশবোর্ডে <code>VITE_GEMINI_API_KEY</code> যুক্ত করলে সরাসরি গুগল জেমিনি এআই চালু হয়ে যাবে।
                    </p>
                  </div>
                </div>
              )}

              {/* Sample Queries */}
              <div>
                <p className="text-xs text-slate-500 font-semibold mb-2">
                  দ্রুত প্রশ্ন নির্বাচন করুন:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {sampleQuestions.map((q) => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => setQuery(q)}
                      className="text-xs bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-700 px-2.5 py-1.5 rounded-lg border border-slate-200/80 transition-colors text-left"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>

              {/* AI Output Area */}
              {response && (
                <div className="p-4 bg-blue-50/70 border border-blue-200/80 rounded-xl space-y-2">
                  <div className="flex items-center gap-1.5 text-blue-800 font-semibold text-xs">
                    <Bot className="w-4 h-4 text-blue-600" />
                    <span>Gemini AI এর উত্তর:</span>
                  </div>
                  <p className="text-slate-800 leading-relaxed whitespace-pre-line text-sm">
                    {response}
                  </p>
                </div>
              )}

              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs">
                  {error}
                </div>
              )}

              {/* Form Input */}
              <form onSubmit={handleAskAi} className="pt-2">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="যেমন: আমার পেইজে ৫০০০ স্টার লাগবে..."
                    className="flex-1 px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500"
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !query.trim()}
                    className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white rounded-xl font-semibold text-sm flex items-center gap-1.5 shadow-sm transition-colors"
                  >
                    {isLoading ? (
                      <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span className="hidden sm:inline">জানুন</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
