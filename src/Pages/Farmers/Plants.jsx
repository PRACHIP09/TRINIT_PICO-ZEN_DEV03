import { Grid, Card } from '@mui/material'
import React ,{useEffect, useState} from 'react'
import image from '../../Images/login.webp'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import axios from 'axios';
const Plants = () => {

    const [load, setLoad] = useState([]);
    useEffect(() => {
        loadList();
    }, []);

    const loadList = async () => {
        const result = await axios.get("http://localhost:5500/api/product/getAll", {
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
                    about
                </Grid>
                {load.map((item, index) => {
                    return (
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
                                        ₹ {item.cost}/kg
                                    </Grid>
                                    <Grid item xs={12} style={{ fontSize: "2.5vh", textAlign: "left" }}>
                                        In stock : 550 / 1000 kg
                                    </Grid>
                                    <Grid item xs={12} style={{ fontSize: "1.1rem" }}>
                                        {item.desc}
                                    </Grid>
                                    <Grid item xs={6} style={{ fontSize: "2.5vh", textAlign: "left" }}>
                                        List of Buyers
                                    </Grid>
                                    <Grid item xs={6} style={{ fontSize: "3vh", textAlign: "right", cursor: "pointer" }}>
                                        <ShoppingBagIcon />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={6} style={{ fontSize: "2vh", textAlign: "left" }}>
                                                Name
                                            </Grid>
                                            <Grid item xs={6} style={{ fontSize: "2vh", textAlign: "right" }}>
                                                +91 9874561231
                                            </Grid>
                                        </Grid>
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

export default Plants
