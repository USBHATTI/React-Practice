const Card = (props) => {
  const inputStyle = {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid gray',
  }

  return (
    <div>
      <input
        type="text"
        value={props.inputName}
        onChange={(e) => props.setInputName(e.target.value)}
        style={inputStyle}
      />
      <p>with children {props.title} value show like {props.inputName}</p>
    </div>
  )
}

export default Card
