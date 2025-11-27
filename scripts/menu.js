// Menu hamburguesa
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const body = document.body;

  if (!hamburger || !navLinks) return;

  // Toggle menu al hacer click en el hamburger
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
    hamburger.setAttribute(
      "aria-expanded",
      hamburger.classList.contains("active")
    );

    // Prevenir scroll cuando el menu está abierto
    if (navLinks.classList.contains("active")) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
    }
  });

  // Cerrar menu al hacer click en un link
  const navItems = navLinks.querySelectorAll("a");
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
      body.style.overflow = "";
    });
  });

  // Cerrar menu al presionar ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navLinks.classList.contains("active")) {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
      body.style.overflow = "";
    }
  });

  // Cerrar menu al hacer click fuera
  document.addEventListener("click", (e) => {
    if (
      navLinks.classList.contains("active") &&
      !navLinks.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
      body.style.overflow = "";
    }
  });

  // Cerrar menu al cambiar el tamaño de ventana (desktop)
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768 && navLinks.classList.contains("active")) {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
      body.style.overflow = "";
    }
  });
});
