# FrontFb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.0.

## Create a docker image

1. Open a terminal and type next command: `git clone https://github.com/nilver/fornt-fb.git`
2. Run `cd fornt-fb/`
4. Run `docker build -t front-fb:V.1 .` Wait until console shows "Successfully tagged front-fb:V.1"
5. Run `docker run --name av-app-multistage-container -d -p 4200:80 front-fb:V.1`. You should get a column with name : front-fb.
6. Go to http://localhost:4200/add-number
