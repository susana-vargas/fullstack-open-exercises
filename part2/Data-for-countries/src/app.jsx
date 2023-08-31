import { useState, useEffect } from 'react';
import axios from 'axios';
import { CountryData } from './CountryData';

const Button = () => {

  const onClick = () => {
    console.log('Click');
  }

  return <>
      <button onClick={onClick}>show</button>
    </>
}

export const App = () => {
  const [paises, setPaises] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        setPaises(response.data);
      })
  }, []);

  const paisesFiltrados = 
    paises.filter((pais) => pais.name.common.includes(input));

  const handleInputChange = (event) => {
    setInput(event.target.value)
  }

  

  return (
    <>
      <h1>Hello World</h1>
      <form >
        <div>
          Find Countries <input value={input} onChange={handleInputChange} />
        </div>
      </form>
      {paisesFiltrados.length === 1 
        ? <>
            <CountryData 
              name={paisesFiltrados[0].name.common}
              capital={paisesFiltrados[0].capital} 
              area={paisesFiltrados[0].area}
              imageUrl={paisesFiltrados[0].flags.png} />
          </> :
        paisesFiltrados.length > 1 && paisesFiltrados.length <= 10
        ? <>
            {paisesFiltrados.map(pais => 
              <> 
                <li>{pais.name.common} <Button /></li>
              </>
            )}
          </>
        : <p><strong>Be more specific</strong></p>}
    </>
  )  
}

