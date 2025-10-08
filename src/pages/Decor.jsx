import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import decor from '../image/decor.jpg'
import homedecor from '../image/homedecor.jpg'
import lampdecor from '../image/lampdecor.jpg'
import bottledecor from '../image/bottledecor.jpg'
import dishdecor from '../image/dishdecor.jpg'
import flowerdecor from '../image/flowerdecor.jpg'
import deerdecor from '../image/deerdecor.jpg'
import blackdeer from '../image/blackdeer.jpg'
import bowldecor from '../image/bowldecor.jpg'
import fountaindecor from '../image/fountaindecor.jpg'
import secante from '../image/secanteddecor.jpg'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import PublicLayout from './PublicLayout'


function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}




const Decor = () => {
    return (
        <>

        <PublicLayout>
            <Container>
                <Box>
                    <div role="presentation" onClick={handleClick}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link sx={{ fontSize: "18px" }} component={RouterLink} to="/" underline="hover" color="black" >
                                Home
                            </Link>
                            <Link
                                underline="hover"
                                color="black"
                                href="/decor"
                            >
                                Decor
                            </Link>

                        </Breadcrumbs>
                    </div>
                </Box>


                <Box sx={{ textAlign: 'center', padding: '50px 0' }}>
                    <Typography
                        variant="h4"
                        component="h1"
                        sx={{
                            fontFamily: 'math',
                            borderBottom: '2px solid black',
                            display: 'inline-block',
                            fontWeight: "bold",
                            fontSize: {
                                xs: '20px',
                                sm: '28px',
                                md: '36px',
                            },
                        }}
                    >
                        Decor Your Dream House
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: {
                                xs: '12px',
                                sm: '14px',
                                md: '18px',
                            },
                            padding: '10px 0',
                            fontWeight: 500,
                        }}
                    >
                        Captivating designs that add beauty to every nook and corner of your home.
                    </Typography>
                </Box>

                <Box sx={{ padding: "0 0 50px 0" }}>
                    <Grid container spacing={1}>

                        <Grid size={12}>
                            <img src={decor} alt="" style={{ width: "100%" }} />
                        </Grid>



                    </Grid>
                </Box>


                <Box>
                    <Box sx={{ textAlign: 'center', padding: '0 0 50px 0' }}>
                        <Typography
                            variant="h4"
                            component="h1"
                            sx={{
                                fontFamily: 'math',

                                display: 'inline-block',
                                fontWeight: "bold",
                                fontSize: {
                                    xs: '22px',
                                    sm: '26px',
                                    md: '32px',
                                },
                            }}
                        >
                            Shop By Categories
                        </Typography>
                    </Box>

                    <Box>
                        <Grid container spacing={2}>

                            <Grid size={{ lg: 2, md: 2, sm: 4, xs: 6 }}>
                                <Box sx={{ textAlign: "center" }}>
                                    <a href=""><img src={homedecor} alt="" style={{ width: "100%" }} /></a>
                                    <h4 style={{ fontSize: "18px" }}>Home Accessories</h4>
                                </Box>

                            </Grid>

                            <Grid size={{ lg: 2, md: 2, sm: 4, xs: 6 }}>
                                <Box sx={{ textAlign: "center" }}>
                                    <a href=""><img src={lampdecor} alt="" style={{ width: "100%" }} /></a>
                                    <h4 style={{ fontSize: "18px" }}>Lighting</h4>
                                </Box>

                            </Grid>

                            <Grid size={{ lg: 2, md: 2, sm: 4, xs: 6 }}>
                                <Box sx={{ textAlign: "center" }}>
                                    <a href=""><img src={bottledecor} alt="" style={{ width: "100%" }} /></a>
                                    <h4 style={{ fontSize: "18px" }}>Home Fragrance</h4>
                                </Box>

                            </Grid>

                            <Grid size={{ lg: 2, md: 2, sm: 4, xs: 6 }}>
                                <Box sx={{ textAlign: "center" }}>
                                    <a href=""><img src={dishdecor} alt="" style={{ width: "100%" }} /></a>
                                    <h4 style={{ fontSize: "18px" }}>Wall Accents</h4>
                                </Box>

                            </Grid>

                            <Grid size={{ lg: 2, md: 2, sm: 4, xs: 6 }}>
                                <Box sx={{ textAlign: "center" }}>
                                    <a href=""><img src={flowerdecor} alt="" style={{ width: "100%" }} /></a>
                                    <h4 style={{ fontSize: "18px" }}>Garden</h4>
                                </Box>

                            </Grid>

                            <Grid size={{ lg: 2, md: 2, sm: 4, xs: 6 }}>
                                <Box sx={{ textAlign: "center" }}>
                                    <a href=""><img src={deerdecor} alt="" style={{ width: "100%" }} /></a>
                                    <h4 style={{ fontSize: "18px" }}>Table Accents</h4>
                                </Box>

                            </Grid>



                        </Grid>
                    </Box>
                </Box>



                <Box>
                    <Box sx={{ textAlign: 'center', padding: '50px 0 50px 0' }}>
                        <Typography
                            variant="h4"
                            component="h1"
                            sx={{
                                fontFamily: 'math',

                                display: 'inline-block',
                                fontWeight: "bold",
                                fontSize: {
                                    xs: '22px',
                                    sm: '26px',
                                    md: '32px',
                                },
                            }}
                        >
                            Online Exclusives
                        </Typography>
                    </Box>

                    <Box>
                        <Grid container spacing={2}>

                            <Grid size={{ lg: 3, md: 3, sm: 6, xs: 12 }}>
                                <Box sx={{ textAlign: "center" }}>
                                    <a href=""><img src={blackdeer} alt="" style={{ width: "100%" }} /></a>
                                    {/* <h4 style={{ fontSize: "18px" }}>Figurines</h4> */}
                                </Box>

                            </Grid>

                            <Grid size={{ lg: 3, md: 3, sm: 6, xs: 12 }}>
                                <Box sx={{ textAlign: "center" }}>
                                    <a href=""><img src={bowldecor} alt="" style={{ width: "100%" }} /></a>
                                    {/* <h4 style={{ fontSize: "18px" }}>Potpourri Bowls</h4> */}
                                </Box>

                            </Grid>

                            <Grid size={{ lg: 3, md: 3, sm: 6, xs: 12 }}>
                                <Box sx={{ textAlign: "center" }}>
                                    <a href=""><img src={fountaindecor} alt="" style={{ width: "100%" }} /></a>
                                    {/* <h4 style={{ fontSize: "18px" }}>Fountains</h4> */}
                                </Box>

                            </Grid>

                            <Grid size={{ lg: 3, md: 3, sm: 6, xs: 12 }}>
                                <Box sx={{ textAlign: "center" }}>
                                    <a href=""><img src={secante} alt="" style={{ width: "100%" }} /></a>
                                    {/* <h4 style={{ fontSize: "18px" }}>Scented Candles</h4> */}
                                </Box>

                            </Grid>


                        </Grid>
                    </Box>
                </Box>
            </Container>
            </PublicLayout>
        </>
    )
}

export default Decor
