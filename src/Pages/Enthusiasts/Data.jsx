import React from 'react'
import { Grid, TextField, Button, Card, Modal, Box, Typography } from '@mui/material'
import { useFormik } from "formik";
import * as yup from 'yup';
import image from '../../Images/login.webp'
import { CChart } from '@coreui/react-chartjs'
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import LightModeIcon from '@mui/icons-material/LightMode';
import AirIcon from '@mui/icons-material/Air';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';

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
                                <Card style={{ boxShadow: "none", backgroundColor: "#A0D9F2" }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={3}><InvertColorsIcon sx={{ fontSize: 40 }}/></Grid>
                                        <Grid item xs={3} style={{ fontSize: "1.2rem" }}>67%</Grid>
                                        <Grid item xs={6} style={{ fontSize: "1.2rem" }}>Humidity level</Grid>
                                    </Grid>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card style={{ boxShadow: "none", backgroundColor: "#ADC5D6" }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={3}><AirIcon sx={{ fontSize: 40 }}/></Grid>
                                        <Grid item xs={3} style={{ fontSize: "1.2rem" }}>10 km/hr</Grid>
                                        <Grid item xs={6} style={{ fontSize: "1.2rem" }}>Impact of Wind</Grid>
                                    </Grid>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card style={{ boxShadow: "none", backgroundColor: "#F2E876" }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={3}><LightModeIcon sx={{ fontSize: 40 }}/></Grid>
                                        <Grid item xs={3} style={{ fontSize: "1.2rem" }}>Dim Sunlight</Grid>
                                        <Grid item xs={6} style={{ fontSize: "1.2rem" }}>Impact of Sunlight</Grid>
                                    </Grid>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card style={{ boxShadow: "none", backgroundColor: "#F0D257" }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={3}><DeviceThermostatIcon sx={{ fontSize: 40 }}/></Grid>
                                        <Grid item xs={3} style={{ fontSize: "1.2rem" }}>29°C</Grid>
                                        <Grid item xs={6} style={{ fontSize: "1.2rem" }}>Tempertaure</Grid>
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
                                        label: 'Monthly Water Level',
                                        backgroundColor: '#A0D9F2',
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
                                labels: ['Humidity Level', 'Wind velocity', 'Impact of Sunlight', 'Amount of Nutrients', 'Surrounding Temperature'],
                                datasets: [
                                    {
                                        data: [790, 220, 610, 520, 344],
                                        backgroundColor: ['#A0D9F2', '#ADC5D6', '#F2E876', '#BEA479', '#F0D257'],
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
                                    'Nitrogen',
                                    'Phosphorus',
                                    'Potassium',
                                    'Organic Carbon',
                                    'Zinc',
                                    'Copper',
                                    'Calcium Carbonate',
                                ],
                                datasets: [
                                    {
                                        label: 'Nutrients in Soil in Month of December',
                                        backgroundColor: 'rgba(190, 164, 121, 0.2)',
                                        borderColor: 'rgba(190, 164, 121, 1)',
                                        pointBackgroundColor: 'rgba(190, 164, 121, 1)',
                                        pointBorderColor: '#fff',
                                        pointHighlightFill: '#fff',
                                        pointHighlightStroke: 'rgba(190, 164, 121, 1)',
                                        data: [10, 9, 8, 1, 0.5, 0.8, 2],
                                    },
                                    {
                                        label: 'Nutrients in Soil in Month of January',
                                        backgroundColor: 'rgba(44, 18, 8, 0.2)',
                                        borderColor: 'rgba(44, 18, 8, 1)',
                                        pointBackgroundColor: 'rgba(44, 18, 8, 1)',
                                        pointBorderColor: '#fff',
                                        pointHighlightFill: '#fff',
                                        pointHighlightStroke: 'rgba(44, 18, 8, 1)',
                                        data: [12, 10, 7, 2, 1.5, 1.2, 3.6],
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
