const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const { CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "main.[contentHash].js",
        path: path.resolve(__dirname, "production")
    },
    module: {
        rules:[
            {
                test: /\.html$/,
                use:[
                    {
                        loader:"html-loader",
                        options: {minimize: true}
                    }
                ]
            },
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
    ]
});