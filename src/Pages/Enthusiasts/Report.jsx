import React,{useEffect,useState} from 'react'
import { Button, Card, Grid, Modal } from '@mui/material'
import image from '../../Images/login.webp'
import Swal from 'sweetalert2'
import AddAnswer from '../Farmers/AddAnswer'
import axios from 'axios'
const Report = () => {

    const [load, setLoad] = useState([]);
    useEffect(() => {
        loadList();
    }, []);

    const loadList = async () => {
        const token = localStorage.getItem("token")
        const result = await axios.get("http://localhost:5500/api/progress/getAll", {
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
                        <Grid item xs={12} md={3} sm={6} >
                            <Card style={{ margin: "2vh", boxShadow: "none", padding: "2vh" }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} style={{ fontSize: "1.5rem", textAlign: "left" }}>
                                        {item.user_name}
                                    </Grid>
                                    <Grid item xs={12} style={{ fontSize: "1.2rem", textAlign: "left", marginTop: "-2vh" }}>
                                        {item.user_progress}
                                    </Grid>
                                    <Grid item xs={12}>
                                        <img src={`http://localhost:5500/api/progress/${item._id}/progress_logo`} style={{ height: "50vh", width: "100%" }} />
                                    </Grid>
                                    <Grid item xs={12} style={{ fontSize: "1.3rem", textAlign: "left" }}>
                                        {item.progress}
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

export default Report
