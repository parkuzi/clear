// const path = import('path');
import path from 'path';
import HtmlWebPackPlugin from 'html-webpack-plugin'

// const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html", 
  filename: "./index.html"
});
module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: 'bundle.js'
  },
  plugins:[htmlPlugin],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader'
      }
    },
    {
      test: /\.(sa|sc|c)ss$/,
      use: [
             
             {
               loader: "css-loader",x
             },
             {
               loader: "style-loader"
             },
             {
               loader: "sass-loader",
               options: {
                 implementation: require("sass")
               }
             }
           ]
    },
    {
      test: /\.(png|jpe?g|gif|svg)$/,
      use: [
             {
               loader: "file-loader",
               options: {
                 outputPath: 'images'
               }
             }
           ]
    },
    {
      test: /\.(woff|woff2|ttf|otf|eot)$/,
      use: [
             {
               loader: "file-loader",
               options: {
                 outputPath: 'fonts'
               }
             }
           ]
    }
    ]
  }
  ,
  
  mode: 'development'
};