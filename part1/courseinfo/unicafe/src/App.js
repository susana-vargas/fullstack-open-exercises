import { useState } from 'react'

//componete con boton y funcion 
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)
//componente para crear parrafos
const parrafo = (props) => {
  return (
    <>
    <h1>{props.content}</h1>
    </>
  )
}
//es un componente que 5 props 
const Estatics = (props) => {
  return (
    <>
    <p>{props.good}</p>
    <p>{props.neutral}</p>
    <p>{props.bad}</p>
    <p>{props.all}</p>
    <p>{props.positive}</p>
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
  const positive = all > 0 ? (good / all * 100) : 0 

  return (
    <>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text='good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='bad' />
      <h1>statistics</h1>
      {all > 0 ? <Estatics good={'good ' + good} neutral={'neutral ' + neutral} bad={'bad ' + bad} all={'all ' + all} positive={'positive ' + positive + ' %' } /> : <p>No feedback given</p>}
    </>
  )
}
//condicion ternaria con props 
//solo se manda a llamar con todos los props asignados en una sola linea (<Estatics good={'good ' + good} neutral={'neutral ' + neutral} bad={'bad ' + bad} all={'all ' + all} />)
//se usa un operador ternario para crear una condicion (all > 0 ? (good / all * 100) : 0)
export default App

//la aplicacion debe mostrar:

// -good, neutral, all (catidades)>
//(y los muestre por parrafo debajo del segundo encabesado) LISTO
// -numero total de comentarios
// -porcentage de comentarios positivos
// -promedio 