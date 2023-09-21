// commonjs 방식의 모듈 import
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ProvidePlugin } = require("webpack");

// commonjs 방식의 모듈선언 및 내보내기
/** @type {import('webpack').Configuration} */
module.exports = {
  // 시작지점의 코드(여기서부터 번들링이 시작)
  entry: "./src/index.tsx",
  resolve: {
    // entry부터 시작해서 확장자가 ts/js 인 파일들을 번들링하겠다.
    extensions: [".tsx", ".ts", ".js"],
    // 경로에 대한 alias(별칭) 설정
    alias: {
      "@": __dirname + "/src",
    },
  },
  // 모듈 해석기
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "esbuild-loader",
        options: {
          target: "es2020", // 지원하는 ECMAScript 버전 설정
        },
      },
      {
        test: /\.(gif|jpg|png|webp|svg|mp4)$/,
        type: "asset/resource",
      },
    ],
    // rules: [
    //   {
    //     test: /\.tsx?$/, // .ts 파일에 대해서
    //     use: "ts-loader", // ts-loader를 이용하여 해석하겠다.
    //     exclude: /node_modules/, // 예외 디렉터리
    //   },
    // ],
  },
  // 번들링이 완료된 결과물에 대한 설정
  output: {
    // 번들 파일에 해시추가
    filename: "js/[name]-[chunkhash].js",
    // 이미지/동영상같은 정적파일들의 위치와 파일형식
    assetModuleFilename: "asset/[hash][ext][query]",
    // 결과물들의 위치
    path: __dirname + "/dist",
    // 기존 빌드 결과물 삭제
    clean: true,
  },
  plugins: [
    // 번들된 파일을 삽입할 마크업 파일을 설정
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new ProvidePlugin({
      React: "react",
    }),
  ],
  // 웹팩 개발서버에 대한 설정을 넣는 곳
  // node.js express 프레임워크를 이용하여 웹서버를 띄움
  // ./dist 경로에 띄움
  // 웹팩 개발서버는 기본적으로 번들결과를 메모리에만 저장을 함
  // 램(ram)에 파일디렉터리 형태로 구조를 만들어서 저장
  // 램디스크처럼 ./dist/index.html, ./dist/bundle.js
  devServer: {
    historyApiFallback: true,
    static: "./dist",
    open: true,
  },
};
