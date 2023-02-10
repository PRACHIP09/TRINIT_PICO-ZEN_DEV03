import { Grid, TextField, Button, Card } from '@mui/material'
import React, { useState } from 'react'
import { useFormik } from "formik";
import * as yup from 'yup';
import image from '../Images/login.webp'
const validationSchema = yup.object({
    question: yup
        .string('Enter your Question')
        .required('Question is required'),
    answer: yup
        .string('Enter your Answer')
        .required('Answer is required'),
    image: yup
        .string('Enter an Image')
        .required('Image is required'),
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
});

const Search = () => {
    const formik = useFormik({
        initialValues: {
            question: '',
            image: '',
            email: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <div>
            <Grid container spacing={2} padding={2}>
                <Grid item xs={12}>
                    Title
                </Grid>
                <Grid item xs={12}>
                    Description
                </Grid>
                <Grid item xs={12} style={{ fontSize: "3vh", textAlign: "center", marginTop: "1.75vh" }}>
                    Curious to know about Plants ? <br />Post your question and learn about it today from all our users around the globe
                </Grid>
                <Grid item xs={12}>
                    <div>
                        <form onSubmit={formik.handleSubmit} style={{ marginLeft: "1.2rem" }}>
                            <Grid container spacing={2} marginTop={2}>
                                <Grid item xs={8}>
                                    <TextField
                                        id="question"
                                        name="question"
                                        color='success'
                                        placeholder='Post your Question'
                                        value={formik.values.question}
                                        onChange={formik.handleChange}
                                        error={formik.touched.question && Boolean(formik.errors.question)}
                                        helperText={formik.touched.question && formik.errors.question}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <Button color="success" variant="contained" type="submit"
                                        sx={{ width: "100%", fontSize: "1.25rem", height:"3.5rem"}}>
                                        Submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} sm={6} >
                    <Card style={{ margin: "2vh", boxShadow: "none", padding: "2vh" }}>
                        <Grid container spacing={2}>
                            <Grid item xs={6} style={{ fontSize: "1.5rem", textAlign: "left" }}>
                                Name
                            </Grid>
                            <Grid item xs={12} style={{ fontSize: "1.2rem", textAlign: "left", marginTop: "-2vh" }}>
                                info@gmail.com
                            </Grid>
                            <Grid item xs={12} style={{ fontSize: "1.3rem", textAlign: "left" }}>
                                Lorem ipsum gdshr sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor urna nunc id cursus metus aliquam eleifend mi.
                                Vitae proin sagittis nisl rhoncus. Purus in mollis nunc sed id semper.
                            </Grid>
                            <Grid item xs={12}>
                                <img src={image} style={{ height: "30vh", width: "45vh" }} />
                            </Grid>
                            <Grid item xs={12} style={{ fontSize: "1.3rem", textAlign: "left" }}>
                                Lorem ipsum gdshr sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor urna nunc id cursus metus aliquam eleifend mi.
                                Vitae proin sagittis nisl rhoncus. Purus in mollis nunc sed id semper.
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default Search
