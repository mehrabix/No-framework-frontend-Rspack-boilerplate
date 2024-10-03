const rspack = require('@rspack/core');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(tsx?|jsx?)$/,
        use: 'builtin:swc-loader',
        options: {
          jsc: {
            parser: { syntax: 'typescript' },
            transform: { react: { runtime: 'automatic' } },
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          rspack.CssExtractRspackPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
      filename: 'index.html',
    }),
    new rspack.HotModuleReplacementPlugin(),
    new rspack.CssExtractRspackPlugin({
      filename: 'styles.css',
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
      publicPath: '/',
    },
    compress: true,
    port: 9000,
    hot: true,
    liveReload: true,
    watchFiles: ['src/**/*'],
    historyApiFallback: true,
    devMiddleware: {
      writeToDisk: true,
    },
  },
};
