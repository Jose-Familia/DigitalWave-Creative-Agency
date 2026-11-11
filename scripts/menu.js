const menuButton = document.querySelector(".hamburger");
const menuLinks = document.getElementById(menuButton.getAttribute("aria-controls"));
const compactNavigation = matchMedia("(max-width: 820px)");

function setMenuExpanded(expanded) {
  menuButton.setAttribute("aria-expanded", String(expanded));
  menuLinks.hidden = compactNavigation.matches && !expanded;
}

setMenuExpanded(false);
document.documentElement.classList.add("menu-ready");

menuButton.addEventListener("click", () => {
  setMenuExpanded(menuLinks.hidden);
});

document.addEventListener("focusin", (event) => {
  if (event.target !== menuButton && !menuLinks.contains(event.target)) {
    setMenuExpanded(false);
  }
});

document.addEventListener("click", (event) => {
  if (!menuButton.contains(event.target) && !menuLinks.contains(event.target)) {
    if (compactNavigation.matches && menuLinks.contains(document.activeElement)) {
      menuButton.focus();
    }
    setMenuExpanded(false);
  }
});

menuLinks.addEventListener("keydown", closeMenuOnEscape);
menuButton.addEventListener("keydown", closeMenuOnEscape);

function closeMenuOnEscape(event) {
  if (event.key === "Escape" && compactNavigation.matches && !menuLinks.hidden) {
    menuButton.focus();
    setMenuExpanded(false);
  }
}

compactNavigation.addEventListener("change", () => {
  if (compactNavigation.matches && menuLinks.contains(document.activeElement)) {
    menuButton.focus();
  }
  setMenuExpanded(false);
});
