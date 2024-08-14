# AngularPipesApp

Esta aplicación de Angular fue desarrollada con el objetivo de aprender y practicar el uso de **Pipes** en Angular. Este proyecto incluye ejemplos de uso de pipes básicos y algunos personalizados, así como la integración de componentes de PrimeNG para mejorar la interfaz de usuario.


https://github.com/user-attachments/assets/dc6dd3a4-89d5-4631-82d3-5011050e1e3e


## Características

- **Uso de Pipes Comunes**: Ejemplos de pipes como `uppercase`, `lowercase`, `titlecase`, `date`, `currency`, `number`, etc.
- **Pipes Personalizados**: Demostración de pipes como`slice`, `json`, `keyvalue`, `async`, `i18nSelect`, `i18nPlural`.
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
  - `OrderComponent`: Demuestra el uso de pipes personalizados (`SortByPipe`, `ToggleCasePipe`, `CanFlyPipe`) aplicados a una lista de smartphones.
- **`SharedModule`**: Contiene componentes compartidos como `MenuComponent`, y otros elementos reutilizables a lo largo de la aplicación.
- **`PrimeNgModule`**: Encapsula todos los módulos de PrimeNG utilizados en la aplicación, facilitando su gestión y uso en diferentes componentes.

### Rutas

Las rutas de la aplicación están configuradas en `AppRoutingModule` y `ProductsRoutingModule`:

- `/` - Página principal con pipes básicos.
- `/numbers` - Página con pipes numéricos.
- `/uncommon` - Página con pipes no tan comunes.
- `/order` - Página que muestra una tabla de smartphones con opciones de ordenamiento dinámico mediante pipes personalizados.

## Recursos Adicionales

- [Documentación de Angular](https://v17.angular.io/docs)
- [Documentación de PrimeNG](https://primeng.org)
- [Documentación de PrimeFlex](https://primeflex.org)


# Generación del Proyecto

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 18.1.1.

## Servidor de Desarrollo

Ejecuta `ng serve` para iniciar un servidor de desarrollo. Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambias alguno de los archivos fuente.

## Creación de Componentes

Ejecuta `ng generate component component-name` para generar un nuevo componente. También puedes usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Compilación

Ejecuta `ng build` para compilar el proyecto. Los artefactos de compilación se almacenarán en el directorio `dist/`.

## Ejecución de Pruebas Unitarias

Ejecuta `ng test` para ejecutar las pruebas unitarias a través de [Karma](https://karma-runner.github.io).

## Ejecución de Pruebas de Extremo a Extremo

Ejecuta `ng e2e` para ejecutar las pruebas de extremo a extremo a través de una plataforma de tu elección. Para usar este comando, primero necesitas agregar un paquete que implemente capacidades de prueba de extremo a extremo.

## Ayuda Adicional

Para obtener más ayuda sobre Angular CLI, usa `ng help` o consulta la página [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).
