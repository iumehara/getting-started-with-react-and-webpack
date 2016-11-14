# HEALTH APP
## 01 STATIC HTML RENDERING

First, let’s set up a simple HTML page served by webpack dev server.

We’ll call it “health-app”, a personal health app that tracks weight and health stats.

`mkdir health-app`

`cd health-app`

We’ll be using npm (and only npm) for package management. Let's initialize an NPM project.

`npm init`

Enter through everything, the defaults are fine.


Next, let’s start by installing the dependencies we need.
`webpack` is a build system that will package all of the JS and CSS file into single files.
`webpack-dev-server` is an express server that will allow us to build and rebuild our assets in real time.
`html-webpack-plugin` will allow us to specify an html page to render as the base of our single page application.
Use the `--save-dev` flag to specify that these dependencies will only be used in development.

`npm install --save-dev webpack webpack-dev-server html-webpack-plugin `

We’ll need to make a config file so that `webpack` know what/how to build the project.

`touch webpack.config.js`

```
var path = require("path");
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    output: {
        path: __dirname + '/dist',
        filename: 'index_bundle.js'
    },
    plugins: [new HtmlWebpackPlugin({template: 'index.html'})]
};

```

Let’s take a look at what this file is doing.
we need the `path` variable to specify paths in this file. (The `path` package is installed as a dependency of `webpack`, so we don’t have to nom install it separately)
The `output` object specifies the location and name of the build artifact that will be built.
The `HtmlWebpackPlugin` specifies the name of the HTML page to be rendered.

Now let’s make the `index.html` page we just specified above

`touch index.html`
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Health App</title>
  </head>
  <body>
    <div id="health-app">
      <h1>Hi there!</h1>
    </div>
  </body>
</html>
```

Now we can start our app by running `webpack-dev-server` and specifying the path to our output.

`./node_modules/.bin/webpack-dev-server --content-base dist/ --port 8000"`

To simplify this process, we can add this to our `package.json` under scripts.

```{
  …
  "scripts": {
    "start": "./node_modules/.bin/webpack-dev-server --content-base dist/ --port 8000"
  },
  …
}```

Now we can start our server by just calling `npm start`
Go to `http://localhost:8000` and you'll see the text "Hi there!"
