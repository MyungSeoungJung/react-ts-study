//ecmascript(es,js) module

import module, { appName, greet } from "./module.js";
// 자동완성으로 파일명하고 모듈명을 동일하게 해줌

// import module from "./module"; 디폴트는 import를 쳐서 삽입해줘야함
import metadata from "./module.js";

const name = "JavaScrpit";
console.log(
  greet(`${name}-${appName}
  -${metadata.version}-${metadata.creator}
 
  `)
);
