import { Card, Grid, Button, Checkbox, Modal } from '@mui/material'
import React from 'react'
import image from '../../Images/login.webp'
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import LightModeIcon from '@mui/icons-material/LightMode';
import Info from './Info';
import Data from './Data';
import plants from "../../Images/party.gif"
const Plantinfo = () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [opendata, setOpendata] = React.useState(false);
  const handleOpenData = () => setOpendata(true);
  const handleCloseData = () => setOpendata(false);
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} style={{ fontSize: "2.5rem" }}>
          A beautiful plant is like , <br /> having friend aound the house
        </Grid>
        <Grid item xs={12}>
          <img src={plants} style={{width:"35vh" , height:"25vh"}} />
        </Grid>
        <Grid item xs={12} style={{ fontSize: "1.5rem", padding: "2vh 20vh" }}>
          The second best thing is bragging about it on social media. <br/>The plant parent community is one of the most supportive, nourishing, and uplifting groups you will find online.
        </Grid>
        <Grid item xs={6} style={{ textAlign: "center" }}>
          <Button onClick={handleOpen} style={{
            backgroundColor: "#59D7B5", width: "60%", fontSize: "1.1rem",
            padding: "1vh 0vh", color: "black", fontWeight: "700"
          }}>Add New Plant Details</Button>
        </Grid>
        <Grid item xs={6} style={{ textAlign: "center" }}>
          <Button onClick={handleOpenData} style={{
            backgroundColor: "#59D7B5", width: "60%", fontSize: "1.1rem",
            padding: "1vh 0vh", color: "black", fontWeight: "700"
          }}>Review Plant Status</Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4} style={{ padding: "3vh 3vh" }}>
          <Card sx={{ textAlign: "center", boxShadow: "none", padding: "1.5vh" }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <img src={image} style={{ height: "100%", width: "100%" }} />
              </Grid>
              <Grid item xs={12} style={{ fontSize: "1.3rem", textAlign: "left" }}>
                Description
              </Grid>
              <Grid item xs={12} style={{ fontSize: "1.1rem", textAlign: "left" }}>
                Lorem ipsum gdshr sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor urna nunc id cursus metus aliquam eleifend mi.
              </Grid>
              <Grid item xs={12} style={{ fontSize: "1.3rem", textAlign: "left" }}>
                Care Instructions
              </Grid>
              <Grid item xs={12} style={{ fontSize: "1.1rem", textAlign: "left" }}>
                Lorem ipsum gdshr sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor urna nunc id cursus metus aliquam eleifend mi.
              </Grid>
              <Grid item xs={12} style={{ fontSize: "1.3rem", textAlign: "left" }}>
                Common Issues
              </Grid>
              <Grid item xs={12} style={{ fontSize: "1.1rem", textAlign: "left" }}>
                Lorem ipsum gdshr sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <br />Auctor urna nunc id cursus metus aliquam eleifend mi.
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <InvertColorsIcon sx={{ fontSize: 25 }} color="primary" />
                    <InvertColorsIcon sx={{ fontSize: 32 }} color="primary" />
                    <InvertColorsIcon sx={{ fontSize: 40 }} color="primary" />
                  </Grid>
                  <Grid item xs={6}>
                    <LightModeIcon sx={{ fontSize: 25, color: "orange" }} />
                    <LightModeIcon sx={{ fontSize: 32, color: "orange" }} />
                    <LightModeIcon sx={{ fontSize: 40, color: "orange" }} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    Water everyday
                  </Grid>
                  <Grid item xs={6}>
                    Low light, Medium light
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6} style={{ fontSize: "1.3rem", textAlign: "left" }}>
                Watering Reminders
              </Grid>
              <Grid item xs={6} style={{ fontSize: "1.3rem", textAlign: "right" }}>
                <Checkbox {...label} />
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Button style={{
                      backgroundColor: "#59D7B5", color: "white", fontSize: "2vh",
                      fontWeight: "650", width: "25vh", padding: "0.9vh 2vh"
                    }}>
                      My Results
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button style={{
                      backgroundColor: "#59D7B5", color: "white", fontSize: "1rem",
                      fontWeight: "650", width: "25vh", padding: "0.9vh 2vh"
                    }}>
                      Remove My Plant
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
      <Modal
        open={opendata}
        onClose={handleCloseData}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Data />
      </Modal>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Info />
      </Modal>
    </div>
  )
}

export default Plantinfo
