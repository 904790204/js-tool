const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const path = require('path')



let prodWebpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: path.join(__dirname, '../'),
            verbose: true,
            dry: false
        }),
        new UglifyJsPlugin(),
    ]
})

module.exports = prodWebpackConfig