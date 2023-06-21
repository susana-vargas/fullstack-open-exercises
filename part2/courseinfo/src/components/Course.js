import Header from './Header';
import Content from './Content';
import Total from './Total';

const Course = ({ course }) => {
  //aqui se pasan las partes del curso a otra matriz 
  //por cada parte del curso pasa la los ejercicios
  const exercisesForCourse = course.parts.map((part) => part.exercises);
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total exercises={exercisesForCourse} />
    </>
  );
};


export default Course;