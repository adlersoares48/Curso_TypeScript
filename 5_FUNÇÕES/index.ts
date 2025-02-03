// 1 - VOID  ----------------------------------------------------------------------------------------------------------------------
function semReturn():void  {
    console.log("Essa função não tem retorno")
}

semReturn()

// 2 - CALLBACK COMO ARGUMENTO ----------------------------------------------------------------------------------------------------------------------
function greeting(name: string): string {
    return `Olá ${name}`
}

function preGreeting(param: (name: string) => string, userName: string){
    console.log("Preparando a função")
    const greet = param(userName)
    console.log(greet)
}

preGreeting(greeting, "Adler")

// 3 - GENERIC FUNCTION (T OU U)----------------------------------------------------------------------------------------------------------------------
function firstElement<T>(arr: T[]): T{
    return arr[0]
}

console.log(firstElement([1, 2, 3]))
console.log(firstElement(["a", "b", "c"]))

function mergeObjects<U, T>(objt1: U, objt2: T){
    return{
        ...objt1,
        ...objt2
    }
}
const fullObjt = mergeObjects({name: "Adler Soares", age: 25, single: true}, {profission: "Programmer"})
console.log(fullObjt)

// 4 - CONSTRAINTS ----------------------------------------------------------------------------------------------------------------------
function biggestNumber<T extends number | string>(a: T, b: T): T {
    let biggest: T

    if(+a > +b){ //+ na frente do A e do B significa transforma-lo para number para que a condição seja realizada com sucesso
        biggest = a
    } else{
        biggest = b
    }
    return biggest
}

console.log(biggestNumber("5", "2"))
console.log(biggestNumber(5, 12))

// 5 - ESPECIFICAR O TIPO DE ARGUMENTO ----------------------------------------------------------------------------------------------------------------------
function mergeArrays<T>(arr1: T[], arr2: T[]){
    return arr1.concat(arr2)
}

console.log(mergeArrays<number | string>([1, 2, 3], ["Teste", "Testando"]))

// 6 - PARAMETROS OPCIONAIS ----------------------------------------------------------------------------------------------------------------------
function mordernGreeting(name: string, greet?: string){
    if(greet){
        return `Olá ${greet} ${name}, tudo bem?`
    } else{
        return `Olá ${name}, tudo bem?`
    }
}

console.log(mordernGreeting("Adler", "Sr."))
console.log(mordernGreeting("Gustavo"))

// 7 - PARAMETRO DEFAULT ----------------------------------------------------------------------------------------------------------------------
function somaDefault(n: number, m = 10){
    return n + m
}

console.log(somaDefault(10))
console.log(somaDefault(12 + 9))

// 8 - TIPO UNKNOWN ----------------------------------------------------------------------------------------------------------------------
function doSometing(x: unknown){
    if(Array.isArray(x)){
        console.log(x[0])
    } else if(typeof x === "number"){
        console.log("X é um numero")
    }
}

doSometing([1, 2, 3])
doSometing(5)

// 9 - TIPO NEVER ----------------------------------------------------------------------------------------------------------------------
function showErrorMessage(msg: string): never {
    throw new Error(msg)
}
// showErrorMessage("Algum erro")

// 10 - REST OPERATOR ----------------------------------------------------------------------------------------------------------------------
function sumAll(...n: number[]){
    return n.reduce((number, sum) => sum + number)
}

console.log(sumAll(1, 2, 3, 4, 5))
console.log(sumAll(5, 348, 420))

// 11 - DESTRUCTURING COMO PARAMETRO ----------------------------------------------------------------------------------------------------------------------
function showProductDetails({name, price}: {name: string, price: number}):string {
    return `O nome do produto é ${name} e ele custa R$${price}`
}

const shirt = {name: "Camisa", price: 10.0}
console.log(showProductDetails(shirt))