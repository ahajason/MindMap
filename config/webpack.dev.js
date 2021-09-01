const { merge } = require('webpack-merge');
const defaultConfig = require('./webpack.config');
const devConfig = {
    mode: 'development',
    devServer: {
        port: 8080,
        open: true,
        hot: true,
        client: {
            logging: 'warn',
        },
        static: {
            directory: 'src/html',
            watch: {
                ignored: '*.html',
                usePolling: false,
            },
        },
    },
    optimization: {
        usedExports: true
    },
};

module.exports = merge(defaultConfig, devConfig);