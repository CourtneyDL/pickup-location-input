# Pick-up Location Input Test
### Single Page React App developed by Courtney Leacock

This project is an autocompleting input for searching pick up locations based on the search term entered.

The application was developed using React(15.5.4) and Sass with a Webpack 2 build process.

## Build Process

### Install dependences
```
npm i
```

A hot loading development version of the application can be started by running the following command:
```
npm start
```

#### Basic build
```
npm run build
```

#### Local Build
```
npm run build:local
```

This build is intended to be hosted at http://localhost:4000/build using a server started from the root directory of the project such as a simple Python 2 HTTP server.
```
python -m SimpleHTTPServer 4000
```


### GitHub Pages Build

```
npm run build:github-pages
```
This build is hosted via GitHub page at [https://courtneydl.github.io/pickup-location-input](https://courtneydl.github.io/pickup-location-input). The script doesn't push the build to GitHub automatically.

### Test Suite
I am using this project as an opportunity to teach myself how to perform automated unit testing with React components. The test suite uses Mocha, Chai and Enzyme and is my first attempt at a full React test suite albeit in microcosm.

There is test script for the api client specifically the function the processes API responses.

The test directory is structured to mirror the source/js directory for any components or code tested. The current structure is shown below:

```
├── test
    └──libs
        └──api-client.spec.js
        └──api-client.data.js
    └──views
        └──PickUp.spec.js
    └──components
        └──App
            └──PickUpInput.spec.js
            └──PickUpResults.spec.js
            └──PickUpResult.spec.js
            └──PickUpPlaceTypeTag.spec.js
```

This can be run once using:
```
npm test
```
or with a watch enabled:
```
npm run test:watch
```
