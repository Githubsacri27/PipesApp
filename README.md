# AngularPipesApp

Esta aplicación de Angular fue desarrollada con el objetivo de aprender y practicar el uso de **Pipes** en Angular. Los Pipes son una poderosa característica de Angular que permite transformar datos directamente en las plantillas. Este proyecto incluye ejemplos de uso de pipes básicos y avanzados, así como la integración de componentes de PrimeNG para mejorar la interfaz de usuario.

## Características

- **Uso de Pipes Comunes**: Ejemplos de pipes como `uppercase`, `lowercase`, `titlecase`, `date`, `currency`, `number`, etc.
- **Pipes Personalizados**: Demostración de pipes personalizados y menos comunes como `slice`, `json`, `keyvalue`, `async`, `i18nSelect`, `i18nPlural`.
- **Menú Dinámico**: Implementación de un menú utilizando PrimeNG con rutas dinámicas que permiten navegar entre diferentes páginas que muestran el uso de distintos pipes.
- **Organización Modular**: La aplicación está estructurada en módulos para una mejor organización y escalabilidad.
- **Integración de PrimeNG**: Uso de componentes de PrimeNG como `p-menubar`, `p-card`, `p-panel`, `p-fieldset`, etc., para mejorar la presentación de la interfaz.

## Estructura del Proyecto

### Módulos Principales

- **`AppModule`**: El módulo principal que configura la aplicación, incluye la localización, el enrutamiento principal y la configuración de PrimeNG.
- **`ProductsModule`**: Contiene las páginas principales que muestran el uso de diferentes pipes.
  - `BasicsPageComponent`: Muestra el uso de pipes básicos como `uppercase`, `lowercase`, `titlecase`, y `date`.
  - `NumbersPageComponent`: Demuestra el uso de pipes numéricos como `number`, `currency`, y `percent`.
  - `UncommonPageComponent`: Incluye ejemplos de pipes menos comunes como `i18nSelect`, `i18nPlural`, `slice`, `json`, `keyvalue`, y `async`.
- **`SharedModule`**: Contiene componentes compartidos como `MenuComponent`, y otros elementos reutilizables a lo largo de la aplicación.
- **`PrimeNgModule`**: Encapsula todos los módulos de PrimeNG utilizados en la aplicación, facilitando su gestión y uso en diferentes componentes.

### Rutas

Las rutas de la aplicación están configuradas en `AppRoutingModule` y `ProductsRoutingModule`:

- `/` - Página principal con pipes básicos.
- `/numbers` - Página con pipes numéricos.
- `/uncommon` - Página con pipes no tan comunes.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
