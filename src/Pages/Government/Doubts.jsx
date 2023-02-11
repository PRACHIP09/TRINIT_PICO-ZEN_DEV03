import React,{useEffect,useState} from 'react'
import { Button, Card, Grid, Modal } from '@mui/material'
import image from '../../Images/login.webp'
import Swal from 'sweetalert2'
import AddAnswer from '../Farmers/AddAnswer'
import axios from 'axios'
const Doubts = () => {

    const [load, setLoad] = useState([]);
    useEffect(() => {
        loadList();
    }, []);

    const loadList = async () => {
        const token = localStorage.getItem("token")
        const result = await axios.get("http://localhost:5500/api/qascheme/get/63e71a953c48174c8039321e", {
            headers: { "Authorization": `Bearer ${token}` },
        });
        setLoad(result.data.data);

    };
    console.log(load);


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Grid container spacing={2}>
                {load.map((item) => {
                    return (
                        <Grid item xs={12} md={6} sm={6} >
                            <Card style={{ margin: "2vh", boxShadow: "none", padding: "2vh" }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={6} style={{ fontSize: "1.5rem", textAlign: "left" }}>
                                        {item.user_name}
                                    </Grid>
                                    <Grid item xs={6} style={{ fontSize: "1.5rem", textAlign: "right" }}>
                                        <Button onClick={handleOpen} style={{background:"rgba(25, 135, 105, 0.8)", color:"white", fontWeight:"700"}}>Answer the query</Button>
                                    </Grid>
                                    <Grid item xs={12} style={{ fontSize: "1.2rem", textAlign: "left", marginTop: "-2vh" }}>
                                        {item.user_email}
                                    </Grid>
                                    <Grid item xs={12} style={{ fontSize: "1.3rem", textAlign: "left" }}>
                                        {item.q}
                                    </Grid>
                                    <Grid item xs={12} style={{ fontSize: "1.3rem", textAlign: "left" }}>
                                        {item.s_desc}
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
                <AddAnswer />
            </Modal>
        </div>
    )
}

export default Doubts
