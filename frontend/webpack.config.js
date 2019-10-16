const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPluguin = require('mini-css-extract-plugin')

module.exports = { 
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: { loader: 'babel-loader' }
            },
            { 
                test: /\.html$/,
                use: [ 
                    { loader: 'html-loader' }
                ]
            },
            { 
                test: /\.s?[ac]ss/i,
                use: [ 
                    MiniCssExtractPluguin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    resolve: { 
        extensions: [ '*', '.js', '.jsx', '.scss' ]
    },
    plugins: [
        new HtmlWebpackPlugin({ 
            filename: './index.html',
            template: './src/index.html'
        }),
        new MiniCssExtractPluguin({ 
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false
        })
    ],
    devServer: { 
        historyApiFallback: false
    }
}