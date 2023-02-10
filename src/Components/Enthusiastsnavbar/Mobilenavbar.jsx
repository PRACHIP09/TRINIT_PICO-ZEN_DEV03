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
                    <NavLink exact activeClassName="active" to='/home-enthusiast' className="indicator">HOME</NavLink>
                </Grid>
                <Grid item xs={12}>
                    <NavLink activeClassName="active" to='/products' className="indicator">PRODUCTS</NavLink>
                </Grid>
                <Grid item xs={12}>
                    <NavLink activeClassName="active" to='/cart-enthusiast' className="indicator">CART</NavLink>
                </Grid>
                <Grid item xs={12}>
                    <NavLink activeClassName="active" to='/plants-information' className="indicator">PLANTS</NavLink>
                </Grid>
                <Grid item xs={12}>
                    <NavLink activeClassName="active" to='/' className="indicator">LOGUT</NavLink>
                </Grid>
            </Grid>
        </div>
    )
}

export default Mobilenavbar
