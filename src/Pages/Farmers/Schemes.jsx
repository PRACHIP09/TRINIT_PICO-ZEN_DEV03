import {
    Grid, Card, CardMedia,
    CardContent, Typography, CardActionArea,
    CardActions, Button
} from '@mui/material'
import { textAlign } from '@mui/system'
import React from 'react'
import image from '../../Images/login.webp'
const Schemes = () => {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    Title
                </Grid>
                <Grid item xs={12}>
                    Schemes
                </Grid>
                <Grid item xs={12} md={3} sm={4}>
                    <Card sx={{ textAlign: "center", boxShadow: "none", padding: "1.5vh" }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <img src={image} style={{ height: "100%", width: "100%" }} />
                            </Grid>
                            <Grid item xs={6} style={{ fontSize: "2.5vh", textAlign: "left" }}>
                                Scheme Name
                            </Grid>
                            <Grid item xs={6} style={{ fontSize: "2.5vh", textAlign: "right" }}>
                                Know More
                            </Grid>
                            <Grid item xs={12} style={{ fontSize: "1.1rem" }}>
                                Lorem ipsum gdshr sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor urna nunc id cursus metus aliquam eleifend mi.
                                Vitae proin sagittis nisl rhoncus. Purus in mollis nunc sed id semper.
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3} sm={4}>
                    <Card sx={{ textAlign: "center", boxShadow: "none", padding: "1.5vh" }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <img src={image} style={{ height: "100%", width: "100%" }} />
                            </Grid>
                            <Grid item xs={6} style={{ fontSize: "2.5vh", textAlign: "left" }}>
                                Scheme Name
                            </Grid>
                            <Grid item xs={6} style={{ fontSize: "2.5vh", textAlign: "right" }}>
                                Know More
                            </Grid>
                            <Grid item xs={12} style={{ fontSize: "1.1rem" }}>
                                Lorem ipsum gdshr sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor urna nunc id cursus metus aliquam eleifend mi.
                                Vitae proin sagittis nisl rhoncus. Purus in mollis nunc sed id semper.
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3} sm={4}>
                    <Card sx={{ textAlign: "center", boxShadow: "none", padding: "1.5vh" }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <img src={image} style={{ height: "100%", width: "100%" }} />
                            </Grid>
                            <Grid item xs={6} style={{ fontSize: "2.5vh", textAlign: "left" }}>
                                Scheme Name
                            </Grid>
                            <Grid item xs={6} style={{ fontSize: "2.5vh", textAlign: "right" }}>
                                Know More
                            </Grid>
                            <Grid item xs={12} style={{ fontSize: "1.1rem" }}>
                                Lorem ipsum gdshr sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor urna nunc id cursus metus aliquam eleifend mi.
                                Vitae proin sagittis nisl rhoncus. Purus in mollis nunc sed id semper.
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3} sm={4}>
                    <Card sx={{ textAlign: "center", boxShadow: "none", padding: "1.5vh" }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <img src={image} style={{ height: "100%", width: "100%" }} />
                            </Grid>
                            <Grid item xs={6} style={{ fontSize: "2.5vh", textAlign: "left" }}>
                                Scheme Name
                            </Grid>
                            <Grid item xs={6} style={{ fontSize: "2.5vh", textAlign: "right" }}>
                                Know More
                            </Grid>
                            <Grid item xs={12} style={{ fontSize: "1.1rem" }}>
                                Lorem ipsum gdshr sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor urna nunc id cursus metus aliquam eleifend mi.
                                Vitae proin sagittis nisl rhoncus. Purus in mollis nunc sed id semper.
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default Schemes
