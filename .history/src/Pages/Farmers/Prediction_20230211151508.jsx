import React, { useState } from 'react';
import axios from 'axios';

const Prediction = () => {
  const [formData, setFormData] = useState({
    nitrogen: '',
    phosphorus: '',
    potassium: '',
    rainfall: '',
    ph: '',
    state: '',
    city: '',
  });

  const handleChange = (event) => {
    setFormData({
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const headers = {
        "content-type": "application/json",
        // 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36',
        'Access-Control-Allow-Origin':'*',
      };
    axios
      .post('http://127.0.0.1:5000/crop-predict', formData,{headers})
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nitrogen">Nitrogen:</label>
      <input
        type="text"
        id="nitrogen"
        name="nitrogen"
        value={formData.nitrogen}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="phosphorus">Phosphorus:</label>
      <input
        type="text"
        id="phosphorus"
        name="phosphorus"
        value={formData.phosphorus}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="potassium">Potassium:</label>
      <input
        type="text"
        id="potassium"
        name="potassium"
        value={formData.potassium}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="rainfall">Rainfall:</label>
      <input
        type="text"
        id="rainfall"
        name="rainfall"
        value={formData.rainfall}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="ph">pH:</label>
      <input
        type="text"
        id="ph"
        name="ph"
        value={formData.ph}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="state">State:</label>
      <input
        type="text"
        id="state"
        name="state"
        value={formData.state}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="city">City:</label>
      <input
        type="text"
        id="city"
        name="city"
        value={formData.city}
        onChange={handleChange}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Prediction;