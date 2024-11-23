import React, { useState } from "react";
import axios from "axios";

let initialValue = {
    name: "",
    country: "",
    city: "",
    date: "",
}

function Musicals({getAllMusicals,}) {
  const [musicalForm, setMusicalForm] = useState(initialValue);

  function handleChange(e) {
    const { name, value } = e.target;
    setMusicalForm({...musicalForm, [name]: value});
  }

  async function handleCreatingNewMusical(e) {
    e.preventDefault();
    try {
        let newMusical = {
            name: musicalForm.name,
            country: musicalForm.country,
            city: musicalForm.city,
            date: musicalForm.date,
        };
        // or I can do it like this if I want... but I don't want... Moohahaha: let {name, country, city, date} = newMusical;
        let response = await axios.post("http://localhost:8080/musicals/create", newMusical);
        alert(response.data.msg);
        getAllMusicals();
        setMusicalForm(initialValue);
    } catch (error) {
        console.error(error.message);
    }
  }

  return (
    <div>
        <h3>Add a New Musical Show</h3>
      <form className="musical-form-container" onSubmit={handleCreatingNewMusical} >
        <label htmlFor="name-musical">Name: </label>
        <input
          id="name-musical"
          type="text"
          placeholder="Enter the Musical's name"
          onChange={handleChange}
          value={musicalForm.name}
          name="name"
        />

        <label htmlFor="country-musical">Country: </label>
        <input
          id="country-musical"
          type="text"
          placeholder="Enter the County"
          onChange={handleChange}
          value={musicalForm.country}
          name="country"
        />

        <label htmlFor="city-musical">City: </label>
        <input
          id="city-musical"
          type="text"
          placeholder="Enter the City"
          onChange={handleChange}
          value={musicalForm.city}
          name="city"
        />

        <label htmlFor="date-musical">Date: </label>
        <input
          id="date-musical"
          type="date"
          placeholder="Enter the Date"
          onChange={handleChange}
          value={musicalForm.date}
          name="date"
        />
        <input type="submit" value="create-musical" />
      </form>
    </div>
  );
}

export default Musicals;
