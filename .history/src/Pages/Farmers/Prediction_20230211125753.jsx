import React from 'react'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Prediction = () => {
  return (
    <div>
        <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" }
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Nitrogen"
          defaultValue="Enter the value (example:50)"
        />
        <TextField
          required
          id="outlined-required"
          label="Phosphorous"
          defaultValue="Enter the value (example:50)"
        />
        <br />
        <TextField
          required
          id="outlined-required"
          label="Pottasium"
          defaultValue="Enter the value (example:50)"
        />
        <TextField
          required
          id="outlined-required"
          label="Ph level"
          defaultValue="Enter the value(0-14)"
        />
        <br />
        <TextField
          required
          id="outlined-required"
          label="Rainfall level(in mm)"
          defaultValue="Enter the value"
        />
        <TextField
          required
          id="outlined-required"
          label="State"
          defaultValue="Enter the state"
        />
        <br />
        <TextField
          required
          id="outlined-required"
          label="City"
          defaultValue="Enter your city"
        />
      </div>

    </Box>
    </div>
  )
}

export default Prediction