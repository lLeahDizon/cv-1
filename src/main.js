let test = document.querySelector("#test");
let str = "你好，我是杨海涛";
let n = 0;

function step() {
  n += 1;
  test.innerHTML = str.substring(0, n);
  if (n >= str.length) {
    return;
  }
  setTimeout(() => {
    step();
  }, 1000);
}

step();
