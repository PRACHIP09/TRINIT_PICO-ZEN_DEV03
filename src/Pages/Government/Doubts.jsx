import React from 'react'
import { Card, Grid, Modal } from '@mui/material'
import image from '../../Images/login.webp'
import Swal from 'sweetalert2'
import AddAnswer from '../Farmers/AddAnswer'
const Doubts = () => {
    const handlesubmit = () => {
        Swal.fire({
            title: 'Are you Sure ?',
            text: "You won't be able to revert it !!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete',
            cancelButtonText: 'Cancel'
        })
    }

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    DOUBT SOLVING
                </Grid>
                <Grid item xs={12} md={6} sm={6} >
                    <Card style={{ margin: "2vh", boxShadow: "none", padding: "2vh" }}>
                        <Grid container spacing={2}>
                            <Grid item xs={6} style={{ fontSize: "1.5rem", textAlign: "left" }}>
                                Name
                            </Grid>
                            <Grid item xs={6} style={{ fontSize: "1.5rem", textAlign: "right" }}>
                                <div onClick={handleOpen}>Answer the query</div>
                            </Grid>
                            <Grid item xs={12} style={{ fontSize: "1.2rem", textAlign: "left", marginTop: "-2vh" }}>
                                info@gmail.com
                            </Grid>
                            <Grid item xs={12} style={{ fontSize: "1.3rem", textAlign: "left" }}>
                                Lorem ipsum gdshr sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor urna nunc id cursus metus aliquam eleifend mi.
                                Vitae proin sagittis nisl rhoncus. Purus in mollis nunc sed id semper.
                            </Grid>
                            <Grid item xs={6}>
                                <img src={image} style={{ height: "100%", width: "100%" }} />
                            </Grid>
                            <Grid item xs={6}>
                                <img src={image} style={{ height: "100%", width: "100%" }} />
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
                <AddAnswer />
            </Modal>
        </div>
    )
}

export default Doubts
