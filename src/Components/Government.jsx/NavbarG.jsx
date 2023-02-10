import React, { useState } from 'react'
import './Navbar.css';
import { Grid , Drawer} from '@mui/material';
import { NavLink } from 'react-router-dom';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import Modal from "react-modal";
import SimpleForm from '../ChatBot/Chatbot';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Mobilenavbar from './Mobilenavbar';

const NavbarG = () => {

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
              <NavLink exact activeClassName="active" to='/home-govn' className="indicator">HOME</NavLink>
            </Grid>
            <Grid item xs={2}>
              <NavLink activeClassName="active" to='/schemes-govn' className="indicator">SCHEMES</NavLink>
            </Grid>
            <Grid item xs={4}>
              <NavLink activeClassName="active" to='/add-schemes' className="indicator">ADD SCHEMES</NavLink>
            </Grid>
            <Grid item xs={2}>
              <NavLink activeClassName="active" to='/doubts' className="indicator">DOUBTS</NavLink>
            </Grid>
            <Grid item xs={2}>
              <NavLink activeClassName="active" to='/' className="indicator">LOGOUT</NavLink>
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

export default NavbarG