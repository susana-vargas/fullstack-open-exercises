import Course from './components/Course'

const App = () => {
  //antes era un objeto que representaba un curso 
  //ahora es un arreglo que representa varios cursos
  //si se itera sobre los cursos en cada iteracion nos dara un curso
  // por cada curso se pintara un componente curso
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  //lavoratorio

  // const numbers = [10, 7, 14, 11];

  // const total = numbers.reduce(
  //   (primerValor, segundoValor) => primerValor + segundoValor
  // );

  //fin del lavoratorio

  return (
    <>
    <h1>Web development curriculum</h1>
      {courses.map((course) => {
        return <Course  key={course.id} course={course}/>
      })}
    </>
  );
};

export default App;
