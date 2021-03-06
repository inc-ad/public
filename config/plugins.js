const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const PrettierPlugin = require('prettier-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const paths = require('./paths')
module.exports = [
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),

    // Copies files from target to destination folder
    new CopyWebpackPlugin({
        patterns: [{
            from: paths.public,
            to: 'assets',
            globOptions: {
                ignore: ['*.DS_Store'],
            },
            noErrorOnMissing: true,
        }, ],
    }),

    // ESLint configuration
    new ESLintPlugin({
        files: ['.', 'src', 'config'],
        formatter: 'table',
    }),

    // Prettier configuration
    new PrettierPlugin(),
]