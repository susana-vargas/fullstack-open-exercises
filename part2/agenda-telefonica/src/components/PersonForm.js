const PersonForm = ({
  newName,
  newNumber,
  handleNameInputChange,
  handlePhoneInputChange,
  addRecord,
}) => {
  return (
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
  );
};

export default PersonForm;
//cuando ingresen a una persona que ya esta registrada en la agenda, pero tiene otro
//numero de telefono y la quieran agregar se tiene que disparar una ventana de
//confirmacion, si es true el numero anterior se tendra que remplazar por el nuevo 
//numero ingresado