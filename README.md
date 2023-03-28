# Setting up react environment with CRA

## 1. initialize pacakge.json

```bash
npm init -y
```

## 2. install react and react-dom

```bash
npm install react react-dom
```

## 3. install webpack and webpack-cli

```bash
npm install webpack webpack-cli webpack-dev-server
```

## 4. install babel

```bash
npm install @babel/core @babel/preset-env @babel/preset-react babel-loader
```

## 5. install html-webpack-plugin

```bash
npm install html-webpack-plugin
```

## 6. install css-loader, style-loader, sass-loader, node-sass

```bash
npm install css-loader style-loader sass-loader node-sass
```


## 7. install webpack-merge

```bash
npm install webpack-merge
```

## 8. Configure webpack

### 8.1. create webpack.common.js

```js
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
    assetModuleFilename: 'images/\[name\][ext][query]',
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.(png|svg|jpg|gif)/i,
        type: 'asset/resource',
      },
      {
        test: /\.css/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
};
```

### 8.2. create webpack.dev.js

```js
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    port: 3001,
    open: true,
    hot: true,
    compress: true,
  },
});
```

### 8.3. create webpack.prod.js

```js
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
});
```

## 9. Configure babel

### 9.1. create .babelrc

```json
{
  "presets": [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      {
        "runtime": "automatic"
      }
    ]
  ]
}
```

## 10. Create src folder

### 10.1. create index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <title>React application</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

### 10.2. create index.js

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/app.css';
import IMG from './img/react.svg';

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);
root.render(
  <dev>
    <h1>Hello from React application</h1>
    <img src={IMG} className="logo react" alt="react logo" />
  </dev>
);
```

### 10.3. create styles folder

#### 10.3.1. create app.css

__note:__ you can use sass or scss

```css
body {
  color: #ff2778;
}
```

## 11. run webpack `npm run dev` to start development server

