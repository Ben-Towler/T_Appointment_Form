import React from 'react';

function InputSelect ({ name, options, ...rest }) {
  return (
    <select 
      name={name}
      className='form__select'
      defaultValue='DEFAULT'
      onChange={(e) => onSelectChange(e, name)}
      {...rest}
    >
      <option value='DEFAULT' disabled>Select a {name}</option>
      {options.map(option => {
        return <option key={option} value={option}>{option}</option>
      })}
    </select>
  )
}

export default InputSelect;