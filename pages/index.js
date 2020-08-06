import React, { useState } from "react";
import Head from "next/head";

import "../styles.scss";
import { SelectService } from '../components';

function Index () {
  const [selectedService, setSelectedService] = useState([]);

  function onChange (e) {
    setSelectedService(e.target.value);
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