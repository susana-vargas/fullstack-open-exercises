import { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonList from './components/PersonList';
import PersonForm from './components/PersonForm';
import dataService from './services/data';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  const addRecord = (event) => {
    event.preventDefault();
    if (!newName) {
      alert('el nombre no puede estar vacio');
      return;
    }
    const ids = persons.map((record) => record.id);
    const greatestId = Math.max(...ids);
    const newId = greatestId + 1;
    const personFinded = persons.find((person) => person.name === newName);
    if (personFinded !== undefined) {
      const confirmResult = window.confirm(
        'desea actualizar el registro existente con el nuevo numero'
      );
      if (confirmResult === true) {
        editPersonNumber(personFinded.id, newName, newNumber);
      }
    } else {
      const nameObject = {
        name: newName,
        number: newNumber,
        id: newId,
      };
      dataService.create(nameObject).then((returnedPersons) => {
        setPersons(persons.concat(returnedPersons));
        cleanInput();
      });
    }
  };

  const editPersonNumber = (id, name, newNumber) => {
    dataService.update(id, { number: newNumber, name }).then((response) => {
      setPersons(
        persons.map((person) =>
          person.id === id ? { ...person, number: newNumber } : person
        )
      );
      cleanInput();
    });
  };

  const deletPerson = (id, name) => {
    const deletePerson = window.confirm(
      'Estas seguro de eliminar a ' + name + ' ?'
    );
    if (deletePerson === true) {
      dataService.deleteItem(id).then((response) => {
        setPersons(persons.filter((person) => person.id !== id));
      });
    }
  };

  const cleanInput = () => {
    setNewName('');
    setNewNumber('');
  };

  useEffect(() => {
    dataService.getAll().then((initialPersons) => {
      console.log(initialPersons, 'from useEffect');
      setPersons(initialPersons);
    });
  }, []);

  const filteredNames = persons.filter((person) =>
    person.name.toLowerCase().includes(filter)
  );

  const namesToShow = filter.length > 0 ? filteredNames : persons;

  const handleNameInputChange = (event) => {
    setNewName(event.target.value);
  };

  const handlePhoneInputChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterInputChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        <Filter
          filter={filter}
          handleFilterInputChange={handleFilterInputChange}
        />
      </div>
      <h2>add a new</h2>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        editPerson={editPersonNumber}
        handleNameInputChange={handleNameInputChange}
        handlePhoneInputChange={handlePhoneInputChange}
        addRecord={addRecord}
      />
      <h2>Numbers</h2>
      <PersonList namesToShow={namesToShow} deletPerson={deletPerson} />
    </div>
  );
};

export default App;
