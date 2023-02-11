import React from 'react'
import Card1 from './Card'
import axios from "axios";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import image from "../../Images/removebg.png"

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
  const theme = useTheme();
  return (

    <Box sx={{ flexGrow: 1 }}>
      {/* <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
          Together we can
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          create a brighter future for all
          </Typography>
                <Card1 amount={5000} checkoutHandler={checkoutHandler} />  
        </CardContent>
      </Box>  
      <img src={image} style={{ height: "70%", width: "40%" }} />
     
    </Card>
        
         */}
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <img src={image} style={{ width: "90%" ,borderRadius:"5vh" }} />
        </Grid>
        <Grid item xs={6}>
          <div style={{ fontSize: "3rem" , marginTop:"10vh"}}>
            Together we can <br />
            <span style={{fontSize:"3rem", fontFamily:"Tangerine"}} color="#1987695" component="div">
              create a brighter future for all
            </span>
          </div>
          <div style={{ fontSize: "3rem"}}>
            Come, Let us all <br />
            <span style={{fontSize:"3rem", fontFamily:"Tangerine"}} color="#59D7B5" component="div">
              Donate Green Today
            </span>
          </div>
          <div style={{marginTop:"5vh"}}>
            <Card1 amount={5000} checkoutHandler={checkoutHandler} />
          </div>
        </Grid>
      </Grid>
    </Box >

  )
}

export default Donation