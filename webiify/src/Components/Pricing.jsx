import Reveal from './Reveal';
import { plans } from '../data/plans';
import { waLink } from '../data/Site';

function Pricing() {
  return (
    <section
      id="pricing"
      className="relative px-6 py-14 bg-linear-to-b from-brand-bg to-brand-accent/10 dark:from-brand-bg-dark dark:to-brand-accent/10 transition-colors overflow-hidden"
    >
      <div className="absolute top-20 -left-16 w-64 h-64 bg-brand-teal/10 rounded-full blur-3xl animate-blob [animation-delay:4s]"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold text-center text-brand-text dark:text-white">
            Simple Pricing
          </h2>
          <p className="font-body text-center text-brand-muted dark:text-gray-400 mt-2">
            One-time price per website. Pick a plan, share your details, and we launch it.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {plans.map((plan, index) => (
            <Reveal key={plan.tier} delay={index * 0.1} className="h-full">
              <div
                className={`relative h-full flex flex-col rounded-xl p-6 ${
                  plan.recommended
                    ? "bg-brand-teal/5 dark:bg-gray-800 shadow-lg"
                    : "border border-brand-teal/15 dark:border-gray-700"
                }`}
              >
                {plan.recommended && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-accent text-white text-xs font-body font-semibold px-3 py-1 rounded-full">
                    Recommended
                  </span>
                )}

                <h3 className="font-display text-xl font-semibold text-brand-text dark:text-white">{plan.tier}</h3>
                <p className="font-body text-3xl font-semibold text-brand-accent mt-2">{plan.price}</p>

                <div className="mt-5">
                  {plan.includes && (
                    <p className="font-body text-xs font-semibold text-brand-muted dark:text-gray-400 mb-2">
                      {plan.includes}
                    </p>
                  )}
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-2 font-body text-sm text-brand-text dark:text-gray-300">
                        <span className="text-brand-teal dark:text-brand-accent">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-6">
                  <a
                    href={waLink(`Hi, I want the ${plan.tier} plan (${plan.price}) from Webstore.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-center px-5 py-3 rounded-lg font-body font-semibold ${
                      plan.recommended
                        ? "bg-brand-accent text-white hover:opacity-90"
                        : "border border-brand-teal/40 dark:border-white/30 text-brand-text dark:text-white hover:border-brand-teal"
                    }`}
                  >
                    Get {plan.tier}
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;