import React from 'react'
import { Grid } from '@mui/material'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import wallpaper1 from "../Images/wallpaper1.webp"
import wallpaper2 from "../Images/wallpaper2.webp"
import wallpaper3 from "../Images/wallpaper3.webp"
import wallpaper4 from "../Images/wallpaper4.webp"
import image from "../Images/main_homepage.jpg"
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
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <img src={image} style={{ height:"60%",width: "80%" }} />
            </Grid>
            <Grid item xs={6}>
              <Grid container spacing={2}>
                <Grid item xs={12} style={{ fontSize: "2rem", fontWeight: "700", textAlign: "left", paddingLeft: "10vh", paddingTop: "15vh" }}>
                  Want help about which crops to grow? <br />No worries we have our new autonomous model to help you find the best solution
                </Grid>
                <Grid item xs={12} style={{ textAlign: "left", paddingLeft: "10vh" }}>
                              {/* <Button style={{ fontSize: "1.1rem", backgroundColor: "green", padding: "1vh 5vh", color: "white" }} >Connect with Farmers</Button> */}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
</Grid>



        <Grid item xs={12} style={{padding:"0vh 10vh"}}>
          {/*phoo*/}
          <Slider {...settings}>
            {wallp.map(item => {
              return (
                <div>
                  <Grid container spacing={2}>
                    {/*hero*/}

                    <Grid item xs={12} style={{
                      marginTop: "8vh", backgroundColor: "#14FFC2"}}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={5} style={{backgroundImage: `url(${item})`,
                      backgroundSize: 'contain', backgroundRepeat: "no-repeat" , height:"50vh", textAlign:"center"}}></Grid>
                        <Grid item xs={12} sm={12} md={7} style={{overflow:"hidden"}}>
                          <div style={{ fontSize: "2.5rem", textAlign: "left", marginTop: "2%", padding: "0vh 2vh" }}>
                            Title Here</div>
                          <div style={{ fontSize: "1.3rem", textAlign: "left", marginTop: "7%", padding: "1vh 2vh" }}>
                            Lorem ipsum gdshr sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor urna nunc id cursus metus aliquam eleifend mi.
                            Vitae proin sagittis nisl rhoncus. Purus in mollis nunc sed id semper. Cras pulvinar mattis nunc sed blandit libero volutpat.
                            Sagittis purus sit amet volutpat. Leo in vitae turpis massa sed elementum tempus. Urna neque viverra justo nec ultrices dui.
                            Sagittis nisl rhoncus mattis rhoncus urna. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Nullam ac tortor vitae purus.
                          </div>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </div>
              )
            })}
          </Slider>
        </Grid>
      </Grid>

    </div>
  )
}

export default HomePage
