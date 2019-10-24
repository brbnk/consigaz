const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPluguin = require('mini-css-extract-plugin')
const path = require('path')

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
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    resolve: { 
        extensions: [ '*', '.js', '.jsx', '.scss' ],
        alias: { 
            Api: path.resolve(__dirname, 'src/services/api'),
            D3: path.resolve(__dirname, 'src/service/d3')
        }
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
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'src', 'assets')
    }
}