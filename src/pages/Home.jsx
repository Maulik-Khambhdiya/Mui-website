import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import hero1 from '../image/hero-1.png';
import hero2 from '../image/hero-2.jpg';
import hero3 from '../image/hero-3.jpg';
import hero4 from '../image/hero-4.jpg';
import bed1 from '../image/bed-1.jpg';
import sofa1 from '../image/sofa-1.jpg';
import dinningtable from '../image/dinningtable.jpg';
import chair from '../image/chair.jpg';
import tvunit from '../image/tv-unit.jpg';
import cupboard from '../image/cupboard.jpg';
import ceil from '../image/ceil.jpg';
import coffeetable from '../image/coffee-table.jpg';
import studytable from '../image/study-table.jpg'
import temple from '../image/temple.jpg'
import newarrival from '../image/new-arrival.jpg'
import bookshelve from '../image/bookshelve.jpg'
import Grid from '@mui/material/Grid';
import cocochair from '../image/coco-chair.jpg';
import lamphoveredImage from '../image/lamp hover.jpg';
import wallmirror from '../image/wall-mirror.jpg';
import staircase from '../image/staircase.jpg';
import appposter from '../image/appointment-poster.jpg';
import blacksofa from '../image/blacksofa.avif';
import bluesofa from '../image/bluesofa.avif';
import creamsofa from '../image/creamsofa.avif';
import greensofa from '../image/greensofa.webp';
import Tooltip from '@mui/material/Tooltip';
import HomeIcon from '@mui/icons-material/Home';
import PaymentIcon from '@mui/icons-material/Payment';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import disbanner from '../image/banner.webp';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import img1 from '../image/bluecupborad.jpg';
import img2 from '../image/img2.jpg';
import img3 from '../image/mirror.jpg';
import img4 from '../image/ac.jpg';
import img5 from '../image/sofachair.jpg';
import img6 from '../image/worktable.jpg';
import img7 from '../image/bedroomceiling.jpg';
import img8 from '../image/aerobed.jpg';
import img9 from '../image/bathtub.jpg';
import img10 from '../image/frame.jpg';
import img11 from '../image/bookstand.jpg';
import img12 from '../image/balcony.jpg';




const itemData = [
  {
    img: img1,
    title: 'Bed',
    product:'Unique Wooden Bed',
    price:'$ 100',
    button: <Button className='btn'  sx={{fontWeight:"500",textTransform:"capitalize", width:"100%",fontSize: "15px",color:"black",border:"1px solid black", backgroundColor: "white", borderRadius: "0", ":hover": { backgroundColor: "black", color: "white"}}} >Add to Cart</Button>
  },
  {
    img: img2,
    title: 'Books',
    product:'Luxuries Bed',
    price: '$ 200',
    button: <Button className='btn'  sx={{fontWeight:"500",textTransform:"capitalize", width:"100%",fontSize: "15px",color:"black",border:"1px solid black", backgroundColor: "white", borderRadius: "0", padding: "5px 5px", ":hover": { backgroundColor: "black", color: "white" }}} >Add to Cart</Button>
  },
  {
    img: img3,
    title: 'Sink',
    product:'Dressing Table With Round-Mirror',
    price:'$ 85',
    button: <Button className='btn'  sx={{fontWeight:"500",textTransform:"capitalize", width:"100%",fontSize: "15px",color:"black",border:"1px solid black", backgroundColor: "white", borderRadius: "0", padding: "5px 5px", ":hover": { backgroundColor: "black", color: "white" }}} >Add to Cart</Button>
  },
  {
    img: img4,
    title: 'Kitchen',
    product:'Hidden Box For AC',
    price:'$ 50',
    button: <Button className='btn'  sx={{fontWeight:"500",textTransform:"capitalize", width:"100%",fontSize: "15px",color:"black",border:"1px solid black", backgroundColor: "white", borderRadius: "0", padding: "5px 5px", ":hover": { backgroundColor: "black", color: "white" }}} >Add to Cart</Button>
  },
  {
    img: img5,
    title: 'Blinds',
    product:'High Qulity Materail Sofa set',
    price:'$ 100',
    button: <Button className='btn'  sx={{fontWeight:"500",textTransform:"capitalize", width:"100%",fontSize: "15px",color:"black",border:"1px solid black", backgroundColor: "white", borderRadius: "0", padding: "5px 5px", ":hover": { backgroundColor: "black", color: "white" }}} >Add to Cart</Button>
  },
  {
    img: img6,
    title: 'Chairs',
    product:'Office Working Table',
    price:'$ 40',
    button: <Button className='btn'  sx={{fontWeight:"500",textTransform:"capitalize", width:"100%",fontSize: "15px",color:"black",border:"1px solid black", backgroundColor: "white", borderRadius: "0", padding: "5px 5px", ":hover": { backgroundColor: "black", color: "white" }}} >Add to Cart</Button>
  },
  {
    img: img7,
    title: 'Laptop',
    product:'Sky Blue Ceiling',
    price:'$ 150',
    button: <Button className='btn'  sx={{fontWeight:"500",textTransform:"capitalize", width:"100%",fontSize: "15px",color:"black",border:"1px solid black", backgroundColor: "white", borderRadius: "0", padding: "5px 5px", ":hover": { backgroundColor: "black", color: "white" }}} >Add to Cart</Button>
  },
  {
    img: img8,
    title: 'Doors',
    product:'Dream Bed For Children',
    price:'$ 130',
    button: <Button className='btn'  sx={{fontWeight:"500",textTransform:"capitalize", width:"100%",fontSize: "15px",color:"black",border:"1px solid black", backgroundColor: "white", borderRadius: "0", padding: "5px 5px", ":hover": { backgroundColor: "black", color: "white" }}} >Add to Cart</Button>
  },
  {
    img: img9,
    title: 'Coffee',
    product:'Pleasures Bathroom Design',
    price:'$ 180',
    button: <Button className='btn'  sx={{fontWeight:"500",textTransform:"capitalize", width:"100%",fontSize: "15px",color:"black",border:"1px solid black", backgroundColor: "white", borderRadius: "0", padding: "5px 5px", ":hover": { backgroundColor: "black", color: "white" }}} >Add to Cart</Button>
  },
  {
    img: img10,
    title: 'Storage',
    product:'Wall Art',
    price:'$ 30',
    button: <Button className='btn'   sx={{fontWeight:"500",textTransform:"capitalize", width:"100%",fontSize: "15px",color:"black",border:"1px solid black", backgroundColor: "white", borderRadius: "0", padding: "5px 5px", ":hover": { backgroundColor: "black", color: "white" }}} >Add to Cart</Button>
  },
  {
    img: img11,
    title: 'Candle',
    product:'Wooden Book Sheleve',
    price:'$ 55',
    button: <Button className='btn'  sx={{fontWeight:"500",textTransform:"capitalize", width:"100%",fontSize: "15px",color:"black",border:"1px solid black", backgroundColor: "white", borderRadius: "0", padding: "5px 5px", ":hover": { backgroundColor: "black", color: "white" }}} >Add to Cart</Button>
  },
  {
    img: img12,
    title: 'Coffee table',
    product:'Swing For Balcony',
    price:'$ 25',
    button: <Button className='btn'  sx={{fontWeight:"500",textTransform:"capitalize", width:"100%",fontSize: "15px",color:"black",border:"1px solid black", backgroundColor: "white", borderRadius: "0", padding: "5px 5px", ":hover": { backgroundColor: "black", color: "white" }}} >Add to Cart</Button>
  },
];


const Home = () => {

    
  const herosettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
   <>
    {/* main start */}


      {/* hero section start */}

      <Box className='hero-slider' sx={{ width: '100%', position: 'relative' }}>
        <div className="slider-container">
          <Slider {...herosettings}>
            <div>
              <img src={hero1} alt="Hero 1" style={{ width: '100%' }} />
            </div>
            <div>
              <img src={hero2} alt="Hero 2" style={{ width: '100%' }} />
            </div>
            <div>
              <img src={hero3} alt="Hero 3" style={{ width: '100%' }} />

            </div>
            <div>
              <img src={hero4} alt="Hero 4" style={{ width: '100%' }} />

            </div>
          </Slider>
        </div>
      </Box>

      {/* hero section end */}

      <Box sx={{ margin: "50px 0" }}>

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
            Style your space with ease
          </Typography>
        </Box>


        <Box>
          <Container>
            <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ textAlign: 'center' }}>

              <Grid size={{ xs: 3, sm: 3, md: 2 }} sx={{
                textAlign: "center",

                "& img": {
                  transition: "transform 0.4s ease-in-out"
                },
                "&:hover img": {
                  transform: "scale(1.1)"
                }
              }}>
                <a href=""><img src={newarrival} alt="" style={{ width: "100%", borderRadius: '50%', overflow: "hidden", marginBottom: "10px" }} /></a>
                <span style={{ fontWeight: 'bold', fontFamily: "cursive", fontSize: '14px' }}>What's New?</span>
              </Grid>


              <Grid size={{ xs: 3, sm: 3, md: 2 }} sx={{
                textAlign: "center",

                "& img": {
                  transition: "transform 0.4s ease-in-out"
                },
                "&:hover img": {
                  transform: "scale(1.1)"
                }
              }}>
                <a href=""><img src={sofa1} alt="" style={{ width: "100%", borderRadius: '50%', overflow: "hidden", marginBottom: "10px" }} /></a>
                <span style={{ fontWeight: 'bold', fontFamily: "cursive", fontSize: '14px' }}>Sofa</span>
              </Grid>



              <Grid size={{ xs: 3, sm: 3, md: 2 }} sx={{
                textAlign: "center",

                "& img": {
                  transition: "transform 0.4s ease-in-out"
                },
                "&:hover img": {
                  transform: "scale(1.1)"
                }
              }}>
                <a href=""><img src={bed1} alt="" style={{ width: "100%", borderRadius: '50%', overflow: "hidden", marginBottom: "10px" }} /></a>
                <span style={{ fontWeight: 'bold', fontFamily: "cursive", fontSize: '14px' }}>Bed</span>
              </Grid>

              <Grid size={{ xs: 3, sm: 3, md: 2 }} sx={{
                textAlign: "center",

                "& img": {
                  transition: "transform 0.4s ease-in-out"
                },
                "&:hover img": {
                  transform: "scale(1.1)"
                }
              }}>
                <a href=""><img src={dinningtable} alt="" style={{ width: "100%", borderRadius: '50%', overflow: "hidden", marginBottom: "10px" }} /></a>
                <span style={{ fontWeight: 'bold', fontFamily: "cursive", fontSize: '14px' }}>Dining Table</span>
              </Grid>

              <Grid size={{ xs: 3, sm: 3, md: 2 }} sx={{
                textAlign: "center",

                "& img": {
                  transition: "transform 0.4s ease-in-out"
                },
                "&:hover img": {
                  transform: "scale(1.1)"
                }
              }}>
                <a href=""><img src={chair} alt="" style={{ width: "100%", borderRadius: '50%', overflow: "hidden", marginBottom: "10px" }} /></a>
                <span style={{ fontWeight: 'bold', fontFamily: "cursive", fontSize: '14px' }}>Chair</span>
              </Grid>

              <Grid size={{ xs: 3, sm: 3, md: 2 }} sx={{
                textAlign: "center",

                "& img": {
                  transition: "transform 0.4s ease-in-out"
                },
                "&:hover img": {
                  transform: "scale(1.1)"
                }
              }}>
                <a href=""><img src={tvunit} alt="" style={{ width: "100%", borderRadius: '50%', overflow: "hidden", marginBottom: "10px" }} /></a>
                <span style={{ fontWeight: 'bold', fontFamily: "cursive", fontSize: '14px' }}>Tv Unit</span>
              </Grid>

              <Grid size={{ xs: 3, sm: 3, md: 2 }} sx={{
                textAlign: "center",

                "& img": {
                  transition: "transform 0.4s ease-in-out"
                },
                "&:hover img": {
                  transform: "scale(1.1)"
                }
              }}>
                <a href=""><img src={cupboard} alt="" style={{ width: "100%", borderRadius: '50%', overflow: "hidden", marginBottom: "10px" }} /></a>
                <span style={{ fontWeight: 'bold', fontFamily: "cursive", fontSize: '14px' }}>Cupboard</span>
              </Grid>

              <Grid size={{ xs: 3, sm: 3, md: 2 }} sx={{
                textAlign: "center",

                "& img": {
                  transition: "transform 0.4s ease-in-out"
                },
                "&:hover img": {
                  transform: "scale(1.1)"
                }
              }}>
                <a href=""><img src={ceil} alt="" style={{ width: "100%", borderRadius: '50%', overflow: "hidden", marginBottom: "10px" }} /></a>
                <span style={{ fontWeight: 'bold', fontFamily: "cursive", fontSize: '14px' }}>Ceiling</span>
              </Grid>

              <Grid size={{ xs: 3, sm: 3, md: 2 }} sx={{
                textAlign: "center",

                "& img": {
                  transition: "transform 0.4s ease-in-out"
                },
                "&:hover img": {
                  transform: "scale(1.1)"
                }
              }}>
                <a href=""><img src={coffeetable} alt="" style={{ width: "100%", borderRadius: '50%', overflow: "hidden", marginBottom: "10px" }} /></a>
                <span style={{ fontWeight: 'bold', fontFamily: "cursive", fontSize: '14px' }}>Coffee Table</span>
              </Grid>

              <Grid size={{ xs: 3, sm: 3, md: 2 }} sx={{
                textAlign: "center",

                "& img": {
                  transition: "transform 0.4s ease-in-out"
                },
                "&:hover img": {
                  transform: "scale(1.1)"
                }
              }}>
                <a href=""><img src={studytable} alt="" style={{ width: "100%", borderRadius: '50%', overflow: "hidden", marginBottom: "10px" }} /></a>
                <span style={{ fontWeight: 'bold', fontFamily: "cursive", fontSize: '14px' }}>Study Table</span>
              </Grid>

              <Grid size={{ xs: 3, sm: 3, md: 2 }} sx={{
                textAlign: "center",

                "& img": {
                  transition: "transform 0.4s ease-in-out"
                },
                "&:hover img": {
                  transform: "scale(1.1)"
                }
              }}>
                <a href=""><img src={temple} alt="" style={{ width: "100%", borderRadius: '50%', overflow: "hidden", marginBottom: "10px" }} /></a>
                <span style={{ fontWeight: 'bold', fontFamily: "cursive", fontSize: '14px' }}>Temple</span>
              </Grid>

              <Grid size={{ xs: 3, sm: 3, md: 2 }} sx={{
                textAlign: "center",

                "& img": {
                  transition: "transform 0.4s ease-in-out"
                },
                "&:hover img": {
                  transform: "scale(1.1)"
                }
              }}>
                <a href=""><img src={bookshelve} alt="" style={{ width: "100%", borderRadius: '50%', overflow: "hidden", marginBottom: "10px" }} /></a>
                <span style={{ fontWeight: 'bold', fontFamily: "cursive", fontSize: '14px' }}>Book Shelves</span>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>

      {/* best seller section start */}

      <Box sx={{ margin: "50px 0" }}>
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
              Best Sellers
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
              A favorite among fans. Yours next?
            </Typography>
          </Box>

        </Container>
        <Container>
          <Grid container spacing={2} >

            <Grid size={{ lg: 3, xs: 12, md: 6, sm: 6 }}>
              <Box sx={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)" }}>

                <img src={lamphoveredImage} alt="" style={{ width: "100%" }} />


                <Box className="image-detail" sx={{ padding: '10px 15px ' }}>

                  <h2 style={{ paddingBottom: "10px", fontFamily: "sans-serif", fontSize: "20px" }}>Magical Lunar Lamp</h2>

                  <span style={{ display: 'block' }}><p style={{ textDecoration: 'line-through', color: 'grey', fontWeight: "500", fontSize: '16px', display: 'inline-block', paddingRight: "10px" }}>$ 300</p> $250</span>

                  <button className='cart-button' style={{ marginTop: "10px", width: "100%", padding: '10px 15px', backgroundColor: "white", border: "1px solid black", fontFamily: "sans-serif", fontWeight: "bold" }}>Add To Cart</button>

                </Box>
              </Box>
            </Grid>

            <Grid size={{ lg: 3, xs: 12, md: 6, sm: 6 }}>
              <Box sx={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)" }}>

                <img src={cocochair} alt="" style={{ width: "100%" }} />


                <Box className="image-detail" sx={{ padding: '10px 15px ' }}>

                  <h2 style={{ paddingBottom: "10px", fontFamily: "sans-serif", fontSize: "20px" }}>Coconut Shape Chair</h2>

                  <span style={{ display: 'block' }}><p style={{ textDecoration: 'line-through', color: 'grey', fontWeight: "500", fontSize: '16px', display: 'inline-block', paddingRight: "10px" }}>$ 500</p> $450</span>

                  <button className='cart-button' style={{ marginTop: "10px", width: "100%", padding: '10px 15px', backgroundColor: "white", border: "1px solid black", fontFamily: "sans-serif", fontWeight: "bold" }}>Add To Cart</button>

                </Box>
              </Box>
            </Grid>

            <Grid size={{ lg: 3, xs: 12, md: 6, sm: 6 }}>
              <Box sx={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)" }}>

                <img src={wallmirror} alt="" style={{ width: "100%" }} />


                <Box className="image-detail" sx={{ padding: '10px 15px ' }}>

                  <h2 style={{ paddingBottom: "10px", fontFamily: "sans-serif", fontSize: "20px" }}>Cat Wall-Mirror</h2>

                  <span style={{ display: 'block' }}><p style={{ textDecoration: 'line-through', color: 'grey', fontWeight: "500", fontSize: '16px', display: 'inline-block', paddingRight: "10px" }}>$ 200</p> $150</span>

                  <button className='cart-button' style={{ marginTop: "10px", width: "100%", padding: '10px 15px', backgroundColor: "white", border: "1px solid black", fontFamily: "sans-serif", fontWeight: "bold" }}>Add To Cart</button>

                </Box>
              </Box>
            </Grid>

            <Grid size={{ lg: 3, xs: 12, md: 6, sm: 6 }}>
              <Box sx={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)" }}>

                <img src={staircase} alt="" style={{ width: "100%" }} />


                <Box className="image-detail" sx={{ padding: '10px 15px ' }}>

                  <h2 style={{ paddingBottom: "10px", fontFamily: "sans-serif", fontSize: "20px" }}>Ascent Staircase</h2>

                  <span style={{ display: 'block' }}><p style={{ textDecoration: 'line-through', color: 'grey', fontWeight: "500", fontSize: '16px', display: 'inline-block', paddingRight: "10px" }}>$ 1000</p> $850</span>

                  <button className='cart-button' style={{ marginTop: "10px", width: "100%", padding: '10px 15px', backgroundColor: "white", border: "1px solid black", fontFamily: "sans-serif", fontWeight: "bold" }}>Add To Cart</button>

                </Box>
              </Box>
            </Grid>

          </Grid>

        </Container>
      </Box>
      {/* best seller section end */}

      {/* make an appointment section  start*/}
      <Box sx={{ margin: "100px 0" }}>
        <Container>

          <Grid container spacing={2} sx={{ backgroundColor: "GrayText" }}>

            <Grid size={{ lg: 7, xs: 12, md: 7, sm: 12 }}>
              <img src={appposter} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </Grid>

            <Grid size={{ lg: 5, xs: 12, md: 5, sm: 12 }} sx={{ margin: "auto 0", padding: "50px" }}>
              <h3 style={{ padding: "20px 0" }}  >MODERN LIGHTING</h3>
              <h1 style={{ fontSize: "45px" }}>ONLINE DESIGN SERVICES</h1>
              <p style={{ padding: "20px 0", fontSize: "18px", fontWeight: "500" }}>Get free help from our certified lighting design experts with any lighting projects</p>

              <Button variant="contained" sx={{ fontSize: "15px", backgroundColor: "black", borderRadius: "0", padding: "10px 25px", ":hover": { backgroundColor: "white", color: "black" } }}>Make An Appointment</Button>
            </Grid>
          </Grid>

        </Container>
      </Box>
      {/* make an appointment section end */}

      {/* sofa section start */}
      <Box sx={{ margin: "100px 0" }}>
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
              Shop sofas by color
            </Typography>
          </Box>

          <Box>
            <Grid container spacing={2}>

              <Grid size={{ lg: 3, xs: 12, md: 3, sm: 6 }} sx={{
                position: "relative", borderRadius: "0 30px 0 30px", overflow: "hidden", ":hover": {
                  boxShadow: "0 0 8px green", "& .button-hover": {
                    backgroundColor: "seagreen",
                    color: "white",
                    boxShadow: "0 0 8px black"
                  }
                }
              }}>
                <img src={greensofa} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />

                <Button className='button-hover' sx={{
                  position: "absolute",
                  bottom: "10px",
                  left: "90px",
                  fontFamily: "math",
                  textTransform: "math-auto",
                  backgroundColor: "white",
                  border: "1px solid green",
                  padding: "5px 8px",
                  borderRadius: "30px",
                  fontWeight: "600",
                  color: "seagreen",
                  transition: "all 0.3s ease"

                }}>Green Sofa

                </Button>
              </Grid>


              <Grid size={{ lg: 3, xs: 12, md: 3, sm: 6 }} sx={{
                position: "relative", borderRadius: "0 30px 0 30px", overflow: "hidden", ":hover": {
                  boxShadow: "0 0 8px #9c8675", "& .button-hover": {
                    backgroundColor: "#9c8675",
                    color: "white",
                    boxShadow: "0 0 8px black"
                  }
                }
              }}>
                <img src={creamsofa} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />

                <Button className='button-hover' sx={{
                  position: "absolute",
                  bottom: "10px",
                  left: "90px",
                  fontFamily: "math",
                  textTransform: "math-auto",
                  backgroundColor: "white",
                  border: "1px solid #9c8675",
                  padding: "5px 8px",
                  borderRadius: "30px",
                  fontWeight: "600",
                  color: "#9c8675",
                  transition: "all 0.3s ease"

                }}>Cream Sofa

                </Button>
              </Grid>

              <Grid size={{ lg: 3, xs: 12, md: 3, sm: 6 }} sx={{
                position: "relative", borderRadius: "0 30px 0 30px", overflow: "hidden", ":hover": {
                  boxShadow: "0 0 8px #032e3a", "& .button-hover": {
                    backgroundColor: "#032e3a",
                    color: "white",
                    boxShadow: "0 0 8px #032e3a"
                  }
                }
              }}>
                <img src={bluesofa} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />

                <Button className='button-hover' sx={{
                  position: "absolute",
                  bottom: "10px",
                  left: "90px",
                  fontFamily: "math",
                  textTransform: "math-auto",
                  backgroundColor: "white",
                  border: "1px solid #032e3a",
                  padding: "5px 8px",
                  borderRadius: "30px",
                  fontWeight: "600",
                  color: "#032e3a",
                  transition: "all 0.3s ease"

                }}>Blue Sofa

                </Button>
              </Grid>

              <Grid size={{ lg: 3, xs: 12, md: 3, sm: 6 }} sx={{
                position: "relative", borderRadius: "0 30px 0 30px", overflow: "hidden", ":hover": {
                  boxShadow: "0 0 8px black", "& .button-hover": {
                    backgroundColor: "black",
                    color: "white",
                    boxShadow: "0 0 8px black"
                  }
                }
              }}>
                <img src={blacksofa} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />

                <Button className='button-hover' sx={{
                  position: "absolute",
                  bottom: "10px",
                  left: "90px",
                  fontFamily: "math",
                  textTransform: "math-auto",
                  backgroundColor: "white",
                  border: "1px solid black",
                  padding: "5px 8px",
                  borderRadius: "30px",
                  fontWeight: "600",
                  color: "black",
                  transition: "all 0.3s ease"

                }}>Black Sofa

                </Button>
              </Grid>


            </Grid>
          </Box>

        </Container >
      </Box >


      {/* sofa section end */}

      {/* discount banner */}
      <Box>
        <a href=""><img src={disbanner} alt="" style={{ width: "100%" }} /></a>
      </Box>
      {/* discount banner */}

      {/* product section start */}

      <Box>
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
              Bed Room Furniture
            </Typography>
          </Box>

          <Box sx={{ width: "100%" }}>
            <ImageList variant="masonry" cols={3} gap={8}>
              {itemData.map((item) => (
                <ImageListItem key={item.img}  sx={{":hover":{boxShadow:"0 0 8px black"}}}>
                  <a href="">
                    <img
                      srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      src={`${item.img}?w=248&fit=crop&auto=format`}
                      alt={item.title}
                      loading="lazy"
                      style={{ width: "100%" }}
                    /></a>
                    <ImageListItemBar position="below" sx={{fontFamily:"robot", fontWeight:"600"}} title={item.product} />
                    <ImageListItemBar position="below" title={item.price} />
                  <ImageListItemBar position="below" title={item.button} />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </Container>
      </Box>
      {/* product section end */}

      {/* service section start */}

      <Box sx={{ backgroundColor: "#0000001f", margin: "100px 0" }}>
        <Container>
          <Grid container spacing={2}>
            <Grid size={{ lg: 3, xs: 12, md: 3, sm: 6 }} sx={{ textAlign: "center", padding: "40px 8px", ":hover": { backgroundColor: "black", color: "white", "& .icon-hover": { backgroundColor: "white", color: "black" }, transition: "0.3s" } }}>
              <HomeIcon className='icon-hover' sx={{ padding: "5px", fontSize: "50px", borderRadius: "50%", color: "white", backgroundColor: "black" }} />
              <h4 style={{ padding: "15px 0", fontSize: "18px", fontFamily: "cursive" }}>Free Shipping</h4>
              <p style={{ fontWeight: "600" }}>We offer fast, free shipping straight to your doorstep.</p>
            </Grid>

            <Grid size={{ lg: 3, xs: 12, md: 3, sm: 6 }} sx={{ textAlign: "center", padding: "40px 8px", ":hover": { backgroundColor: "black", color: "white", "& .icon-hover": { backgroundColor: "white", color: "black" }, transition: "0.3s" } }}>
              <PaymentIcon className='icon-hover' sx={{ padding: "5px", fontSize: "50px", borderRadius: "50%", color: "white", backgroundColor: "black" }} />
              <h4 style={{ padding: "15px 0", fontSize: "18px", fontFamily: "cursive" }}>Securety Payments</h4>
              <p style={{ fontWeight: "600" }}>Your transactions are protected with advanced security.</p>
            </Grid>

            <Grid size={{ lg: 3, xs: 12, md: 3, sm: 6 }} sx={{ textAlign: "center", padding: "40px 8px", ":hover": { backgroundColor: "black", color: "white", "& .icon-hover": { backgroundColor: "white", color: "black" }, transition: "0.3s" } }}>
              <AllInclusiveIcon className='icon-hover' sx={{ padding: "5px", fontSize: "50px", borderRadius: "50%", color: "white", backgroundColor: "black" }} />
              <h4 style={{ padding: "15px 0", fontSize: "18px", fontFamily: "cursive" }}>14-Day Returns</h4>
              <p style={{ fontWeight: "600" }}>Hassle-free 14-day returns on all orders.</p>
            </Grid>

            <Grid size={{ lg: 3, xs: 12, md: 3, sm: 6 }} sx={{ textAlign: "center", padding: "40px 8px", ":hover": { backgroundColor: "black", color: "white", "& .icon-hover": { backgroundColor: "white", color: "black" }, transition: "0.3s" } }}>
              <SupportAgentIcon className='icon-hover' sx={{ padding: "5px", fontSize: "50px", borderRadius: "50%", color: "white", backgroundColor: "black" }} />
              <h4 style={{ padding: "15px 0", fontSize: "18px", fontFamily: "cursive" }}>24/7 Support</h4>
              <p style={{ fontWeight: "600" }}>Need help? Our support team is available around the clock</p>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* service section end */}
      {/* main end */}
   </>
  )
}

export default Home
