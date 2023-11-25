import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

function FormComponent({ formData }) {
  return (
    <div>
      <h2>Form Data:</h2>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
}

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    destination: "",
    lactoseFree: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <Router>
      <Route path="/">
        <form onSubmit={handleSubmit}>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </label>
          <br />

          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </label>
          <br />

          <label>
            Age:
            <input
              type="text"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </label>
          <br />

          <label>
            Gender:
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
          <br />

          <label>
            Destination:
            <select
              name="destination"
              value={formData.destination}
              onChange={handleChange}
            >
              <option value="Japan">Japan</option>
              <option value="USA">USA</option>
            </select>
          </label>
          <br />

          <label>
            Lactose Free:
            <input
              type="checkbox"
              name="lactoseFree"
              checked={formData.lactoseFree}
              onChange={handleChange}
            />
          </label>
          <br />

          <button type="submit">Submit</button>
        </form>

        <FormComponent formData={formData} />
      </Route>
    </Router>
  );
}

export default App;
