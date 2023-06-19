//import Note from './components/Note'

const Header = ({ course }) => <h1>{course}</h1>;

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Content = ({ parts }) => {
  console.log(parts, 'consol desde el content');
  return (
    <>
      <Part part={parts[0]} />
      <Part part={parts[1]} />
      <Part part={parts[2]} />
      <Part part={parts[3]} />
    </>
  );
};

//const Total = ({ exercises1, exercises2, exercises3 }) => (
//  <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
//);

const Course = ({ course }) => {
  
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts}/>
    </>
  );
};


const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
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
      },
    ],
  };


  //lavoratorio

  const numbers = [10, 7, 14, 11]


  const total = numbers.reduce(
    (primerValor, segundoValor) => primerValor + segundoValor
  )
  console.log(total);

  
  //fin del lavoratorio 


  return (
    <div>
      <Course course={course}/>
      <h4>{<p>Total of exercises {total}</p>}</h4>
      <ul>
        
      </ul>
    </div>

  );
};

export default App;