const path = require('path');

module.exports = [
  {
    entry: path.join(path.resolve(__dirname, 'src'), 'index.js'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'simian-calendar.js',
      library: 'SimianCalendar',
      libraryTarget: 'var'
    },
    module: {
      rules: [{
        test: /\.less$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "less-loader" }
        ]
      }, {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: path.resolve(__dirname, '.babelcache')
          }
        }
      }]
    },
    devtool: 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      port: 8080
    }
  }
];
