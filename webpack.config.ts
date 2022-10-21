import { resolve } from 'path';
import { DefinePlugin, Configuration } from 'webpack';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';

const BUILD_DIR = resolve(__dirname, 'dist');
const APP_DIR = resolve(__dirname, 'src');
const DEVELOPMENT = 'development';

interface IWebpackConfigArgs {
  ENV: Configuration['mode'];
}

type WebpackConfigType = (args: IWebpackConfigArgs) => unknown;

const webpackConfig: WebpackConfigType = ({ ENV }) => {
  const config: Configuration = {
    entry: `${APP_DIR}/client/index.tsx`,
    output: {
      path: BUILD_DIR,
      publicPath: '/',
      filename: 'js/[name].js',
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: ['babel-loader'],
          exclude: /node_modules/,
        },
        {
          type: 'javascript/auto',
          test: /\.(png|jpg|gif|ico)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'assets/[name].[ext]',
                publicPath: '/',
              },
            },
          ],
        },
        {
          type: 'javascript/auto',
          test: /\.(txt|xml|ico|json)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
              },
            },
          ],
        },
        {
          test: /\.(eot|ttf|woff|woff2)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'fonts/[name].[ext]',
                publicPath: '/',
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: `${APP_DIR}/index.html`,
      }),
      new DefinePlugin({
        NODE_ENV: JSON.stringify(ENV),
      }),
    ],
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
    },
    mode: DEVELOPMENT,
    target: 'web',
  };
  return config;
};

export default webpackConfig;
