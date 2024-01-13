import { Home } from "./sections/Home"
// import { useAnswersStore } from "./store/answers"

function App() {

  // const firstAnswer = useAnswersStore((state) => state.firstAnswer)
  // const secondAnswer = useAnswersStore((state) => state.secondAnswer)
  // const updateValues = useAnswersStore((state) => state.updateValues)

  // console.log({firstAnswer, secondAnswer})
  return (
    <div  className='text-center w-full'>
      {/* <h1>Test prompt</h1>

      <p>Saluda:</p>
      <input type='text' placeholder='hola!' onChange={(e) => updateValues({firstAnswer: e.value})} value={firstAnswer}/>

      <p>numeros del 1 al 5:</p>
      <input type='number' placeholder='12345' onChange={(e) => updateValues({secondAnswer: e.value})} value={secondAnswer}/> */}

      <Home />
    </div>
  )
}

export default App
