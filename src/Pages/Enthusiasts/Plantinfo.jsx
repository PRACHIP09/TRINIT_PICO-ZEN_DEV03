import { Card, Grid, Button, Checkbox , Modal} from '@mui/material'
import React from 'react'
import image from '../../Images/login.webp'
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import LightModeIcon from '@mui/icons-material/LightMode';
import Info from './Info';
const Plantinfo = () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          Title
        </Grid>
        <Grid item xs={12}>
          Description
        </Grid>
        <Grid item xs={12} style={{ backgroundColor: "#59D7B5", fontSize: "1.5rem", padding: "2vh 0vh" }}>
          <div onClick={handleOpen}>Add New Plant Today</div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
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
