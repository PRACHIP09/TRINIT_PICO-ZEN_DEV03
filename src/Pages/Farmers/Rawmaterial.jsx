import { Grid, Card, Button } from '@mui/material'
import React, { useState, useEffect } from 'react'
import image from '../../Images/login.webp'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Groups2Icon from '@mui/icons-material/Groups2';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import Swal from 'sweetalert2';
import axios from 'axios';

const Rawmaterial = () => {

    const plants = ["Fresh Fruits", "Green Vegetables", "Healthy Lifestyle", "Nutrionist Meal", "Organic Farming", "Indian Food"]

    const [load, setLoad] = useState([]);
    useEffect(() => {
        loadList();
    }, []);

    const loadList = async () => {
        const token = localStorage.getItem("token")
        const result = await axios.get("http://localhost:5500/api/raw/getAll", {
            headers: { "Authorization": `Bearer ${token}` },
        });
        setLoad(result.data.data);

    };
    console.log(load);


    const handlesubmit = async (id) => {
        const token = localStorage.getItem("token")
        await fetch(`http://localhost:5500/api/cart/new/${id}`, {
            method: "POST",
            headers: { "Authorization": `Bearer ${token}` },
        })
            .then(function (result) {
                Swal.fire({
                    icon: 'success',
                    title: 'Your Product is added in Cart',
                    showConfirmButton: false,
                    timer: 1500
                })
                console.log(JSON.stringify(result.data))
            })
            .catch(() => {
                alert('Error in the Code');
            });
    }
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>

                </Grid>
                <Grid item xs={12}>

                </Grid>
                {load.map((item, index) => {
                    return (
                        <Grid item xs={12} md={3} sm={6} style={{ padding: "0vh 3vh" }}>
                            <Card sx={{ textAlign: "center", boxShadow: "none", padding: "1.5vh", background: "rgba(25, 135, 105, 0.3)", height: "125vh" }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <img src={`http://localhost:5500/api/raw/${item._id}/raw_logo`} style={{ height: "50vh", width: "100%" }} />
                                    </Grid>
                                    <Grid item xs={6} style={{ fontSize: "2.5vh", textAlign: "left" }}>
                                        {item.title}
                                    </Grid>
                                    <Grid item xs={6} style={{ fontSize: "2.5vh", textAlign: "right" }}>
                                        ₹ {item.cost}/kg
                                    </Grid>
                                    <Grid item xs={6} style={{ fontSize: "2.5vh", textAlign: "left" }}>
                                        {item.far_name}
                                    </Grid>
                                    <Grid item xs={6} style={{ fontSize: "2.5vh", textAlign: "right" }}>
                                        +91 {item.far_phone}
                                    </Grid>
                                    <Grid item xs={12} style={{ fontSize: "2.5vh", textAlign: "left" }}>
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

export default Rawmaterial
