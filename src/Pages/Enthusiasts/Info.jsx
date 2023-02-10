import React from 'react'
import { Grid, TextField, Button, Card, Modal, Box, Typography } from '@mui/material'
import { useFormik } from "formik";
import * as yup from 'yup';
import image from '../../Images/login.webp'
const validationSchema = yup.object({
  description: yup
    .string('Enter plant Description')
    .required('Description is required'),
  instructions: yup
    .string('Enter plant Instructions')
    .required('Instructions is required'),
  water: yup
    .string('Enter Water Requirements')
    .required('Water Requirements is required'),
  sunlight: yup
    .string('Enter Sunlight Requirements')
    .required('Sunlight Requirements is required'),
  image: yup
    .string('Enter plant Image')
    .required('Plant Image is required'),
});

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const Info = () => {
  const formik = useFormik({
    initialValues: {
      description: '',
      image:'',
      instructions:'',
      water:'',
      sunlight:''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <Box sx={style}>
        <div>
          <div style={{ fontSize: "1.5rem" }}>Add your Plant Details</div>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2} marginTop={2}>
              <Grid item xs={12}>
                <TextField
                  id="description"
                  name="description"
                  color='success'
                  placeholder='Enter Plant Description'
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  error={formik.touched.description && Boolean(formik.errors.description)}
                  helperText={formik.touched.description && formik.errors.description}
                  sx={{ width: "100%" , marginBottom:"2vh"}}
                />
                <TextField
                  id="image"
                  name="image"
                  color='success'
                  placeholder='Enter Plant Image'
                  value={formik.values.image}
                  onChange={formik.handleChange}
                  error={formik.touched.image && Boolean(formik.errors.image)}
                  helperText={formik.touched.image && formik.errors.image}
                  sx={{ width: "100%" , marginBottom:"2vh"}}
                />
                <TextField
                  id="instructions"
                  name="instructions"
                  color='success'
                  placeholder='Enter Plant Instructions'
                  value={formik.values.instructions}
                  onChange={formik.handleChange}
                  error={formik.touched.instructions && Boolean(formik.errors.instructions)}
                  helperText={formik.touched.instructions && formik.errors.instructions}
                  sx={{ width: "100%" , marginBottom:"2vh"}}
                />
                <TextField
                  id="water"
                  name="water"
                  color='success'
                  placeholder='Enter Water Requiements'
                  value={formik.values.water}
                  onChange={formik.handleChange}
                  error={formik.touched.water && Boolean(formik.errors.water)}
                  helperText={formik.touched.water && formik.errors.water}
                  sx={{ width: "100%" , marginBottom:"2vh"}}
                />
                <TextField
                  id="sunlight"
                  name="sunlight"
                  color='success'
                  placeholder='Enter Sunlight Requirements'
                  value={formik.values.sunlight}
                  onChange={formik.handleChange}
                  error={formik.touched.sunlight && Boolean(formik.errors.sunlight)}
                  helperText={formik.touched.sunlight && formik.errors.sunlight}
                  sx={{ width: "100%" , marginBottom:"2vh"}}
                />
                <Button color="success" variant="contained" type="submit"
                  sx={{ width: "100%", marginTop: "1.2rem", fontSize: "1.1rem" }}>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Box>
    </div>
  )
}

export default Info
