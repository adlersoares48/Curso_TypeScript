// 1 - GENERICS ----------------------------------------------------------------------------------------------------------------------
function showData<T>(arg: T): string {
    return `O dado é ${arg}`
}

console.log(showData(5))
console.log(showData("testando generic"))

// 2 - CONSTRAINT GENERICS ----------------------------------------------------------------------------------------------------------------------
function showProductName<T extends {name: string}>(obj: T) {
    return `O nome do produto é ${obj.name}`
}

const myObjt = {name: "porta", cor: "branca"}
console.log(showProductName(myObjt))

// 3 - GENERICS COM INTERFACE ----------------------------------------------------------------------------------------------------------------------
interface MyObject<T, U, Q> {
    name: string,
    wheels: T,
    engine: U,
    color: Q
}

type Car = MyObject<number, number, string>
type Pen = MyObject<boolean, boolean, string>

const myCar: Car = {name: "Fusca", wheels: 4, engine: 1.0, color: "Branco"}
const myPen: Pen = {name: "Caneta BIC", wheels: false, engine: false, color: "Azul"}

console.log(myCar)
console.log(myPen)

// 4 - TYPE PARAMETERS ----------------------------------------------------------------------------------------------------------------------
function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
    return `${[key]} ${obj[key]}`
}
const server = {
    hd: "2TB",
    RAM: "32GB"
}

console.log(getSomeKey(server, 'RAM'))

// 5 - KEYOFF TYPE OPERATOR ----------------------------------------------------------------------------------------------------------------------
type Character = {name: string, age: number, hasDriveLicense: boolean}

type C = keyof Character

function showCharname(obj: Character, name: C): string {
    return `${obj[name]}`
}
const myChar: Character = {
    name: "Adler",
    age: 25,
    hasDriveLicense: true
}

console.log(showCharname(myChar, 'name'))

// 6 - TYPEOF TYPE OPERATOR ----------------------------------------------------------------------------------------------------------------------
const userName: string = "Adler"

const userName2: typeof userName = "João"

type X = typeof userName
const userName3: X = "Cristian" 

// 7 - INDEXED ACCESS TYPE ----------------------------------------------------------------------------------------------------------------------
type Truck = {km: number, kg: number, description: string}

type Km = Truck['km']

const myTruck: Truck = {
    km: 40,
    kg: 1000,
    description: "Caminhão preto"
}

function showKm(km: Km) {
    console.log(`O veiculo tem a km de ${km}`)
}

showKm(myTruck.km)

// 8 - CONDITIONAL TYPES ----------------------------------------------------------------------------------------------------------------------
interface A {}

interface B extends A {}

interface Teste {
    showName(): string
}

type myType = B extends A ? number : string

const someVar: myType = 5

type myTypeB = Teste extends {showName(): string} ? string : boolean

// 9 - TEMPLATE LITERALS TYPE ----------------------------------------------------------------------------------------------------------------------
type testeA = "text"

type CustomType = `some ${testeA}`

const testing: CustomType = "some text"

type a1 = "testando"
type a2 = "union"
type a3 = `${a1}` | `${a2}`