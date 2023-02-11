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
          defaultValue="Hello World"
        />
        <TextField
          required
          id="outlined-required"
          label="Phosphorous"
          defaultValue="Hello World"
        />
        <br />
        <TextField
          required
          id="outlined-required"
          label="Pottasium"
          defaultValue="HelloWorld"
        />
        <TextField
          required
          id="outlined-required"
          label="Ph level"
          defaultValue="HelloWorld"
        />
        <br />
        <TextField
          required
          id="outlined-required"
          label="Rainfall level(in mm)"
          defaultValue="HelloWorld"
        />
        <TextField
          required
          id="outlined-required"
          label="State"
          defaultValue="HelloWorld"
        />
        <br />
        <TextField
          required
          id="outlined-required"
          label="City"
          defaultValue="HelloWorld"
        />
      </div>

    </Box>
    </div>
  )
}

export default Prediction