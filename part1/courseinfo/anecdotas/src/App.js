import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
  ];
  //se llama al hook useState para darle estado al componente
  const [selected, setSelected] = useState(0);  
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
 // crea un arreglo de (indice de  la variable) y que sea el arreglo de cantidad de ceros
  
 //esta funcion resibe de parametros min y max y multiplica el resltado de math.random por
 //la diferencia entre el valor minimo y el maximo del rango, y luego suma el valor minimo
 //Math.floor se utiliza para redondear el resultado hacia abajo y obtener un número entero.
  const randomNumber = (min, max) => {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber
  }
  //es un componente de boton que saca un numero aleatorio 
  const onClick = () => {
    const min = 0
    const max = anecdotes.length - 1
    const randomNum = randomNumber(min, max)    
    console.log('indice', randomNum);
    setSelected(randomNum)
  } 
  
  console.log(votes)
  //es la copia de un componente que le saca el contenido al arrego y ala variable le suma 1
  const vote = () => {
    const copy = [...votes]
    copy[selected] = copy[selected] + 1
    setVotes(copy)    
  }
 //es una funcion que le suma uno a la variable y la muestra en la consola 
  let number1 = 0
  const analisis = () => {
    
    number1 = number1 + 1
    console.log(number1)
    number1 += 1
    console.log(number1)
    number1++
    console.log(number1)
  }

  return (
    <div>
      {anecdotes[selected]} <br />
      <p>has {votes[selected]} votes</p>
      <Button handleClick={onClick}  text='next anecdote'/>
      <Button handleClick={vote}  text='vote'/>
      <Button handleClick={analisis}  text='analisis'/>
    </div>
  )
}

export default App