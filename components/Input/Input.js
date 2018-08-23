const Input = (props) => {
  return (
    <div className="field">
      <div className="control">
        <input className="input is-large" {...props} />
      </div>
    </div>
  )
}

Input.defaultProps = {
  placeholder: null,
  type: 'text'
}

export default Input