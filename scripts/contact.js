// Simple client-side validation for contact form
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  if (!form) return;

  function showError(field, message) {
    const err = form.querySelector('.error[data-for="' + field.id + '"]');
    if (err) err.textContent = message;
    field.classList.toggle("invalid", !!message);
  }

  function validateEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = form.elements["name"];
    const email = form.elements["email"];
    const message = form.elements["message"];
    let ok = true;

    // Clear previous
    [name, email, message].forEach((f) => showError(f, ""));

    if (!name.value.trim()) {
      showError(name, "Por favor ingresa tu nombre.");
      ok = false;
    }
    if (!email.value.trim() || !validateEmail(email.value)) {
      showError(email, "Introduce un correo válido.");
      ok = false;
    }
    if (!message.value.trim() || message.value.trim().length < 10) {
      showError(message, "Escribe un mensaje de al menos 10 caracteres.");
      ok = false;
    }

    const status = document.getElementById("formStatus");
    if (!ok) {
      if (status) {
        status.textContent = "Por favor corrige los errores antes de enviar.";
        status.className = "form-status error";
      }
      return;
    }

    // Simulate send
    if (status) {
      status.textContent = "Enviando...";
      status.className = "form-status sending";
    }

    setTimeout(function () {
      if (status) {
        status.textContent =
          "Mensaje enviado. Gracias, te contactaremos pronto.";
        status.className = "form-status success";
      }
      form.reset();
    }, 900);
  });
});
