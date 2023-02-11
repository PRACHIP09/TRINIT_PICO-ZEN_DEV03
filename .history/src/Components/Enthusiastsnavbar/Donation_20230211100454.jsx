import React from 'react'
import Card1 from './Card'
import axios from "axios";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import image from '../../Images/login.webp'
import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

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
            <Card sx={{ display: 'flex' }}>
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
        
        
            <Grid container spacing={7}>
        <Grid container
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"
  style={{ minHeight: '100vh' }}>
          <img src={image} style={{ height: "70%", width: "40%" }} />
        </Grid>
        <Grid container
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"
//   font-size="1000vw" 
  style={{ minHeight: '100vh'}}
   >
         Together we can create a brighter future for all
      <Card1 amount={5000} checkoutHandler={checkoutHandler} />
        </Grid>
      </Grid>
    </Box>
    
    )
}

export default Donation