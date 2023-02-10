import React from 'react'
import { Grid, TextField, Button, Card, Modal, Box, Typography } from '@mui/material'
import { useFormik } from "formik";
import * as yup from 'yup';
import image from '../../Images/login.webp'
const validationSchema = yup.object({
    description: yup
        .string('Enter plant Description')
        .required('Description is required'),
    name: yup
        .string('Enter Blog Name')
        .required('Blog Name is required'),
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
const BlogInfo = () => {
    const formik = useFormik({
        initialValues: {
            description: '',
            image: '',
            name: '',
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
                                    id="name"
                                    name="name"
                                    color='success'
                                    placeholder='Enter Blog Name'
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    error={formik.touched.name && Boolean(formik.errors.name)}
                                    helperText={formik.touched.name && formik.errors.name}
                                    sx={{ width: "100%", marginBottom: "2vh" }}
                                />
                                <TextField
                                    id="description"
                                    name="description"
                                    color='success'
                                    multiline
                                    rows={4}
                                    placeholder='Enter Description'
                                    value={formik.values.description}
                                    onChange={formik.handleChange}
                                    error={formik.touched.description && Boolean(formik.errors.description)}
                                    helperText={formik.touched.description && formik.errors.description}
                                    sx={{ width: "100%", marginBottom: "2vh" }}
                                />
                                <TextField
                                    id="image"
                                    name="image"
                                    color='success'
                                    placeholder='Post an Image'
                                    value={formik.values.image}
                                    onChange={formik.handleChange}
                                    error={formik.touched.image && Boolean(formik.errors.image)}
                                    helperText={formik.touched.image && formik.errors.image}
                                    sx={{ width: "100%", marginBottom: "2vh" }}
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

export default BlogInfo
