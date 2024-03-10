import React, { useState } from 'react';
import { Form } from 'react-router-dom';

const FormComponentsApi = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handlename = (e) => {
    // Update the state with the entered name
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    // Update the state with the entered email
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <input
          placeholder='enter the name'
          value={name}
          onChange={handlename}
        />
        <input
          placeholder='enter the email'
          value={email}
          onChange={handleEmail}
        />
        <button type='submit'>submit</button>
      </Form>
    </div>
  );
};

export default FormComponentsApi;
