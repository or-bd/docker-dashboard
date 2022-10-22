"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var webpack_1 = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var BUILD_DIR = (0, path_1.resolve)(__dirname, 'dist');
var APP_DIR = (0, path_1.resolve)(__dirname, 'src');
var DEVELOPMENT = 'development';
var webpackConfig = function (_a) {
    var ENV = _a.ENV;
    var config = {
        entry: "".concat(APP_DIR, "/client/index.tsx"),
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
                template: "".concat(APP_DIR, "/client/index.html"),
            }),
            new webpack_1.DefinePlugin({
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
exports.default = webpackConfig;
