const path = require('path'); //调用node.js中的路径
const { merge } = require('webpack-merge');
const defaultConfig = require('./webpack.config');
const prodConfig = {
    mode: 'production',
    entry: {
        index: './src/js/index.js' //需要打包的文件
    },
    output: {
        filename: '[name].[chunkhash:8].js',    //输入的文件名是什么，生成的文件名也是什么
        path: path.resolve(__dirname, '../dist'), //指定生成的文件目录
        clean: true,//清理 /dist 文件夹, 代替CleanWebpackPlugin
    },
    plugins: [
    ],
    optimization: {
        usedExports: true//清除无用代码
    },
};

module.exports = merge(defaultConfig, prodConfig);