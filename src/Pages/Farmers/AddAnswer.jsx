import React from 'react'
import { Grid, TextField, Button, Card, Modal, Box, Typography } from '@mui/material'
import { useFormik } from "formik";
import * as yup from 'yup';
import image from '../../Images/login.webp'
const validationSchema = yup.object({
  answer: yup
    .string('Enter your Answer')
    .required('Answer is required'),
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
const AddAnswer = () => {
  const formik = useFormik({
    initialValues: {
      answer: '',
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
          <div style={{ fontSize: "1.5rem" }}>Type your Answer here</div>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2} marginTop={2}>
              <Grid item xs={12}>
                <TextField
                  id="answer"
                  name="answer"
                  color='success'
                  placeholder='Post your Answer'
                  value={formik.values.answer}
                  onChange={formik.handleChange}
                  error={formik.touched.answer && Boolean(formik.errors.answer)}
                  helperText={formik.touched.answer && formik.errors.answer}
                  sx={{ width: "100%" }}
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

export default AddAnswer
