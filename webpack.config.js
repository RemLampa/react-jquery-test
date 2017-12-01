const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const minifyHTML = (env) => {
    if (env === 'production') {
        return {
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true
        };
    }

    return false;
};

const buildFolder = process.env.NODE_ENV === 'production' ? 'dist' : 'dev';

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        inject: [ './inject/index.jsx', './inject/common.scss' ],
        background: [ './background/index.jsx' ],
        vendor: [
            'jquery',
            'react',
            'react-dom',
            'react-redux',
            'react-shadow',
            'redux'
        ]
    },
    output: {
        path: path.resolve(__dirname, buildFolder),
        filename: path.join('scripts', '[name].js')
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: [
                    /node_modules\/dom7/,
                    /src\/inject/,
                    /src\/background/
                ],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'env', 'react', 'stage-0']
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'resolve-url-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            },
            {
                test: /\.(sass|scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    publicPath: '../',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'resolve-url-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            },
            {
                test: /\.(woff2?|ttf|eot|svg|otf)$/,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]?'
                }
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin([buildFolder]),
        new HtmlWebpackPlugin({
            title: 'React jQuery Test',
            template: './html/index.ejs',
            minify: minifyHTML(process.env.NODE_ENV)
        }),
        new ExtractTextPlugin({
            filename: 'styles/[name].css',
            allChunks: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'common'],
            minChunks: Infinity
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new CopyWebpackPlugin([
            { from: 'manifest.json' }
        ])
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            path.join(__dirname, 'src', 'js'),
            'node_modules'
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'src')
    },
    devtool: process.env.NODE_ENV === 'production' ? '' : 'source-map'
};