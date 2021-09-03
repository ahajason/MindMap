const path = require("path");
const { merge } = require("webpack-merge");
const defaultConfig = require("./webpack.config");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devConfig = {
  mode: "development",
  devServer: {
    //dev实时编译服务
    port: 8080,
    open: true,
    hot: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
      logging: "warn",
    },
    static: [
      {
        directory: "src",
      },
    ],
  },
  optimization: {
    usedExports: false, //保留无用代码，方便排查问题
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename:  "[name].css" ,
      chunkFilename:  "[id].css" ,
    }),
  ],
};

//合并配置
module.exports = merge(defaultConfig, devConfig);
