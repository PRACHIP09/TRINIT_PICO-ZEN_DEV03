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
import { Link } from 'react-router-dom';
import VideocamIcon from '@mui/icons-material/Videocam';
const NavbarF = () => {

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
        <Grid item xs={12} className="webnavbar">
          <Grid container spacing={2}
            sx={{ fontSize: "1.35rem", textDecoration: "none", marginLeft:"35vh" }}>
            <Grid item xs={1}>
              <NavLink exact activeClassName="active" to='/home-farmer' className="indicator">HOME</NavLink>
            </Grid>
            <Grid item xs={1}>
              <NavLink activeClassName="active" to='/products-to-sell' className="indicator">CROPS</NavLink>
            </Grid>
            <Grid item xs={1}>
              <NavLink activeClassName="active" to='/schemes' className="indicator">SCHEMES</NavLink>
            </Grid>
            <Grid item xs={2}>
              <NavLink activeClassName="active" to='/prediction' className="indicator">KNOW MORE</NavLink>
            </Grid>
            <Grid item xs={1}>
              <NavLink activeClassName="active" to='/questions' className="indicator">QUESTIONS</NavLink>
            </Grid>
            <Grid item xs={1}>
              <NavLink activeClassName="active" to='/rawmaterials' className="indicator">PRODUCTS</NavLink>
            </Grid>
            <Grid item xs={1}>
              <NavLink activeClassName="active" to='/' className="indicator">LOGOUT</NavLink>
            </Grid>
            <Grid item xs={1} style={{ cursor: "pointer" }}>
              <Link to="http://localhost:3030/e1008e45-3e13-4b60-8a0d-e046a65ebf48">
                <VideocamIcon style={{ color: "#136a53", width: "5vh", height: "5vh" , marginTop:"-1vh" }} />
              </Link>
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

export default NavbarF