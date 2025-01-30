var num = 10;
var strNum = num.toString();
var bigStr = "Agora o meu n\u00FAmero ".concat(strNum, " \u00E9 uma ").concat(typeof strNum);
console.log(bigStr);
