import { Card, Grid, Button, Checkbox, Modal } from '@mui/material'
import React, { useState, useEffect } from 'react'
import image from '../Images/login.webp'
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import LightModeIcon from '@mui/icons-material/LightMode';
import Info from '../Pages/Enthusiasts/BlogInfo';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import axios from 'axios';
import { loadLanguages } from 'i18next';
const Blog = () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [load, setLoad] = useState([]);
  useEffect(() => {
    loadList();
  }, []);

  const loadList = async () => {
    const token = localStorage.getItem("token")
    const result = await axios.get("http://localhost:5500/api/inno/getAll", {
      headers: { "Authorization": `Bearer ${token}` },
    });
    setLoad(result.data.data);

  };
  console.log(load);

  const mainFeaturedPost = {
    title: 'Well being of farmers',
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: 'https://source.unsplash.com/random',
    imageText: 'main image description',
    linkText: 'Continue reading…',
  };
  const featuredPosts = [
    {
      title: 'Featured post',
      date: 'Nov 12',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random',
      imageLabel: 'Image Text',
    },
    {
      title: 'Post title',
      date: 'Nov 11',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random',
      imageLabel: 'Image Text',
    },
  ];
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <MainFeaturedPost post={mainFeaturedPost} />
        </Grid>
        <Grid item xs={12} style={{ backgroundColor: "#59D7B5", fontSize: "1.5rem", padding: "2vh 0vh" }}>
          <div onClick={handleOpen}>Share Innovation</div>
        </Grid>
        {load.map((item) => {
          return (
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ textAlign: "center", boxShadow: "none", padding: "1.5vh" }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <img src={`http://localhost:5500/api/inno/${item._id}/inno_logo`} style={{ height: "30vh", width: "100%" }} />
                  </Grid>
                  <Grid item xs={12} style={{ fontSize: "1.3rem", textAlign: "left" }}>
                    {item.user_inno}
                  </Grid>
                  <Grid item xs={12} style={{ fontSize: "1.1rem", textAlign: "left",height:"120vh" }}>
                    {item.inno}
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          )
        })}
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
