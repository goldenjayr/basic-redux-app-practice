const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')


module.exports = {
    mode: process.env.NODE_ENV || 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    devServer: {
        port: 3000,
        writeToDisk: true    //creates a dist folder   instead of just loading files in memory
    },
    optimization: {
        splitChunks: {
            chunks: 'all'    // used for code splitting
        }
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'   // takes this template as a reference 
        }),
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: true
        }),
        new BundleAnalyzerPlugin({
            openAnalyzer: true 
        })
    ],
    devtool: 'inline-source-map'
}

console.log(module.exports)