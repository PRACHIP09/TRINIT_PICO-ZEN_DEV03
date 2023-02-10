import React, { useState } from 'react'
import './Navbar.css';
import { Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
const Mobilenavbar = () => {
    return (
        <div>
            <Grid container spacing={2}
                sx={{ fontSize: "1.35rem", textDecoration: "none" }}>
                <Grid item xs={12}>
                    <NavLink exact activeClassName="active" to='/home-govn' className="indicator">HOME</NavLink>
                </Grid>
                <Grid item xs={12}>
                    <NavLink activeClassName="active" to='/schemes-govn' className="indicator">SCHEMES</NavLink>
                </Grid>
                <Grid item xs={12}>
                    <NavLink activeClassName="active" to='/add-schemes' className="indicator">ADD SCHEMES</NavLink>
                </Grid>
                <Grid item xs={12}>
                    <NavLink activeClassName="active" to='/doubts' className="indicator">DOUBTS</NavLink>
                </Grid>
                <Grid item xs={12}>
                    <NavLink activeClassName="active" to='/' className="indicator">LOGOUT</NavLink>
                </Grid>
            </Grid>
        </div>
    )
}

export default Mobilenavbar
