# DigitalWave · Agencia digital creativa

Sitio de demostración de una agencia creativa. Presenta su oferta de desarrollo web, identidad visual, marketing digital, diseño UX/UI y consultoría. Los testimonios ilustran cómo se mostrarían las reseñas en el sitio.

## Ejecutar en local

```bash
git clone https://github.com/Jose-Familia/DigitalWave-Creative-Agency.git
cd DigitalWave-Creative-Agency
python3 -m http.server 8000
```

Abre [http://localhost:8000](http://localhost:8000). El sitio usa HTML, CSS y JavaScript sin dependencias de instalación ni paso de compilación. Puedes usar cualquier servidor estático.

## Recorrer el sitio

- [Inicio](index.html) presenta la agencia, su proceso y sus servicios destacados.
- [Servicios](pages/Servicios.html) enlaza cada servicio a la consulta con la opción correspondiente preseleccionada.
- [Testimonios](pages/Testimonios.html) y [FAQ](pages/FaQ.html) muestran ejemplos de reseñas y preguntas frecuentes.
- [Contacto](pages/Contactos.html) valida la consulta en el navegador. Es una demostración que no envía ni guarda los datos del formulario. Para probarla, usa datos de ejemplo.

El tema inicial sigue la preferencia del sistema. El botón «Tema oscuro» permite cambiarlo y conserva la elección cuando el navegador permite usar `localStorage`. En pantallas pequeñas, el botón «Menú» abre la navegación y se puede cerrar con Escape. Las animaciones respetan la preferencia de movimiento reducido.

Los estilos compartidos viven en `index.css`. Los scripts de navegación, tema, animaciones y contacto están en `scripts/`. La [documentación del proyecto](docs/README.md) recoge el alcance y los requisitos.

## Autor

[José Familia](https://github.com/Jose-Familia)
