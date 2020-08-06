import React, { useState } from 'react';

function Form ({ data, service }) {
  const [formData, setFormData] = useState(setDefaultState);

  function setDefaultState () {
    const state = {};
    data.fields.map(field => state[field.name] = '');
    state.service = service;
    return state;
  }

  return (
    'test'
  )
}

export default Form;