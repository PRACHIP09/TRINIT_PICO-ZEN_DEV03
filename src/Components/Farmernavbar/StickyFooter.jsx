import React from 'react'
// import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Unstable_Grid2';
import SquareIcon from '@mui/icons-material/Square';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const StickyFooter = () => {
  return (
   
 
    
      <Box
        component="footer"
        sx={{
          py: 0,
          px: 0,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        
   
          <Grid container spacing={2} style={{ backgroundColor: "#136a53", marginTop: "5vh", color: "white" }}>
                <Grid item xs={12} style={{ marginLeft: "15vh" }}>
                    <Grid container spacing={2}>
                        <Grid item md={4} xs={12} sm={12} style={{ textAlign: "left" }}>
                            <Grid container spacing={2} padding={2} style={{ fontSize: "1.3rem" }}>
                                <Grid item xs={12}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={2}>
                                            <PanoramaFishEyeIcon style={{ color: "white", marginTop: "2vh" }} />
                                            <SquareIcon style={{ color: "white" }} />
                                        </Grid>
                                        <Grid item xs={10} style={{ marginTop: "1.7vh" }}>
                                            CommuneFarm
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} style={{
                                        margin: "2vh 0vh", padding: "1vh 1.5vh",
                                        border: "1px solid white", fontSize: "1rem"
                                    }}>
                                        Enter email to recieve latest green news
                                    </Grid>
                                    <Grid item xs={12} style={{ fontSize: "1.3rem", marginBottom: "2vh" }} >
                                        Connect with us
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container spacing={1}>
                                            <Grid item xs={2}><FacebookIcon style={{ color: "white", width: "5vh", height: "5vh" }} /></Grid>
                                            <Grid item xs={2}><InstagramIcon style={{ color: "white", width: "5vh", height: "5vh" }} /></Grid>
                                            <Grid item xs={2}><TwitterIcon style={{ color: "white", width: "5vh", height: "5vh" }} /></Grid>
                                            <Grid item xs={2}><EmailIcon style={{ color: "white", width: "5vh", height: "5vh" }} /></Grid>
                                            <Grid item xs={2}><PhoneIcon style={{ color: "white", width: "5vh", height: "5vh" }} /></Grid>
                                            <Grid item xs={1}></Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={4} sm={12} xs={12} style={{ textAlign: "left", margin: "6.5vh 2vh 0vh 2vh" }}>
                            <Grid container spacing={2}>
                                <Grid container>
                                    <Grid item xs={4}>
                                        <Grid container>
                                            <Grid item xs={12} style={{ fontSize: "1.2rem" }}>
                                                The Project
                                            </Grid>
                                            <Grid item xs={12} style={{ fontSize: "1rem", margin: "1vh 0vh 0vh 0vh" }} >
                                                Home
                                            </Grid>
                                            <Grid item xs={12} style={{ fontSize: "1rem", margin: "1vh 0vh 0vh 0vh" }} >
                                                Search
                                            </Grid>
                                            <Grid item xs={12} style={{ fontSize: "1rem", margin: "1vh 0vh 0vh 0vh" }} >
                                                Blog
                                            </Grid>
                                            <Grid item xs={12} style={{ fontSize: "1rem", margin: "1vh 0vh 0vh 0vh" }} >
                                                Contact Us 
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Grid container>
                                            <Grid item xs={12} style={{ fontSize: "1.2rem" }}>
                                                Learn More
                                            </Grid>
                                            <Grid item xs={12} style={{ fontSize: "1rem", margin: "1vh 0vh 0vh 0vh" }} >
                                                Community
                                            </Grid>
                                            <Grid item xs={12} style={{ fontSize: "1rem", margin: "1vh 0vh 0vh 0vh" }} >
                                                Vision
                                            </Grid>
                                            <Grid item xs={12} style={{ fontSize: "1rem", margin: "1vh 0vh 0vh 0vh" }} >
                                                Mission
                                            </Grid>
                                            <Grid item xs={12} style={{ fontSize: "1rem", margin: "1vh 0vh 0vh 0vh" }} >
                                                Volunteers
                                            </Grid>
                                            <Grid item xs={12} style={{ fontSize: "1rem", margin: "1vh 0vh 0vh 0vh" }} >
                                                Creators
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Grid container>
                                            <Grid item xs={12} style={{ fontSize: "1.2rem" }}>
                                                Support
                                            </Grid>
                                            <Grid item xs={12} style={{ fontSize: "1rem", margin: "1vh 0vh 0vh 0vh" }} >
                                                Contact
                                            </Grid>
                                            <Grid item xs={12} style={{ fontSize: "1rem", margin: "1vh 0vh 0vh 0vh" }} >
                                                FAQs
                                            </Grid>
                                            <Grid item xs={12} style={{ fontSize: "1rem", margin: "1vh 0vh 0vh 0vh" }} >
                                                Terms of use
                                            </Grid>
                                            <Grid item xs={12} style={{ fontSize: "1rem", margin: "1vh 0vh 0vh 0vh" }} >
                                                Privacy Policy
                                            </Grid>
                                            <Grid item xs={12} style={{ fontSize: "1rem", margin: "1vh 0vh 0vh 0vh" }} >
                                                Creator Terms
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={2} sm={12} xs={12} style={{ textAlign: "left" }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} style={{ margin: "3.5vh 0vh 0vh 0vh", fontSize: "1.3rem" }}>
                                    Be a part of our Community
                                </Grid>
                                <Grid item xs={12}>
                                    <iframe
                                        scrolling="no"
                                        marginheight="0"
                                        marginwidth="0"
                                        title="DJ Sanghavi College"
                                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Dwarkadas%20J.Sanghavi%20+(Your%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                        height="150"
                                        frameborder="0"
                                        width="250"
                                    >
                                        <a href="https://www.mapsdirections.info/en/measure-map-radius/">
                                            Map radius measure
                                        </a>
                                    </iframe>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={1} sm={12} xs={12}></Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} margin={2} style={{ fontSize: "1.1rem", fontWeight: "550", marginTop: "-3vh" }}>
                    Copyright © 2023
                </Grid>
            </Grid>
        
      </Box>
   
  )
}

export default StickyFooter