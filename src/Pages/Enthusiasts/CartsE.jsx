import { Grid, Card, Button, Modal, Box } from '@mui/material'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
const CartsE = () => {
  const [load, setLoad] = useState([]);
  useEffect(() => {
    loadList();
  }, []);

  const loadList = async () => {
    const token = localStorage.getItem("token")
    const result = await axios.get("http://localhost:5500/api/cart/getmyCart/63e78a043f1c3620c794ddf0", {
      headers: { "Authorization": `Bearer ${token}` },
    });
    setLoad(result.data.data);

  };
  console.log(load);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} style={{ fontSize: "2rem" }}>
          Shopping Bag
        </Grid>
        {load.map((item, index) => {
          return (
            <>
              <Grid item xs={12} md={3} sm={6} style={{ padding: "2vh 3vh" }}>
                <Card sx={{ textAlign: "center", boxShadow: "none", padding: "1.5vh", background: "rgba(25, 135, 105, 0.3)" }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <img src={`http://localhost:5500/api/product/${item.product_id}/product_logo`} style={{ height: "50vh", width: "100%" }} />
                    </Grid>
                    <Grid item xs={6} style={{ fontSize: "2.5vh", textAlign: "left" }}>
                      {item.desc}
                    </Grid>
                    <Grid item xs={6} style={{ fontSize: "2.5vh", textAlign: "right" }}>
                      ₹ {item.cost}/kg
                    </Grid>
                    <Grid item xs={12}>
                      <Button style={{ background: "rgba(25, 135, 105, 0.8)", color: "white", fontSize: "2vh", fontWeight: "650", padding: "1vh 6vh" }}
                        onClick={handleOpen} >
                        Contact Us
                      </Button>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <div>
                  <Box sx={style}>
                    <div>
                      <Grid container spacing={2}>
                        <Grid item xs={6} style={{ fontSize: "2.5vh", textAlign: "left" }}>
                          {item.far_name}
                        </Grid>
                        <Grid item xs={6} style={{ fontSize: "2.5vh", textAlign: "right" }}>
                          +91 {item.far_phone}
                        </Grid>
                        <Grid item xs={6} style={{ fontSize: "2.5vh", textAlign: "left" }}>
                          {item.far_email}
                        </Grid>
                        <Grid item xs={6} style={{ fontSize: "2.5vh", textAlign: "right" }}>
                          <Button style={{ background: "rgba(25, 135, 105, 0.8)", color: "white", fontSize: "2vh", fontWeight: "650", padding: "1vh 6vh" }}
                            >
                            Connect Now
                          </Button>
                        </Grid>
                      </Grid>
                    </div>
                  </Box>
                </div>
              </Modal>
            </>
          )
        })}
      </Grid>

    </div>
  )
}

export default CartsE
