import { Grid, TextField, Button, Card, Modal, Box, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useFormik } from "formik";
import * as yup from 'yup';
import Report from './Report';
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

const Progress = () => {
    const formik = useFormik({
        initialValues: {
            question: '',
            image: '',
            email: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
            const formData = new FormData();
            formData.append("question", values.question);
            fetch("http://localhost:5500/api/question/new", {
                method: "POST",
                body: formData,
                headers: { "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U2NjYyYjZmNDgwZGY4OTJhNGU2ZDMiLCJpYXQiOjE2NzYwNTI2MzF9.wC3cyq0bXap7rAug3Yf5VmECeIf1_rbdQjxLw6bkjes` },
            })
                .then((result) => {

                    console.log(values);
                })
                .catch(() => {
                    alert('Error in the Code');
                });
        },
    });



    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Grid container spacing={2} padding={2}>
                
                <Grid item md={4} xs={12} style={{ fontSize: "3vh", textAlign: "left", marginTop: "1.75vh" }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            Curious to know about Plants ? <br />Post your question and learn about it today from all our users around the globe
                        </Grid>

                    </Grid>

                </Grid>
                <Grid item md={8} xs={12}>
                    <Grid container spacing={2}>
                        <div>
                            <form onSubmit={formik.handleSubmit} style={{ marginLeft: "1.2rem" }}>
                                <Grid container spacing={2} marginTop={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            id="question"
                                            name="question"
                                            color='success'
                                            placeholder='Post your Question'
                                            value={formik.values.question}
                                            onChange={formik.handleChange}
                                            error={formik.touched.question && Boolean(formik.errors.question)}
                                            helperText={formik.touched.question && formik.errors.question}
                                            sx={{ width: "128vh" }}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            id="email"
                                            name="email"
                                            placeholder="Enter your Email"
                                            color='success'
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            error={formik.touched.email && Boolean(formik.errors.email)}
                                            helperText={formik.touched.email && formik.errors.email}
                                            sx={{ width: "128vh" }}
                                        />
                                    </Grid>
                                    <Button color="success" variant="contained" type="submit"
                                        sx={{ width: "96%", marginTop: "1.2rem", fontSize: "1.1rem", marginLeft: "4vh" }}>
                                        Submit
                                    </Button>
                                </Grid>
                            </form>
                        </div>
                    </Grid>
                </Grid>
                <Report/>

            </Grid>
        </div>
    )
}

export default Progress
