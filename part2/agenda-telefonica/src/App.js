import { useState } from 'react';
import Filter from './components/Filter';
import PersonList from './components/PersonList';
import PersonForm from './components/PersonForm';

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Juan Martinez', number: '1234567890' },
    { id: 2, name: 'María', number: '9876543210' },
    { id: 3, name: 'Carlos', number: '5551234567' },
    { id: 4, name: 'Laura', number: '9998887777' },
    { id: 5, name: 'Pedro', number: '4445556666' },
    { id: 6, name: 'Ana', number: '1112223333' },
    { id: 7, name: 'Luis', number: '9990001111' },
    { id: 8, name: 'Carmen', number: '7778889999' },
    { id: 9, name: 'Javier', number: '3334445555' },
    { id: 10, name: 'Sofía', number: '2223334444' },
    { id: 11, name: 'Miguel', number: '6667778888' },
    { id: 12, name: 'Isabella', number: '5556667777' },
    { id: 13, name: 'Andrés', number: '8889990000' },
    { id: 14, name: 'Valentina', number: '7770001111' },
    { id: 15, name: 'Diego', number: '1112223333' },
    { id: 16, name: 'Camila', number: '4445556666' },
    { id: 17, name: 'José', number: '9998887777' },
    { id: 18, name: 'Lucía', number: '5551234567' },
    { id: 19, name: 'Fernando', number: '9876543210' },
    { id: 20, name: 'Gabriela', number: '1234567890' },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  const handleNameInputChange = (event) => {
    setNewName(event.target.value);
  };

  const handlePhoneInputChange = (event) => {
    setNewNumber(event.target.value);
  };
  //se le agrega la extencion al elemento que es un arreglo es este caso
  //al persons, esto es para que se pueda agregar mas contenido al arreglo
  const addRecord = (event) => {
    event.preventDefault();
    //si no encuentra algo que cumpla la condicion el valer de la consatante sera indefinido
    const personFinded = persons.find((person) => person.name === newName);
    //si la constante es una desigualdad estricta se ejecuta una condicion, si esta repetida
    //muestra el alert si no, se ejecuta el obgeto
    if (personFinded !== undefined) {
      alert(newName + ' ya esta en la guía telefónica ' + newNumber);
    } else {
      const nameObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      };
      setPersons(persons.concat(nameObject));
      //y se le concatena al arreglo
      setNewName('');
      setNewNumber('');
    }
  };

  const filteredNames = persons.filter((person) =>
    person.name.toLowerCase().includes(filter)
  );


  const namesToShow = filter.length > 0 ? filteredNames : persons;

  const handleFilterInputChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        <Filter  filter={filter} handleFilterInputChange={handleFilterInputChange} />
      </div>
      <h2>add a new</h2>
    <PersonForm
      newName={newName}
      newNumber={newNumber}
      handleNameInputChange={handleNameInputChange}
      handlePhoneInputChange={handlePhoneInputChange}
      addRecord={addRecord}
    />
      <h2>Numbers</h2>
      <PersonList namesToShow={namesToShow} />
    </div>
  );
};

export default App;

//por cada persona de personas, el id de el arreglo y el los nombres que guarda el arreglo
//{persons.map((person) => <li key={person.id}>{person.name}</li>)}
//esto se uso para pintar el arreglo de personas junto con las nuevas personas