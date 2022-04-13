/*
 * @Author: Nie Yaoming
 * @Date: 2022-04-13 14:03:22
 * @LastEditors: NieYaoming
 * @LastEditTime: 2022-04-13 14:03:22
 * @FilePath: \my-practise\src\show.js
 * @Description:
 */
function show(content) {
  window.document.getElementById('app').innerText = 'Hello, ' + content;
}
module.exports = show;
