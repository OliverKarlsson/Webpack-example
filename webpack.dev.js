const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "development")
    },
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
    },
    module:{
        rules:[
            {
                test: /\.html$/,
                use:[
                    {
                        loader:"html-loader",
                        options: {minimize: false}
                    }
                ]
            },
            
        ]
    }
});