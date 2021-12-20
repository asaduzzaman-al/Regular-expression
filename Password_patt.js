
let txt = "Asad65%$#^&";
let pattern = /^[a-zA-Z0-9%#@!*^$&]{6,16}$/;
console.log(pattern.test(txt));