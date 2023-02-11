import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios'

const theme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const headers = {
      // "content-type": "application/json",
      // 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36',
      'Access-Control-Allow-Origin':'*',
    };
    axios
    .post('http://127.0.0.1:5000/crop-predict',data,{headers})
    .then((res) => console.log(res.data))
    .catch((err) => console.error(err));

  
    console.log(data);
    console.log({
      nitrogen: data.get('nitrogen'),
      phosphorous: data.get('phosphorous'),
      pottasium: data.get('pottasium'),
      ph: data.get('ph'),
      rainfall: data.get('rainfall'),
      state: data.get('state'),
      city: data.get('city'),
    });
  };

  return (
    <div style={{padding:"0vh 60vh"}}>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
          <Typography component="h1" variant="h5">
            What Crop to Grow? 
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="nitrogen"
              label="Nitrogen"
              name="nitrogen"
              // placeholder="Email"
              // autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="phosphorous"
              label="Phosphorous"
              name="phosphorous"
              // autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="pottasium"
              label="Pottasium"
              name="pottasium"
              // autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="ph"
              label="PH value of soil"
              name="ph"
              // autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="rainfall"
              label="Rainfall in mm"
              name="rainfall"
              // autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="state"
              label="State"
              name="state"
              // autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="city"
              label="City"
              name="city"
              // autoComplete="email"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Predict
            </Button>
      
          </Box>
        </Box>
        </div>
  );
}