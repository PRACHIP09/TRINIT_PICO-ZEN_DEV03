import { Grid, Card, Button } from '@mui/material'
import React from 'react'
import image from '../../Images/login.webp'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Groups2Icon from '@mui/icons-material/Groups2';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import Swal from 'sweetalert2';
const PlantsProducts = () => {

  const plants=["Fresh Fruits" , "Green Vegetables" , "Healthy Lifestyle" , "Nutrionist Meal" ,"Organic Farming" , "Indian Food"]

  const handlesubmit = () => {
    Swal.fire({
      icon: 'success',
      title: 'Your Product is added in Cart',
      showConfirmButton: false,
      timer: 1500
    })
  }
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Grid container spacing={2}>
            <Grid item xs={12} style={{ fontSize: "2rem", textAlign: "left", paddingLeft: "5vh", fontWeight: "600" }}>
              The right farm equiments & <br />Fresh Plant Products for all needs
            </Grid>
            <Grid item xs={12} style={{ fontSize: "1.5rem", textAlign: "left", paddingLeft: "5vh" }}>
              We help you grow and conume healtier, higher quality plants
            </Grid>
            <Grid item xs={12} style={{ fontSize: "1.3rem", textAlign: "left", paddingLeft: "5vh" }}>
              Lorem ipsum gdshr sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor urna nunc id cursus metus aliquam eleifend mi.
              Vitae proin sagittis nisl rhoncus. Purus in mollis nunc sed id semper.
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2} padding={2}>
                <Grid item xs={6}>
                  <Card style={{ boxShadow: "none", paddingBottom: "2vh", borderRadius: "2vh" }}>
                    <div><Groups2Icon style={{ fontSize: "60" }} /></div>
                    <div style={{ fontSize: "1.5rem", margin: "1vh 0vh" }}>10,000+</div>
                    <div style={{ fontSize: "1.5rem", margin: "2vh 0vh" }}>Enthusiasts have joined</div>
                    <Button style={{
                      fontSize: "1rem", padding: "0.25vh 3vh", borderRadius: "5vh",
                      backgroundColor: "greenyellow"
                    }}>Know More</Button>
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <Card style={{ boxShadow: "none", paddingBottom: "2vh", borderRadius: "2vh" }}>
                    <div><Diversity2Icon style={{ fontSize: "60" }} /></div>
                    <div style={{ fontSize: "1.5rem", margin: "1vh 0vh" }}>10,000+</div>
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
        <Grid item xs={12} style={{margin:"3vh 0vh"}}>
          <Grid container spacing={2}>
            {plants.map((item)=>{
              return(
                <Grid item xs={2}>
                    <span style={{backgroundColor:"green" , color:"white", borderRadius:"5vh", 
                    width:"20vh",padding:"1vh 3vh" , fontSize:"1.1rem"}}>{item}</span>
                </Grid>
              )
            })}
          </Grid>
        </Grid>
        <Grid item xs={12} md={3} sm={6} style={{ padding: "0vh 3vh" }}>
          <Card sx={{ textAlign: "center", boxShadow: "none", padding: "1.5vh", background: "rgba(25, 135, 105, 0.3)" }}>
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
                <Button style={{ background: "rgba(25, 135, 105, 0.8)", color: "white", fontSize: "2vh", fontWeight: "650", padding: "1vh 6vh" }}
                  onClick={handlesubmit}>
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
