// RugsAndMats.jsx
import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material'
import rug1 from '../image/rug1.jpg';
import mat1 from '../image/mat1.jpg';
import cottonrunner from '../image/Cotton-Runner.jpg';
import geomat from '../image/geo-mat.jpg';
import mat2 from '../image/mat2.jpg';
import mat3 from '../image/mat3.jpg';


import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import PublicLayout from './PublicLayout';


function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}



const RugsAndMats = () => {
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
                                href="/rugsandmats"
                            >
                                Rugs And Mats
                            </Link>

                        </Breadcrumbs>
                    </div>
                </Box>

                {/* rugs and mats  section start*/}
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
                        Rugs & Mats Collection
                    </Typography>

                </Box>

                <Box sx={{ padding: '30px 0' }}>

                    <Grid container spacing={2}>
                        <Grid size={{ lg: 4, md: 4, sm: 6, xs: 12 }}>
                            <Box sx={{
                                padding: "18px",
                                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                ":hover": {
                                    transform: "scale(1.03)",
                                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
                                    backgroundColor: "#f9f9f9",
                                    cursor: "pointer",
                                }
                            }}>
                                <img src={rug1} alt="" style={{ width: "100%", transition: "transform 0.3s ease" }} />
                                <Box className="image-detail" sx={{ padding: '10px 15px ' }}>
                                    <h2 style={{ paddingBottom: "10px", fontFamily: "sans-serif", fontSize: "20px" }}>Persian Rug</h2>
                                    <span style={{ display: 'block' }}>
                                        <p style={{ textDecoration: 'line-through', color: 'grey', fontWeight: "500", fontSize: '16px', display: 'inline-block', paddingRight: "10px" }}>₹6,499</p> ₹5,499
                                    </span>
                                    <button className='cart-button' style={{ marginTop: "10px", width: "100%", padding: '10px 15px', backgroundColor: "white", border: "1px solid black", fontFamily: "sans-serif", fontWeight: "bold" }}>Add To Cart</button>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid size={{ lg: 4, md: 4, sm: 6, xs: 12 }}>
                            <Box sx={{
                                padding: "18px",
                                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                ":hover": {
                                    transform: "scale(1.03)",
                                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
                                    backgroundColor: "#f9f9f9",
                                    cursor: "pointer",
                                }
                            }}>
                                <img src={mat1} alt="" style={{ width: "100%" }} />
                                <Box className="image-detail" sx={{ padding: '10px 15px ' }}>
                                    <h2 style={{ paddingBottom: "10px", fontFamily: "sans-serif", fontSize: "20px" }}>Jute Mat</h2>
                                    <span style={{ display: 'block' }}>
                                        <p style={{ textDecoration: 'line-through', color: 'grey', fontWeight: "500", fontSize: '16px', display: 'inline-block', paddingRight: "10px" }}>₹1,499</p> ₹1,299
                                    </span>
                                    <button className='cart-button' style={{ marginTop: "10px", width: "100%", padding: '10px 15px', backgroundColor: "white", border: "1px solid black", fontFamily: "sans-serif", fontWeight: "bold" }}>Add To Cart</button>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid size={{ lg: 4, md: 4, sm: 6, xs: 12 }}>
                            <Box sx={{
                                padding: "18px",
                                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                ":hover": {
                                    transform: "scale(1.03)",
                                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
                                    backgroundColor: "#f9f9f9",
                                    cursor: "pointer",
                                }
                            }}>
                                <img src={cottonrunner} alt="" style={{ width: "100%" }} />
                                <Box className="image-detail" sx={{ padding: '10px 15px ' }}>
                                    <h2 style={{ paddingBottom: "10px", fontFamily: "sans-serif", fontSize: "20px" }}>Cotton Runner</h2>
                                    <span style={{ display: 'block' }}>
                                        <p style={{ textDecoration: 'line-through', color: 'grey', fontWeight: "500", fontSize: '16px', display: 'inline-block', paddingRight: "10px" }}>₹2,799</p> ₹2,199
                                    </span>
                                    <button className='cart-button' style={{ marginTop: "10px", width: "100%", padding: '10px 15px', backgroundColor: "white", border: "1px solid black", fontFamily: "sans-serif", fontWeight: "bold" }}>Add To Cart</button>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid size={{ lg: 4, md: 4, sm: 6, xs: 12 }}>
                            <Box sx={{
                                padding: "18px",
                                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                ":hover": {
                                    transform: "scale(1.03)",
                                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
                                    backgroundColor: "#f9f9f9",
                                    cursor: "pointer",
                                }
                            }}>
                                <img src={geomat} alt="" style={{ width: "100%" }} />
                                <Box className="image-detail" sx={{ padding: '10px 15px ' }}>
                                    <h2 style={{ paddingBottom: "10px", fontFamily: "sans-serif", fontSize: "20px" }}>Geometric Floor Mat</h2>
                                    <span style={{ display: 'block' }}>
                                        <p style={{ textDecoration: 'line-through', color: 'grey', fontWeight: "500", fontSize: '16px', display: 'inline-block', paddingRight: "10px" }}> ₹1200</p>  ₹899
                                    </span>
                                    <button className='cart-button' style={{ marginTop: "10px", width: "100%", padding: '10px 15px', backgroundColor: "white", border: "1px solid black", fontFamily: "sans-serif", fontWeight: "bold" }}>Add To Cart</button>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid size={{ lg: 4, md: 4, sm: 6, xs: 12 }}>
                            <Box sx={{
                                padding: "18px",
                                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                ":hover": {
                                    transform: "scale(1.03)",
                                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
                                    backgroundColor: "#f9f9f9",
                                    cursor: "pointer",
                                }
                            }}>
                                <img src={mat2} alt="" style={{ width: "100%" }} />
                                <Box className="image-detail" sx={{ padding: '10px 15px ' }}>
                                    <h2 style={{ paddingBottom: "10px", fontFamily: "sans-serif", fontSize: "20px" }}>Braided Jute Rug</h2>
                                    <span style={{ display: 'block' }}>
                                        <p style={{ textDecoration: 'line-through', color: 'grey', fontWeight: "500", fontSize: '16px', display: 'inline-block', paddingRight: "10px" }}> ₹1,899 </p>  ₹1,499
                                    </span>
                                    <button className='cart-button' style={{ marginTop: "10px", width: "100%", padding: '10px 15px', backgroundColor: "white", border: "1px solid black", fontFamily: "sans-serif", fontWeight: "bold" }}>Add To Cart</button>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid size={{ lg: 4, md: 4, sm: 6, xs: 12 }}>
                            <Box sx={{
                                padding: "18px",
                                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                ":hover": {
                                    transform: "scale(1.03)",
                                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
                                    backgroundColor: "#f9f9f9",
                                    cursor: "pointer",
                                }
                            }}>
                                <img src={mat3} alt="" style={{ width: "100%" }} />
                                <Box className="image-detail" sx={{ padding: '10px 15px ' }}>
                                    <h2 style={{ paddingBottom: "10px", fontFamily: "sans-serif", fontSize: "20px" }}>Woolen Area Rug</h2>
                                    <span style={{ display: 'block' }}>
                                        <p style={{ textDecoration: 'line-through', color: 'grey', fontWeight: "500", fontSize: '16px', display: 'inline-block', paddingRight: "10px" }}>₹3,999</p> ₹3,599
                                    </span>
                                    <button className='cart-button' style={{ marginTop: "10px", width: "100%", padding: '10px 15px', backgroundColor: "white", border: "1px solid black", fontFamily: "sans-serif", fontWeight: "bold" }}>Add To Cart</button>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>





                </Box>
                {/* rugs and mats  section end*/}

            </Container >
            </PublicLayout>
        </>
    );
};

export default RugsAndMats;
