import { useState, useEffect } from 'react';
import axios from 'axios'
import Filter from './components/Filter';
import PersonList from './components/PersonList';
import PersonForm from './components/PersonForm';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

    
  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then((response) => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  

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

      axios
    .post('http://localhost:3001/persons', nameObject)
    .then(response => {
      setPersons(persons.concat(response.data));
      //y se le concatena al arreglo
      setNewName('');
      setNewNumber('');
    })

      
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