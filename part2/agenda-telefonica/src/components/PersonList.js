const PersonList = ({ namesToShow, deletPerson }) => {
  const label = PersonList.deletPerson
  ? 'DELET' : 'DELET'
  
  return (
    <ul>
      {namesToShow.map((person) => (
        <li key={person.id}>
          {person.name} {person.number}{' '}
          <button onClick={deletPerson}>{label}</button>
        </li>
      ))}
    </ul>
  );
};

export default PersonList;
