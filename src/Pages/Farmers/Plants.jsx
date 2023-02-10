import { Grid, Card } from '@mui/material'
import React from 'react'
import image from '../../Images/login.webp'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
const Plants = () => {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    Title
                </Grid>
                <Grid item xs={12}>
                    about
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
                            <Grid item xs={6} style={{ fontSize: "2.5vh", textAlign: "left" }}>
                                List of Buyers
                            </Grid>
                            <Grid item xs={6} style={{ fontSize: "3vh", textAlign: "right" , cursor:"pointer"}}>
                                <ShoppingBagIcon/>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container spacing={2}>
                                    <Grid item xs={6} style={{fontSize:"2vh" , textAlign:"left"}}>
                                        Name 
                                    </Grid>
                                    <Grid item xs={6} style={{fontSize:"2vh" , textAlign:"right"}}>
                                        +91 9874561231
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default Plants
