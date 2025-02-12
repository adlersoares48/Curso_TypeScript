import React , {createContext} from 'react';

// 4 - Importação de componentes
import FirstComponent from './components/FirstComponent.tsx';

//5 - Desestruturando props
import SecondComponent from './components/SecondComponent.tsx';
import Destructoring, {Category} from './components/Destructoring.tsx';

// 6 - useState
import State from './components/State.tsx';
import Context from './components/Context.tsx';

// 9 - Types
type textOrNull = string | null
type fixed = "Isso" | "Aquilo"

// 10 - ContextAPI
interface IAppContext {
  language: string,
  framework: string,
  projects: number
}

export const AppContext = createContext<IAppContext | null>(null)




function App() {

  // 1 - Variaveis
  const name: string = "Adler"
  const age: number = 25
  const isWorking = true

  // 2 - Funções
  const userGreeting = (name: string):string => {
    return `Olá ${name}!`
  }

  // 9 - type
  const myText: textOrNull = "Tem algum texto aqui"
  let mySecondText: textOrNull = null

  // 10 - ContextAPI
  const contextValue: IAppContext = {
    language: "Javascript",
    framework: "Express",
    projects: 5
  }

  mySecondText = null
  const fixedText: fixed = "Isso"

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <h1>Typescript com React</h1>
        <h2>Nome: {name}
          Idade: {age}
        </h2>
        {isWorking && (<p> Está trabalhando</p>)}
        <h3>{userGreeting(name)}</h3>
        <FirstComponent />
        <SecondComponent name="Segundo" />
        <Destructoring title="Primeiro Post" 
        content="Algum conteudo"
        commentsQty={5}
        tags={["js", "ts"]}
        category={Category.TS} />

      <Destructoring title="Segundo Post" 
        content="Mais outro conteudo"
        commentsQty={15}
        tags={["pyton"]} 
        category={Category.P}/>

        <State/>
        {myText && 
        <p>Tem texto na variavel</p>
        }

        {mySecondText &&
        <p>Tem texto também</p>
        }
        {fixedText &&
        <p>Texto fixo</p>
        }

        <Context />

      </div>
    </AppContext.Provider>
  );
}

export default App;
