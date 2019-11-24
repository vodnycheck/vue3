const path = require('path');

module.exports = () => ({
    mode: 'development',
    externals: {
        vue: 'Vue'
    },
    devServer: {
        open: true
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
      ]
    }

})