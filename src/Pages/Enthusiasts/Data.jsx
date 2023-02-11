import React from 'react'
import { Grid, TextField, Button, Card, Modal, Box, Typography } from '@mui/material'
import { useFormik } from "formik";
import * as yup from 'yup';
import image from '../../Images/login.webp'
import { CChart } from '@coreui/react-chartjs'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const Data = () => {

    return (
        <div>
            <Box sx={style}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Card style={{ boxShadow: "none", backgroundColor: "yellow" }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={3}>icon</Grid>
                                        <Grid item xs={3} style={{ fontSize: "1.2rem" }}>78%</Grid>
                                        <Grid item xs={6} style={{ fontSize: "1.2rem" }}>Water level</Grid>
                                    </Grid>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card style={{ boxShadow: "none", backgroundColor: "yellow" }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={3}>icon</Grid>
                                        <Grid item xs={3} style={{ fontSize: "1.2rem" }}>78%</Grid>
                                        <Grid item xs={6} style={{ fontSize: "1.2rem" }}>Water level</Grid>
                                    </Grid>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card style={{ boxShadow: "none", backgroundColor: "yellow" }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={3}>icon</Grid>
                                        <Grid item xs={3} style={{ fontSize: "1.2rem" }}>78%</Grid>
                                        <Grid item xs={6} style={{ fontSize: "1.2rem" }}>Water level</Grid>
                                    </Grid>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card style={{ boxShadow: "none", backgroundColor: "yellow" }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={3}>icon</Grid>
                                        <Grid item xs={3} style={{ fontSize: "1.2rem" }}>78%</Grid>
                                        <Grid item xs={6} style={{ fontSize: "1.2rem" }}>Water level</Grid>
                                    </Grid>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <CChart
                            type="bar"
                            data={{
                                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                                datasets: [
                                    {
                                        label: 'GitHub Commits',
                                        backgroundColor: '#f87979',
                                        data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                                    },
                                ],
                            }}
                            labels="months"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <CChart
                            style={{ width: "50vh", height: "50vh", backgroundColor: "transparent", borderColor: "transparent" }}
                            type="doughnut"
                            data={{
                                labels: ['Positive Comments', 'Negative Comments', 'Hashtags', 'Reviews', 'Likes'],
                                datasets: [
                                    {
                                        data: [790, 220, 610, 320, 544],
                                        backgroundColor: ['#D98100', '#E1B200', '#ABA597', '#4B85A8', '#182139'],
                                    },
                                ],
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <CChart
                            type="radar"
                            data={{
                                labels: [
                                    'Eating',
                                    'Drinking',
                                    'Sleeping',
                                    'Designing',
                                    'Coding',
                                    'Cycling',
                                    'Running',
                                ],
                                datasets: [
                                    {
                                        label: 'My First dataset',
                                        backgroundColor: 'rgba(220, 220, 220, 0.2)',
                                        borderColor: 'rgba(220, 220, 220, 1)',
                                        pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                                        pointBorderColor: '#fff',
                                        pointHighlightFill: '#fff',
                                        pointHighlightStroke: 'rgba(220, 220, 220, 1)',
                                        data: [65, 59, 90, 81, 56, 55, 40],
                                    },
                                    {
                                        label: 'My Second dataset',
                                        backgroundColor: 'rgba(151, 187, 205, 0.2)',
                                        borderColor: 'rgba(151, 187, 205, 1)',
                                        pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                                        pointBorderColor: '#fff',
                                        pointHighlightFill: '#fff',
                                        pointHighlightStroke: 'rgba(151, 187, 205, 1)',
                                        data: [28, 48, 40, 19, 96, 27, 100],
                                    },
                                ],
                            }}
                        />
                    </Grid>
                </Grid>
                <div>

                </div>
                <div>

                </div>
            </Box>
        </div >
    )
}

export default Data
