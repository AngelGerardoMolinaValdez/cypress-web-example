# Cypress: Guía de Inicio Rápido 🚀

## Introducción 🌟

Cypress es una herramienta de pruebas de front-end que permite escribir pruebas de manera eficiente y efectiva para aplicaciones web. A diferencia de otras herramientas de pruebas, Cypress está diseñado para ser fácil de usar y entender, incluso para principiantes. Ideal para pruebas tanto de UI como de integración, Cypress ofrece una experiencia de prueba sin igual con su ejecución en tiempo real y soporte de depuración.

Cypress utiliza el motor de pruebas de JavaScript Mocha y el framework de aserciones Chai, ofreciendo una experiencia de prueba integrada y amigable.

## Historia 📜

La historia de Cypress comienza en 2014 en un contexto donde las pruebas de desarrollo eran vistas como una de las partes más desagradables del desarrollo de software. Cypress fue fundado por Brian Mann como respuesta a las limitaciones de herramientas como Selenium. Se centró en ofrecer una solución de pruebas rápida, fácil y confiable directamente en el navegador, lo que supuso una revolución en la forma de construir aplicaciones.

Inicialmente, el desarrollo de Cypress comenzó como una herramienta para el uso interno del equipo de Mann, pero rápidamente se convirtió en algo esencial para una comunidad más amplia de desarrolladores. Después de 18 meses de desarrollo intenso, Cypress lanzó su aplicación y más tarde Cypress Cloud, proporcionando no solo diversas formas de pruebas, sino también métricas y conocimientos accionables.

Cypress hizo su debut comercial en octubre de 2018, superando las proyecciones más optimistas. Empresas de renombre como Disney, NBA, LEGO y Slack figuran en su lista de clientes. Con el tiempo, Cypress se ha consolidado como la principal plataforma de pruebas holísticas, ofreciendo soluciones en tiempo real para pruebas unitarias, de integración y de extremo a extremo, así como herramientas para orquestar y unificar los resultados a través de Cypress Cloud.

Para leer la historia completa de Cypress, visita el sitio web oficial en este enlace: [The Story of Cypress.io](https://www.cypress.io/about-us/our-story).

## Comparación 📊

| Característica / Herramienta | Cypress     | Selenium    | Puppeteer   | Playwright  | Robot Framework |
|-----------------------------|-------------|-------------|-------------|-------------|-----------------|
| Lenguaje Principal          | JavaScript  | Varios      | JavaScript  | JavaScript  | Python          |
| Soporte para Navegadores    | Chrome, Firefox, Edge | Todos principales | Chrome, Firefox | Todos principales | Todos principales |
| Pruebas de UI               | Sí          | Sí          | Sí          | Sí          | Sí              |
| Pruebas de Integración      | Sí          | Sí          | Sí          | Sí          | Sí              |
| Ejecución en Paralelo       | Sí          | Sí          | Sí          | Sí          | Sí              |
| Soporte para CI/CD          | Sí          | Sí          | Sí          | Sí          | Sí              |
| Arquitectura                | Ejecución en navegador | WebDriver | Ejecución en navegador | Ejecución en navegador | Framework de Palabras clave |
| Reporte y Análisis          | Avanzado    | Avanzado    | Básico      | Avanzado    | Avanzado        |

## Requerimientos 🛠️

- [Node JS - 20.11](https://nodejs.org/en/download)

## Instalación 🛠️

Para ambientar el proyecto con las dependencias usaremos el comando:

```bash
npm install
```

## Ejecución ⚙️

Una vez instalado, puedes abrir Cypress con el siguiente comando:

```bash
npx cypress open
```

La primera vez que ejecutes este comando, Cypress creará una estructura de carpetas predeterminada con ejemplos de pruebas para que puedas empezar rápidamente.

### Estructura de Archivos 📂

- `cypress/fixtures`: Aquí puedes almacenar datos estáticos para tus pruebas.
- `cypress/integration`: Aquí es donde escribirás tus archivos de prueba.
- `cypress/plugins`: Aquí puedes extender y modificar el comportamiento interno de Cypress.
- `cypress/support`: Aquí puedes escribir comandos personalizados o sobrescribir comandos existentes.

## Recursos y Documentación Oficial 📚

Para más detalles, tutoriales y documentación completa, visita el sitio oficial de Cypress:

- [Pagina oficial de Cypress](https://www.cypress.io/)
- [App de prueba para casos de uso en Cypress](https://www.cypress.io/)
