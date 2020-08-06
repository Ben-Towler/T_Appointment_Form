import React, { useEffect, useState } from "react";
import Head from "next/head";
const API_BASE = 'https://clinia-coding-challenge.s3.ca-central-1.amazonaws.com/';

import "../styles.scss";
import { SelectService } from '../components';

function Index () {
  const [selectedForm, setSelectedForm] = useState([]);
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
    const form = getSelectedForm(e.target.value);
    setSelectedForm( form );
  }

  function getSelectedForm (service) {
    const defaultForm = forms[0];
    const form = forms.filter(form => {
      return form.services.includes(service)
    });

    if (form.length) return form;
    return defaultForm;
  }
  
  return (
    <div>
      <Head>
        <title>Appointment Form</title>
      </Head>
      <div style={{ textAlign: "center" }} className="example">
        <SelectService onChange={ onChange } />
      </div>
    </div>
  );
}

export default Index;