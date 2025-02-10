"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 1 - EXEMPLO DECORATOR ----------------------------------------------------------------------------------------------------------------------
function myDecorator() {
    console.log("Iniciando decorator!");
    return function (target, propertKey, descriptor) {
        console.log("Executando decorator");
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
    };
}
class MyClass {
    testing() {
        console.log("Terminando execução do método");
    }
}
__decorate([
    myDecorator()
], MyClass.prototype, "testing", null);
const myObjt = new MyClass();
myObjt.testing();
// 2 - MULTIPLOS DECORATORS ----------------------------------------------------------------------------------------------------------------------
function a() {
    return function (target, propertKey, descriptor) {
        console.log("Execultou a");
    };
}
function b() {
    return function (target, propertKey, descriptor) {
        console.log("Execultou b");
    };
}
function c() {
    return function (target, propertKey, descriptor) {
        console.log("Execultou c");
    };
}
class MultDecorators {
    testing() {
        console.log("Terminando a execução");
    }
}
__decorate([
    c(),
    b(),
    a()
], MultDecorators.prototype, "testing", null);
const multiple = new MultDecorators();
multiple.testing();
// 3 - CLASS DECORATOR ----------------------------------------------------------------------------------------------------------------------
function classDecorator(constructor) {
    console.log(constructor.name);
    if (constructor.name === "User") {
        console.log("Criando usuário!");
    }
}
let User = class User {
    constructor(name) {
        this.name = name;
    }
};
User = __decorate([
    classDecorator
], User);
const user = new User("Adler");
console.log(user);
// 4 - METHOD DECORATOR ----------------------------------------------------------------------------------------------------------------------
function enumerable(value) {
    return function (target, propertKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Machine {
    constructor(name) {
        this.name = name;
    }
    showName() {
        return `O nome da máquina é ${this.name}`;
    }
}
__decorate([
    enumerable(false)
], Machine.prototype, "showName", null);
const trator = new Machine("Trator");
console.log(trator.showName());
// 3 - ACCESSOR DECORATOR ----------------------------------------------------------------------------------------------------------------------
class Monster {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get showName() {
        return `O nome do monstro: ${this.name}`;
    }
    get showAge() {
        return `A idade do monstro: ${this.age}`;
    }
}
__decorate([
    enumerable(true)
], Monster.prototype, "showName", null);
__decorate([
    enumerable(false)
], Monster.prototype, "showAge", null);
const charmander = new Monster("Charmander", 10);
console.log(charmander);
// 4 - PROPERTY DECORATOR ----------------------------------------------------------------------------------------------------------------------
// 1 - 00001
function formatNumber() {
    return function (target, propertKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            value = newVal.padStart(5, "0");
        };
        Object.defineProperty(target, propertKey, {
            set: setter,
            get: getter
        });
    };
}
class ID {
    constructor(id) {
        this.id = id;
    }
}
__decorate([
    formatNumber()
], ID.prototype, "id", void 0);
const newItem = new ID("1");
console.log(newItem);
console.log(newItem.id);
