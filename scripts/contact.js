const contactForm = document.getElementById("contactForm");
const contactStatus = document.getElementById("formStatus");
const serviceField = contactForm.elements.namedItem("service");
const requestedService = new URLSearchParams(location.search).get("servicio");

if (Array.from(serviceField.options).some((option) => option.value === requestedService)) {
  serviceField.value = requestedService;
}

const contactFields = [
  [contactForm.elements.namedItem("name"), (field) =>
    field.value.trim() ? "" : "Escribe tu nombre."],
  [contactForm.elements.namedItem("email"), (field) =>
    field.validity.valid ? "" : "Escribe un correo electrónico válido."],
  [serviceField, (field) =>
    field.value ? "" : "Selecciona un servicio."],
  [contactForm.elements.namedItem("message"), (field) =>
    field.value.trim().length >= 10 ? "" : "Escribe al menos 10 caracteres."],
];

function validateContactField(field, getMessage) {
  const message = getMessage(field);
  const error = document.getElementById(`${field.id}-error`);
  error.textContent = message;
  error.hidden = !message;

  if (message) {
    field.setAttribute("aria-invalid", "true");
    field.setAttribute("aria-describedby", error.id);
  } else {
    field.removeAttribute("aria-invalid");
    field.removeAttribute("aria-describedby");
  }

  return !message;
}

for (const [field, getMessage] of contactFields) {
  field.addEventListener("input", () => {
    if (field.hasAttribute("aria-invalid")) validateContactField(field, getMessage);
  });
}

contactForm.addEventListener("input", () => {
  contactStatus.textContent = "";
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const invalidFields = contactFields.filter(([field, getMessage]) =>
    !validateContactField(field, getMessage)
  );

  if (invalidFields.length) {
    contactStatus.textContent = "Revisa los campos marcados.";
    invalidFields[0][0].focus();
    return;
  }

  contactStatus.textContent = "Consulta validada en este navegador. El modo de demostración no envía mensajes.";
});

contactForm.noValidate = true;
contactForm.querySelector("fieldset").disabled = false;
