const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// var WebpackObfuscator = require('webpack-obfuscator');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './dist'),
  },
  optimization: {
    // minimize: true, // включить оптимизацию
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: [
          {
            loader: "html-loader",
            options:
            {
              // Disables attributes processing
              // minimize: false,
              minimize: true,
              // sources: false,
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
          {
            loader: 'sass-resources-loader',
            options: {
                resources: [
                  './src/style/vars.scss',
                  './src/style/mixins.scss'
                ]
            }
          }
        ],
      },
    ],
  },
  plugins: [
    // new HtmlWebpackPlugin(), // Generates default index.html
    new HtmlWebpackPlugin({  // Also generate a test.html
      filename: './index.html',
      template: './src/index.html'
    }),
    // new WebpackObfuscator ({rotateStringArray: true}, ['excluded_bundle_name.js']),
  ],
  devServer: {
    // static: {
    //   directory: path.join(__dirname, 'public'),
    // },
    compress: true,
    port: 9000,
  },
};
