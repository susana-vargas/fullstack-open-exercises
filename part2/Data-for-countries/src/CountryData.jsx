
export const CountryData = (props) => {



  const onClick = () => {
    console.log('Click');
  }


  return (
    <>
      <h1>{props.name}</h1>
      <p><strong>Capital {props.capital}</strong></p>
      <p><strong>Area {props.area}</strong></p>
      <h2>Lenguages:</h2>
      <img src={props.imageUrl} alt="bandera" />
    </>
  )
}

