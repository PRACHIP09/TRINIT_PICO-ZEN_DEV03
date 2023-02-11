import {
    Grid, Card, CardMedia,
    CardContent, Typography, CardActionArea,
    CardActions, Button
} from '@mui/material'
import { textAlign } from '@mui/system'
import React,{useState,useEffect} from 'react'
import image from '../../Images/login.webp'
import axios from 'axios'
const Schemes = () => {

    const [load, setLoad] = useState([]);
    useEffect(() => {
        loadList();
    }, []);

    const loadList = async () => {
        const result = await axios.get("http://localhost:5500/api/scheme/getAll", {
            headers: { "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U2NjYyYjZmNDgwZGY4OTJhNGU2ZDMiLCJpYXQiOjE2NzYwNTI2MzF9.wC3cyq0bXap7rAug3Yf5VmECeIf1_rbdQjxLw6bkjes` },
        });
        setLoad(result.data.data);

    };
    console.log(load);

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    Title
                </Grid>
                <Grid item xs={12}>
                    Schemes
                </Grid>
                {load.map((item, index) => {
                return(
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
                                Know More
                            </Grid>
                            <Grid item xs={12} style={{ fontSize: "1.1rem" }}>
                               {item.desc}
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
                )})}
            </Grid>
        </div>
    )
}

export default Schemes
