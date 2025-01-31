// 1 - ARRAYS  ----------------------------------------------------------------------------------------------------------------------
let numbers: number[] = [1, 2, 3, 4]

numbers.push(5)

console.log(numbers[2])

const nomes: string[] = ["Adler", "Soares "]

// OUTRA SINTAXE ARRAY ----------------------------------------------------------------------------------------------------------------------
const nums: Array<number> = [100, 200, 300]
console.log(nums)

// 2 - ANY ----------------------------------------------------------------------------------------------------------------------
const arr1: any = [1, "teste", true, [], {nome: "Adler"}]
console.log(arr1)

// 3 - FUNÇÃO ----------------------------------------------------------------------------------------------------------------------
function soma(a: number, b: number){
    console.log(a + b)
}

soma(4, 6)

function nome(primeiro: string, segundo: string){
    console.log(primeiro + " " + segundo)
}

nome("Adler", "Soares")

// 4 - RETORNO DE FUNÇÃO ----------------------------------------------------------------------------------------------------------------------
function greeting(nome: string): string {
    return `Olá ${nome}`
}

console.log(greeting("Adler"))

// 5 - FUNÇÃO ANONIMA ----------------------------------------------------------------------------------------------------------------------
setTimeout(() => {

    const sallary: number = 1000

    // console.log(parseFloat(sallary))
    // console.log(sallary)
}, 2000)

// 6 - OBJETOS ----------------------------------------------------------------------------------------------------------------------
function passCoord(coord: {x: number, y: number}){
    console.log("X coordinates: " + coord.x)
    console.log("Y coordinates: " + coord.y)
}

passCoord({x: 329, y: 89.5})

// 7 - PROPRIEDADES OPCIONAIS ----------------------------------------------------------------------------------------------------------------------
function showNumbers(a: number, b: number, c?: number){
    console.log("A: " + a)
    console.log("B: " + b)
    if(c){
        console.log("C: " + c)
    }
    
}

showNumbers(1,2,3)
showNumbers(4,5)

// 8 - VALIDANDO ARGUMENTO OPCIONAL ----------------------------------------------------------------------------------------------------------------------
function adGreeting(firstName: string, lastName?: string){
    if(lastName !== undefined){
        return `Olá, ${firstName} ${lastName}, tudo bem?`
    }

    return `Olá, ${firstName}, tudo bem?`
} 

console.log(adGreeting("Adler", "Soares"))
console.log(adGreeting("Felipe"))

// 9 - UNION TYPE ----------------------------------------------------------------------------------------------------------------------
function showBalance(balance: string | number){
    console.log(`O saldo da conta é ${balance}`)
}

showBalance(100)
showBalance("500")

// 10 - AVANÇANDO EM UNION TYPE ----------------------------------------------------------------------------------------------------------------------
function showUserRoles(role: boolean | string){
    if(typeof role === "boolean"){
        return "Usuário não aprovado!"
    }
    return `A função do usuário é ${role}`
}

console.log(showUserRoles(false))
console.log(showUserRoles("Admin"))

// 11 - TYPE ALIAS ----------------------------------------------------------------------------------------------------------------------
type ID = string | number

function showId(id: ID){
    console.log(`O ID é ${id}`)
}

showId(1)
showId("200")

// 12 - INTERFACES ----------------------------------------------------------------------------------------------------------------------
interface Point {
    x: number,
    y: number,
    z: string
}

function showCoords(obj: Point){
    console.log(`X: ${obj.x}, Y: ${obj.y}, Z: ${obj.z}`)
}

const coordObj: Point = {
    x: 10,
    y: 15,
    z: "Teste"
}

showCoords(coordObj)

// 13 - INTERFACE X TYPE ALIAS ----------------------------------------------------------------------------------------------------------------------
//Interface eu posso complementar e adicionar objetos apos
interface Person {
    name: string
}

interface Person {
    age: number
}

const somePerson: Person = {name: "Adler", age: 25}
console.log(somePerson)

//Type Alias eu não consigo implementar apos
type personType = {
    name: string
}

// type personType = {
//     age: number
// }

// 14 - LITERAL TYPES ----------------------------------------------------------------------------------------------------------------------
function showDirection(dir: "left" | "right" | "center") {
    console.log(`A direção é ${dir}`)
}

showDirection("right")

// 15 - NON NULL ASSERTION OPERATORS ----------------------------------------------------------------------------------------------------------------------
const p = document.querySelector("#some-p")

p!.innerHTML = "teste" 
console.log(p!.innerHTML)

// 16 - BIGINT ----------------------------------------------------------------------------------------------------------------------
let n: bigint
n = 1000n

console.log(n)

// 17 - SYMBOL ----------------------------------------------------------------------------------------------------------------------
let symbolA: symbol = Symbol("a")
let symbolB = Symbol("a")

console.log(symbolA === symbolB)
console.log(symbolB === symbolA)


 











