// 1 - CAMPOS EM CLASSES ----------------------------------------------------------------------------------------------------------------------
class User {
    name!: string
    age!: number
}

const adler = new User()

console.log(adler)

// 2 - CONSTRUCTOR ----------------------------------------------------------------------------------------------------------------------
class NewUser {
    name
    age

    constructor(name:string, age:number) {
        this.name = name
        this.age = age
    }
}

const matheus = new NewUser("Matheus", 22)
console.log(matheus)

// 3 - CLASSES COM READONLY ----------------------------------------------------------------------------------------------------------------------
class Car {
    name
    readonly wheels = 4

    constructor(name:string) {
        this.name = name
    }
}

const fusca = new Car("Fusca")
console.log(fusca)
console.log(fusca.wheels)

// 4 - HERANÇA E SUPER ----------------------------------------------------------------------------------------------------------------------
class Machine {
    name

    constructor(name: string){
        this.name = name
    }
}
const trator = new Machine("trator")

class KillerMachine extends Machine {
    guns

    constructor(name: string, guns: number){
        super(name)
        this.guns = guns
    }
}

const destroyer = new KillerMachine("destroyer", 4)

console.log(trator)
console.log(destroyer)

// 5 - METODOS ----------------------------------------------------------------------------------------------------------------------
class Dwarf {
    name

    constructor(name: string){
        this.name = name
    }

    greeting() {
        console.log("Hey Stranger!")
    }
}

const jimmy = new Dwarf("Jimmy")
jimmy.greeting()
console.log(jimmy)

// 6 - THIS ----------------------------------------------------------------------------------------------------------------------
class Truck {
    model
    hp

    constructor(model: string, hp: number){
        this.model = model
        this.hp = hp
    }

    showDetails(){
        console.log(`Caminhão do modelo ${this.model}, que tem ${this.hp} cavalos de potência`)
    }

}

const volvo = new Truck("Volvo", 400)
volvo.showDetails()

// 7 - GETTERS ----------------------------------------------------------------------------------------------------------------------
class Person {
    name
    surname

    constructor(name: string, surname: string){
        this.name = name
        this.surname = surname
    }

    get fullname(){
        return `${this.name} ${this.surname}`
    }

}

const adlerSoares = new Person("Adler", "Soares")
console.log(adlerSoares)
console.log(adlerSoares.fullname)

// 8 - SETTERS ----------------------------------------------------------------------------------------------------------------------
class Coords {
    x!: number
    y!: number

    set fillx(x: number){
        if(x===0){
            return
        }

        this.x = x

        console.log("X inserido com sucesso")
    }

    set filly(y: number){
        if(y===0){
            return
        }

        this.y = y
        
        console.log("Y inserido com sucesso")
    }

    get getCoords(){
        return `X: ${this.x} e Y ${this.y}`
    }
}

const myCoords = new Coords()

myCoords.fillx = 15
myCoords.filly = 2

console.log(myCoords.getCoords)

// 9 - HERANÇA DE INTERFACE ----------------------------------------------------------------------------------------------------------------------
interface showTitle {
    itemTitle(): string
}

class blogPost implements showTitle {

    title

    constructor(title: string){
        this.title = title
    }

    itemTitle() {
        return `O titulo do post é ${this.title}`
    }

}

const myPost = new blogPost("Hello Word")
console.log(myPost.itemTitle())

class TestingInterface implements showTitle {

    title

    constructor(title: string){
        this.title = title
    }

    itemTitle() {
        return `O titulo agora é ${this.title}`
    }
}

// 10 - OVERRIDE ----------------------------------------------------------------------------------------------------------------------
class Base {
    someMethod(){
        console.log("Alguma coisa")
    }
}

class Nova extends Base {
    someMethod() {
        console.log("Testando outra coisa")
    }
}

const myObject = new Nova ()
myObject.someMethod()

// 11 - PUBLIC ----------------------------------------------------------------------------------------------------------------------
class C {
    public x = 10
}

const cInstance = new C()
console.log(cInstance.x)

// 12 - PROTECTED ----------------------------------------------------------------------------------------------------------------------
class E {
    protected x = 10

}

class F extends E {

    showX(){
        console.log(`X: ${this.x}` )
    }
}

const fInstance = new F()
console.log(fInstance.showX())

// 13 - PRIVATE ----------------------------------------------------------------------------------------------------------------------
class PrivateClass {
    private name = "Private"

    showName(){
        return this.name
    }
}

const pObj = new PrivateClass()
console.log(pObj.showName())

// 14 - STATIC MEMBERS ----------------------------------------------------------------------------------------------------------------------
class StaticMembers {
    static prop = "Teste Static"

    static staticMethod(){
        console.log("Metodo estatico")
    }
}

console.log(StaticMembers.prop)
StaticMembers.staticMethod()

// 15 - GENERIC CLASS ----------------------------------------------------------------------------------------------------------------------
class Item<T, U> {
    first
    second

    constructor(first: T, second: U){
        this.first = first
        this.second = second
    }
}

const newItem = new Item("Caixa", "Surpresa")
const newItem2 = new Item(1, "Dois")
console.log(newItem)
console.log(newItem2)

// 16 - PARAMETER PROPERTIES ----------------------------------------------------------------------------------------------------------------------
class ParameterProp {
    constructor (public name: string, private qty: number, private price: number){
        this.name = name
        this.qty = qty
        this.price = price
    }

    get showQty() {
        return `Qtd total: ${this.qty}`
    }

    get showPrice() {
        return `Preço total: ${this.price}`
    }
}

const newShirt = new ParameterProp("Camisa", 2, 19.99)
console.log(newShirt.name)
console.log(newShirt.showQty)
console.log(newShirt.showPrice)

// 17 - CLASS EXPRESSION ----------------------------------------------------------------------------------------------------------------------
const myClass = class<T> {
    constructor(public name: T){
        this.name = name
    }
}

const pessoa = new myClass("Jones")
console.log(pessoa)

// 18 - ABSTRATIC CLASS ----------------------------------------------------------------------------------------------------------------------
abstract class AbstraticClass {
    abstract showName(): void
}

class AbstraticExemple extends AbstraticClass {
    name: string

    constructor(name:string){
        super()
        this.name = name
    }

    showName(): void {
        console.log(`O nome é ${this.name}`)
    }
}

const newAbstObj = new AbstraticExemple("Adler")
newAbstObj.showName()

// 19 - Relações entre classes
class Dog {
    name!: string
}

class Cat{
    name!: string
}

const doguinho: Dog = new Cat()
console.log(doguinho)