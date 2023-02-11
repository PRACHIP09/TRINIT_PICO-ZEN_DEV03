import React from 'react'
import { Button,Grid } from '@mui/material'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import wallpaper1 from "../Images/wallpaper1.webp"
import wallpaper2 from "../Images/wallpaper2.webp"
import wallpaper3 from "../Images/wallpaper3.webp"
import wallpaper4 from "../Images/wallpaper4.webp"
import image from "../Images/farmer.png"
import { Link } from 'react-router-dom';
const HomePage = () => {
  const settings = {
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
  };
  const wallp = [wallpaper1, wallpaper2, wallpaper3, wallpaper4];
  return (
    <div>
      <Grid container spacing={2}>
    
        <Grid item xs={12} style={{padding:"0vh 10vh"}} >
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <img src={image} style={{ width: "80%" }} />
            </Grid>
            <Grid item xs={6}>
              <Grid container spacing={2}>
                <Grid item xs={12} style={{ fontSize: "2rem", fontWeight: "700", textAlign: "left", paddingLeft: "10vh", paddingTop: "15vh" }}>
               Farmers play a vital role in providing food and other agricultural products that are essential to sustain human life and support economic growth. Without farmers, our food security and the stability of rural communities would be severely impacted, making them an indispensable part of not only our daily lives but also our country's future.
                </Grid>
                <Grid item xs={12} style={{ textAlign: "left", paddingLeft: "10vh" }}>
                              {/* <Button style={{ fontSize: "1.1rem", backgroundColor: "green", padding: "1vh 5vh", color: "white" }} >Connect with Farmers</Button> */}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} style={{ padding: "0vh 10vh" }}>
          {/*phoo*/}
          <Slider {...settings}>
            {wallp.map(item => {
              return (
                <div>
                  <Grid container spacing={2}>
                    {/*hero*/}
                    <Grid item xs={12} style={{
                      marginTop: "8vh", backgroundColor: "#14FFC2"
                    }}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={5} style={{
                          backgroundImage: `url(${item.name})`,
                          backgroundSize: 'contain', backgroundRepeat: "no-repeat", height: "50vh", textAlign: "center"
                        }}></Grid>
                        <Grid item xs={12} sm={12} md={7} style={{ overflow: "hidden" }}>
                          <div style={{ fontSize: "2.5rem", textAlign: "left", marginTop: "2%", padding: "0vh 2vh" }}>
                            {item.title}</div>
                          <div style={{ fontSize: "1.3rem", textAlign: "left", marginTop: "7%", padding: "1vh 2vh" }}>
                            {item.text}</div>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </div>
              )
            })}
          </Slider>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={8} style={{ fontSize: "2rem", fontWeight: "700", textAlign: "left", paddingLeft: "10vh", paddingTop: "10vh", textAlign: "right" }}>
                Want to know more about the schemes ?
              </Grid>
              <Grid item xs={4} style={{ paddingLeft: "5vh", paddingTop: "9vh", textAlign: "left" }}>
                        <Button style={{ fontSize: "1.1rem", backgroundColor: "green", padding: "1vh 5vh", color: "white" }}>Send Your Doubts</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

    </div>
  )
}

export default HomePage
