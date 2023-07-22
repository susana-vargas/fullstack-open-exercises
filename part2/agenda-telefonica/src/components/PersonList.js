const PersonList = ({ namesToShow, deletPerson }) => {
  const label = PersonList.deletPerson ? 'DELET' : 'DELET';

  return (
    <ul>
      {namesToShow.map((person) => (
        <li key={person.id}>
          {person.name} {person.number}
          <button
            onClick={() => {
              deletPerson(person.id, person.name);
            }}
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default PersonList;
//operadores logicos
//si el nombre existe y el numero es diferente
/* newName === newName && newNumber !== newNumber */