# Ep-2 Igniting the App Notes
React makes our code faster upto some extent, we also need other packages to make it even more faster. In this lecture we will see how to get those packages. 

## What is npm?
[NPM](https://www.npmjs.com/) is everything but not node package manager. NPM does not have a full form. It basically manages packages but it doesn's stand for node package manager. NPM is basically a standard library for all the packages. All the libraries , utilities and packages are hosted there and npm basically manages it for your project.

### to make our project use npm, follow this 
1. npm init
2. and Fill the details

A new package.json file will be created which is the configuration for npm.

## What is a Bundler?
When we have the html , css and js files then our whole code needs to be bundled together, needs to be minfied, needs to be cached, needs to be compressed and cleaned before it can be sent into production. A bundler helps us to do all that things. Eg: Webpack, parcel, vite etc these all are bundlers. It basically packages and bundles your app so that the code can be shipped into the production.
Create react app behind the scenes uses webpack bundler.

We Will be using parcel in this course.
1. Open terminal to install parcel bundler using npm i -D parcel
There are two type of dependencies which we can install, one are the dev dependenices and one are the normal dependencies.
*Dev Dependencies are generally required in development phase.*
*Normal dependencies are used in production also*
**-D is used to tell npm that I want the library to be installed as dev dependencies and not as normal dependencies**

## What is package-lock.json?
Package-lock.json keeps a track of exact version that is being installed of that package or dependencies. Package-lock.json keeps a track of Whatever is on the machine the same version of dependencies is deployed on production.

## Time to ignite the app
- write 
```npx parcel index.html```
 onto the terminal
- Just like npm we have something like npx. npx means executing a package.
- Now install react by writing 
```npm install react```
- Now install react-dom by writing
```npm install react-dom```
- in the index.html remove the cdn links and in app.js file import React and ReactDOM from node modules
```import React from "react";```
```import ReactDOM from "react-dom";```
- you will get error browser scripts cannot have imports or exports, this is because in index.html file it is treating app.js as a js file and not react library, to fix this error change the type to module
```<script type="module" src="./App.js"></script>```

## Benefits of using parcel
- Dev Build
- Local Server
- HMR = Hot module replacement
- File Watching Algorithm - Written in C++
- Caching, resulting in faster Builds
- Image optimization
- Minification 
- Bundling
- Compress
- Consistent hashing
- Differential Bundling, so that app runs smoothly on older browsers as well. To support older browsers
- Diagnostic
- Error Handling
- Gives a way to host your app on HTTPs
- Tree Shaking , remove unused code
- Different dev and production bundles
- npx parcel build index.html will throw an error, to fix it remove "main":"App.js" from package.json file