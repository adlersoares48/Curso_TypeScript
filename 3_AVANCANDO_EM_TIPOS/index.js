"use strict";
// 1 - ARRAYS  ----------------------------------------------------------------------------------------------------------------------
let numbers = [1, 2, 3, 4];
numbers.push(5);
console.log(numbers[2]);
const nomes = ["Adler", "Soares "];
// OUTRA SINTAXE ARRAY ----------------------------------------------------------------------------------------------------------------------
const nums = [100, 200, 300];
console.log(nums);
// 2 - ANY ----------------------------------------------------------------------------------------------------------------------
const arr1 = [1, "teste", true, [], { nome: "Adler" }];
console.log(arr1);
// 3 - FUNÇÃO ----------------------------------------------------------------------------------------------------------------------
function soma(a, b) {
    console.log(a + b);
}
soma(4, 6);
function nome(primeiro, segundo) {
    console.log(primeiro + " " + segundo);
}
nome("Adler", "Soares");
// 4 - RETORNO DE FUNÇÃO ----------------------------------------------------------------------------------------------------------------------
function greeting(nome) {
    return `Olá ${nome}`;
}
console.log(greeting("Adler"));
// 5 - FUNÇÃO ANONIMA ----------------------------------------------------------------------------------------------------------------------
setTimeout(() => {
    const sallary = 1000;
    // console.log(parseFloat(sallary))
    // console.log(sallary)
}, 2000);
// 6 - OBJETOS ----------------------------------------------------------------------------------------------------------------------
function passCoord(coord) {
    console.log("X coordinates: " + coord.x);
    console.log("Y coordinates: " + coord.y);
}
passCoord({ x: 329, y: 89.5 });
// 7 - PROPRIEDADES OPCIONAIS ----------------------------------------------------------------------------------------------------------------------
function showNumbers(a, b, c) {
    console.log("A: " + a);
    console.log("B: " + b);
    if (c) {
        console.log("C: " + c);
    }
}
showNumbers(1, 2, 3);
showNumbers(4, 5);
// 8 - VALIDANDO ARGUMENTO OPCIONAL ----------------------------------------------------------------------------------------------------------------------
function adGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return `Olá, ${firstName} ${lastName}, tudo bem?`;
    }
    return `Olá, ${firstName}, tudo bem?`;
}
console.log(adGreeting("Adler", "Soares"));
console.log(adGreeting("Felipe"));
// 9 - UNION TYPE ----------------------------------------------------------------------------------------------------------------------
function showBalance(balance) {
    console.log(`O saldo da conta é ${balance}`);
}
showBalance(100);
showBalance("500");
// 10 - AVANÇANDO EM UNION TYPE ----------------------------------------------------------------------------------------------------------------------
function showUserRoles(role) {
    if (typeof role === "boolean") {
        return "Usuário não aprovado!";
    }
    return `A função do usuário é ${role}`;
}
console.log(showUserRoles(false));
console.log(showUserRoles("Admin"));
function showId(id) {
    console.log(`O ID é ${id}`);
}
showId(1);
showId("200");
function showCoords(obj) {
    console.log(`X: ${obj.x}, Y: ${obj.y}, Z: ${obj.z}`);
}
const coordObj = {
    x: 10,
    y: 15,
    z: "Teste"
};
showCoords(coordObj);
const somePerson = { name: "Adler", age: 25 };
console.log(somePerson);
// type personType = {
//     age: number
// }
// 14 - LITERAL TYPES ----------------------------------------------------------------------------------------------------------------------
function showDirection(dir) {
    console.log(`A direção é ${dir}`);
}
showDirection("right");
// 15 - NON NULL ASSERTION OPERATORS ----------------------------------------------------------------------------------------------------------------------
const p = document.querySelector("#some-p");
p.innerHTML = "teste";
console.log(p.innerHTML);
// 16 - BIGINT ----------------------------------------------------------------------------------------------------------------------
let n;
n = 1000n;
console.log(n);
// 17 - SYMBOL ----------------------------------------------------------------------------------------------------------------------
let symbolA = Symbol("a");
let symbolB = Symbol("a");
console.log(symbolA === symbolB);
console.log(symbolB === symbolA);
