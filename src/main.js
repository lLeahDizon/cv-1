let test = document.querySelector("#html");
let style = document.querySelector("#style");
let str = `
/* 你好，我是海涛
 * 接下来我演示一下太极图的绘制
 * 首先我要准备一个div
 **/
#div1{
  border: 1px solid red;
  width: 200px;
  height: 200px;
}
/* 接下来把 div 变成一个太极图
 * 首先，把 div 变成一个圆
 **/
#div1{
  border-radius: 50%;
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
  border: none;
}
/* 太极是阴阳形成的
 * 一黑一白
 **/
#div1{
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加两个神秘的小球 */
#div1::before{
  height: 50%;
  width: 50%;
  background: #000;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);  
}
#div1::after{
  height: 50%;
  width: 50%;
  background: #fff;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`;
let str2 = "";
let n = 0;

function step() {
  setTimeout(() => {
    if (str[n] === "\n") {
      str2 += "<br>";
    } else if (str[n] === " ") {
      str2 += "&nbsp;";
    } else {
      str2 += str[n];
    }
    test.innerHTML = str2;
    style.innerHTML = str.substring(0, n);
    window.scrollTo(0, 99999);
    test.scrollTo(0, 99999);
    if (n < str.length - 1) {
      n += 1;
      step();
    }
  }, 50);
}

step();
