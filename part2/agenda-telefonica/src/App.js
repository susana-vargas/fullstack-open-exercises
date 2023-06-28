import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' , id: 1, number: 5577116284}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNameInputChange = (event) => {
    setNewName(event.target.value);
  }

  const handlePhoneInputChange = (event) => {
    setNewNumber(event.target.value)
  }
  //se le agrega la extencion al elemento que es un arreglo es este caso 
  //al persons, esto es para que se pueda agregar mas contenido al arreglo
  const addRecord = (event) => {
    event.preventDefault()
      //si no encuentra algo que cumpla la condicion el valer de la consatante sera indefinido
    const personFinded = persons.find((person) => person.name === newName);
    //si la constante es una desigualdad estricta se ejecuta una  condicion, si esta repetida
    //muestra el alert si no, se ejecuta el obgeto 
    if (personFinded !== undefined) {
      alert(newName + ' ya esta en la guía telefónica ' + newNumber)
    } else {
      const nameObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      }
      setPersons(persons.concat(nameObject));
      //y se le concatena al arreglo 
      setNewName('')
      setNewNumber('')
    }    
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addRecord}>
        <div>
          name: <input value={newName} onChange={handleNameInputChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handlePhoneInputChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => <li key={person.id}>{person.name} {person.number} </li>)}
        </ul>
    </div>
  )
}

export default App

//por cada persona de personas, el id de el arreglo y el los nombres que guarda el arreglo
//{persons.map((person) => <li key={person.id}>{person.name}</li>)}
//esto se uso para pintar el arreglo de personas junto con las nuevas personas