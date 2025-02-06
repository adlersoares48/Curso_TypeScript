// 1 - Tipo de objeto para função interface ----------------------------------------------------------------------------------------------------------------------
interface Product {
    name: string,
    price: number,
    isAvailable: boolean

}

function showProductDetails(produto: Product){
    console.log(`O nome do produto é ${produto.name} e o seu preço é ${produto.price}`)

    if(produto.isAvailable){
        console.log(`O produto está disponivel`)
    }
}

const shirt: Product = {
    name: "Camisa",
    price: 19.99,
    isAvailable: true
}

showProductDetails(shirt)


// 2 - Propriedade opcional em interface ----------------------------------------------------------------------------------------------------------------------
interface User {
    email: string,
    role?: string
}

function showUserDetails(user: User){
    console.log(`O usuário tem o email ${user.email}`)
    if(user.role){
        console.log(`A função do usuário é ${user.role}`)
    }
}

const u1: User = {
    email: "adler@gmail.com",
    role: "Admin"
}

const u2: User = {
    email: "soares@gmail.com"
}

showUserDetails(u1)
showUserDetails(u2)

// 3 - ReadOnly ----------------------------------------------------------------------------------------------------------------------
interface Car {
    brand: string
    readonly rodas: number
}

const fusca: Car = {
    brand: "VW",
    rodas: 4
}

console.log(fusca)

// 4 - Index Signature ----------------------------------------------------------------------------------------------------------------------
interface CoordObject {
    [index: string]: number
}
let coords: CoordObject = {
    x: 10
}
 coords.y = 15

 console.log(coords)


 // 5 - Extending Interfaces ----------------------------------------------------------------------------------------------------------------------
 interface Human {
    name: string,
    age: number
 }

 interface SuperHuman extends Human {
    superpowers: string[]
 }

 const adler: Human = {
    name: "Adler",
    age: 25
 }
 console.log(adler)

 const goku: SuperHuman = {
    name: "Goku",
    age: 350,
    superpowers: ["Kamehameha", "Teleporte"]
 }
 console.log(goku)


// 6 - Intersection Types ----------------------------------------------------------------------------------------------------------------------
interface Character {
    name: string
}

interface Gun {
    type: string,
    caliber: number
}

type HumanWithGun = Character & Gun

const arnold: HumanWithGun = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12
}

console.log(arnold)

// 7 - ReadOnly Arrays ----------------------------------------------------------------------------------------------------------------------
let myArray: ReadonlyArray<string> = ["Maça", "Banana", "Laranja"]

myArray = myArray.map((item) => { // modificações apenas por metodos
    return `Fruta: ${item}`
})

console.log(myArray)

// 8 - Tuplas ----------------------------------------------------------------------------------------------------------------------
type fiveNumbers = [number, number, boolean, number, number]

const myNumberArray: fiveNumbers = [1, 2, true, 4, 5]

console.log(myNumberArray)

type nameAndAge = [string, number]

const anotherUser: nameAndAge = ["Adler", 25]

console.log(anotherUser)
anotherUser[0] = "João"
console.log(anotherUser)

// 9 - Tuplas com ReadOnly ----------------------------------------------------------------------------------------------------------------------
function showNumbers(numbers: readonly [number, number]) {
    console.log(numbers[0])
    console.log(numbers[1])
}

showNumbers([2, 6])