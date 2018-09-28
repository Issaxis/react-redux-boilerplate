const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: [path.resolve(__dirname) + 'index.js'],
  output: {
    path: path.resolve(__dirname) + '../public',
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolveLoader: {
    modules: [path.join(__dirname, 'node_modules')]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /(\.js|\.jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['react', 'es2015', 'stage-0', 'stage-2'],
              plugins: [
                'react-html-attrs',
                'transform-class-properties',
                'babel-plugin-transform-decorators-legacy'
              ]
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader'
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: getPath => {
        return getPath('css/styles.css').replace('css', 'css');
      }
    }),
    new UglifyJSPlugin({
      sourceMap: true
    })
  ]
};
