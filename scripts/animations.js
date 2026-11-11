const gsapScript = document.getElementById("gsap-runtime");
const navigationEntry = performance.getEntriesByType("navigation")[0];
const directVisit = navigationEntry?.type === "navigate" &&
  (!document.referrer || new URL(document.referrer).origin !== location.origin);
let playedIntro = false;

function enableMotion() {
  const { gsap } = window;
  const menu = document.querySelector(".hamburger");
  const menuLinks = document.getElementById(menu.getAttribute("aria-controls"));
  const heroImage = document.querySelector(".hero-art img");
  const heroSweep = document.querySelector(".hero-sweep");
  const processTrace = document.querySelector(".process-trace");

  gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", (context) => {
    const revealHero = context.add(null, () => {
      if (playedIntro || performance.now() > 1500) return;

      if (!heroImage.complete) {
        heroImage.addEventListener("load", revealHero, { once: true });
        return;
      }

      if (!heroImage.naturalWidth || heroImage.getBoundingClientRect().bottom <= 0) return;

      playedIntro = true;
      gsap.timeline()
        .fromTo(heroSweep, { xPercent: -110 }, {
          xPercent: 110,
          duration: 0.74,
          ease: "power2.inOut",
          clearProps: "transform",
        }, 0)
        .to(heroSweep, { opacity: 0.7, duration: 0.22 }, 0.08)
        .to(heroSweep, { opacity: 0, duration: 0.38, clearProps: "opacity" }, 0.34);
    });

    if (heroSweep && directVisit) revealHero();

    const openMenu = context.add(null, () => {
      if (menu.getAttribute("aria-expanded") !== "true") return;

      gsap.fromTo(menuLinks, { y: -6, opacity: 0.75 }, {
        y: 0,
        opacity: 1,
        duration: 0.22,
        ease: "power2.out",
        overwrite: "auto",
        clearProps: "opacity,transform",
      });
    });

    menu.addEventListener("click", openMenu);

    let processObserver;
    if (processTrace && "IntersectionObserver" in window) {
      const drawTrace = context.add(null, () => {
        gsap.from(processTrace, {
          scaleY: 0.18,
          duration: 0.62,
          ease: "expo.out",
          clearProps: "transform",
        });
      });

      processObserver = new IntersectionObserver(([entry], observer) => {
        if (!entry.isIntersecting) return;

        observer.disconnect();
        drawTrace();
      }, { threshold: 0.24 });

      processObserver.observe(processTrace.parentElement);
    }

    return () => {
      heroImage?.removeEventListener("load", revealHero);
      menu.removeEventListener("click", openMenu);
      processObserver?.disconnect();
    };
  });
}

if (window.gsap) {
  enableMotion();
} else {
  gsapScript.addEventListener("load", enableMotion, { once: true });
}
