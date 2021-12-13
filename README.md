# PipesApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Intall PrimeNG

https://primefaces.org/primeng/showcase/#/setup

```sh
npm install primeng --save
npm install primeicons --save
```

- Add to angular.json

```json
 "options": {
   ...
  "styles": [
    "src/styles.css",
    "node_modules/primeicons/primeicons.css",
    "node_modules/primeng/resources/themes/lara-light-indigo/theme.css",
    "node_modules/primeng/resources/primeng.min.css"
  ],
}
```

## Create PrimeNGModule

```sh
ng g m primeNg
```

## Shared Module

```sh
ng g m shared
```

## Ventas Module

```sh
ng g m ventas
```

## AppMenu Component

```sh
ng g c shared/menu --skip-tests -is
```

## Rutas

- flat: no creara carpetas

```sh
ng g m appRouter --flat
```

## Componentes para las paginas

```sh
ng g c ventas/pages/numeros --skip-tests -is
ng g c ventas/pages/noComunes --skip-tests -is
ng g c ventas/pages/basicos --skip-tests -is
ng g c ventas/pages/ordenar --skip-tests -is
```

## PrimeFlex - uso de flexbox

- In primeflex version greater than 3.0.0, the tag "p-" was removed, for example: class="p-grid" became class="grid".

```sh
npm install primeflex --save

```

```json
"styles": [
  ...
  "node_modules/primeflex/primeflex.css"
],
```
