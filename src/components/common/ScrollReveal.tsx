import React, { useEffect } from 'react';

interface ScrollRevealManagerProps {
  currentPath: string;
}

export const ScrollRevealManager: React.FC<ScrollRevealManagerProps> = ({ currentPath }) => {
  useEffect(() => {
    // Select all elements designated for scroll reveal
    const revealElements = document.querySelectorAll(
      '.reveal-on-scroll, .reveal-left, .reveal-right, .reveal-scale'
    );

    if (!('IntersectionObserver' in window)) {
      // Fallback if IntersectionObserver is unsupported
      revealElements.forEach((el) => el.classList.add('is-revealed'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            // Unobserve after entrance animation triggers
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1,
      }
    );

    revealElements.forEach((el) => {
      // If already in viewport on load, immediately reveal
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.95 && rect.bottom > 0) {
        el.classList.add('is-revealed');
      } else {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [currentPath]);

  return null;
};
