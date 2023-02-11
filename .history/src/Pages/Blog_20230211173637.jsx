import { Card, Grid, Button, Checkbox , Modal} from '@mui/material'
import React from 'react'
import image from '../Images/login.webp'
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import LightModeIcon from '@mui/icons-material/LightMode';
import Info from '../Pages/Enthusiasts/BlogInfo';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
const Blog= () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const mainFeaturedPost = {
    title: 'Title of a longer featured blog post',
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: 'https://source.unsplash.com/random',
    imageText: 'main image description',
    linkText: 'Continue reading…',
  };
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
        <MainFeaturedPost post={mainFeaturedPost} />
        </Grid>
        <Grid item xs={12}>
          Description
        </Grid>
        <Grid item xs={12} style={{ backgroundColor: "#59D7B5", fontSize: "1.5rem", padding: "2vh 0vh" }}>
          <div onClick={handleOpen}>Share Innovation</div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ textAlign: "center", boxShadow: "none", padding: "1.5vh" }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <img src={image} style={{ height: "100%", width: "100%" }} />
              </Grid>
              <Grid item xs={12} style={{ fontSize: "1.3rem", textAlign: "left" }}>
                Description
              </Grid>
              <Grid item xs={12} style={{ fontSize: "1.1rem", textAlign: "left" }}>
                Lorem ipsum gdshr sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor urna nunc id cursus metus aliquam eleifend mi.
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Info />
      </Modal>
    </div>
  )
}

export default Blog
