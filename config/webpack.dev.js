const path = require('path');
const { merge } = require('webpack-merge');
const defaultConfig = require('./webpack.config');
const devConfig = {
    mode: 'development',
    devServer: {    //dev实时编译服务
        static: './dist',//告知 dev server，从什么位置查找文件：
        port: 8080,
        open: true,
        hot: true,
        client: {
            overlay: {
                errors: true,
                warnings: false,
            },
            logging: 'warn',
        },
        static: [
            {
            directory: 'src/html',
            watch: {
                ignored: '*.html',
                usePolling: false,
            }
        }],
    },
    optimization: {
        usedExports: false//保留无用代码，方便排查问题
    },
};

//合并配置
module.exports = merge(defaultConfig, devConfig);