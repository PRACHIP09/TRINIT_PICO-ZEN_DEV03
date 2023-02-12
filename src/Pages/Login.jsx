import {
    Grid, InputAdornment,
    TextField, Button, InputLabel, Select, MenuItem
} from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useFormik } from "formik";
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import image from '../Images/logincar.webp'
const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
    role: yup
        .string('Enter your Role')
});


const Login = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            role:'',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const formData = new FormData();
            formData.append("donation", values.name);
            formData.append("know_more", values.link);
            formData.append("desc", values.desc);
            formData.append("role",values.role);
            console.log(FormData)
            fetch("http://localhost:5500/api/login/new", {
                method: "POST",
                body: formData,
            })
                .then((result) => {
                    console.log(result.data);
                    localStorage.setItem("token", result.data.token);
                })
                .catch(() => {
                    alert('Error in the Code');
                });
        },
    });

    const [showPassword, setShowPassword] = useState(false);
    const [role, setRole] = React.useState('');
    const handleChange = (event) => {
        setRole(event.target.value);
      };
    
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} md={7}>
                    <img src={image} style={{ width: "100%", height: "100%", margin: "1rem" }} />
                </Grid>
                <Grid item xs={12} md={5} style={{ marginBottom: "8rem " }}>
                    <div style={{ fontSize: "1.5rem" }} className="top-marg">
                        Login
                    </div>
                    <div>
                        <form onSubmit={formik.handleSubmit} style={{ marginLeft: "1.2rem" }}>
                            <Grid container spacing={2} marginTop={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        id="email"
                                        name="email"
                                        label="Email"
                                        color='success'
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        error={formik.touched.email && Boolean(formik.errors.email)}
                                        helperText={formik.touched.email && formik.errors.email}
                                        sx={{ width: "90%" }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="password"
                                        name="password"
                                        label="Password"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                    >
                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            )
                                        }}
                                        color='success'
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                        error={formik.touched.password && Boolean(formik.errors.password)}
                                        helperText={formik.touched.password && formik.errors.password}
                                        sx={{ width: "90%" }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={role}
                                        sx={{width:"90%"}}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Government</MenuItem>
                                        <MenuItem value={20}>Farmer</MenuItem>
                                        <MenuItem value={30}>Enthusiast</MenuItem>
                                    </Select>
                                </Grid>
                            </Grid>
                            <Button color="success" variant="contained" type="submit"
                                sx={{ width: "90%", marginTop: "1.2rem", fontSize: "1.1rem" }}>
                                <Link to="/" style={{ textDecoration: "none", color: "white" }}>Submit</Link>
                            </Button>
                            <div style={{ marginTop: "1.1rem", fontSize: "1.1rem" }}>
                                New User ?
                                <Link to="/signup" style={{ textDecoration: "none", color: "green" }}> Register Now</Link>
                            </div>
                        </form>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Login
