/* Soft presence — header scroll state & reveal */

(() => {
  const header = document.querySelector(".site-header");
  if (header) {
    const onScroll = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const reveal = document.querySelectorAll(
    ".step, .feature-panel, .plus-note, .privacy-points li, .final-inner"
  );

  if (!("IntersectionObserver" in window) || !reveal.length) return;

  reveal.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(10px)";
    el.style.transition = "opacity 180ms cubic-bezier(0.22, 1, 0.36, 1), transform 180ms cubic-bezier(0.22, 1, 0.36, 1)";
  });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
        io.unobserve(el);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
  );

  reveal.forEach((el) => io.observe(el));
})();
