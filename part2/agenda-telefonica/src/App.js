import { useState, useEffect } from 'react';
//import axios from 'axios'
import Filter from './components/Filter';
import PersonList from './components/PersonList';
import PersonForm from './components/PersonForm';
import dataService from './services/data';
//import data from './services/data';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  const deletPerson = (id, name) => {
    const deletePerson = window.confirm('Estas seguro de eliminar a ' + name + ' ?');
    if (deletePerson === true) {
      dataService.deleteItem(id).then((response) => {
        setPersons(persons.filter((person) => person.id !== id));
      });
    }
  };


  const editPersonNumber = (id, name, newNumber) => {
    const editPerson = window.confirm(name + ' ya está añadido a la agenda, sustituir el número antiguo por uno nuevo ?');
  
    if (editPerson && newNumber !== '') {
      // Si el usuario confirma la edición y el nuevo número no está vacío, realizamos la edición en el servidor.
      dataService.update(id, { number: newNumber, name }).then((response) => {
        // Actualizamos la lista de personas con el nuevo número.
        setPersons(persons.map((person) => (person.id === id ? { ...person, number: newNumber } : person)));
      })
    }
  };
  
  
  // persons.forEach(person => {
  //  console.log(person.number);
  // });

  useEffect(() => {
    dataService.getAll().then((initialPersons) => {
      console.log(initialPersons, 'from useEffect')
      setPersons(initialPersons);
    });
  }, []);

  const handleNameInputChange = (event) => {
    setNewName(event.target.value);
  };

  const handlePhoneInputChange = (event) => {
    setNewNumber(event.target.value);
  };
  //se le agrega la extencion al elemento que es un arreglo en este caso
  //al persons, esto es para que se pueda agregar más contenido al arreglo
  const addRecord = (event) => {
    event.preventDefault();
    if(!newName) {
      alert('el nombre no puede estar vacio')
      return
    }
    //
    const newId = persons.length;
    const ids = persons.map(objet => objet.id);
    const idRepeteaded = ids.find(id => id === newId);
    
    if (idRepeteaded) {
      const maxPerson = Math.max(...ids);
      console.log("El número más grande es:", (maxPerson + 1));
      return;
    }
    //
    
    //si no encuentra algo que cumpla la condicion el valor de la consatante sera indefinido
    const personFinded = persons.find((person) => person.name === newName);
    //si la constante es una desigualdad estricta se ejecuta una condicion, si esta repetida
    //muestra el alert si no, se ejecuta el objeto
    
    if (personFinded !== undefined) {
      const confirmResult = window.confirm('desea actualizar el registro existente con el nuevo numero')
      if (confirmResult === true) {
        editPersonNumber(personFinded.id, newName, newNumber)
      }
    } else {
      const nameObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      };
  
      dataService.create(nameObject).then((returnedPersons) => {
        setPersons(persons.concat(returnedPersons));
        setNewName('');
        setNewNumber('');
      });
    }
  };

  const filteredNames = persons.filter((person) => {
    person.name.toLowerCase().includes(filter)
  }
    
  );

////

// const newId = newName.length;
// const ids = newName.map(objet => objet.id);
// const idRepeteaded = ids.find(id => id === newId);

// if (idRepeteaded) {
//   newId = newId + 1 
// }



////

  const namesToShow = filter.length > 0 ? filteredNames : persons;

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
        newNumber={newNumber} editPerson={editPersonNumber}
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

//por cada persona de personas, el id de el arreglo y el los nombres que guarda el arreglo
//{persons.map((person) => <li key={person.id}>{person.name}</li>)}
//esto se uso para pintar el arreglo de personas junto con las nuevas personas

//copia del ine,constancia de fiscal,de 3 a 5 dia miercoles 