import React, { useState } from 'react';

const FormInReacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    console.log(name, value); // Corrected to log name and value
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Clear the form after submission
    setFormData({
      name: '',
      email: '',
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            placeholder="email"
            value={formData.email}
            name="email"
            onChange={handleInput}
          />
        </label>
        <br />
        <label>
          Name:
          <input
            type="text"
            placeholder="name"
            value={formData.name}
            name="name"
            onChange={handleInput}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormInReacts;
