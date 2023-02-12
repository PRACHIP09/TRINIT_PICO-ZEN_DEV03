import {
  Grid, Card, CardMedia,
  CardContent, Typography, CardActionArea,
  CardActions, Button, InputAdornment, TextField
} from '@mui/material'
import React, { useState } from 'react'
import { useFormik } from "formik";
import * as yup from 'yup';
import Seedling from "../../Images/seedling.png"
import Harvest from "../../Images/harvest.png"
import Gardening from "../../Images/hydroponic.png"
import Agriculture from "../../Images/agriculture.png"
import Vegetation from "../../Images/vegetation.png"
import Farming from "../../Images/field.png"


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
  const token = localStorage.getItem("token")
  const icons1 = [
    { name: "Seedling", image: Seedling }
    , { name: "Farming", image: Farming }
    , { name: "Harvest", image: Harvest }
    , { name: "Gardening", image: Gardening }
    , { name: "Agriculture", image: Agriculture }
    , { name: "Vegetation", image: Vegetation }]

  const formik = useFormik({
    initialValues: {
      name: '',
      desc: '',
      link: '',
      image: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append("donation", values.name);
      formData.append("know_more", values.link);
      formData.append("desc", values.desc);
      console.log(FormData)
      fetch("http://localhost:5500/api/scheme/new", {
        method: "POST",
        body: formData,
        headers: { "Authorization": `Bearer ${token}` },
      })
        .then((result) => {

          console.log(result);
        })
        .catch(() => {
          alert('Error in the Code');
        });
    },
  });


  return (
    <div>
      <Grid item xs={12} style={{ fontSize: "1.5rem", margin: "3vh 0vh" }}>

      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {icons1.map((item) => {
            return (
              <Grid item xs={2}>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <img src={item.image} style={{ width: "10vh", height: "10vh" }} />
                  </Grid>
                  <Grid item xs={12}>
                    {item.name}
                  </Grid>
                </Grid>
              </Grid>
            )
          })}
        </Grid>
      </Grid>
      {/*<Grid item xs={12} style={{ fontSize: "1.5rem" }}>
        Our Sponsers
      </Grid>*/}

      <Grid item xs={12}>

      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} style={{ textAlign: "left", paddingLeft: "5vh", paddingTop: "5vh" }}>
            <div style={{ fontSize: "1.5rem", marginBottom: "2vh" }}>
              Our Best Ongoing Schemes
            </div>
            <li style={{ fontSize: "1.3rem", marginBottom: "2vh" }}>
              Pradhan Mantri Kisan Samman Nidhi
              <Button style={{ backgroundColor: "green", color: "white", borderRadius: "5vh", height: "3vh", padding: "0vh 1vh", marginLeft: "2vh" }}>Ongoing</Button>
              <Button style={{ backgroundColor: "green", color: "white", borderRadius: "5vh", height: "3vh", padding: "0vh 1vh", marginLeft: "2vh" }}>New</Button>
            </li>
            <li style={{ fontSize: "1.3rem", marginBottom: "2vh" }}>
              KCC for animal husbandry and fisheri
              <Button style={{ backgroundColor: "green", color: "white", borderRadius: "5vh", height: "3vh", padding: "0vh 1vh", marginLeft: "2vh" }}>Agricultural</Button>
              <Button style={{ backgroundColor: "green", color: "white", borderRadius: "5vh", height: "3vh", padding: "0vh 1vh", marginLeft: "2vh" }}>Fisheri</Button>
            </li>
            <li style={{ fontSize: "1.3rem", marginBottom: "2vh" }}>
              Group Accident Insurance scheme for Fsherman
              <Button style={{ backgroundColor: "green", color: "white", borderRadius: "5vh", height: "3vh", padding: "0vh 1vh", marginLeft: "2vh" }}>Fisheri</Button>
              <Button style={{ backgroundColor: "green", color: "white", borderRadius: "5vh", height: "3vh", padding: "0vh 1vh", marginLeft: "2vh" }}>Insurance</Button>
            </li>
            <li style={{ fontSize: "1.3rem", marginBottom: "2vh" }}>
              PM Kisan Dhan Yojana
              <Button style={{ backgroundColor: "green", color: "white", borderRadius: "5vh", height: "3vh", padding: "0vh 1vh", marginLeft: "2vh" }}>Loan</Button>
              <Button style={{ backgroundColor: "green", color: "white", borderRadius: "5vh", height: "3vh", padding: "0vh 1vh", marginLeft: "2vh" }}>Pm Funds</Button>
            </li>
            <div style={{ fontSize: "1.5rem", marginBottom: "2vh" }}>
              Our UpComing Schemes
            </div>
            <li style={{ fontSize: "1.3rem", marginBottom: "2vh" }}>
              Launch of 600 PM Kisan Samruddhi Kendras (PM-KSK)
              <Button style={{ backgroundColor: "green", color: "white", borderRadius: "5vh", height: "3vh", padding: "0vh 1vh", marginLeft: "2vh" }}>PM-KSK</Button>
              <Button style={{ backgroundColor: "green", color: "white", borderRadius: "5vh", height: "3vh", padding: "0vh 1vh", marginLeft: "2vh" }}>Upcoming</Button>
            </li>
            <li style={{ fontSize: "1.3rem", marginBottom: "2vh" }}>
              Launching Bharat Urea Bags - of One Nation One Fertilizer Scheme for Farmers
            </li>
            <li style={{ fontSize: "1.3rem", marginBottom: "2vh" }}>
              PM kisan yojna
              <Button style={{ backgroundColor: "green", color: "white", borderRadius: "5vh", height: "3vh", padding: "0vh 1vh", marginLeft: "2vh" }}>Upcoming</Button>
              <Button style={{ backgroundColor: "green", color: "white", borderRadius: "5vh", height: "3vh", padding: "0vh 1vh", marginLeft: "2vh" }}>Benfits</Button>
            </li>
            <li style={{ fontSize: "1.3rem", marginBottom: "2vh" }}>
              Launch of Weekly Fertilizer International e-Magazine
              <Button style={{ backgroundColor: "green", color: "white", borderRadius: "5vh", height: "3vh", padding: "0vh 1vh", marginLeft: "2vh" }}>Fertilizer</Button>
              <Button style={{ backgroundColor: "green", color: "white", borderRadius: "5vh", height: "3vh", padding: "0vh 1vh", marginLeft: "2vh" }}>e-Maganize</Button>
            </li>
          </Grid>
          <Grid item xs={12} md={6}>
            <div style={{ fontSize: "1.5rem", marginTop: "5vh" }}>
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
                  Submit
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
