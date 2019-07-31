const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.jsx', '.js']
    },
    devServer: {
        historyApiFallback: true,
        watchOptions: {
            poll: true
        },
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    }
                ]
            },
            {
                test: /\.(css|scss)/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'css-loader',
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
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './public/index.html' })
    ]
};
