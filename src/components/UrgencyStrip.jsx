import React, { useEffect, useMemo, useRef, useState } from 'react';
import LoginPage from './LoginPage';

const TEN_MINUTES_MS = 10 * 60 * 1000;

const formatRemaining = (ms) => {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
  const seconds = String(totalSeconds % 60).padStart(2, '0');
  return `${minutes}:${seconds}`;
};

const UrgencyStrip = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [remainingMs, setRemainingMs] = useState(TEN_MINUTES_MS);
  const [showModal, setShowModal] = useState(false);
  const endTimeRef = useRef(Date.now() + TEN_MINUTES_MS);

  // Reset timer when it hits 0
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const nextRemaining = endTimeRef.current - now;
      if (nextRemaining <= 0) {
        endTimeRef.current = now + TEN_MINUTES_MS;
        setRemainingMs(TEN_MINUTES_MS);
      } else {
        setRemainingMs(nextRemaining);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Show after hero is out of view
  useEffect(() => {
    const hero = document.getElementById('hero');
    if (!hero) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(!entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const timeLabel = useMemo(() => formatRemaining(remainingMs), [remainingMs]);

  if (!isVisible) return null;

  return (
    <>
      {/* Sticky strip - keep z below MoveToTop (which uses z-50) */}
      <div className="fixed left-1/2 -translate-x-1/2 bottom-4 md:bottom-6 w-[80%] md:w-[80%] z-40">
        <div className="flex items-center justify-between gap-3 md:gap-4 bg-[#0b1f2a] text-white rounded-lg shadow-xl px-4 py-3 md:px-6 md:py-4">
          <div className="flex items-center gap-2 text-sm md:text-base">
            <span className="font-semibold">Urgency Creation:</span>
            <span aria-live="polite" className="tabular-nums tracking-wide">{timeLabel}</span>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="ml-auto bg-[#27b018] hover:bg-[#1f8d13] text-white font-semibold text-sm md:text-base px-4 py-2 rounded-md transition-colors"
          >
            Register
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60" onClick={() => setShowModal(false)} />

          <div className="relative z-10 w-[92%] md:w-[640px] max-h-[90vh] overflow-y-auto bg-white rounded-xl shadow-2xl p-4 md:p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg md:text-xl font-bold text-[#0b1f2a]">Register</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-[#0b1f2a] hover:text-black rounded-md p-1.5"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <LoginPage embedded={true} />
          </div>
        </div>
      )}
    </>
  );
};

export default UrgencyStrip;


