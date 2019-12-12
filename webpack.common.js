const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports ={
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:[
                    {
                        loader:"babel-loader"
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use:[
                    {
                        loader: 'file-loader',
                        options: {
                            name: "[name].[hash].[ext]",
                            outputPath: "imgs",
                            esModule: false,
                          }
                      }
                ]
            },
            {
                test: /\.scss$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
        ]
    },
    plugins:[
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
    ]
}