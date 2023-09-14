(() => {
  "use strict";
  function n(n) {
    return `Hello, ${n}!`;
  }
  const e = "MyApp",
    t = "Alice",
    o = "Myung SJ",
    $ = "Javascript!!";
  console.log(n(`${$}-${e}\n  -1.0-${o}\n  -${t}-30`)),
    (document.getElementById("root").innerHTML = n(
      `${$}-${e}\n-1.0-${o}\n-${t}-30`
    ));
})();
