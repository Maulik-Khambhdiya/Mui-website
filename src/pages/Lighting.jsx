import { Box, Container, Grid, Typography } from '@mui/material'
import ceiling1 from '../image/ceiling1.jpg';
import ceiling2 from '../image/ceiling2.jpg';
import ceiling3 from '../image/ceiling3.jpg';
import ceiling4 from '../image/ceiling4.jpg';
import ceiling5 from '../image/ceiling5.jpg';
import ceiling6 from '../image/ceiling6.jpg';
import walllight1 from '../image/walllight1.jpg';
import walllight2 from '../image/walllight2.jpg';
import walllight3 from '../image/walllight3.jpg';
import walllight4 from '../image/walllight4.jpg';
import walllight5 from '../image/walllight5.jpg';
import walllight6 from '../image/walllight6.jpg';
import React from "react";





const Lighting = () => {

    return (
        <>
            <Container>
                {/* ceiling lighting  section start*/}
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
                        Ceiling Lights
                    </Typography>

                </Box>

                <Box sx={{ padding: '30px 0' }}>

                    <Grid container spacing={2}>
                        <Grid size={{lg:4,md:4,sm:6,xs:12}}>
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
                                <img src={ceiling1} alt="" style={{ width: "100%", transition: "transform 0.3s ease" }} />
                                <Box className="image-detail" sx={{ padding: '10px 15px ' }}>
                                    <h2 style={{ paddingBottom: "10px", fontFamily: "sans-serif", fontSize: "20px" }}>Gypsum Ceiling Designs</h2>
                                    <span style={{ display: 'block' }}>
                                        <p style={{ textDecoration: 'line-through', color: 'grey', fontWeight: "500", fontSize: '16px', display: 'inline-block', paddingRight: "10px" }}>$ 159</p> $102
                                    </span>
                                    <button className='cart-button' style={{ marginTop: "10px", width: "100%", padding: '10px 15px', backgroundColor: "white", border: "1px solid black", fontFamily: "sans-serif", fontWeight: "bold" }}>Add To Cart</button>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid size={{lg:4,md:4,sm:6,xs:12}}>
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
                                <img src={ceiling2} alt="" style={{ width: "100%" }} />
                                <Box className="image-detail" sx={{ padding: '10px 15px ' }}>
                                    <h2 style={{ paddingBottom: "10px", fontFamily: "sans-serif", fontSize: "20px" }}>Heart Shape Ceiling</h2>
                                    <span style={{ display: 'block' }}>
                                        <p style={{ textDecoration: 'line-through', color: 'grey', fontWeight: "500", fontSize: '16px', display: 'inline-block', paddingRight: "10px" }}>$ 100</p> $60
                                    </span>
                                    <button className='cart-button' style={{ marginTop: "10px", width: "100%", padding: '10px 15px', backgroundColor: "white", border: "1px solid black", fontFamily: "sans-serif", fontWeight: "bold" }}>Add To Cart</button>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid size={{lg:4,md:4,sm:6,xs:12}}>
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
                                <img src={ceiling3} alt="" style={{ width: "100%" }} />
                                <Box className="image-detail" sx={{ padding: '10px 15px ' }}>
                                    <h2 style={{ paddingBottom: "10px", fontFamily: "sans-serif", fontSize: "20px" }}>Modern Light</h2>
                                    <span style={{ display: 'block' }}>
                                        <p style={{ textDecoration: 'line-through', color: 'grey', fontWeight: "500", fontSize: '16px', display: 'inline-block', paddingRight: "10px" }}>$ 200</p> $160
                                    </span>
                                    <button className='cart-button' style={{ marginTop: "10px", width: "100%", padding: '10px 15px', backgroundColor: "white", border: "1px solid black", fontFamily: "sans-serif", fontWeight: "bold" }}>Add To Cart</button>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid size={{lg:4,md:4,sm:6,xs:12}}>
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
                                <img src={ceiling4} alt="" style={{ width: "100%" }} />
                                <Box className="image-detail" sx={{ padding: '10px 15px ' }}>
                                    <h2 style={{ paddingBottom: "10px", fontFamily: "sans-serif", fontSize: "20px" }}>Luxury Ceiling Designs</h2>
                                    <span style={{ display: 'block' }}>
                                        <p style={{ textDecoration: 'line-through', color: 'grey', fontWeight: "500", fontSize: '16px', display: 'inline-block', paddingRight: "10px" }}>$ 350</p> $300
                                    </span>
                                    <button className='cart-button' style={{ marginTop: "10px", width: "100%", padding: '10px 15px', backgroundColor: "white", border: "1px solid black", fontFamily: "sans-serif", fontWeight: "bold" }}>Add To Cart</button>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid size={{lg:4,md:4,sm:6,xs:12}}>
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
                                <img src={ceiling5} alt="" style={{ width: "100%" }} />
                                <Box className="image-detail" sx={{ padding: '10px 15px ' }}>
                                    <h2 style={{ paddingBottom: "10px", fontFamily: "sans-serif", fontSize: "20px" }}>Flower House</h2>
                                    <span style={{ display: 'block' }}>
                                        <p style={{ textDecoration: 'line-through', color: 'grey', fontWeight: "500", fontSize: '16px', display: 'inline-block', paddingRight: "10px" }}>$ 159</p> $102
                                    </span>
                                    <button className='cart-button' style={{ marginTop: "10px", width: "100%", padding: '10px 15px', backgroundColor: "white", border: "1px solid black", fontFamily: "sans-serif", fontWeight: "bold" }}>Add To Cart</button>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid size={{lg:4,md:4,sm:6,xs:12}}>
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
                                <img src={ceiling6} alt="" style={{ width: "100%" }} />
                                <Box className="image-detail" sx={{ padding: '10px 15px ' }}>
                                    <h2 style={{ paddingBottom: "10px", fontFamily: "sans-serif", fontSize: "20px" }}>Purple Room Light</h2>
                                    <span style={{ display: 'block' }}>
                                        <p style={{ textDecoration: 'line-through', color: 'grey', fontWeight: "500", fontSize: '16px', display: 'inline-block', paddingRight: "10px" }}>$ 160</p> $115
                                    </span>
                                    <button className='cart-button' style={{ marginTop: "10px", width: "100%", padding: '10px 15px', backgroundColor: "white", border: "1px solid black", fontFamily: "sans-serif", fontWeight: "bold" }}>Add To Cart</button>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>


                   


                </Box>
                {/* ceiling lighting  section end*/}


                {/* wall lighting  section start*/}

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
                        Wall Lights
                    </Typography>

                </Box>

                <Box sx={{ padding: '30px 0' }}>

                    <Grid container spacing={2}>
                        <Grid size={{lg:4,md:4,sm:6,xs:12}}>
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
                                <img src={walllight1} alt="" style={{ width: "100%", transition: "transform 0.3s ease" }} />
                                <Box className="image-detail" sx={{ padding: '10px 15px ' }}>
                                    <h2 style={{ paddingBottom: "10px", fontFamily: "sans-serif", fontSize: "20px" }}>Circle Glass Set</h2>
                                    <span style={{ display: 'block' }}>
                                        <p style={{ textDecoration: 'line-through', color: 'grey', fontWeight: "500", fontSize: '16px', display: 'inline-block', paddingRight: "10px" }}>$ 50</p> $20
                                    </span>
                                    <button className='cart-button' style={{ marginTop: "10px", width: "100%", padding: '10px 15px', backgroundColor: "white", border: "1px solid black", fontFamily: "sans-serif", fontWeight: "bold" }}>Add To Cart</button>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid size={{lg:4,md:4,sm:6,xs:12}}>
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
                                <img src={walllight2} alt="" style={{ width: "100%" }} />
                                <Box className="image-detail" sx={{ padding: '10px 15px ' }}>
                                    <h2 style={{ paddingBottom: "10px", fontFamily: "sans-serif", fontSize: "20px" }}>Minimalist Wall light</h2>
                                    <span style={{ display: 'block' }}>
                                        <p style={{ textDecoration: 'line-through', color: 'grey', fontWeight: "500", fontSize: '16px', display: 'inline-block', paddingRight: "10px" }}>$ 90</p> $50
                                    </span>
                                    <button className='cart-button' style={{ marginTop: "10px", width: "100%", padding: '10px 15px', backgroundColor: "white", border: "1px solid black", fontFamily: "sans-serif", fontWeight: "bold" }}>Add To Cart</button>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid size={{lg:4,md:4,sm:6,xs:12}}>
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
                                <img src={walllight3} alt="" style={{ width: "100%" }} />
                                <Box className="image-detail" sx={{ padding: '10px 15px ' }}>
                                    <h2 style={{ paddingBottom: "10px", fontFamily: "sans-serif", fontSize: "20px" }}>Tree Structure</h2>
                                    <span style={{ display: 'block' }}>
                                        <p style={{ textDecoration: 'line-through', color: 'grey', fontWeight: "500", fontSize: '16px', display: 'inline-block', paddingRight: "10px" }}>$ 200</p> $140
                                    </span>
                                    <button className='cart-button' style={{ marginTop: "10px", width: "100%", padding: '10px 15px', backgroundColor: "white", border: "1px solid black", fontFamily: "sans-serif", fontWeight: "bold" }}>Add To Cart</button>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid size={{lg:4,md:4,sm:6,xs:12}}>
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
                                <img src={walllight4} alt="" style={{ width: "100%" }} />
                                <Box className="image-detail" sx={{ padding: '10px 15px ' }}>
                                    <h2 style={{ paddingBottom: "10px", fontFamily: "sans-serif", fontSize: "20px" }}>Bird Art On Wall</h2>
                                    <span style={{ display: 'block' }}>
                                        <p style={{ textDecoration: 'line-through', color: 'grey', fontWeight: "500", fontSize: '16px', display: 'inline-block', paddingRight: "10px" }}>$ 200</p> $130
                                    </span>
                                    <button className='cart-button' style={{ marginTop: "10px", width: "100%", padding: '10px 15px', backgroundColor: "white", border: "1px solid black", fontFamily: "sans-serif", fontWeight: "bold" }}>Add To Cart</button>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid size={{lg:4,md:4,sm:6,xs:12}}>
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
                                <img src={walllight5} alt="" style={{ width: "100%" }} />
                                <Box className="image-detail" sx={{ padding: '10px 15px ' }}>
                                    <h2 style={{ paddingBottom: "10px", fontFamily: "sans-serif", fontSize: "20px" }}>Flower House</h2>
                                    <span style={{ display: 'block' }}>
                                        <p style={{ textDecoration: 'line-through', color: 'grey', fontWeight: "500", fontSize: '16px', display: 'inline-block', paddingRight: "10px" }}>$ 159</p> $102
                                    </span>
                                    <button className='cart-button' style={{ marginTop: "10px", width: "100%", padding: '10px 15px', backgroundColor: "white", border: "1px solid black", fontFamily: "sans-serif", fontWeight: "bold" }}>Add To Cart</button>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid size={{lg:4,md:4,sm:6,xs:12}}>
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
                                <img src={walllight6} alt="" style={{ width: "100%" }} />
                                <Box className="image-detail" sx={{ padding: '10px 15px ' }}>
                                    <h2 style={{ paddingBottom: "10px", fontFamily: "sans-serif", fontSize: "20px" }}>Lighted Flower Port</h2>
                                    <span style={{ display: 'block' }}>
                                        <p style={{ textDecoration: 'line-through', color: 'grey', fontWeight: "500", fontSize: '16px', display: 'inline-block', paddingRight: "10px" }}>$ 160</p> $140
                                    </span>
                                    <button className='cart-button' style={{ marginTop: "10px", width: "100%", padding: '10px 15px', backgroundColor: "white", border: "1px solid black", fontFamily: "sans-serif", fontWeight: "bold" }}>Add To Cart</button>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>


                   


                </Box>
                {/* wall lighting section end */}
            </Container >
        </>
    )
}

export default Lighting
