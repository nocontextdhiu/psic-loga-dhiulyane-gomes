import { useEffect, useRef } from "react";

export function useScrollReveal(onReveal?: () => void) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (onReveal) onReveal();
          el.classList.add("animate-fade-in");
          el.classList.remove("opacity-0");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

const Section = ({ children, className = "", id, onReveal }: { children: React.ReactNode; className?: string; id?: string; onReveal?: () => void }) => {
  const ref = useScrollReveal(onReveal);
  return (
    <section id={id} ref={ref} className={`opacity-0 ${className}`}>
      {children}
    </section>
  );
};

export default Section;
