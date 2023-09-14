// commonjs 방식의 모듈 import
const HtmlWebpackPlugin = require("html-webpack-plugin");

// commonjs 방식의 모듈선언 및 내보내기
/** @type {import('webpack').Configuration} */
module.exports = {
  // 시작지점의 코드(여기서부터 번들링이 시작)
  entry: "./src/index.js",
  // 번들링이 완료된 코드를 출력하는 위치
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
  },
  plugins: [
    // 번들된 파일을 삽입할 마크업 파일을 설정
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  // 웹팩 개발서버에 대한 설정을 넣는 곳
  // node.js express 프레임워크를 이용하여 웹서버를 띄움
  // ./dist 경로에 띄움
  // 웹팩 개발서버는 기본적으로 번들결과를 메모리에만 저장을 함
  // 램(ram)에 파일디렉터리 형태로 구조를 만들어서 저장
  // 램디스크처럼 ./dist/index.html, ./dist/bundle.js
  devServer: {
    static: "./dist",
  },
};
