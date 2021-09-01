const HTMLWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    module: {
        rules: [
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
        ],
    },
    entry: {
        index: './src/js/index.js' //需要打包的文件
    },
    plugins: [
        new HTMLWebpackPlugin({ template: 'src/html/index.html' })
    ],
}
