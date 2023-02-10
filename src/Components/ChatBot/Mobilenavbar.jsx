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
                    <NavLink exact activeClassName="active" to='/' className="indicator">HOME</NavLink>
                </Grid>
                <Grid item xs={12}>
                    <NavLink activeClassName="active" to='/trends' className="indicator">TRENDS</NavLink>
                </Grid>
                <Grid item xs={12}>
                    <NavLink activeClassName="active" to='/blog' className="indicator">BLOG</NavLink>
                </Grid>
                <Grid item xs={12}>
                    <NavLink activeClassName="active" to='/contactus' className="indicator">CONTACT US</NavLink>
                </Grid>
                <Grid item xs={2}>
              <NavLink activeClassName="active" to='/login' className="indicator">LOGIN/SIGNUP</NavLink>
            </Grid>
            </Grid>
        </div>
    )
}

export default Mobilenavbar
