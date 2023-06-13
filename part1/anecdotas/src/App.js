import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const PrincipalHeader = (props) => {
  return (
    <>
    <h1>{props.title}</h1>
    </>
  )
}

const Header = (props) => {
  return (
    <>
    <h1>{props.title}</h1>
    </>
  )
}



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
  // crea un arreglo de (indice de  la variable) y que sea el arreglo de cantidad de ceros
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  
 
 // esta funcion retorna un numero aleatorio entre el rango de numeros que se le dan
  const randomNumber = (min, max) => {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber
  }

  //es un componente de boton que saca un numero aleatorio 
  const onClick = () => {
    const min = 0
    const max = anecdotes.length - 1
    const randomNum = randomNumber(min, max)    
    setSelected(randomNum)
  } 
  
  
  //es la copia de un componente que le saca el contenido al arrego y ala variable le suma 1
  const vote = () => {
    const copy = [...votes]
    copy[selected] = copy[selected] + 1
    setVotes(copy)    
  }

// saca el numero mayor y su indice 
  //laboratory
  let i = 0;
  let max = 0;
  let indexOfGreatest = 0
  while (i < votes.length) {
   const element = votes[i];
   if (element > max) {
    max = element;
    indexOfGreatest = i
   }
  i++;
}
console.log(max, 'aqui esta mi log', indexOfGreatest);


//end of laboratory
 
  return (
    <div>
      <PrincipalHeader title={'Anecdotes of the day'}/>
      {anecdotes[selected]} <br />
      <p>has {votes[selected]} votes</p>
      <Button handleClick={onClick}  text='next anecdote'/>
      <Button handleClick={vote}  text='vote'/>
      <Header title={'Anecdote with most votes'}/>
      <p>{anecdotes[indexOfGreatest]}</p>
      <p>has {votes[indexOfGreatest]} votes</p>
    </div>
  )
}

export default App