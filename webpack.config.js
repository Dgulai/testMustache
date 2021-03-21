const path = require('path');
module.exports = {
  mode: "development",
  entry: './src/index.js',
  output: {
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname,'www'),  // 根目录
    compress: false,  // 不压缩代码
    port: 8888,
    publicPath: "/xuni/", //虚拟文件路径
  }
}