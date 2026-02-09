# Requisitos No Funcionales

## Introducción

Los requisitos no funcionales especifican cómo debe funcionar el sistema en términos de rendimiento, seguridad, usabilidad, compatibilidad y otras atributos de calidad. Estos requisitos son críticos para asegurar una experiencia óptima del usuario.

---

## RNF1: Rendimiento

**Descripción:** El sitio debe funcionar rápidamente y sin demoras notables.

| Aspecto                        | Métrica                                |
| ------------------------------ | -------------------------------------- |
| **Tiempo de Carga Inicial**    | < 3 segundos (página principal)        |
| **Tiempo de Carga Secundaria** | < 2 segundos (otras páginas)           |
| **Lighthouse Performance**     | Mínimo 80/100                          |
| **Lighthouse Best Practices**  | Mínimo 90/100                          |
| **Core Web Vitals**            | LCP < 2.5s, FID < 100ms, CLS < 0.1     |
| **Optimización de Imágenes**   | Compresión y formatos modernos (WebP)  |
| **Minificación**               | CSS y JS minificados                   |
| **Caching**                    | Aprovechamiento de caché del navegador |

**Estrategias de Optimización:**

- Minificación de CSS y JavaScript
- Compresión de imágenes
- Lazy loading de contenido
- Reducción de dependencias externas
- Optimización de animaciones (CSS vs JavaScript)

---

## RNF2: Compatibilidad

**Descripción:** El sitio debe funcionar correctamente en múltiples navegadores y dispositivos.

| Navegador | Versión             | Soporte  |
| --------- | ------------------- | -------- |
| Chrome    | Últimas 2 versiones | ✅ Total |
| Firefox   | Últimas 2 versiones | ✅ Total |
| Safari    | Últimas 2 versiones | ✅ Total |
| Edge      | Últimas 2 versiones | ✅ Total |
| Opera     | Últimas 2 versiones | ✅ Total |

| Dispositivo | Resolución      | Soporte       |
| ----------- | --------------- | ------------- |
| Móvil       | 320px - 767px   | ✅ Responsivo |
| Tablet      | 768px - 1024px  | ✅ Responsivo |
| Desktop     | 1025px - 2560px | ✅ Responsivo |

**Métrica Total:** 100% de funcionalidad en dispositivos soportados

**Procedimientos de Validación:**

- Testing en múltiples resoluciones
- Testing en navegadores reales
- Validación HTML5 y CSS3
- Compatibilidad con estándares W3C

---

## RNF3: Seguridad

**Descripción:** El sitio debe proteger la información del usuario y cumplir estándares de seguridad.

| Aspecto                   | Requisito                                   |
| ------------------------- | ------------------------------------------- |
| **Validación de Entrada** | Validación en cliente y servidor            |
| **Inyección XSS**         | Sanitización de inputs, escape de contenido |
| **Inyección CSRF**        | Tokens CSRF en formularios                  |
| **HTTPS**                 | Conexión segura obligatoria                 |
| **Headers de Seguridad**  | Content-Security-Policy, X-Frame-Options    |
| **Datos Sensibles**       | No almacenar en localStorage sin cifrar     |
| **Cookies**               | Atributos Secure, HttpOnly, SameSite        |
| **Errores**               | No exponer información sensible en mensajes |

**Procedimientos de Validación:**

- Pruebas de seguridad en formularios
- Verificación de HTTPS
- Testing de inyección XSS/CSRF
- Escaneo de vulnerabilidades

---

## RNF4: Accesibilidad

**Descripción:** El sitio debe ser accesible para usuarios con discapacidades.

| Estándar                   | Nivel                                                     |
| -------------------------- | --------------------------------------------------------- |
| **Directrices**            | WCAG 2.1 Nivel AA                                         |
| **Navegación por teclado** | 100% funcional                                            |
| **Contraste de Colores**   | Mínimo 4.5:1 (texto normal)<br/>Mínimo 3:1 (texto grande) |
| **Alt Text**               | Todas las imágenes con descripción                        |
| **Nombres Descriptivos**   | Botones y enlaces con etiquetas claras                    |
| **Focus visible**          | Indicador de foco visible en tabbing                      |
| **Listas**                 | Uso correcto de `<ul>`, `<ol>`, `<li>`                    |
| **Encabezados**            | Jerarquía correcta `<h1>` a `<h6>`                        |

**Verificación de Cumplimiento:**

- Compatible con lectores de pantalla (NVDA, JAWS)
- Navegación por teclado completamente funcional (Tab, Enter, Esc)
- Colores de contraste verificados
- Imágenes con textos alternativos relevantes

---

## RNF5: Usabilidad

**Descripción:** El sitio debe ser fácil y agradable de usar.

| Aspecto                     | Requisito                                  |
| --------------------------- | ------------------------------------------ |
| **Intuitividad**            | Interfaz autoexplicativa sin instrucciones |
| **Consistencia**            | Diseño uniforme en todas las páginas       |
| **Feedback**                | Confirmación visible de acciones           |
| **Tiempo de Tarea**         | Tareas comunes en máximo 3 clics           |
| **Mensajes de Error**       | Claros y constructivos                     |
| **Recuperación de Errores** | Usuario puede rectificar fácilmente        |
| **Mapas Mentales**          | Estructura lógica y predecible             |

**Métricas de Validación:**

- Pruebas de usabilidad con usuarios reales
- SUS Score (System Usability Scale) > 70
- Tasa de completitud de tareas > 90%

---

## RNF6: Mantenibilidad

**Descripción:** El código debe ser fácil de mantener y modificar en el futuro.

| Aspecto                   | Requisito                           |
| ------------------------- | ----------------------------------- |
| **Estructura del Código** | Clara y bien comentada              |
| **Modularidad**           | Scripts separados por funcionalidad |
| **Nomenclatura**          | Nombres descriptivos y consistentes |
| **Comentarios**           | Código complejo explicado           |
| **Documentación**         | README, guías de instalación        |
| **Control de Versiones**  | Git con commits significativos      |
| **Estándares**            | Seguir guías de estilo consistentes |

**Archivos Esperados:**

```
├── index.html
├── pages/
├── scripts/           (Separados por función)
├── index.css          (O carpeta styles/)
├── README.md
└── docs/              (Esta documentación)
```

---

## RNF7: Escalabilidad

**Descripción:** El proyecto debe estar preparado para crecer sin rediseños mayores.

| Aspecto          | Requisito                                     |
| ---------------- | --------------------------------------------- |
| **Arquitectura** | Preparada para nuevas páginas/secciones       |
| **Componentes**  | Reutilizables y modulares                     |
| **CSS**          | Sistema escalable (metodología BEM o similar) |
| **JavaScript**   | Funciones reutilizables                       |
| **Flexibilidad** | Fácil agregar nuevos temas o secciones        |
| **Datos**        | Preparado para integrar backend               |

**Ejemplos:**

- Agregar nueva página en < 30 minutos
- Duplicar componentes sin conflictos
- Cambiar colores desde archivo centralizado

---

## RNF8: Disponibilidad y Confiabilidad

**Descripción:** El sitio debe estar disponible y funcionar sin errores.

| Aspecto                    | Requisito                             |
| -------------------------- | ------------------------------------- |
| **Uptime**                 | 99.5% anual                           |
| **Sin Errores JavaScript** | 0 errores en consola del navegador    |
| **Respuesta Servidores**   | Respuesta en < 100ms                  |
| **Recuperación**           | Capacidad de recuperación ante fallos |
| **Backup**                 | Copias de seguridad periódicas        |
| **Datagathering**          | Sin colecciones de datos inadecuadas  |

### Monitoreo y Seguimiento:

- Testing automático de enlaces funcionales
- Verificación periódica de funcionalidades críticas
- Monitoreo de errores en tiempo real (ejemplo: Sentry)

---

## Matriz de Requisitos No Funcionales

| ID   | Requisito      | Métrica                       | Prioridad |
| ---- | -------------- | ----------------------------- | --------- |
| RNF1 | Rendimiento    | LighthouseScore > 80          | ALTA      |
| RNF2 | Compatibilidad | Chrome, Firefox, Safari, Edge | ALTA      |
| RNF3 | Seguridad      | HTTPS + Validación            | ALTA      |
| RNF4 | Accesibilidad  | WCAG 2.1 AA                   | MEDIA     |
| RNF5 | Usabilidad     | SUS > 70                      | MEDIA     |
| RNF6 | Mantenibilidad | Código modular y documentado  | MEDIA     |
| RNF7 | Escalabilidad  | Arquitectura flexible         | MEDIA     |
| RNF8 | Disponibilidad | 99.5% Uptime                  | ALTA      |

**Ver también:** [Descripción del Proyecto](01-Descripcion.md) | [Stack Tecnológico](05-Stack-Tecnologico.md)
