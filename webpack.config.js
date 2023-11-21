const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './src/index.tsx',
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    static: './dist'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules)/,
        use: {
          // `.swcrc` can be used to configure swc
          loader: "swc-loader",
          options: {
            jsc: {
              parser: {
                syntax: "typescript",
                decorators: true,
                dynamicImport: true
              },
              target: 'es5',
            },
            minify: true
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin("./src/index.ejs")
  ]
}