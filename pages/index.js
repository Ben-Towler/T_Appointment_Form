import React, { useEffect, useState } from "react";
import Head from "next/head";
import "../styles.scss";
import { SelectService, Form } from '../components';

const API_BASE = 'https://clinia-coding-challenge.s3.ca-central-1.amazonaws.com/';

function Index () {
  const [selectedForm, setSelectedForm] = useState([]);
  const [defaultFormState, setDefaultFormState] = useState({});
  const [service, setService] = useState([]);
  const [forms, setForms] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      const forms = await fetchData(API_BASE + 'form.json');
      if (!error) setForms(forms);
    })();
  }, []);

  async function fetchData (url) {
    const response = await fetch(url);
    if (! response.ok) fetchErrorHandler();

    return await response.json();
  }

  function fetchErrorHandler () {
    setError(true);
    console.error(`Failed to fetch data ${url}`);
  }

  function onChange (e) {
    setService(e.target.value);
    const form = getSelectedForm(e.target.value);
    setSelectedForm( form );
    setDefaultFormState( setDefaultState(form.fields, e.target.value) );
  }

  function setDefaultState (data, service) {
    const state = {};
    data.map(field => state[field.name] = '');
    state.service = service;
    return state;
  }

  function getSelectedForm (service) {
    const defaultForm = forms[0];
    const form = forms.filter(form => {
      return form.services.includes(service)
    });

    if (form.length) return form[0];
    return defaultForm;
  }
  
  return (
    <div>
      <Head>
        <title>Appointment Form</title>
      </Head>
      <div className="wrapper">
        <SelectService onChange={ onChange } />
        {service.length ?
          <Form 
            data={ selectedForm } 
            formState={ defaultFormState } 
            service={ service } 
          />
          : null
        }
      </div>
    </div>
  );
}

export default Index;