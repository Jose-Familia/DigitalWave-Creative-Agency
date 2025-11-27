// Theme toggle: persists preference in localStorage and updates document
document.addEventListener("DOMContentLoaded", () => {
  const toggles = Array.from(document.querySelectorAll(".theme-toggle"));
  const root = document.documentElement;
  const saved = localStorage.getItem("dw-theme");
  const prefersLight =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches;
  const current = saved || (prefersLight ? "light" : "dark");

  function updateToggles(t) {
    toggles.forEach((btn) => {
      btn.textContent = t === "dark" ? "🌙" : "☀️";
      btn.setAttribute("aria-pressed", t === "dark" ? "true" : "false");
      btn.setAttribute(
        "aria-label",
        t === "dark" ? "Cambiar a tema claro" : "Cambiar a tema oscuro"
      );
    });
  }

  function applyTheme(t) {
    root.setAttribute("data-theme", t);
    updateToggles(t);
  }

  applyTheme(current);

  toggles.forEach((btn) => {
    btn.addEventListener("click", () => {
      const next =
        root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
      localStorage.setItem("dw-theme", next);
    });
  });
});
