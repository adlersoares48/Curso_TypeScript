"use strict";
function showProductDetails(produto) {
    console.log(`O nome do produto é ${produto.name} e o seu preço é ${produto.price}`);
    if (produto.isAvailable) {
        console.log(`O produto está disponivel`);
    }
}
const shirt = {
    name: "Camisa",
    price: 19.99,
    isAvailable: true
};
showProductDetails(shirt);
function showUserDetails(user) {
    console.log(`O usuário tem o email ${user.email}`);
    if (user.role) {
        console.log(`A função do usuário é ${user.role}`);
    }
}
const u1 = {
    email: "adler@gmail.com",
    role: "Admin"
};
const u2 = {
    email: "soares@gmail.com"
};
showUserDetails(u1);
showUserDetails(u2);
const fusca = {
    brand: "VW",
    rodas: 4
};
console.log(fusca);
let coords = {
    x: 10
};
coords.y = 15;
console.log(coords);
const adler = {
    name: "Adler",
    age: 25
};
console.log(adler);
const goku = {
    name: "Goku",
    age: 350,
    superpowers: ["Kamehameha", "Teleporte"]
};
console.log(goku);
const arnold = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12
};
console.log(arnold);
// 7 - ReadOnly Arrays ----------------------------------------------------------------------------------------------------------------------
let myArray = ["Maça", "Banana", "Laranja"];
myArray = myArray.map((item) => {
    return `Fruta: ${item}`;
});
console.log(myArray);
const myNumberArray = [1, 2, true, 4, 5];
console.log(myNumberArray);
const anotherUser = ["Adler", 25];
console.log(anotherUser);
anotherUser[0] = "João";
console.log(anotherUser);
// 9 - Tuplas com ReadOnly ----------------------------------------------------------------------------------------------------------------------
function showNumbers(numbers) {
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([2, 6]);
