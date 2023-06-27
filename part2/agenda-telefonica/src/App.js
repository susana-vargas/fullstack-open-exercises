import { useState } from 'react'
import Name from './components/Name';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' , id: 1}
  ]) 
  const [newName, setNewName] = useState('')

  const parrafo = (event) => {
    setNewName(event.target.value);
  }
  //se le agrega la extencion al elemento que es un arreglo es este caso 
  //al persons, esto es para que se pueda agregar mas contenido al arreglo
  const addName = (event) => {
    event.preventDefault()
      //si no encuentra algo que cumpla la condicion el valer de la consatante sera indefinido
    const personFinded = persons.find((person) => person.name === newName);
    //si la constante es una desigualdad estricta se ejecuta una  condicion, si esta repetida
    //muestra el alert si no, se ejecuta el obgeto 
    if (personFinded !== undefined) {
      alert(newName + ' ya esta en la guía telefónica')
    } else {
      const nameObject = {
        name: newName,
        id: persons.length + 1,
      }
      setPersons(persons.concat(nameObject));
      //y se le concatena al arreglo 
      setNewName('')
    }    
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={parrafo} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => <li key={person.id}>{person.name}</li>)}
        </ul>
    </div>
  )
}

export default App

//por cada persona de personas, el id de el arreglo y el los nombres que guarda el arreglo
//{persons.map((person) => <li key={person.id}>{person.name}</li>)}
//esto se uso para pintar el arreglo de personas junto con las nuevas personas