import {
    Grid, Card, CardMedia,
    CardContent, Typography, CardActionArea,
    CardActions, Button
} from '@mui/material'
import { textAlign } from '@mui/system'
import React, { useState, useEffect } from 'react'
import image from '../../Images/login.webp'
import axios from 'axios'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Display = () => {

    const [load, setLoad] = useState([]);
    useEffect(() => {
        loadList();
    }, []);

    const loadList = async () => {
        const result = await axios.get("http://localhost:5500/api/scheme/getAll", {
            headers: { "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U2NjY2YTZmNDgwZGY4OTJhNGU2ZGIiLCJpYXQiOjE2NzYwNDM4ODJ9._mVWwb2nGwthYgM_egnb3-8SUPPJCjAwoMYqKxkMlXM` },
        });
        setLoad(result.data.data);

    };
    console.log(load);

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={6} style={{ paddingLeft: "5vh",paddingTop:"5vh" }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} style={{ fontSize: "2.5rem", textAlign: "left" }}>
                            Feel Better about knowing more about Government Schemes
                        </Grid>
                        <Grid item xs={12} style={{ fontSize: "1.5rem", textAlign: "left" }}>
                            Lorem ipsum gdshr sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor urna nunc id cursus metus aliquam eleifend mi.
                            Vitae proin sagittis nisl rhoncus. Purus in mollis nunc sed id semper.
                        </Grid>
                        <Grid item xs={12} style={{ paddingLeft: "2.5vh", margin: "2vh 0vh" }}>
                            <Grid container spacing={1} style={{ textAlign: "left" }}>
                                <Grid item xs={6}>
                                    <Button style={{ fontSize: "0.9rem", backgroundColor: "#198769", color: "white", padding:"1vh 4vh" }}>Government Site</Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button style={{ fontSize: "0.9rem", backgroundColor: "#198769", color: "white", padding:"1vh 4vh" }}>Government Site</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} style={{ fontSize: "1.5rem" }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} style={{ fontSize: "1.5rem", textAlign: "left" }}>
                                    Trusted by Over 20,000+ users
                                </Grid>
                                <Grid item xs={3} style={{ fontSize: "1.5rem", textAlign: "left" }}>
                                    <AccountCircleIcon style={{ fontSize: "50" }} />
                                    <AccountCircleIcon style={{ fontSize: "50", marginLeft: "-3vh", color: "orange" }} />
                                    <AccountCircleIcon style={{ fontSize: "50", marginLeft: "-4vh", color: "red" }} />
                                    <AccountCircleIcon style={{ fontSize: "50", marginLeft: "-3vh" }} />
                                    <AccountCircleIcon style={{ fontSize: "50", marginLeft: "-4vh", color: "orange" }} />
                                    <AccountCircleIcon style={{ fontSize: "50", marginLeft: "-3vh", color: "red" }} />
                                </Grid>
                                <Grid item xs={9} style={{marginTop:"1.2vh", textAlign:"left"}}>
                                    <div>Explore all Government Schemes today</div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={6}>
                    <img src={image} style={{ width: "80%" }} />
                </Grid>
                {load.map((item, index) => {
                    return (
                        <Grid item xs={12} md={3} sm={4}>
                            <Card sx={{ textAlign: "center", boxShadow: "none", padding: "1.5vh" }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <img src={image} style={{ height: "100%", width: "100%" }} />
                                    </Grid>
                                    <Grid item xs={6} style={{ fontSize: "2.5vh", textAlign: "left" }}>
                                        {item.donation}
                                    </Grid>
                                    <Grid item xs={6} style={{ fontSize: "2.5vh", textAlign: "right" }}>
                                        <Button style={{ backgroundColor: "#59D7B5", color: "white", fontWeight: "600", borderRadius: "5vh" }}>Know More</Button>
                                    </Grid>
                                    <Grid item xs={12} style={{ fontSize: "1.1rem" }}>
                                        {item.desc}
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}

export default Display
