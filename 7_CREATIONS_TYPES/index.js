"use strict";
// 1 - GENERICS ----------------------------------------------------------------------------------------------------------------------
function showData(arg) {
    return `O dado é ${arg}`;
}
console.log(showData(5));
console.log(showData("testando generic"));
// 2 - CONSTRAINT GENERICS ----------------------------------------------------------------------------------------------------------------------
function showProductName(obj) {
    return `O nome do produto é ${obj.name}`;
}
const myObjt = { name: "porta", cor: "branca" };
console.log(showProductName(myObjt));
const myCar = { name: "Fusca", wheels: 4, engine: 1.0, color: "Branco" };
const myPen = { name: "Caneta BIC", wheels: false, engine: false, color: "Azul" };
console.log(myCar);
console.log(myPen);
// 4 - TYPE PARAMETERS ----------------------------------------------------------------------------------------------------------------------
function getSomeKey(obj, key) {
    return `${[key]} ${obj[key]}`;
}
const server = {
    hd: "2TB",
    RAM: "32GB"
};
console.log(getSomeKey(server, 'RAM'));
function showCharname(obj, name) {
    return `${obj[name]}`;
}
const myChar = {
    name: "Adler",
    age: 25,
    hasDriveLicense: true
};
console.log(showCharname(myChar, 'name'));
// 6 - TYPEOF TYPE OPERATOR ----------------------------------------------------------------------------------------------------------------------
const userName = "Adler";
const userName2 = "João";
const userName3 = "Cristian";
const myTruck = {
    km: 40,
    kg: 1000,
    description: "Caminhão preto"
};
function showKm(km) {
    console.log(`O veiculo tem a km de ${km}`);
}
showKm(myTruck.km);
const someVar = 5;
const testing = "some text";
