import { Configuration } from 'webpack';
interface IWebpackConfigArgs {
    ENV: Configuration['mode'];
}
declare type WebpackConfigType = (args: IWebpackConfigArgs) => unknown;
declare const webpackConfig: WebpackConfigType;
export default webpackConfig;
