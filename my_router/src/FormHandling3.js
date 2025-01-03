import React, { useState } from 'react';

function FormHandling3() {
  const [form, setForm] = useState({
    name: '', 
    favorite: 'Marvel',
    accepted: false, 
  });

  const handleEvent = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;
    setForm({
      ...form,
      [name]: fieldValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Fill Up the Form</h2>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={form.name}
          onChange={handleEvent}
        />
        <br />
        <select
          name="favorite"
          value={form.favorite}
          onChange={handleEvent}
        >
          <option value="Marvel">Marvel</option>
          <option value="Dc">Dc</option>
          <option value="Nolan">Nolan</option>
        </select>
        <br />
        <input
          type="checkbox"
          name="accepted"
          checked={form.accepted}
          onChange={handleEvent}
        />
        <span>Accept Terms and Conditions</span>
    <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormHandling3;
