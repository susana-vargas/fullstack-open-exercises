
const Header = (props) => {
  console.log(props);
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
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]


  return (
    <div>
      <Header titulo={course} />
      <Content parrafo1={parts[0].name.exercises} parrafo2={parts[1].name.exercises} parrafo3={parts[2].name.exercises}/>
      <Total total={parts[0].exercises + parts[1].exercises + parts[2].exercises}  /*contenido1={exercises1} contenido2={exercises2} contenido3={exercises3}*//>
    </div>
  )
}

export default App