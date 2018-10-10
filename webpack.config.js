const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'none',
  context: path.join(__dirname, 'src'),
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path       : path.join(__dirname, 'public/javascripts'),
    publicPath : path.join(__dirname, 'public/javascripts'),
    filename   : 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js/,
        loader: 'babel-loader',
        include: [
          path.join(__dirname, 'src')
        ],
        exclude: [
          path.join(__dirname, 'node_modules')
        ]
      },
      {
        test : /\.sass$/,
        use  : ['style-loader', 'css-loader', 'sass-loader'],
        include: [
          path.join(__dirname, 'src')
        ],
        exclude: [
          path.join(__dirname, 'node_modules')
        ]
      },
      {
        test : /\.css$/,
        use  : ['style-loader', 'css-loader'],
        include: [
          path.join(__dirname, 'src')
        ],
        exclude: [
          path.join(__dirname, 'node_modules')
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.sass', '.css']
  }
};
