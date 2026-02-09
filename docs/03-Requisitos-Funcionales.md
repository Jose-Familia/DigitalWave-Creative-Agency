# Requisitos Funcionales

## Introducción

Los requisitos funcionales especifican el comportamiento observable del sistema, definiendo qué funciones debe ejecutar y cómo debe responder a las acciones del usuario. Cada requisito se documenta con descripción, precondiciones, flujos de usuario y postcondiciones.

---

## RF1: Navegación del Sitio

**Descripción:** El usuario debe poder navegar entre las diferentes páginas del sitio de forma sencilla.

| Aspecto             | Detalle                                                                                                                                                                       |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Actores**         | Visitante del sitio                                                                                                                                                           |
| **Precondición**    | Sitio cargado correctamente                                                                                                                                                   |
| **Flujo Principal** | 1. Usuario visualiza menú de navegación<br/>2. Usuario hace clic en enlace de página<br/>3. Sistema carga la página correspondiente<br/>4. Contenido se muestra correctamente |
| **Postcondición**   | Página objetivo se muestra completa                                                                                                                                           |
| **Excepciones**     | Página no encontrada → Mostrar error 404                                                                                                                                      |
| **Prioridad**       | **ALTA**                                                                                                                                                                      |

---

## RF2: Visualización de Servicios

**Descripción:** Los usuarios deben poder ver el listado completo de servicios con detalles.

| Aspecto             | Detalle                                                                                                                                                                                          |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Actores**         | Visitante                                                                                                                                                                                        |
| **Precondición**    | Estar en página de Servicios (Servicios.html)                                                                                                                                                    |
| **Flujo Principal** | 1. Sistema carga página de servicios<br/>2. Se muestran categorías de servicios<br/>3. Para cada servicio se muestra: nombre, descripción, icono<br/>4. Opcionalmente expandir para más detalles |
| **Postcondición**   | Usuario obtiene información clara de ofertas                                                                                                                                                     |
| **Datos Mostrados** | Nombre, descripción, características del servicio                                                                                                                                                |
| **Prioridad**       | **ALTA**                                                                                                                                                                                         |

---

## RF3: Consulta de Testimonios

**Descripción:** El sitio debe mostrar testimonios y reseñas de clientes anteriores.

| Aspecto                  | Detalle                                                                                                                                                                                                          |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Actores**              | Visitante                                                                                                                                                                                                        |
| **Precondición**         | Estar en página de Testimonios (Testimonios.html)                                                                                                                                                                |
| **Flujo Principal**      | 1. Sistema carga página de testimonios<br/>2. Se muestran testimonios en cards/bloques<br/>3. Para cada testimonio: nombre cliente, empresa, cargo, reseña, valoración<br/>4. Se puede navegar entre testimonios |
| **Postcondición**        | Usuario valida la credibilidad de la agencia                                                                                                                                                                     |
| **Información Mostrada** | Nombre, empresa, cargo, texto testimonial, calificación                                                                                                                                                          |
| **Prioridad**            | **ALTA**                                                                                                                                                                                                         |

---

## RF4: Formulario de Contacto

**Descripción:** Los usuarios pueden enviar mensajes de contacto a través de un formulario funcional.

| Aspecto             | Detalle                                                                                                                                                                                                                                                                                                                                                       |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Actores**         | Visitante, Sistema de procesamiento                                                                                                                                                                                                                                                                                                                           |
| **Precondición**    | Estar en página de Contacto (Contactos.html)                                                                                                                                                                                                                                                                                                                  |
| **Flujo Principal** | 1. Usuario visualiza formulario con campos:<br/> - Nombre (text, requerido)<br/> - Email (email, requerido)<br/> - Asunto (text, requerido)<br/> - Mensaje (textarea, requerido)<br/>2. Usuario completa campos<br/>3. Usuario hace clic en "Enviar"<br/>4. Sistema valida datos<br/>5. Si es válido → Procesa mensaje<br/>6. Muestra confirmación al usuario |
| **Validaciones**    | Campos requeridos, formato email válido                                                                                                                                                                                                                                                                                                                       |
| **Postcondición**   | Mensaje registrado y usuario recibe confirmación                                                                                                                                                                                                                                                                                                              |
| **Excepciones**     | Si falta campo → Mostrar error específico                                                                                                                                                                                                                                                                                                                     |
| **Prioridad**       | **ALTA**                                                                                                                                                                                                                                                                                                                                                      |

---

## RF5: Consulta de Preguntas Frecuentes

**Descripción:** Los usuarios pueden acceder a respuestas de preguntas comunes con interfaz desplegable.

| Aspecto             | Detalle                                                                                                                                                                                                                      |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Actores**         | Visitante                                                                                                                                                                                                                    |
| **Precondición**    | Estar en página FAQ (FaQ.html)                                                                                                                                                                                               |
| **Flujo Principal** | 1. Sistema muestra lista de preguntas cerradas<br/>2. Usuario hace clic en pregunta<br/>3. Se despliega respuesta <br/>4. Usuario puede cerrar haciendo clic nuevamente<br/>5. Solo una pregunta abierta a la vez (opcional) |
| **Interacción**     | Acordeones expandibles/contraíbles                                                                                                                                                                                           |
| **Postcondición**   | Usuario resuelve dudas comunes sin contactar                                                                                                                                                                                 |
| **Prioridad**       | **MEDIA**                                                                                                                                                                                                                    |

---

## RF6: Cambio de Tema Visual

**Descripción:** Los usuarios pueden alternar entre temas claros (Light) y oscuros (Dark).

| Aspecto             | Detalle                                                                                                                                                                                                           |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Actores**         | Visitante                                                                                                                                                                                                         |
| **Precondición**    | Sitio cargado                                                                                                                                                                                                     |
| **Flujo Principal** | 1. Usuario ubica botón de tema (ícono sol/luna)<br/>2. Usuario hace clic en botón<br/>3. Sistema cambia paleta de colores<br/>4. Preferencia se guarda en localStorage<br/>5. Tema se mantiene en futuras visitas |
| **Comportamiento**  | - Cambio inmediato<br/>- Persistencia en la sesión<br/>- Aplicación a todos los elementos                                                                                                                         |
| **Postcondición**   | Tema cambiado y guardado                                                                                                                                                                                          |
| **Prioridad**       | **MEDIA**                                                                                                                                                                                                         |

---

## RF7: Animaciones Interactivas

**Descripción:** El sitio muestra animaciones al cargar elementos y interacciones del usuario.

| Aspecto                  | Detalle                                                                                                                |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| **Actores**              | Navegador del usuario                                                                                                  |
| **Precondición**         | JavaScript habilitado                                                                                                  |
| **Tipos de Animaciones** | - Fade-in al cargar elementos<br/>- Hover effects en botones<br/>- Transiciones suaves en menú<br/>- Scroll animations |
| **Activadores**          | - Carga de página<br/>- Scroll del usuario<br/>- Hover sobre elementos<br/>- Click en botones                          |
| **Postcondición**        | Mejora de experiencia visual sin afectar rendimiento                                                                   |
| **Prioridad**            | **MEDIA**                                                                                                              |

---

---

## Matriz de Resumen

| ID  | Funcionalidad                    | Prioridad | Ubicación         |
| --- | -------------------------------- | --------- | ----------------- |
| RF1 | Navegación del sitio             | Alta      | Todas las páginas |
| RF2 | Visualización de servicios       | Alta      | Servicios.html    |
| RF3 | Consulta de testimonios          | Alta      | Testimonios.html  |
| RF4 | Formulario de contacto           | Alta      | Contactos.html    |
| RF5 | Consulta de preguntas frecuentes | Media     | FaQ.html          |
| RF6 | Cambio de tema visual            | Media     | Todas las páginas |
| RF7 | Animaciones interactivas         | Media     | Todas las páginas |

---

## Referencias Relacionadas

- [Requisitos No Funcionales](04-Requisitos-No-Funcionales.md)
- [Objetivo y Alcance](02-Objetivo-Alcance.md)
