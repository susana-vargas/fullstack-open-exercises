

const Total = ({ exercises }) => {
  const sum = exercises.reduce((a, b) => a + b);
  return (
    <p>
      <b>Number of exercises {sum}</b>
    </p>
  );
};

export default Total;