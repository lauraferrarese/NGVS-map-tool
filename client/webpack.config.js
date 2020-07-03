const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    port: 8085
  },
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test:/\.css$/,
        use: ['style-loader','css-loader']
      },
      {
        test:/\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test:/\.(csv|tsv)$/,
        use: [
          {
            loader: 'csv-loader',
            options: {
              header: false,
              dynamicTyping: true,
              skipEmptyLines: true
            }
          }
        ]
      }
    ]
  }
};