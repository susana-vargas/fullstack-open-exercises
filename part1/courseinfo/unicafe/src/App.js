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

const StatisticLine = ({text, value}) => {
  
   return (
    <>
   <p>{text} {value}</p>
   </>
   )
}

//es un componente que 4 props que manad a llamar un componente al que solo se le asigna el nombre de la prop
const Statistics = ({good, neutral , bad, all}) => {
  return (
    <>
    <StatisticLine text={good.statistic} value={good.value}/>
    <StatisticLine text={neutral.statistic} value={neutral.value}/>
    <StatisticLine text={bad.statistic} value={bad.value}/>
    <StatisticLine text={all.statistic} value={all.value}/>
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
      {all > 0 ? <Statistics good={{statistic: 'good', value: good}} neutral={{statistic: 'neutral', value: neutral}} bad={{statistic: 'bad', value: bad}} all={{statistic: 'all', value: positive + '%'}} /> : <p>No feedback given</p>}
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

//se manda a llamar pormedio de objetos, dentro tiene dos parametros el texto y (se podria decir que esuna variable donde guarda su estado de cantidad de comentarios)
//{all > 0 ? <Statistics good={{statistic: 'good', value: good}} neutral={{statistic: 'neutral', value: neutral}} bad={{statistic: 'bad', value: bad}} all={{statistic: 'all', value: positive + '%'}} /> : <p>No feedback given</p>}

//{all > 0 ? <Statistics good={'good ' + good} neutral={'neutral ' + neutral} bad={'bad ' + bad} all={'all ' + all} positive={'positive ' + positive + ' %' } /> : <p>No feedback given</p>}