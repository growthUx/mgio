/* MarketGrowth.io - Motion (framer-motion's vanilla API), v12.42.2 via CDN.
   Loaded as a module so pages can animate without a build step. Exposes the
   library on window.Motion, and wires the opt-in helpers below.

   Opt in from markup — nothing animates unless a page asks for it:
     <div data-motion="reveal">            fade + rise once on scroll into view
     <div data-motion="reveal" data-motion-delay="0.1">
   Respects prefers-reduced-motion: reveal targets are left visible, unanimated. */
import * as Motion from "https://cdn.jsdelivr.net/npm/motion@12.42.2/+esm";

window.Motion = Motion;

(function () {
  var targets = document.querySelectorAll('[data-motion="reveal"]');
  if (!targets.length) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  targets.forEach(function (el) {
    el.style.opacity = "0";
    Motion.inView(
      el,
      function () {
        Motion.animate(
          el,
          { opacity: [0, 1], transform: ["translateY(16px)", "translateY(0px)"] },
          {
            duration: 0.5,
            delay: parseFloat(el.dataset.motionDelay) || 0,
            easing: [0.16, 1, 0.3, 1],
          }
        );
      },
      { amount: 0.2 }
    );
  });
})();
