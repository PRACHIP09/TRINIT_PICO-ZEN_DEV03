import React from 'react'
import { Button, Grid } from '@mui/material'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import wallpaper1 from "../../Images/wallpaper1.webp"
import wallpaper2 from "../../Images/wallpaper2.webp"
import wallpaper3 from "../../Images/wallpaper3.webp"
import wallpaper4 from "../../Images/wallpaper4.webp"
import image from "../../Images/farmer.png"
import { Link } from 'react-router-dom';

const HomePageF = () => {
  const settings = {
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
  };
  const wallp = [
    {
      name: wallpaper1, title: "Daily Life", text: "Farmers engage in a variety of activities related to the production of raw materials. These activities include land preparation, planting, fertilization, irrigation, pest control, and harvesting. Farmers must carefully manage these activities to ensure a high-quality crop and to maximize yields.",
    },
    {
      name: wallpaper2, title: "Raw Materials", text: "Once the raw materials have been harvested, farmers often engage in further processing to create a finished product. This may involve cleaning, grading, and packaging the crop for sale. Farmers may also work with processors or manufacturers to create value-added products, such as juices or snacks, from their raw materials.",
    },
    {
      name: wallpaper3, title: "Product", text: "The effects of government schemes on farmers can be significant. Government programs may provide financial support to farmers, such as subsidies or loans, to help them purchase inputs like seeds, fertilizer, and equipment. Government-sponsored extension services may also provide training and technical assistance to farmers, helping them to improve their farming practices and increase yields.",
    },
    {
      name: wallpaper4, title: "Government Schmes & Questions asked", text: "Questions that are frequently asked by farmers include inquiries about the best practices for a specific crop, how to address pest problems, and information on available government support programs. They may also ask about market conditions and prices, as these factors can greatly impact their income and profitability. Additionally, farmers may seek advice on how to adopt new technologies or farming methods to increase efficiency and competitiveness in the market.",
    },
  ]
  //const wallp = [wallpaper1, wallpaper2, wallpaper3, wallpaper4];
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <img src={image} style={{ width: "80%" }} />
            </Grid>
            <Grid item xs={6}>
              <Grid container spacing={2}>
                <Grid item xs={12} style={{ fontSize: "2rem", fontWeight: "700", textAlign: "left", paddingLeft: "10vh", paddingTop: "15vh" }}>
                  Want help about which crops to grow? <br />No worries we have our new autonomous model to help you find the best solution
                </Grid>
                <Grid item xs={12} style={{ textAlign: "left", paddingLeft: "10vh" }}>
                  <Button style={{ fontSize: "1.1rem", backgroundColor: "green", padding: "1vh 5vh", color: "white" }} ><Link to="/rawmaterials">React</Link>Connect with Farmers</Button>
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

export default HomePageF
