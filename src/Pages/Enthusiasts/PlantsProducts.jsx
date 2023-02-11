import { Grid, Card, Button } from '@mui/material'
import React from 'react'
import image from '../../Images/login.webp'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
const PlantsProducts = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Grid container spacing={2}>
            <Grid item xs={12} style={{ fontSize: "2rem", textAlign: "left", paddingLeft: "5vh" }}>
              The right farm equiments & <br />Fresh Plant Products for all needs
            </Grid>
            <Grid item xs={12} style={{ fontSize: "1.5rem", textAlign: "left", paddingLeft: "5vh" }}>
              We help you grow and conume healtier, higher quality plants
            </Grid>
            <Grid item xs={12} style={{ fontSize: "1.3rem", textAlign: "left" , paddingLeft: "5vh"}}>
              Lorem ipsum gdshr sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor urna nunc id cursus metus aliquam eleifend mi.
              Vitae proin sagittis nisl rhoncus. Purus in mollis nunc sed id semper.
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2} padding={2}>
                <Grid item xs={6}>
                  <Card style={{ boxShadow: "none", paddingBottom: "2vh", borderRadius: "2vh" }}>
                    <div>icon</div>
                    <div style={{ fontSize: "1.5rem", margin: "2vh 0vh" }}>10,000+</div>
                    <div style={{ fontSize: "1.5rem", margin: "2vh 0vh" }}>Enthusiasts have joined</div>
                    <Button style={{
                      fontSize: "1rem", padding: "0.25vh 3vh", borderRadius: "5vh",
                      backgroundColor: "greenyellow"
                    }}>Know More</Button>
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <Card style={{ boxShadow: "none", paddingBottom: "2vh", borderRadius: "2vh" }}>
                    <div>icon</div>
                    <div style={{ fontSize: "1.5rem", margin: "2vh 0vh" }}>10,000+</div>
                    <div style={{ fontSize: "1.5rem", margin: "2vh 0vh" }}>Farmers have joined</div>
                    <Button style={{
                      fontSize: "1rem", padding: "0.25vh 3vh", borderRadius: "5vh",
                      backgroundColor: "greenyellow"
                    }}>Know More</Button>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <img src={image} style={{ width: "80%" }} />
        </Grid>
        <Grid item xs={12} md={3} sm={6}>
          <Card sx={{ textAlign: "center", boxShadow: "none", padding: "1.5vh" }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <img src={image} style={{ height: "100%", width: "100%" }} />
              </Grid>
              <Grid item xs={6} style={{ fontSize: "2.5vh", textAlign: "left" }}>
                Product Name
              </Grid>
              <Grid item xs={6} style={{ fontSize: "2.5vh", textAlign: "right" }}>
                ₹ 100/kg
              </Grid>
              <Grid item xs={12} style={{ fontSize: "2.5vh", textAlign: "left" }}>
                Quantity in stock : 550 / 1000 kg
              </Grid>
              <Grid item xs={12} style={{ fontSize: "1.1rem" }}>
                Lorem ipsum gdshr sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor urna nunc id cursus metus aliquam eleifend mi.
              </Grid>
              <Grid item xs={12}>
                <Button style={{ backgroundColor: "#59D7B5", color: "white", fontSize: "2vh", fontWeight: "650" }}>
                  Buy Now
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default PlantsProducts
