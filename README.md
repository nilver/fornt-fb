# FrontFb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Create a docker image

1. Open a terminal and type next command: `git clone https://github.com/nilver/fornt-fb.git`
2. Run `cd fornt-fb/`
3. Run `ng build --prod` . This will result in creation of a new folder called dist/front-fb in which all compiled files are put. This is for compile the app. Previously, you should install Angular CLI.
4. Run `docker build -t front-fb .`
5. Run `docker image ls`. You should get a column with name : front-fb.
