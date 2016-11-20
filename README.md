# HEALTH APP
## 02 HTML WITH REACT

This branch starts off at the end of the `01_STATIC_HTML_RENDERING` branch.

Now let's add some JS to the project.

let's make a `src` directory for all of our source files.

`mkdir src`

`mv index.html src/index.html`

`mkdir src/js`

`touch src/js/index.js`

Update webpack.config.js as per the following:

```
var path = require("path");
var webpage = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/js/index.js",
    output: {
                path: __dirname + '/dist',
                filename: 'index_bundle.js'
            },
    plugins: [new HtmlWebpackPlugin({template: './src/index.html'})],
    module: {
        loaders: [
        {
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: "babel-loader",
            query: {
                presets: ['es2015', 'react']
            }
        }
        ]
    }
};
```

Remove the hard-coded header text in the ./src/index.html file to only contain:

```
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title>Health App</title>
    </head>
    <body>
        <div id="health-app"></div>
    </body>
</html>
```

Now let's install our react related dependencies

`npm install --save react react-dom`

- `react` is facebook's js framework. It's a great choice for making well-organized, component-based single paged apps.
- `react-dom` is needed to run react on the web. (as opposed to mobile)
- not that we're using `--save` here instead of `--save-dev`, as the production code will use react.

Now, because we're in the future, and not all web browsers have caught up to us, we need to use `babel` which will compile the latest flavor of javascript (ES6, AKA ES2016) and REACT to more generic javascript that any browser can understand.

`npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react`

Now we're ready to make our first React component!

`touch src/js/Greeting.js`

```
import React from 'react'

function Greeting(props) {
  return (
    <div>Hola {props.name}!</div>
  )
}

export default Greeting
```

next, let's replace the div that we had in `index.js` with the component we just made.

```
import React from 'react'
import { render } from 'react-dom'
import Greeting from './Greeting'

render(
    <Greeting name={"Bob"}/>,
    document.getElementById('health-app')
)
```

go back to 'http://localhost:8000' and you'll see our greeting has changed to 'Hola Bob'! Note that you don't have to rebuild your files to see the updated changes in the browser--webdriver does this for you automatically!
