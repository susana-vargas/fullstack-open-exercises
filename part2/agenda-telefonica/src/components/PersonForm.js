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
