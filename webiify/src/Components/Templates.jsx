import { useState } from 'react';
import Reveal from './Reveal';
import { categories, templates } from '../data/Templates';
import { plans } from '../data/plans';
import { waLink } from '../data/Site';

const fadeMask = {
  maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
  WebkitMaskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
};

function TemplateCard({ template }) {
  const plan = plans.find((p) => p.tier === template.level);

  return (
    <a
      href={template.demoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col h-full rounded-xl overflow-hidden border border-brand-teal/15 dark:border-gray-700 bg-white/60 dark:bg-gray-800/60 hover:-translate-y-1 hover:shadow-xl transition duration-300 cursor-pointer"
    >
      <div className="relative h-48 bg-brand-teal/10 dark:bg-gray-800 flex items-center justify-center text-brand-muted">
        {template.image ? (
          <img
            src={template.image}
            alt={`${template.name} template preview`}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <span>Preview</span>
        )}
        <span className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 dark:bg-gray-900/80 text-brand-teal flex items-center justify-center text-sm">
          ↗
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <p className="text-xs font-body text-brand-muted dark:text-gray-400">{template.category}</p>
        <h3 className="font-display text-xl font-semibold text-brand-text dark:text-white">
          {template.name}
        </h3>

        <div className="mt-2 flex items-baseline gap-2">
          <span className="font-body text-2xl font-semibold text-brand-accent">{plan.price}</span>
          <span className="font-body text-xs text-brand-muted dark:text-gray-400">
            {plan.tier} plan · one-time
          </span>
        </div>

        {plan.includes && (
          <p className="mt-4 font-body text-xs font-semibold text-brand-muted dark:text-gray-400">
            {plan.includes}
          </p>
        )}
        <ul className={`${plan.includes ? "mt-2" : "mt-4"} space-y-2`}>
          {plan.features.map((feature) => (
            <li key={feature} className="flex gap-2 font-body text-sm text-brand-text dark:text-gray-300">
              <span className="text-brand-teal dark:text-brand-accent">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
}

function Templates() {
  const [selected, setSelected] = useState("All");

  const chips = ["All", ...categories];
  const visible =
    selected === "All"
      ? templates
      : templates.filter((template) => template.category === selected);

  // Cards slide on their own only when there are more than 3. Fewer cards stay in a normal grid.
  const autoSlide = visible.length > 3;

  return (
    <section
      id="templates"
      className="relative px-6 py-14 bg-linear-to-b from-brand-teal/5 to-brand-bg dark:from-gray-900 dark:to-brand-bg-dark transition-colors overflow-hidden"
    >
      <div className="absolute top-10 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl animate-blob [animation-delay:1s]"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold text-center text-brand-text dark:text-white">
            Our Templates
          </h2>
          <p className="font-body text-center text-brand-muted dark:text-gray-400 mt-2 mb-8">
            Pick a design. We customize it with your business details and launch it.
          </p>
        </Reveal>

        {/* Categories: slide on their own, pause on hover or press. Tap one to filter. */}
        <div className="marquee overflow-hidden mb-10" style={fadeMask}>
          <div className="marquee-track flex w-max animate-marquee">
            {[...chips, ...chips].map((chip, index) => (
              <div
                key={`${chip}-${index}`}
                className={`pr-3 ${index >= chips.length ? "marquee-dup" : ""}`}
              >
                <button
                  onClick={() => setSelected(chip)}
                  className={`whitespace-nowrap px-5 py-2 rounded-full border font-body font-medium transition ${
                    selected === chip
                      ? "bg-brand-teal text-white border-brand-teal"
                      : "bg-transparent text-brand-text dark:text-gray-300 border-brand-teal/30 dark:border-gray-600 hover:border-brand-teal"
                  }`}
                >
                  {chip}
                </button>
              </div>
            ))}
          </div>
        </div>

        {visible.length > 0 ? (
          <>
            {autoSlide ? (
              <div className="marquee overflow-hidden py-4" style={fadeMask}>
                <div
                  className="marquee-track flex w-max animate-marquee"
                  style={{ animationDuration: `${visible.length * 8}s` }}
                >
                  {[...visible, ...visible].map((template, index) => (
                    <div
                      key={`${template.id}-${index}`}
                      className={`w-72 md:w-80 shrink-0 pr-6 ${index >= visible.length ? "marquee-dup" : ""}`}
                    >
                      <TemplateCard template={template} />
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {visible.map((template, index) => (
                  <Reveal key={template.id} delay={index * 0.1} className="h-full">
                    <TemplateCard template={template} />
                  </Reveal>
                ))}
              </div>
            )}

            <Reveal delay={0.2}>
              <div className="mt-10 text-center">
                <p className="font-body text-brand-muted dark:text-gray-400">
                  Don't see your business type? We're adding new templates regularly.
                </p>
                <a
                  href={waLink("Hi, I want a website for my business. My business type is: ")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 px-6 py-3 rounded-lg bg-brand-accent text-white font-body font-semibold hover:opacity-90"
                >
                  Tell us your business on WhatsApp
                </a>
              </div>
            </Reveal>
          </>
        ) : (
          <div className="text-center py-10">
            <p className="font-display text-xl text-brand-text dark:text-white">
              {selected} More Designs on the way.
            </p>
            <p className="font-body text-brand-muted dark:text-gray-400 mt-2">
              Tell us what you need and we'll build it for you.
            </p>
            <a
              href={waLink(`Hi, I want a website for my ${selected} business.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-6 py-3 rounded-lg bg-brand-accent text-white font-body font-semibold hover:opacity-90"
            >
              Message us on WhatsApp
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

export default Templates;