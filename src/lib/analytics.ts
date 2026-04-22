/**
 * Centralized helper for triggering Google Analytics 4 events securely.
 * Checks for the presence of window.gtag to prevent errors.
 */
export const trackEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
};
