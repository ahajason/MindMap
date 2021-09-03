var path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.less$/i, //less编译
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "less-loader",
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
    index: "./src/js/index.js", //需要打包的文件
  },
  output: {
    path: path.resolve(__dirname, "dist/assets"),
    publicPath: "",
  },
  plugins: [
    new HTMLWebpackPlugin({ template: "src/html/index.html" }), //html入口文件
  ],
};
