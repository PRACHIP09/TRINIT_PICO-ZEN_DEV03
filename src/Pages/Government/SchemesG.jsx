import {
  Grid, Card, CardMedia,
  CardContent, Typography, CardActionArea,
  CardActions, Button, InputAdornment, TextField
} from '@mui/material'
import React, { useState } from 'react'
import { useFormik } from "formik";
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
const validationSchema = yup.object({
  name: yup
    .string('Enter your Scheme Name')
    .required('Scheme Name is required'),
  desc: yup
    .string('Enter Description')
    .required('Description is required'),
  link: yup
    .string('Enter Link of the scheme')
    .required('Link is required'),
  image: yup
    .string('Upload Image')
    .required('Image is required'),
});

const SchemesG = () => {

  const formik = useFormik({
    initialValues: {
      name: '',
      desc: '',
      link: '',
      image: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <Grid item xs={12}>
        Title
      </Grid>
      <Grid item xs={12}>
        About Schemes
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div>
              List of Ongoing schemes
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div style={{ fontSize: "1.5rem" }}>
              Add Schema
            </div>
            <div>
              <form onSubmit={formik.handleSubmit} style={{ marginLeft: "1.2rem" }}>
                <Grid container spacing={2} marginTop={2}>
                  <Grid item xs={12}>
                    <TextField
                      id="name"
                      name="name"
                      label="Name"
                      color='success'
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      error={formik.touched.name && Boolean(formik.errors.name)}
                      helperText={formik.touched.name && formik.errors.name}
                      sx={{ width: "90%" }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="desc"
                      name="desc"
                      label="Description"
                      color='success'
                      value={formik.values.desc}
                      onChange={formik.handleChange}
                      error={formik.touched.desc && Boolean(formik.errors.desc)}
                      helperText={formik.touched.desc && formik.errors.desc}
                      sx={{ width: "90%" }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="link"
                      name="link"
                      label="Link of scheme"
                      color='success'
                      value={formik.values.link}
                      onChange={formik.handleChange}
                      error={formik.touched.link && Boolean(formik.errors.link)}
                      helperText={formik.touched.link && formik.errors.link}
                      sx={{ width: "90%" }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="image"
                      name="image"
                      label="Upload Image"
                      color='success'
                      value={formik.values.image}
                      onChange={formik.handleChange}
                      error={formik.touched.image && Boolean(formik.errors.image)}
                      helperText={formik.touched.image && formik.errors.image}
                      sx={{ width: "90%" }}
                    />
                  </Grid>
                </Grid>
                <Button color="success" variant="contained" type="submit"
                  sx={{ width: "90%", marginTop: "1.2rem", fontSize: "1.1rem" }}>
                  <Link to="/" style={{ textDecoration: "none", color: "white" }}>Submit</Link>
                </Button>
              </form>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default SchemesG
