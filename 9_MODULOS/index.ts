// 1 - IMPORTAÇÃO DE ARQUIVOS ----------------------------------------------------------------------------------------------------------------------
import importGreet from "./greet";

importGreet()

// 2 - IMPORT DE VARIAVEL ----------------------------------------------------------------------------------------------------------------------
import { x } from "./varible"

console.log(x)

// 3 - MULTIPLAS IMPORTAÇÕES ----------------------------------------------------------------------------------------------------------------------
import { a, b, myFunction } from "./multiple"

console.log(a)
console.log(b)
myFunction()

// 4 - ALIAS ----------------------------------------------------------------------------------------------------------------------
import { someName as name } from "./changename";

console.log(name)

// 5 - IMPORT ALL ----------------------------------------------------------------------------------------------------------------------
import * as myNumbers from "./numbers"

console.log(myNumbers)

const nX = myNumbers.n2
console.log(nX)
myNumbers.showNumbers()

// 6 - IMPORTANDO TIPOS ----------------------------------------------------------------------------------------------------------------------
import { Human } from "./mytype";

class User implements Human {
    name
    age

    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }
}
const joao = new User("João", 25)

console.log(joao)
