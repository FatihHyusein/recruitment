const autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const WebpackMd5Hash = require('webpack-md5-hash');


//=========================================================
//  ENVIRONMENT VARS
//---------------------------------------------------------
const NODE_ENV = process.env.NODE_ENV;

const ENV_DEVELOPMENT = NODE_ENV === 'development';
const ENV_PRODUCTION = NODE_ENV === 'production';
const ENV_TEST = NODE_ENV === 'test';

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8080;

const APP_BASE = '/rec/dest/';


//=========================================================
//  CONFIG
//---------------------------------------------------------
const config = {};
module.exports = config;


config.resolve = {
    extensions: ['', '.ts', '.js'],
    modulesDirectories: ['node_modules'],
    root: path.resolve('.'),
    alias: {
        materializecss: 'materialize-css/dist/css/materialize.css',
        materialize: 'materialize-css/dist/js/materialize.js'
    }
};

config.module = {
    loaders: [
        {test: /\.ts$/, loader: 'ts', exclude: /node_modules/},
        {test: /\.html$/, loader: 'raw'},
        {
            test: /\.scss$/,
            loader: 'raw!postcss!sass',
            exclude: path.resolve('src/shared/styles'),
            include: path.resolve('src')
        },
        {test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/, loader: "file-loader"},
        {
            test: /materialize-css\/dist\/js\/materialize\.js/,
            loader: 'imports?materializecss'
        },
        {test: /materialize\.css$/, loader: 'style-loader!css-loader'}
    ]
};

config.plugins = [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
    }),
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
        Hammer: "hammerjs/hammer"
    })
];

config.postcss = [
    autoprefixer({browsers: ['last 3 versions']})
];

config.sassLoader = {
    outputStyle: 'compressed',
    precision: 10,
    sourceComments: false
};


//=====================================
//  DEVELOPMENT or PRODUCTION
//-------------------------------------
if (ENV_DEVELOPMENT || ENV_PRODUCTION) {
    config.entry = {
        main: ['./src/main.ts'],
        polyfills: './src/polyfills.ts',
        vendor: './src/vendor.ts'
    };

    config.output = {
        filename: '[name].js',
        path: path.resolve('./dest'),
        publicPath: APP_BASE
    };

    config.plugins.push(
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor', 'polyfills'],
            minChunks: Infinity
        }),
        new CopyWebpackPlugin([
            {from: './src/assets', to: 'assets'},
            {from: './.htaccess', to: '.'}
        ]),
        new HtmlWebpackPlugin({
            chunkSortMode: 'dependency',
            filename: 'index.html',
            hash: false,
            inject: 'body',
            template: './src/index.html'
        })
    );
}


//=====================================
//  DEVELOPMENT
//-------------------------------------
if (ENV_DEVELOPMENT) {
    // config.devtool = 'cheap-module-source-map';
    config.devtool = 'source-map';

    config.output.filename = '[name].js';

    config.module.loaders.push(
        {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('css?-autoprefixer!postcss!sass'),
            include: path.resolve('src/shared/styles')
        }
    );

    // config.module.loaders.push(
    //     {test: /\.scss$/, loader: 'style!css!postcss!sass', include: path.resolve('src/shared/styles')}
    // );

    config.devServer = {
        contentBase: './src',
        historyApiFallback: true,
        host: HOST,
        outputPath: config.output.path,
        port: PORT,
        publicPath: config.output.publicPath,
        stats: {
            cached: true,
            cachedAssets: true,
            chunks: true,
            chunkModules: false,
            colors: true,
            hash: false,
            reasons: true,
            timings: true,
            version: false
        }
    };

    config.plugins.push(
        new ExtractTextPlugin('styles.css')
    );
}


//=====================================
//  PRODUCTION
//-------------------------------------
if (ENV_PRODUCTION) {
    config.devtool = 'source-map';

    config.output.filename = '[name].[chunkhash].js';

    config.module.loaders.push(
        {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('css?-autoprefixer!postcss!sass'),
            include: path.resolve('src/shared/styles')
        }
    );

    config.plugins.push(
        new WebpackMd5Hash(),
        new ExtractTextPlugin('styles.[contenthash].css'),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: true,
            compress: {
                dead_code: true, // eslint-disable-line camelcase
                screw_ie8: true, // eslint-disable-line camelcase
                unused: true,
                warnings: false
            }
        })
    );
}


//=====================================
//  TEST
//-------------------------------------
if (ENV_TEST) {
    config.devtool = 'inline-source-map';

    config.module.loaders.push(
        {test: /\.scss$/, loader: 'style!css!postcss!sass', include: path.resolve('src/shared/styles')}
    );
}
