import path from 'path';
import webpack from 'webpack';

const __APP_PUBLIC_PATH__ = '/build';
const isLocal = true;

module.exports = {
  entry: {
    client: './client.js',
  },
  mode: isLocal ? 'development' : 'production',
  devtool: isLocal ? 'eval-cheap-module-source-map' : 'hidden-source-map',
  output: {
    path: path.resolve(__dirname, './build'),
    publicPath: __APP_PUBLIC_PATH__,
    filename: isLocal ? 'js/[name].js' : 'js/[name][chunkhash:8].js',
  },

}