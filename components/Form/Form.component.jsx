import React, { useState } from 'react';
import { InputSimple, FormLabel, TextArea } from '../../components';

function Form ({ data, service }) {
  const [formData, setFormData] = useState(setDefaultState);

  function setDefaultState () {
    const state = {};
    data.fields.map(field => state[field.name] = '');
    state.service = service;
    return state;
  }

  function handleFormSubmit (e) {
    e.preventDefault();
  }

  function onChange (e) {
  }

  function renderInput (input) {

    if (isSimpleInput(input)) {
      return <InputSimple {...input} id={input.name} onChange={onChange} />;
    };
    if (input.type === 'textarea') {
      return <TextArea {...input} id={input.name} onChange={onChange} />;
    }

  }

  function isSimpleInput (input) {
    return input.type === 'text' || input.type === 'email' || input.type == 'phone';
  }

  return (
    <section className="appointment">
      {data.title ? 
        <header className="appointment__header">
          <h3 className="title title--primary">{data.title}</h3>
        </header>
      : null}

      <div className="appointment__form">
        <form 
          method="POST" 
          onSubmit={(e) => handleFormSubmit(e)} 
          className="form form--appointment" 
          action="#!"
        >

          <fieldset>
            {data.fields ? data.fields.map((input) => (
              <div className="form__row" key={input.name}>
                <FormLabel htmlFor={input.name}>{input.label}</FormLabel>
                {renderInput(input)}
              </div>
            )): null}
          </fieldset>

          <div className="form__row form__footer">
            <button className="button button--submit" type="submit">Submit Appointment Request</button>
          </div>

        </form>
      </div>

    </section>
  )
}

export default Form;