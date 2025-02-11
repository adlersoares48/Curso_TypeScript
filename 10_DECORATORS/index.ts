// 1 - EXEMPLO DECORATOR ----------------------------------------------------------------------------------------------------------------------
function myDecorator(){

    console.log("Iniciando decorator!")
    
    return function(target: any, 
        propertKey: string, 
        descriptor: PropertyDescriptor){

        console.log("Executando decorator")
        console.log(target)
        console.log(propertKey)
        console.log(descriptor)

    }
}

class MyClass {
    @myDecorator()
    testing () {
        console.log("Terminando execução do método")
    }
}

const myObjt = new MyClass()
myObjt.testing()

// 2 - MULTIPLOS DECORATORS ----------------------------------------------------------------------------------------------------------------------
function a() {
    return function(target: any, 
        propertKey: string, 
        descriptor: PropertyDescriptor) {
        console.log("Execultou a")
    }
}

function b() {
    return function(target: any, 
        propertKey: string, 
        descriptor: PropertyDescriptor) {
        console.log("Execultou b")
    }
}

function c() {
    return function(target: any, 
        propertKey: string, 
        descriptor: PropertyDescriptor) {
        console.log("Execultou c")
    }
}

class MultDecorators {
    @c()
    @b()
    @a()
    testing() {
        console.log("Terminando a execução")
    }
}

const multiple = new MultDecorators()
multiple.testing()

// 3 - CLASS DECORATOR ----------------------------------------------------------------------------------------------------------------------
function classDecorator(constructor: Function) {
    console.log(constructor.name)
    if(constructor.name === "User"){
        console.log("Criando usuário!")
    }
}
@classDecorator

class User {
    name

    constructor(name: string) {
        this.name = name
    }
}

const user = new User("Adler")

console.log(user)

// 4 - METHOD DECORATOR ----------------------------------------------------------------------------------------------------------------------
function enumerable(value: boolean) {
    return function(target: any, 
        propertKey: string, 
        descriptor: PropertyDescriptor){
            descriptor.enumerable = value

    }
}

class Machine {
    name

    constructor(name: string) {
        this.name = name
    }

    @enumerable(false)
    showName() {
        return `O nome da máquina é ${this.name}`
    }
}

const trator = new Machine("Trator")

console.log(trator.showName())

// 3 - ACCESSOR DECORATOR ----------------------------------------------------------------------------------------------------------------------
class Monster {
    name?
    age?

    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }

    @enumerable(true)
    get showName() {
        return `O nome do monstro: ${this.name}`
    }

    @enumerable(false)
    get showAge() {
        return `A idade do monstro: ${this.age}`
    }

}

const charmander = new Monster("Charmander", 10)
console.log(charmander)

// 4 - PROPERTY DECORATOR ----------------------------------------------------------------------------------------------------------------------
// 1 - 00001
function formatNumber(){
    return function(target: Object, propertKey: string){

        let value: string

        const getter = function(){
            return value
        }

        const setter = function(newVal: string){
            value = newVal.padStart(5, "0")
        }

        Object.defineProperty(target, propertKey, {
            set: setter,
            get: getter
        })
    }
}



class ID {
    @formatNumber()
    id

    constructor(id: string){
        this.id = id
    }
}

const newItem = new ID("1")
console.log(newItem)
console.log(newItem.id)

// 7 - EXEMPLO CLASS DECORATOR ----------------------------------------------------------------------------------------------------------------------
function createdDate(created: Function) {
    created.prototype.createdAt = new Date()
}

@createdDate
class Book {
    id
    createdAt?: Date

    constructor(id: number){
        this.id = id
    }
}

@createdDate
class Pen {
    id
    createdAt?: Date

    constructor(id: number){
        this.id = id
    }
}

const newBook = new Book(12)
const newPen = new Pen(55)

console.log(newBook.createdAt)
console.log(newPen.createdAt)

// 8 - EXEMPLO METHOD DECORATORS ----------------------------------------------------------------------------------------------------------------------
function checkIfUserPosted(){
    return function(
        target: Object,
        key: string | Symbol,
        descriptor: PropertyDescriptor
    ) {
        const childFunction = descriptor.value
        // console.log(childFunction)
        descriptor.value = function(...args: any[]) {
            if(args[1] === true){
                console.log("Usuário já postou!")
                return null
            } else {
                return childFunction.apply(this, args)
            }
        }

        return descriptor
    }
}



class Post {
    alreadyPosted = false

    @checkIfUserPosted()
    
    post(content: string, alreadyPosted: boolean){
        this.alreadyPosted = true
        console.log(`Post do usuário: ${content}`)
    }
}

const newPost = new Post()

newPost.post("Meu primeiro post!", newPost.alreadyPosted)
newPost.post("Meu segundo post!", newPost.alreadyPosted)
newPost.post("Meu terceiro post!", newPost.alreadyPosted)


// 9 - EXEMPLO PROPERTY DECORATORS ----------------------------------------------------------------------------------------------------------------------
function Max(limit: number){
    return function(target: Object, propertyKey: string) {

        let value: string

        const getter = function(){
            return value
        }

        const setter = function(newVal: string) {
            if(newVal.length > limit){
                console.log(`O valor deve ter no máximo ${limit} digitos`)
                return
            } else {
                value = newVal
            }
        }

        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        })
    }
}


class Admin {
    @Max(10)
    username

    constructor(username: string){
        this.username = username
    }
}

const pedro = new Admin("pedroadmin12345")
const lee = new Admin("lee")
console.log(lee)