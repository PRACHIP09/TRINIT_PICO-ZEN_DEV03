import React, { useState } from 'react'
import './Navbar.css';
import { Grid, Drawer } from '@mui/material';
import { NavLink } from 'react-router-dom';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import Modal from "react-modal";
import SimpleForm from './Chatbot';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Mobilenavbar from './Mobilenavbar';

const Navbar = () => {

  const [ModalOpen, setModalOpen] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Grid container spacing={2} sx={{ padding: "3vh 0vh", textAlign: "center" }}>
        <Grid item xs={12} className="webnavbar">
          <Grid container spacing={2}
            sx={{ fontSize: "1.35rem", textDecoration: "none", textAlign: "center", marginLeft:"60vh"}}>
            <Grid item xs={1}>
              <NavLink exact activeClassName="active" to='/' className="indicator">HOME</NavLink>
            </Grid>
            <Grid item xs={1}>
              <NavLink activeClassName="active" to='/search' className="indicator">SEARCH</NavLink>
            </Grid>
            <Grid item xs={1}>
              <NavLink activeClassName="active" to='/blog' className="indicator">BLOG</NavLink>
            </Grid>
            <Grid item xs={1}>
              <NavLink activeClassName="active" to='/contactus' className="indicator">CONTACT</NavLink>
            </Grid>
            <Grid item xs={1}>
              <NavLink activeClassName="active" to='/login' className="indicator">LOGIN</NavLink>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={8}
          style={{ textAlign: "right" }}
          className="mobilenavbar">
          <ArrowBackIosIcon style={{ width: "2rem", height: "2rem", cursor: "pointer" }}
            onClick={handleDrawerOpen} />
        </Grid>
      </Grid>
      <Drawer
        sx={{
          width: 500,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 350,
            paddingRight: "2rem",
            boxShadow: "none",
            border: "none",
            boxSizing: 'border-box',
            backgroundColor: "#BDF2CD"
          },

        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <ArrowForwardIosIcon onClick={handleDrawerClose}
          style={{ height: "2rem", width: "2rem", cursor: "pointer", marginLeft: "90%", marginTop: "2.5vh" }} />
        <Mobilenavbar />
      </Drawer>
    </div>
  )
}

export default Navbar