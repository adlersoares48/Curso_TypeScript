//TIPO NUMBER
let x: number = 10

console.log(x)

const y: number = 15.54545

console.log(typeof y)
console.log(y.toPrecision(3))

//TIPO STRING
const firstName: string = "Adler"
console.log(firstName.toUpperCase())

let fullName: string

const lastName: string = "Soares"

fullName = firstName + " " + lastName
console.log(fullName)
console.log(typeof fullName)

//TIPO BOOLEAN
let a: boolean = false
console.log(a)
console.log(typeof a)

a = true 
console.log(a)

// Inference e Annotation
const ann: string = "teste"

let inf = "teste inference"

console.log("testando")
