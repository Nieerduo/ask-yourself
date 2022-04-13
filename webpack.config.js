/*
 * @Author: Nie Yaoming
 * @Date: 2022-04-13 11:33:53
 * @LastEditors: NieYaoming
 * @LastEditTime: 2022-04-13 14:35:36
 * @FilePath: \my-practise\webpack.config.js
 * @Description:
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Practise', //生成的html的title
      template: 'public/index.html', //生成的html模板
      inject: 'body', //将js放在body底部
    }),
  ],
};
