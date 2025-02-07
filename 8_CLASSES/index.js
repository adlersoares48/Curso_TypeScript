"use strict";
// 1 - CAMPOS EM CLASSES ----------------------------------------------------------------------------------------------------------------------
class User {
}
const adler = new User();
console.log(adler);
// 2 - CONSTRUCTOR ----------------------------------------------------------------------------------------------------------------------
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const matheus = new NewUser("Matheus", 22);
console.log(matheus);
// 3 - CLASSES COM READONLY ----------------------------------------------------------------------------------------------------------------------
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const fusca = new Car("Fusca");
console.log(fusca);
console.log(fusca.wheels);
// 4 - HERANÇA E SUPER ----------------------------------------------------------------------------------------------------------------------
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const trator = new Machine("trator");
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const destroyer = new KillerMachine("destroyer", 4);
console.log(trator);
console.log(destroyer);
// 5 - METODOS ----------------------------------------------------------------------------------------------------------------------
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log("Hey Stranger!");
    }
}
const jimmy = new Dwarf("Jimmy");
jimmy.greeting();
console.log(jimmy);
// 6 - THIS ----------------------------------------------------------------------------------------------------------------------
class Truck {
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    showDetails() {
        console.log(`Caminhão do modelo ${this.model}, que tem ${this.hp} cavalos de potência`);
    }
}
const volvo = new Truck("Volvo", 400);
volvo.showDetails();
// 7 - GETTERS ----------------------------------------------------------------------------------------------------------------------
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullname() {
        return `${this.name} ${this.surname}`;
    }
}
const adlerSoares = new Person("Adler", "Soares");
console.log(adlerSoares);
console.log(adlerSoares.fullname);
// 8 - SETTERS ----------------------------------------------------------------------------------------------------------------------
class Coords {
    set fillx(x) {
        if (x === 0) {
            return;
        }
        this.x = x;
        console.log("X inserido com sucesso");
    }
    set filly(y) {
        if (y === 0) {
            return;
        }
        this.y = y;
        console.log("Y inserido com sucesso");
    }
    get getCoords() {
        return `X: ${this.x} e Y ${this.y}`;
    }
}
const myCoords = new Coords();
myCoords.fillx = 15;
myCoords.filly = 2;
console.log(myCoords.getCoords);
class blogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O titulo do post é ${this.title}`;
    }
}
const myPost = new blogPost("Hello Word");
console.log(myPost.itemTitle());
class TestingInterface {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O titulo agora é ${this.title}`;
    }
}
// 10 - OVERRIDE ----------------------------------------------------------------------------------------------------------------------
class Base {
    someMethod() {
        console.log("Alguma coisa");
    }
}
class Nova extends Base {
    someMethod() {
        console.log("Testando outra coisa");
    }
}
const myObject = new Nova();
myObject.someMethod();
// 11 - PUBLIC ----------------------------------------------------------------------------------------------------------------------
class C {
    constructor() {
        this.x = 10;
    }
}
const cInstance = new C();
console.log(cInstance.x);
// 12 - PROTECTED ----------------------------------------------------------------------------------------------------------------------
class E {
    constructor() {
        this.x = 10;
    }
}
class F extends E {
    showX() {
        console.log(`X: ${this.x}`);
    }
}
const fInstance = new F();
console.log(fInstance.showX());
// 13 - PRIVATE ----------------------------------------------------------------------------------------------------------------------
class PrivateClass {
    constructor() {
        this.name = "Private";
    }
    showName() {
        return this.name;
    }
}
const pObj = new PrivateClass();
console.log(pObj.showName());
// 14 - STATIC MEMBERS ----------------------------------------------------------------------------------------------------------------------
class StaticMembers {
    static staticMethod() {
        console.log("Metodo estatico");
    }
}
StaticMembers.prop = "Teste Static";
console.log(StaticMembers.prop);
StaticMembers.staticMethod();
// 15 - GENERIC CLASS ----------------------------------------------------------------------------------------------------------------------
class Item {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
}
const newItem = new Item("Caixa", "Surpresa");
const newItem2 = new Item(1, "Dois");
console.log(newItem);
console.log(newItem2);
// 16 - PARAMETER PROPERTIES ----------------------------------------------------------------------------------------------------------------------
class ParameterProp {
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    get showQty() {
        return `Qtd total: ${this.qty}`;
    }
    get showPrice() {
        return `Preço total: ${this.price}`;
    }
}
const newShirt = new ParameterProp("Camisa", 2, 19.99);
console.log(newShirt.name);
console.log(newShirt.showQty);
console.log(newShirt.showPrice);
// 17 - CLASS EXPRESSION ----------------------------------------------------------------------------------------------------------------------
const myClass = class {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
};
const pessoa = new myClass("Jones");
console.log(pessoa);
// 18 - ABSTRATIC CLASS ----------------------------------------------------------------------------------------------------------------------
class AbstraticClass {
}
class AbstraticExemple extends AbstraticClass {
    constructor(name) {
        super();
        this.name = name;
    }
    showName() {
        console.log(`O nome é ${this.name}`);
    }
}
const newAbstObj = new AbstraticExemple("Adler");
newAbstObj.showName();
// 19 - Relações entre classes
class Dog {
}
class Cat {
}
const doguinho = new Cat();
console.log(doguinho);
