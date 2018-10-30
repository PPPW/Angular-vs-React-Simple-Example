
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

The front-end is created by running the official tool [Create React App](https://github.com/facebook/create-react-app) under "app/static/":

```sh
$ create-react-app react-app --scripts-version=react-scripts-ts
```

Typescript is used here. 

To install dependencies, in "app/static/react-app":

```sh
$ npm install
```

To run for development, in "app/static/react-app":

```sh
$ npm start
```

A frontend dev server with hot-reload will start. You also need to start the backend API server to handle requests. Because we have two servers in this case, requests to the backend API server will cause [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) error. This can be solved by setting [dev server proxy](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#proxying-api-requests-in-development) to the URL of the backend server in `package.json`.

To test, in "app/static/react-app":

```sh
$ npm test
```

To build, in "app/static/react-app":

```sh
$ npm run build
```
