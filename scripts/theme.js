const systemTheme = matchMedia("(prefers-color-scheme: dark)");
const themeRoot = document.documentElement;
let preferredTheme;

try {
  preferredTheme = localStorage.getItem("dw-theme");
} catch {
  // The theme can still be changed when storage is unavailable.
}

if (preferredTheme !== "dark" && preferredTheme !== "light") {
  preferredTheme = null;
}

function applyTheme() {
  themeRoot.dataset.theme = preferredTheme ?? (systemTheme.matches ? "dark" : "light");
}

applyTheme();

document.addEventListener("DOMContentLoaded", () => {
  const themeButton = document.querySelector(".theme-toggle");

  function updateThemeButton() {
    const isDark = themeRoot.dataset.theme === "dark";
    themeButton.textContent = isDark ? "☾" : "☼";
    themeButton.setAttribute("aria-pressed", String(isDark));
  }

  updateThemeButton();
  themeButton.hidden = false;

  themeButton.addEventListener("click", () => {
    preferredTheme = themeRoot.dataset.theme === "dark" ? "light" : "dark";
    applyTheme();
    updateThemeButton();

    try {
      localStorage.setItem("dw-theme", preferredTheme);
    } catch {
      // Keep the selected theme on this page if storage is unavailable.
    }
  });

  systemTheme.addEventListener("change", () => {
    applyTheme();
    updateThemeButton();
  });
});
