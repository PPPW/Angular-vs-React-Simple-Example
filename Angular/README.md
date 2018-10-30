
## Back-End

The back-end is created from this template: 

[Flask-Web-App-Template](https://github.com/PPPW/Flask-Web-App-Template)

To install dependencies:
```sh
$ pip install -r requirements.txt
```

To run:

```sh
$ python manage.py runserver
```

To test:

```sh
$ python manage.py test
```

## Front-End 

The front-end is created by running [Angular CLI](https://github.com/angular/angular-cli) command:

```sh
$ ng new angular-app
```

To install dependencies, in "app/static/angular-app":

```sh
$ npm install
```

To run for development, in "app/static/angular-app":

```sh
$ npm start
```

A frontend dev server with hot-reload will start. You also need to start the backend API server to handle requests. Because we have two servers in this case, requests to the backend API server will cause [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) error. This can be solved by setting [dev server proxy](https://github.com/angular/angular-cli/blob/master/docs/documentation/stories/proxy.md) to the URL of the backend server in `proxy.conf.json`, and run by `ng serve --proxy-config proxy.conf.json` (same as running `npm start` here).

To test, in "app/static/angular-app":

```sh
$ ng test
```

To build, in "app/static/angular-app":

```sh
$ ng build
```

