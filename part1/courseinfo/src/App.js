
const Header = (props) => {
  return (
    <>
    <h1>{props.titulo}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part parrafo1={props.parrafo1} cant1={props.cant1}/>
      <Part parrafo1={props.parrafo2} cant1={props.cant2}/>
      <Part parrafo1={props.parrafo3} cant1={props.cant3}/>
    </>
  )
}

const Total = (props) => {
  return (
    <>
    <p>Number total de exercises {props.total} </p>
    </>
  )
  
  
}

const Part = (props) => {
  return (
    <>
    <p>{props.parrafo1} {props.cant1} </p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header titulo={course} />
      <Content parrafo1={part1} cant1={exercises1} parrafo2={part2} cant2 = {exercises2}parrafo3={part3} cant3={exercises3}/>
      <Total total={ exercises1 + exercises2 + exercises3}  /*contenido1={exercises1} contenido2={exercises2} contenido3={exercises3}*//>
    </div>
  )
}

export default App