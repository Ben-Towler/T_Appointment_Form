import React from 'react';

function InputSimple ({ onChange, ...rest }) {
  return (
    <input
      className="form__input"
      onChange={(e) => onChange(e)}
      {...rest}
    />
  )
}

export default InputSimple;