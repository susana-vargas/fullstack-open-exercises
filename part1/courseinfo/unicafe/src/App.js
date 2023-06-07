import { useState } from 'react'

//componete con boton y funcion 
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)
//componente para crear parrafos
const Parrafo = (props) => {
  return (
    <>
    <p>{props.content}</p>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  // guardar los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  

  return (
    <>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text='good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='bad' />
      <h1>statistics</h1>
      <Parrafo content={'good ' + good}/>
      <Parrafo content={'neutral ' + neutral}/>
      <Parrafo content={'bad ' + bad}/>
      <Parrafo content={'all ' + all}/>
      <Parrafo content={'positive ' + (all > 0 ? (good / all * 100) : 0) + ' %' }/>
    </>
  )
}
//se usa un operador ternario para crear una condicion ^
export default App

//la aplicacion debe mostrar:

// -good, neutral, all (catidades)>
//(y los muestre por parrafo debajo del segundo encabesado) LISTO
// -numero total de comentarios
// -porcentage de comentarios positivos
// -promedio 