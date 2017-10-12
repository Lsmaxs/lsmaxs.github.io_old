const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const openBrowserWebpackPlugin = require('open-browser-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry:{
        index:path.resolve(__dirname,'./personal/index.jsx'),
        vendor: ['react','react-dom']
    },
    externals: {
        'react': 'window.React',
        'react-dom':'window.ReactDOM'
    },
    output:{
        path: path.resolve(__dirname,'./build'),
        filename: 'assets/js/[name]-[hash:2].js'
    },
    module: {
        rules:[
            {
                test:/\.(js|jsx)$/,
                loader:"babel-loader",
                options:{
                    presets:['react','es2015']
                },
                exclude:/node_modules/
            },
            //开发scss-loader
            /*{
                test:/\.(css|scss)$/,
                use:[
                    "style-loader",
                    {
                        loader:'css-loader',
                        options: {
                            importLoaders: 1, //使用import时候添加-webkit-类前缀
                            minimize: true    //css压缩
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins:function(){
                                return [
                                    require('autoprefixer')({
                                        browsers:["last 5 versions"]
                                    })
                                ];
                            }
                        }
                    },
                    'sass-loader'
                ]
            },*/

            //线上scss-loader
            {
                test: /\.(css|scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1, //使用import时候添加-webkit-类前缀
                                minimize: true    //css压缩
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: function () {
                                    return [
                                        require('autoprefixer')({
                                            browsers: ["last 5 versions"]
                                        })
                                    ];
                                }
                            }
                        },
                        'sass-loader'
                    ]
                })
            },

            {
                test: /\.(jpg|png|gif|svg|eot|svg|ttf|woff)$/,
                use:'url-loader?limit=5000&name=[hash:5].[ext]&outputPath=assets/images/'
            },
        ]
    },
    devServer: {
        hot: true, // 告诉 dev-server 我们在使用 HMR
        contentBase: path.resolve(__dirname, 'build'),
        publicPath: '/',
        port:8888
    },
    plugins:[
        //每次构建前清理 /build 文件夹
        new CleanWebpackPlugin(['build']),
        new webpack.HotModuleReplacementPlugin(), // 启用 HMR
        new htmlWebpackPlugin({
            filename:'index.html',
            template:'./personal/index.html',
            inject:true,
            title:"LS",
            favicon:"./personal/favicon.ico",
            minify:{
                removeComments:true,
                collapseWhitespace:true
            }
        }),
        /*new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: true //打包后的JS文件压缩
            }
        }),*/
        new openBrowserWebpackPlugin({
            url:"http://localhost:8888"
        }),
        //抽离公共文件
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'assets/js/vendor.[hash].min.js',
        }),
        new ExtractTextPlugin({
            filename:'assets/style/[hash].min.css'
        }),
    ]
}
