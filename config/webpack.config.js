var path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    module: {
        rules: [
            //less编译
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            additionalData: `@env: ${process.env.NODE_ENV};`,
                        },
                    },
                ],
            },
            {
                test: require.resolve("jquery"),
                loader: "expose-loader",
                options: {
                    exposes: ["$", "jQuery"],
                },
            },
            {
                test: require.resolve("underscore"),
                loader: "expose-loader",
                options: {
                    exposes: [
                        "_.map|map",
                        {
                            globalName: "_.reduce",
                            moduleLocalName: "reduce",
                        },
                        {
                            globalName: ["_", "filter"],
                            moduleLocalName: "filter",
                        },
                    ],
                },
            },
        ],
    },
    //js入口文件
    entry: {
        index: './src/js/index.js' //需要打包的文件
    },
    output: {
        path: path.resolve(__dirname, 'dist/assets'),
        publicPath: '',
    },
    //html入口文件
    plugins: [
        new HTMLWebpackPlugin({ template: 'src/html/index.html' })
    ],
}
