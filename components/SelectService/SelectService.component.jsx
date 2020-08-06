import React, { useEffect, useState } from 'react';
const API_BASE = 'https://clinia-coding-challenge.s3.ca-central-1.amazonaws.com/';
import { FormLabel, InputSelect } from '../../components';

function SelectService ({ onChange }) {
  const [services, setServices] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      const services = await fetchData(API_BASE + 'services.json');
      if (!error) setServices(services);
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

  return (
    <div className="appointment appointment--type">
      <form className="form form--service">
        <FormLabel htmlFor="form_service">Choose a Service</FormLabel>
        <InputSelect
          name="services"
          id="form_service"
          options={services}
          onChange={onChange}
        />
      </form>
    </div>
  )
}

export default SelectService;