const path = require('path')

module.exports = {
  devtool: 'source-map',
  entry:  path.resolve(__dirname, './src/index.js'),
  output: {
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: '(typeof self !== "undefined" ? self : this)',
    path: path.resolve(__dirname, './dist'),
    filename: "history.min.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  externals: []
}