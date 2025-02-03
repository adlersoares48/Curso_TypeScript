"use strict";
// 1 - VOID  ----------------------------------------------------------------------------------------------------------------------
function semReturn() {
    console.log("Essa função não tem retorno");
}
semReturn();
// 2 - CALLBACK COMO ARGUMENTO ----------------------------------------------------------------------------------------------------------------------
function greeting(name) {
    return `Olá ${name}`;
}
function preGreeting(param, userName) {
    console.log("Preparando a função");
    const greet = param(userName);
    console.log(greet);
}
preGreeting(greeting, "Adler");
// 3 - GENERIC FUNCTION (T OU U)----------------------------------------------------------------------------------------------------------------------
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "b", "c"]));
function mergeObjects(objt1, objt2) {
    return {
        ...objt1,
        ...objt2
    };
}
const fullObjt = mergeObjects({ name: "Adler Soares", age: 25, single: true }, { profission: "Programmer" });
console.log(fullObjt);
// 4 - CONSTRAINTS ----------------------------------------------------------------------------------------------------------------------
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) { //+ na frente do A e do B significa transforma-lo para number para que a condição seja realizada com sucesso
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber("5", "2"));
console.log(biggestNumber(5, 12));
// 5 - ESPECIFICAR O TIPO DE ARGUMENTO ----------------------------------------------------------------------------------------------------------------------
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], ["Teste", "Testando"]));
// 6 - PARAMETROS OPCIONAIS ----------------------------------------------------------------------------------------------------------------------
function mordernGreeting(name, greet) {
    if (greet) {
        return `Olá ${greet} ${name}, tudo bem?`;
    }
    else {
        return `Olá ${name}, tudo bem?`;
    }
}
console.log(mordernGreeting("Adler", "Sr."));
console.log(mordernGreeting("Gustavo"));
// 7 - PARAMETRO DEFAULT ----------------------------------------------------------------------------------------------------------------------
function somaDefault(n, m = 10) {
    return n + m;
}
console.log(somaDefault(10));
console.log(somaDefault(12 + 9));
// 8 - TIPO UNKNOWN ----------------------------------------------------------------------------------------------------------------------
function doSometing(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === "number") {
        console.log("X é um numero");
    }
}
doSometing([1, 2, 3]);
doSometing(5);
// 9 - TIPO NEVER ----------------------------------------------------------------------------------------------------------------------
function showErrorMessage(msg) {
    throw new Error(msg);
}
// showErrorMessage("Algum erro")
// 10 - REST OPERATOR ----------------------------------------------------------------------------------------------------------------------
function sumAll(...n) {
    return n.reduce((number, sum) => sum + number);
}
console.log(sumAll(1, 2, 3, 4, 5));
console.log(sumAll(5, 348, 420));
// 11 - DESTRUCTURING COMO PARAMETRO ----------------------------------------------------------------------------------------------------------------------
function showProductDetails({ name, price }) {
    return `O nome do produto é ${name} e ele custa R$${price}`;
}
const shirt = { name: "Camisa", price: 10.0 };
console.log(showProductDetails(shirt));
