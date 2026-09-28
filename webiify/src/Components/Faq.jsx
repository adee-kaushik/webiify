import { useState } from 'react';
import Reveal from './Reveal';
import { waLink } from '../data/Site';

const faqs = [
  {
    q: "How long does it take to get my website?",
    a: "Once you share your business details, we customize your chosen template and launch it in a few days. The exact time depends on your plan and how quickly you send your content.",
  },
  {
    q: "What do I need to give you?",
    a: "Your business name, logo, photos, services or menu with prices, address, phone and WhatsApp number, Instagram link, and opening hours. If you don't have something yet, tell us on WhatsApp.",
  },
  {
    q: "Do I need my own domain?",
    a: "Starter websites go live on a free subdomain. The Business and Pro plans include connecting your own domain, like yourbusiness.com. You buy the domain name and we connect it.",
  },
  {
    q: "Can I make changes after the website is live?",
    a: "Each plan includes changes before final delivery: 1 round in Starter, 2 rounds in Business, and unlimited while we build in Pro. Business and Pro also include support after launch.",
  },
  {
    q: "How do I pay?",
    a: "We'll share payment details on WhatsApp once we agree on the plan and design.",
  },
  {
    q: "My business type isn't listed. Can you still help?",
    a: "Message us on WhatsApp and tell us what you do. We're adding new templates regularly, and your request helps us decide which one to build next.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      id="faq"
      className="relative px-6 py-14 bg-linear-to-b from-brand-accent/5 to-brand-bg dark:from-gray-900 dark:to-brand-bg-dark transition-colors overflow-hidden"
    >
      <div className="relative z-10 max-w-2xl mx-auto">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold text-center text-brand-text dark:text-white">
            Questions? Answered.
          </h2>
        </Reveal>

        <div className="mt-10 space-y-3">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={item.q} delay={index * 0.05}>
                <div className="rounded-xl border border-brand-teal/15 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="w-full flex justify-between items-center gap-4 text-left px-5 py-4 font-body font-semibold text-brand-text dark:text-white"
                  >
                    {item.q}
                    <span className="text-brand-teal dark:text-brand-accent text-xl leading-none">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="px-5 pb-4 font-body text-sm text-brand-muted dark:text-gray-400 leading-relaxed animate-fade-in-up">
                      {item.a}
                    </p>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 text-center font-body text-brand-muted dark:text-gray-400">
            Still have a question?{" "}
            <a
              href={waLink("Hi, I have a question about Webstore.")}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-teal dark:text-brand-accent hover:underline"
            >
              Ask us on WhatsApp
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default FAQ;