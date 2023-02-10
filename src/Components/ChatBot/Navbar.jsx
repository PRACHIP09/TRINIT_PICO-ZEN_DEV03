import React, { useState } from 'react'
import './Navbar.css';
import { Grid , Drawer} from '@mui/material';
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
      <Grid container spacing={2} sx={{padding: "3vh 0vh"}}>
        <Grid item xs={4}></Grid>
        <Grid item xs={8} className="webnavbar">
          <Grid container spacing={2}
            sx={{ fontSize: "1.35rem", textDecoration: "none" }}>
            <Grid item xs={2}>
              <NavLink exact activeClassName="active" to='/' className="indicator">HOME</NavLink>
            </Grid>
            <Grid item xs={2}>
              <NavLink activeClassName="active" to='/trends' className="indicator">TRENDS</NavLink>
            </Grid>
            <Grid item xs={2}>
              <NavLink activeClassName="active" to='/blog' className="indicator">BLOG</NavLink>
            </Grid>
            <Grid item xs={2}>
              <NavLink activeClassName="active" to='/contactus' className="indicator">CONTACT US</NavLink>
            </Grid>
            <Grid item xs={2}>
              <NavLink activeClassName="active" to='/login' className="indicator">LOGIN/SIGNUP</NavLink>
            </Grid>
            <Grid item xs={2} style={{ cursor: "pointer" }}
              onClick={() => setModalOpen(!ModalOpen)}>
              <SmartToyIcon style={{ color: "#136a53", width: "5vh", height: "5vh" , marginTop:"-1vh" }} />
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
      <Modal isOpen={ModalOpen}
        style={{
          overlay: {
            width: "80vh",
            position: "fixed",
            left: "70%",
            top: "5vh",
            backgroundColor: "transparent",
            border: "none",
            boxShadow: "none"
          },
          content: {
            backgroundColor: "transparent",
            borderColor: "transparent",
            overflow: "hidden",
          }
        }}>
        <SimpleForm />
      </Modal>
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