# Angular vs. React: A Simple Example

Two versions of a same simple web app are created by using: 

* Back-end: Flask
* Front-end: Angular vs. React

It demonstrates and compares the basics of the two front-end frameworks/libraries, such as routing, HTTP requests, testing, etc. 

## Overview

The app looks like this:

![On large screen](/images/large_screen.png)

It has a navigation sidebar, a dumb homepage and a data page. The data page loads data from the server. 
On smaller screens, the navigation sidebar collapses into a dropdown button: 

![On small screen](/images/small_screen.png)

The navigation sidebar demonstrates how to do routing, the data page demonstrates how to perform ajax requests and show the results. 

## Introduction

The back-end used Flask, a light-weight web framework in Python. This [Flask template](https://github.com/PPPW/Flask-Web-App-Template) is used here. 

The same app is built with Angular and React. The two versions are in the `Angular` folder and `React` folder respectively. Official CLI tools, [Angular CLI](https://github.com/angular/angular-cli) and [Create React App](https://github.com/facebook/create-react-app) are used to create and manage the front-end.  

Bootstrap is used in here for styling. Note that both Angular and React recommend to use their own Bootstrap library, because the original bootstrap.js requires jQuery. DOM manipulation should be totally handled by Angular and React, it's not recommended to include jQuery. 

## Usage

See the [Angular](https://github.com/PPPW/Angular-vs-React-Simple-Example/tree/master/Angular) folder and the [React](https://github.com/PPPW/Angular-vs-React-Simple-Example/tree/master/React) folder for more details. 
