//import Note from './components/Note'

const Header = ({ course }) => <h1>{course}</h1>;

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => {
        return <Part key={part.id} part={part} />;
      })}
    </>
  );
};

const Total = ({ exercises }) => {
  const sum = exercises.reduce((a, b) => a + b);
  return (
    <p>
      <b>Number of exercises {sum}</b>
    </p>
  );
};

const Course = ({ course }) => {
  const exercisesForCourse = course.parts.map((part) => part.exercises);
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total exercises={exercisesForCourse} />
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
        id: 1,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2,
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3,
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4,
      },
      {
        name: 'otro curso',
        exercises: 100,
        id: 6,
      },
    ],
  };

  //lavoratorio

  // const numbers = [10, 7, 14, 11];

  // const total = numbers.reduce(
  //   (primerValor, segundoValor) => primerValor + segundoValor
  // );

  //fin del lavoratorio

  return (
    <>
      <Course course={course} />
    </>
  );
};

export default App;
