import React from 'react'
import Card from './Card'
import axios from "axios";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import image from '../../Images/login.webp'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Donation = () => {


    const checkoutHandler = async (amount) => {

        const { data: { key } } = await axios.get("http://www.localhost:4000/api/getkey")

        const { data: { order } } = await axios.post("http://localhost:4000/api/checkout", {
            amount
        })

        const options = {
            key,
            amount: order.amount,
            currency: "INR",
            order_id: order.id,
            callback_url: "http://localhost:4000/api/paymentverification",
            prefill: {
                name: "Shubham Shah",
                email: "shahshubham024@gmail.com",
                contact: "7045707681"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#121212"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();
    }

    return (
      
    <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={7}>
        <Grid container
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"
  style={{ minHeight: '100vh' }}>
          <img src={image} style={{ height: "70%", width: "50%" }} />
        </Grid>
        <Grid xs={6} md={4} >
          Together we can create a brighter future for all
      <Card amount={5000} checkoutHandler={checkoutHandler} />
        </Grid>
      </Grid>
    </Box>
    
    )
}

export default Donation