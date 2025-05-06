import { Box, Container, Grid, Typography } from '@mui/material'
import ceiling2 from '../image/ceiling2.jpg';
import ceiling1 from '../image/ceiling1.jpg';
import React from "react";
import Slider from 'react-slick';




const Lighting = () => {

    const settings = {
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500
    };

    return (
        <>
            <Container>

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

                <Box sx={{ padding: '50px 0' }}>




                    <div className="slider-container">

                        <Slider className='prepostbutton' {...settings}>
                            <div>
                                <Box sx={{ padding:"18px"}}>

                                    <img src={ceiling1} alt="" style={{ width: "100%" }} />

                                    <Box className="image-detail" sx={{ padding: '10px 15px ' }}>

                                        <h2 style={{ paddingBottom: "10px", fontFamily: "sans-serif", fontSize: "20px" }}>Gypsum Ceiling Designs</h2>

                                        <span style={{ display: 'block' }}><p style={{ textDecoration: 'line-through', color: 'grey', fontWeight: "500", fontSize: '16px', display: 'inline-block', paddingRight: "10px" }}>$ 159</p> $102</span>

                                        <button className='cart-button' style={{ marginTop: "10px", width: "100%", padding: '10px 15px', backgroundColor: "white", border: "1px solid black", fontFamily: "sans-serif", fontWeight: "bold" }}>Add To Cart</button>

                                    </Box>
                                </Box>
                            </div>

                            <div>
                                <Box sx={{padding:"18px"}}>

                                    <img src={ceiling2} alt="" style={{ width: "100%" }} />


                                    <Box className="image-detail" sx={{ padding: '10px 15px ' }}>

                                        <h2 style={{ paddingBottom: "10px", fontFamily: "sans-serif", fontSize: "20px" }}>Heart Shape Ceiling</h2>

                                        <span style={{ display: 'block' }}><p style={{ textDecoration: 'line-through', color: 'grey', fontWeight: "500", fontSize: '16px', display: 'inline-block', paddingRight: "10px" }}>$ 100</p> $60</span>

                                        <button className='cart-button' style={{ marginTop: "10px", width: "100%", padding: '10px 15px', backgroundColor: "white", border: "1px solid black", fontFamily: "sans-serif", fontWeight: "bold" }}>Add To Cart</button>

                                    </Box>
                                </Box>
                            </div>


                            <div>
                                <Box sx={{padding:"18px"}}>

                                    <img src={ceiling1} alt="" style={{ width: "100%" }} />


                                    <Box className="image-detail" sx={{ padding: '10px 15px ' }}>

                                        <h2 style={{ paddingBottom: "10px", fontFamily: "sans-serif", fontSize: "20px" }}>Gypsum Ceiling Designs</h2>

                                        <span style={{ display: 'block' }}><p style={{ textDecoration: 'line-through', color: 'grey', fontWeight: "500", fontSize: '16px', display: 'inline-block', paddingRight: "10px" }}>$ 159</p> $102</span>

                                        <button className='cart-button' style={{ marginTop: "10px", width: "100%", padding: '10px 15px', backgroundColor: "white", border: "1px solid black", fontFamily: "sans-serif", fontWeight: "bold" }}>Add To Cart</button>

                                    </Box>
                                </Box>
                            </div>
                            <div>
                                <Box sx={{padding:"18px"}}>

                                    <img src={ceiling1} alt="" style={{ width: "100%" }} />


                                    <Box className="image-detail" sx={{ padding: '10px 15px ' }}>

                                        <h2 style={{ paddingBottom: "10px", fontFamily: "sans-serif", fontSize: "20px" }}>Gypsum Ceiling Designs</h2>

                                        <span style={{ display: 'block' }}><p style={{ textDecoration: 'line-through', color: 'grey', fontWeight: "500", fontSize: '16px', display: 'inline-block', paddingRight: "10px" }}>$ 159</p> $102</span>

                                        <button className='cart-button' style={{ marginTop: "10px", width: "100%", padding: '10px 15px', backgroundColor: "white", border: "1px solid black", fontFamily: "sans-serif", fontWeight: "bold" }}>Add To Cart</button>

                                    </Box>
                                </Box>
                            </div>

                            <div>
                              <Box sx={{padding:"18px"}}>

                                    <img src={ceiling1} alt="" style={{ width: "100%" }} />


                                    <Box className="image-detail" sx={{ padding: '10px 15px ' }}>

                                        <h2 style={{ paddingBottom: "10px", fontFamily: "sans-serif", fontSize: "20px" }}>Gypsum Ceiling Designs</h2>

                                        <span style={{ display: 'block' }}><p style={{ textDecoration: 'line-through', color: 'grey', fontWeight: "500", fontSize: '16px', display: 'inline-block', paddingRight: "10px" }}>$ 159</p> $102</span>

                                        <button className='cart-button' style={{ marginTop: "10px", width: "100%", padding: '10px 15px', backgroundColor: "white", border: "1px solid black", fontFamily: "sans-serif", fontWeight: "bold" }}>Add To Cart</button>

                                    </Box>
                                </Box>
                            </div>

                            <div>
                                <Box sx={{padding:"18px"}}>

                                    <img src={ceiling1} alt="" style={{ width: "100%" }} />


                                    <Box className="image-detail" sx={{ padding: '10px 15px ' }}>

                                        <h2 style={{ paddingBottom: "10px", fontFamily: "sans-serif", fontSize: "20px" }}>Gypsum Ceiling Designs</h2>

                                        <span style={{ display: 'block' }}><p style={{ textDecoration: 'line-through', color: 'grey', fontWeight: "500", fontSize: '16px', display: 'inline-block', paddingRight: "10px" }}>$ 159</p> $102</span>

                                        <button className='cart-button' style={{ marginTop: "10px", width: "100%", padding: '10px 15px', backgroundColor: "white", border: "1px solid black", fontFamily: "sans-serif", fontWeight: "bold" }}>Add To Cart</button>

                                    </Box>
                                </Box>
                            </div>
                        </Slider>
                    </div>

                  

                </Box>
            </Container>
        </>
    )
}

export default Lighting
