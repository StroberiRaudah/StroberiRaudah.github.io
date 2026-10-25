"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

type Options = { typeMs?: number; holdTicks?: number };

const reducedMotion = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  const query = window.matchMedia(reducedMotion);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(reducedMotion).matches,
    () => false,
  );
}

/** Types each phrase, holds it, deletes it, then moves to the next — forever. */
export function useTypewriter(phrases: readonly string[], { typeMs = 65, holdTicks = 28 }: Options = {}) {
  const reduced = usePrefersReducedMotion();
  const [state, setState] = useState({ index: 0, length: 0, deleting: false, hold: 0 });

  useEffect(() => {
    if (reduced) return;
    const timer = setInterval(() => {
      setState((s) => {
        const text = phrases[s.index];
        if (s.hold > 0) return { ...s, hold: s.hold - 1 };
        if (!s.deleting) {
          return s.length < text.length
            ? { ...s, length: s.length + 1 }
            : { ...s, deleting: true, hold: holdTicks };
        }
        return s.length > 0
          ? { ...s, length: s.length - 1 }
          : { index: (s.index + 1) % phrases.length, length: 0, deleting: false, hold: 5 };
      });
    }, typeMs);
    return () => clearInterval(timer);
  }, [phrases, typeMs, holdTicks, reduced]);

  return reduced ? phrases[0] : phrases[state.index].slice(0, state.length);
}
