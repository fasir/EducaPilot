import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';
import { FAQS } from '../data/educaPilotData';

export const InteractiveFaq: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openFaqIds, setOpenFaqIds] = useState<Record<string, boolean>>({
    f1: true,
    f2: true
  });

  const categories = ['All', 'General', 'School ERP', 'LMS', 'Test-Ex', 'Implementation'];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenFaqIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-slate-50 via-sky-50/20 to-indigo-50/20 relative overflow-hidden border-t border-slate-200">
      {/* Background Glassy Accent Orbs */}
      <div className="absolute top-1/4 right-10 w-[450px] h-[450px] bg-sky-200/30 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-indigo-200/30 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-heading text-center max-w-3xl mx-auto">

          <h2>
            Frequently Asked<br /><span>Questions</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Everything you need to know about migrating your school to EducaPilot's unified operating system.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="mt-10 space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search topics (e.g. biometric integration, Lite Steps, NEET question bank, fee invoicing)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white/90 backdrop-blur-md border border-white/90 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 shadow-md shadow-slate-200/40"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${activeCategory === cat
                    ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md shadow-indigo-600/20'
                    : 'bg-white/80 backdrop-blur-sm text-slate-600 hover:text-slate-900 border border-slate-200/80 shadow-xs'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordions */}
        <div className="mt-8 space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = !!openFaqIds[faq.id];

            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-white/85 backdrop-blur-md border border-white/90 overflow-hidden transition-all shadow-md shadow-slate-200/40 hover:shadow-lg"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors"
                >
                  <span className="text-sm font-bold text-slate-900 leading-snug">
                    {faq.question}
                  </span>
                  <div className={`w-7 h-7 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-indigo-600 bg-indigo-50 border-indigo-200' : 'text-slate-500'
                    }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="p-8 text-center text-slate-500 text-xs bg-white rounded-2xl border border-slate-200">
              No matching questions found for "{searchQuery}". Please contact our 24/7 institutional advisory desk.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
