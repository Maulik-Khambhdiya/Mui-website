import React, { useEffect, useState } from 'react'
import { Box, Container, Grid, ListItem, Typography } from '@mui/material'
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


import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import axios from 'axios';
import PublicLayout from './PublicLayout';


function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}


const ModernFurniture = () => {

    // const [ini, setIni] = useState({
    //     category: "modern",
    //     name: "",
    //     discountPrice: "",
    //     originalPrice: "",
    //     description: "",
    //     inStock: true,
    //     description: "",
    //     images: []
    // })
    const [list, setList] = useState([])


    const viewData = () => {
        axios.get("http://localhost:3000/furnituremanager/")
            .then((res) => {
                setList(res.data.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }


    useEffect(() => {
        viewData()
    }, [])
    return (
        <>

        <PublicLayout>
            <Container>

                <Box>
                    <div role="presentation" onClick={handleClick}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link
                                component={RouterLink}
                                to="/"
                                underline="hover"
                                color="black"
                                sx={{ fontSize: "18px" }}
                            >
                                Home
                            </Link>

                            <Link
                                component={RouterLink}
                                to="/furniture"
                                underline="hover"
                                color="black"
                            >
                                Furniture
                            </Link>

                            <Link
                                component={RouterLink}
                                to="/modernfurniture"
                                underline="hover"
                                color="black"
                            >
                                ModernFurniture
                            </Link>
                        </Breadcrumbs>

                    </div>
                </Box>

                {/* Living Room section start*/}
                <Box sx={{ textAlign: 'center', padding: '30px 0 10px 0' }}>
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

                        Living Room
                    </Typography>

                </Box>

                <Box sx={{ padding: '10px 0' }}>

                    <Grid container spacing={2}>
                        {
                            list.map((item, index) => (
                                <Grid size={{ lg: 3, md: 3, sm: 6, xs: 6 }}>
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
                                        <img src={item.image} alt="" style={{ width: "100%", transition: "transform 0.3s ease" }} />
                                        <Box className="image-detail" sx={{ padding: '10px 15px ' }}>
                                            <h2 style={{
                                                display: "inline-block",
                                                fontSize: "18px",
                                                paddingBottom: "10px", fontFamily: "sans-serif"
                                            }}>{item.name}</h2>

                                            

                                            <br />

                                            <span style={{ display: 'block' }}>
                                                <p style={{ textDecoration: 'line-through', color: 'grey', fontWeight: "500", fontSize: '16px', display: 'inline-block', paddingRight: "10px" }}>$ {item.originalPrice}</p> ${item.discountPrice}
                                            </span>
                                            <button className='cart-button' style={{ marginTop: "10px", width: "100%", padding: '10px 15px', backgroundColor: "white", border: "1px solid black", fontFamily: "sans-serif", fontWeight: "bold" }}>Add To Cart</button>
                                        </Box>
                                    </Box>
                                </Grid>
                            ))
                        }


                        {/* <Grid size={{ lg: 3, md: 3, sm: 6, xs: 6 }}>
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

                        <Grid size={{ lg: 3, md: 3, sm: 6, xs: 6 }}>
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
                                    <h2 style={{ paddingBottom: "10px", fontFamily: "sans-serif", fontSize: "20px" }}>Modern Living Area</h2>
                                    <span style={{ display: 'block' }}>
                                        <p style={{ textDecoration: 'line-through', color: 'grey', fontWeight: "500", fontSize: '16px', display: 'inline-block', paddingRight: "10px" }}>$ 5,000</p> $4,060
                                    </span>
                                    <button className='cart-button' style={{ marginTop: "10px", width: "100%", padding: '10px 15px', backgroundColor: "white", border: "1px solid black", fontFamily: "sans-serif", fontWeight: "bold" }}>Add To Cart</button>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid size={{ lg: 3, md: 3, sm: 6, xs: 6 }}>
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
                                    <h2 style={{ paddingBottom: "10px", fontFamily: "sans-serif", fontSize: "20px" }}>Luxury Designs</h2>
                                    <span style={{ display: 'block' }}>
                                        <p style={{ textDecoration: 'line-through', color: 'grey', fontWeight: "500", fontSize: '16px', display: 'inline-block', paddingRight: "10px" }}>$ 12,000</p> $10,000
                                    </span>
                                    <button className='cart-button' style={{ marginTop: "10px", width: "100%", padding: '10px 15px', backgroundColor: "white", border: "1px solid black", fontFamily: "sans-serif", fontWeight: "bold" }}>Add To Cart</button>
                                </Box>
                            </Box>
                        </Grid> */}

                    </Grid>





                </Box>
                {/* Living Room section end*/}


                {/* Dining Room  section start*/}

                <Box sx={{ textAlign: 'center', padding: '10px 0' }}>
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
                        Dining Room
                    </Typography>

                </Box>

                <Box sx={{ padding: '10px 0' }}>

                    <Grid container spacing={2}>
                        <Grid size={{ lg: 3, md: 3, sm: 6, xs: 6 }}>
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

                        <Grid size={{ lg: 3, md: 3, sm: 6, xs: 6 }}>
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

                        <Grid size={{ lg: 3, md: 3, sm: 6, xs: 6 }}>
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

                        <Grid size={{ lg: 3, md: 3, sm: 6, xs: 6 }}>
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


                    </Grid>





                </Box>
                {/* Dining Room section end */}

                {/* Bed Room section start */}

                <Box sx={{ textAlign: 'center', padding: '10px 0' }}>
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

                        Bed Room
                    </Typography>

                </Box>

                <Box sx={{ padding: '10px 0' }}>

                    <Grid container spacing={2}>
                        <Grid size={{ lg: 3, md: 3, sm: 6, xs: 6 }}>


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
                                    <h2 style={{
                                        fontSize: "18px",
                                        paddingBottom: "10px", fontFamily: "sans-serif"
                                    }}>Gypsum Ceiling Designs</h2>





                                    <span style={{ display: 'block' }}>
                                        <p style={{ textDecoration: 'line-through', color: 'grey', fontWeight: "500", fontSize: '16px', display: 'inline-block', paddingRight: "10px" }}>$ 159</p> $102
                                    </span>
                                    <button className='cart-button' style={{ marginTop: "10px", width: "100%", padding: '10px 15px', backgroundColor: "white", border: "1px solid black", fontFamily: "sans-serif", fontWeight: "bold" }}>Add To Cart</button>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid size={{ lg: 3, md: 3, sm: 6, xs: 6 }}>
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

                        <Grid size={{ lg: 3, md: 3, sm: 6, xs: 6 }}>
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
                                    <h2 style={{ paddingBottom: "10px", fontFamily: "sans-serif", fontSize: "20px" }}>Modern Living Area</h2>
                                    <span style={{ display: 'block' }}>
                                        <p style={{ textDecoration: 'line-through', color: 'grey', fontWeight: "500", fontSize: '16px', display: 'inline-block', paddingRight: "10px" }}>$ 5,000</p> $4,060
                                    </span>
                                    <button className='cart-button' style={{ marginTop: "10px", width: "100%", padding: '10px 15px', backgroundColor: "white", border: "1px solid black", fontFamily: "sans-serif", fontWeight: "bold" }}>Add To Cart</button>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid size={{ lg: 3, md: 3, sm: 6, xs: 6 }}>
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
                                    <h2 style={{ paddingBottom: "10px", fontFamily: "sans-serif", fontSize: "20px" }}>Luxury Designs</h2>
                                    <span style={{ display: 'block' }}>
                                        <p style={{ textDecoration: 'line-through', color: 'grey', fontWeight: "500", fontSize: '16px', display: 'inline-block', paddingRight: "10px" }}>$ 12,000</p> $10,000
                                    </span>
                                    <button className='cart-button' style={{ marginTop: "10px", width: "100%", padding: '10px 15px', backgroundColor: "white", border: "1px solid black", fontFamily: "sans-serif", fontWeight: "bold" }}>Add To Cart</button>
                                </Box>
                            </Box>
                        </Grid>



                    </Grid>

                </Box>

                {/* Bed Room section end */}

                {/* Kids-Teens section start  */}

                <Box sx={{ textAlign: 'center', padding: '10px 0' }}>
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

                        Kids/Teens Room
                    </Typography>

                </Box>

                <Box sx={{ padding: '10px 0' }}>

                    <Grid container spacing={2}>
                        <Grid size={{ lg: 3, md: 3, sm: 6, xs: 6 }}>
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
                                    <h2 style={{
                                        fontSize: "18px",
                                        paddingBottom: "10px", fontFamily: "sans-serif"
                                    }}>Gypsum Ceiling Designs</h2>

                                    <span style={{ display: 'block' }}>
                                        <p style={{ textDecoration: 'line-through', color: 'grey', fontWeight: "500", fontSize: '16px', display: 'inline-block', paddingRight: "10px" }}>$ 159</p> $102
                                    </span>
                                    <button className='cart-button' style={{ marginTop: "10px", width: "100%", padding: '10px 15px', backgroundColor: "white", border: "1px solid black", fontFamily: "sans-serif", fontWeight: "bold" }}>Add To Cart</button>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid size={{ lg: 3, md: 3, sm: 6, xs: 6 }}>
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

                        <Grid size={{ lg: 3, md: 3, sm: 6, xs: 6 }}>
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
                                    <h2 style={{ paddingBottom: "10px", fontFamily: "sans-serif", fontSize: "20px" }}>Modern Living Area</h2>
                                    <span style={{ display: 'block' }}>
                                        <p style={{ textDecoration: 'line-through', color: 'grey', fontWeight: "500", fontSize: '16px', display: 'inline-block', paddingRight: "10px" }}>$ 5,000</p> $4,060
                                    </span>
                                    <button className='cart-button' style={{ marginTop: "10px", width: "100%", padding: '10px 15px', backgroundColor: "white", border: "1px solid black", fontFamily: "sans-serif", fontWeight: "bold" }}>Add To Cart</button>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid size={{ lg: 3, md: 3, sm: 6, xs: 6 }}>
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
                                    <h2 style={{ paddingBottom: "10px", fontFamily: "sans-serif", fontSize: "20px" }}>Luxury Designs</h2>
                                    <span style={{ display: 'block' }}>
                                        <p style={{ textDecoration: 'line-through', color: 'grey', fontWeight: "500", fontSize: '16px', display: 'inline-block', paddingRight: "10px" }}>$ 12,000</p> $10,000
                                    </span>
                                    <button className='cart-button' style={{ marginTop: "10px", width: "100%", padding: '10px 15px', backgroundColor: "white", border: "1px solid black", fontFamily: "sans-serif", fontWeight: "bold" }}>Add To Cart</button>
                                </Box>
                            </Box>
                        </Grid>



                    </Grid>





                </Box>
                {/* Kids-Teens section end  */}



                {/* kitchen section start  */}

                <Box sx={{ textAlign: 'center', padding: '10px 0' }}>
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

                        Kitchen Design
                    </Typography>

                </Box>

                <Box sx={{ padding: '10px 0' }}>

                    <Grid container spacing={2}>
                        <Grid size={{ lg: 3, md: 3, sm: 6, xs: 6 }}>
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
                                    <h2 style={{
                                        fontSize: "18px",
                                        paddingBottom: "10px", fontFamily: "sans-serif"
                                    }}>Gypsum Ceiling Designs</h2>

                                    <span style={{ display: 'block' }}>
                                        <p style={{ textDecoration: 'line-through', color: 'grey', fontWeight: "500", fontSize: '16px', display: 'inline-block', paddingRight: "10px" }}>$ 159</p> $102
                                    </span>
                                    <button className='cart-button' style={{ marginTop: "10px", width: "100%", padding: '10px 15px', backgroundColor: "white", border: "1px solid black", fontFamily: "sans-serif", fontWeight: "bold" }}>Add To Cart</button>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid size={{ lg: 3, md: 3, sm: 6, xs: 6 }}>
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

                        <Grid size={{ lg: 3, md: 3, sm: 6, xs: 6 }}>
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
                                    <h2 style={{ paddingBottom: "10px", fontFamily: "sans-serif", fontSize: "20px" }}>Modern Living Area</h2>
                                    <span style={{ display: 'block' }}>
                                        <p style={{ textDecoration: 'line-through', color: 'grey', fontWeight: "500", fontSize: '16px', display: 'inline-block', paddingRight: "10px" }}>$ 5,000</p> $4,060
                                    </span>
                                    <button className='cart-button' style={{ marginTop: "10px", width: "100%", padding: '10px 15px', backgroundColor: "white", border: "1px solid black", fontFamily: "sans-serif", fontWeight: "bold" }}>Add To Cart</button>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid size={{ lg: 3, md: 3, sm: 6, xs: 6 }}>
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
                                    <h2 style={{ paddingBottom: "10px", fontFamily: "sans-serif", fontSize: "20px" }}>Luxury Designs</h2>
                                    <span style={{ display: 'block' }}>
                                        <p style={{ textDecoration: 'line-through', color: 'grey', fontWeight: "500", fontSize: '16px', display: 'inline-block', paddingRight: "10px" }}>$ 12,000</p> $10,000
                                    </span>
                                    <button className='cart-button' style={{ marginTop: "10px", width: "100%", padding: '10px 15px', backgroundColor: "white", border: "1px solid black", fontFamily: "sans-serif", fontWeight: "bold" }}>Add To Cart</button>
                                </Box>
                            </Box>
                        </Grid>



                    </Grid>





                </Box>
                {/* Kitchen section end  */}
            </Container >

            </PublicLayout>
        </>
    )
}

export default ModernFurniture
