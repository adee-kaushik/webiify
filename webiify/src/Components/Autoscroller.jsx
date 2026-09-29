import { useEffect, useRef, useState } from 'react';

const fadeMask = {
  maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
  WebkitMaskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
};

const arrowClass =
  "hidden md:flex absolute top-1/2 -translate-y-1/2 z-10 w-9 h-9 items-center justify-center rounded-full border border-brand-teal/20 dark:border-white/20 bg-brand-bg dark:bg-gray-800 text-brand-text dark:text-white hover:border-brand-teal";

// A row that slides on its own AND can be scrolled by hand.
// Auto-slide pauses when you touch, scroll, or hover it, and starts again a moment later.
function AutoScroller({
  items,
  getKey,
  renderItem,
  speed = 40, // pixels per second
  itemClassName = "",
  className = "",
  scrollerClassName = "",
}) {
  const ref = useRef(null);
  const pos = useRef(0);
  const paused = useRef(false);
  const hovering = useRef(false);
  const timer = useRef(null);

  const [reduced] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  // the list is shown twice so the loop has no gap. With reduced motion we show it once.
  const copies = reduced ? [0] : [0, 1];

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;
    let frame;
    let last = performance.now();

    function tick(now) {
      const dt = Math.min((now - last) / 1000, 0.1);
      last = now;
      if (!paused.current) {
        pos.current += speed * dt;
        const half = el.scrollWidth / 2;
        if (half > 0 && pos.current >= half) pos.current -= half;
        el.scrollLeft = pos.current;
      }
      frame = requestAnimationFrame(tick);
    }

    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(timer.current);
    };
  }, [speed, reduced, items.length]);

  function pause() {
    paused.current = true;
    clearTimeout(timer.current);
  }

  function resumeLater(delay = 1500) {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      if (hovering.current) return;
      if (ref.current) pos.current = ref.current.scrollLeft;
      paused.current = false;
    }, delay);
  }

  function handleScroll() {
    const el = ref.current;
    if (!el || !paused.current) return;
    const half = el.scrollWidth / 2;
    if (!reduced && half > 0 && el.scrollLeft >= half) el.scrollLeft -= half;
    pos.current = el.scrollLeft;
    resumeLater(1500);
  }

  function nudge(direction) {
    const el = ref.current;
    if (!el) return;
    pause();
    el.scrollBy({ left: direction * 260, behavior: "smooth" });
    resumeLater(2500);
  }

  return (
    <div className={`relative ${className}`}>
      <div
        ref={ref}
        onScroll={handleScroll}
        onWheel={() => {
          pause();
          resumeLater(1500);
        }}
        onTouchStart={pause}
        onTouchEnd={() => resumeLater(1500)}
        onPointerEnter={(e) => {
          if (e.pointerType === "mouse") {
            hovering.current = true;
            pause();
          }
        }}
        onPointerLeave={(e) => {
          if (e.pointerType === "mouse") {
            hovering.current = false;
            resumeLater(300);
          }
        }}
        className={`flex overflow-x-auto scrollbar-hide overscroll-x-contain ${scrollerClassName}`}
        style={fadeMask}
      >
        {copies.map((copy) =>
          items.map((item, index) => (
            <div key={`${copy}-${getKey(item, index)}`} className={`shrink-0 ${itemClassName}`}>
              {renderItem(item)}
            </div>
          ))
        )}
      </div>

      <button aria-label="Scroll left" onClick={() => nudge(-1)} className={`${arrowClass} left-0`}>
        ‹
      </button>
      <button aria-label="Scroll right" onClick={() => nudge(1)} className={`${arrowClass} right-0`}>
        ›
      </button>
    </div>
  );
}

export default AutoScroller;