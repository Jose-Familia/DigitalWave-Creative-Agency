const themeButton = document.querySelector(".theme-toggle");
const systemTheme = matchMedia("(prefers-color-scheme: dark)");
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
  const theme = preferredTheme ?? (systemTheme.matches ? "dark" : "light");
  const isDark = theme === "dark";
  document.documentElement.dataset.theme = theme;
  themeButton.textContent = isDark ? "☾" : "☀";
  themeButton.setAttribute("aria-pressed", String(isDark));
}

applyTheme();
themeButton.hidden = false;

themeButton.addEventListener("click", () => {
  preferredTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  applyTheme();

  try {
    localStorage.setItem("dw-theme", preferredTheme);
  } catch {
    // Keep the selected theme on this page if storage is unavailable.
  }
});

systemTheme.addEventListener("change", applyTheme);
