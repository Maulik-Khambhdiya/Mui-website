import './App.css';
import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MenuItem from '@mui/material/MenuItem';
import logo from './image/logo-1.jpg';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import InfoIcon from '@mui/icons-material/Info';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import hero1 from './image/hero-1.png';
import hero2 from './image/hero-2.jpg';
import hero3 from './image/hero-3.jpg';
import hero4 from './image/hero-4.jpg';
import bed1 from './image/bed-1.jpg';
import sofa1 from './image/sofa-1.jpg';
import dinningtable from './image/dinningtable.jpg';
import chair from './image/chair.jpg';
import tvunit from './image/tv-unit.jpg';
import cupboard from './image/cupboard.jpg';
import ceil from './image/ceil.jpg';
import coffeetable from './image/coffee-table.jpg';
import studytable from './image/study-table.jpg'
import temple from './image/temple.jpg'
import newarrival from './image/new-arrival.jpg'
import bookshelve from './image/bookshelve.jpg'
import Grid from '@mui/material/Grid';
import cocochair from './image/coco-chair.jpg';
import lamphoveredImage from './image/lamp hover.jpg';
import wallmirror from './image/wall-mirror.jpg';
import staircase from './image/staircase.jpg';
import appposter from './image/appointment-poster.jpg';
import blacksofa from './image/blacksofa.avif';
import bluesofa from './image/bluesofa.avif';
import redksofa from './image/redsofa.avif';
import creamsofa from './image/greensofa.webp';
import greensofa from './image/greensofa.webp';



const pages = ['NEW', 'FURNITURE', 'LIGHTING', 'DECOR', 'COLLECTION', 'OUR STORY'];



const App = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  const herosettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };


  return (
    <>
      {/* header section start */}
      <AppBar position="static" color="white" sx={{ backgroundColor: 'black', boxShadow: 'none', color: 'white', padding: '5px 0' }}>
        <Container maxWidth="xl">
          <div className="slider-container">
            <Slider {...settings}>
              <div>
                <h3 style={{ fontFamily: 'sans-serif', fontSize: '12px' }}>Don't Miss Out! 40% OFF All Furniture + Free Delivery</h3>
              </div>
              <div>
                <h3 style={{ fontFamily: 'sans-serif', fontSize: '12px' }}>Shop Now and Save Big! Up to 60% OFF on All Furniture!</h3>
              </div>
              <div>
                <h3 style={{ fontFamily: 'sans-serif', fontSize: '12px' }}>Furniture on Sale – Get Up to 50% OFF Your Favorite Pieces!</h3>
              </div>
              <div>
                <h3 style={{ fontFamily: 'sans-serif', fontSize: '12px' }}>Furnish Your Home and Save! 20% OFF Everything + Bonus Deals!</h3>
              </div>
              <div>
                <h3 style={{ fontFamily: 'sans-serif', fontSize: '12px' }}>Massive Clearance Sale – Up to 70% OFF on Select Furniture!</h3>
              </div>
            </Slider>
          </div>
        </Container>
      </AppBar>


      <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 'none', margin: '5px 0' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <img src={logo} alt="" style={{ width: '12%' }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >

            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon sx={{ color: "black" }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu} >
                    <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,

                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >

            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'space-around' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'black', display: 'block', fontWeight: 'bold', borderRadius: '30px', border: "1px solid black", ":hover": { background: 'linear-gradient(to right, white, black)', color: 'white', borderRadius: '30px' }, fontFamily: 'sans-serif' }}

                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box>
              <ul style={{ display: 'flex', flexWrap: 'flex-wrap' }}>
                <li style={{ margin: '0 10px' }}><a href="">

                  <AccountCircleIcon sx={{ padding: "5px", fontSize: 35, color: 'black', ":hover": { backgroundColor: "black", color: "white", borderRadius: "50%" } }} />

                </a></li>

                <li style={{ margin: '0 10px' }}><a href="">
                  <Badge badgeContent={4} color="secondary">
                    <ShoppingCartIcon sx={{ padding: "5px", fontSize: 35, color: 'black', ":hover": { backgroundColor: "black", color: "white", borderRadius: "50%" } }} />
                  </Badge>
                </a></li>

                <li style={{ margin: '0 10px' }}><a href="">
                  <Badge badgeContent={2} color="primary">
                    <FavoriteBorderIcon sx={{ padding: "5px", fontSize: 35, color: 'black', ":hover": { backgroundColor: "black", color: "white", borderRadius: "50%" } }} />
                  </Badge>
                </a></li>
              </ul>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <AppBar
        position="static"
        color="white"
        sx={{
          boxShadow: 'none',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          px: 4,
          py: 1,
          backgroundColor: 'black',
        }}
      >

        <Box
          className="searchBox"
          sx={{
            width: '50%',
            position: 'relative',
          }}
        >
          <input
            type="text"
            placeholder="What are you looking for?"
            style={{
              width: '100%',
              padding: '10px 16px',
              fontSize: '15px',
              borderRadius: '30px',
              border: '1px solid #ccc',
              outline: 'none',
            }}
          />
          <SearchIcon
            sx={{
              position: 'absolute',
              top: '50%',
              right: '10px',
              transform: 'translateY(-50%)',
              fontSize: '28px',
              backgroundColor: 'black',
              color: 'white',
              borderRadius: '50%',
              padding: '6px',
              cursor: 'pointer',
              ':hover': {
                backgroundColor: 'white',
                color: 'black',
                border: '1px solid black',
              },
            }}
          />
        </Box>

        <Box
          className="utilityLinks"
          sx={{
            display: 'flex',
            gap: 3,
            alignItems: 'center',


          }}
        >
          <h3 style={{ margin: 0, cursor: 'pointer' }}><InfoIcon className='header-icon' sx={{ fontSize: '35px', padding: '5px', color: 'white' }} /></h3>
          <h3 style={{ margin: 0, cursor: 'pointer' }}><LocalShippingIcon className='header-icon' sx={{ fontSize: '35px', padding: '5px', color: 'white' }} /></h3>
        </Box>
      </AppBar>
      {/* header end */}

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
          <h1 className='topic-title' style={{ fontFamily: 'math', borderBottom: '2px solid black', display: "inline-block" }}>
            Style your space with ease
          </h1>
        </Box>

        <Box>
          <Container>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ textAlign: 'center' }}>
              <Grid size={{ xs: 3, sm: 3, md: 2 }}>
                <a href=""><img src={newarrival} alt="" style={{ width: "100%", borderRadius: '50%' }} /></a>
                <span style={{ fontWeight: 'bold', fontFamily: "cursive", fontSize: '14px' }}>What's New?</span>
              </Grid>

              <Grid size={{ xs: 3, sm: 3, md: 2 }}>
                <a href=""><img src={sofa1} alt="" style={{ width: "100%", borderRadius: '50%' }} /></a>
                <span style={{ fontWeight: 'bold', fontFamily: "cursive", fontSize: '14px' }}>Sofa</span>
              </Grid>

              <Grid size={{ xs: 3, sm: 3, md: 2 }}>
                <a href=""><img src={bed1} alt="" style={{ width: "100%", borderRadius: '50%' }} /></a>
                <span style={{ fontWeight: 'bold', fontFamily: "cursive", fontSize: '14px' }}>Bed</span>
              </Grid>

              <Grid size={{ xs: 3, sm: 3, md: 2 }}>
                <a href=""><img src={dinningtable} alt="" style={{ width: "100%", borderRadius: '50%' }} /></a>
                <span style={{ fontWeight: 'bold', fontFamily: "cursive", fontSize: '14px' }}>Dining Table</span>
              </Grid>

              <Grid size={{ xs: 3, sm: 3, md: 2 }}>
                <a href=""><img src={chair} alt="" style={{ width: "100%", borderRadius: '50%' }} /></a>
                <span style={{ fontWeight: 'bold', fontFamily: "cursive", fontSize: '14px' }}>Chair</span>
              </Grid>

              <Grid size={{ xs: 3, sm: 3, md: 2 }}>
                <a href=""><img src={tvunit} alt="" style={{ width: "100%", borderRadius: '50%' }} /></a>
                <span style={{ fontWeight: 'bold', fontFamily: "cursive", fontSize: '14px' }}>Tv Unit</span>
              </Grid>

              <Grid size={{ xs: 3, sm: 3, md: 2 }}>
                <a href=""><img src={cupboard} alt="" style={{ width: "100%", borderRadius: '50%' }} /></a>
                <span style={{ fontWeight: 'bold', fontFamily: "cursive", fontSize: '14px' }}>Cupboard</span>
              </Grid>

              <Grid size={{ xs: 3, sm: 3, md: 2 }}>
                <a href=""><img src={ceil} alt="" style={{ width: "100%", borderRadius: '50%' }} /></a>
                <span style={{ fontWeight: 'bold', fontFamily: "cursive", fontSize: '14px' }}>Ceiling</span>
              </Grid>

              <Grid size={{ xs: 3, sm: 3, md: 2 }}>
                <a href=""><img src={coffeetable} alt="" style={{ width: "100%", borderRadius: '50%' }} /></a>
                <span style={{ fontWeight: 'bold', fontFamily: "cursive", fontSize: '14px' }}>Coffee Table</span>
              </Grid>

              <Grid size={{ xs: 3, sm: 3, md: 2 }}>
                <a href=""><img src={studytable} alt="" style={{ width: "100%", borderRadius: '50%' }} /></a>
                <span style={{ fontWeight: 'bold', fontFamily: "cursive", fontSize: '14px' }}>Study Table</span>
              </Grid>

              <Grid size={{ xs: 3, sm: 3, md: 2 }}>
                <a href=""><img src={temple} alt="" style={{ width: "100%", borderRadius: '50%' }} /></a>
                <span style={{ fontWeight: 'bold', fontFamily: "cursive", fontSize: '14px' }}>Temple</span>
              </Grid>

              <Grid size={{ xs: 3, sm: 3, md: 2 }}>
                <a href=""><img src={bookshelve} alt="" style={{ width: "100%", borderRadius: '50%' }} /></a>
                <span style={{ fontWeight: 'bold', fontFamily: "cursive", fontSize: '14px' }}>Book Shelves</span>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>

      {/* best seller section start */}

      <Box sx={{ margin: "50px 0" }}>
        <Box sx={{ textAlign: 'center', padding: '50px 0' }}>
          <h1 className='topic-title' style={{ fontFamily: 'math', borderBottom: '2px solid black', display: "inline-block" }}>
            Best Sellers
          </h1>

          <p style={{ fontSize: '18px', padding: '10px 0', fontWeight: '500' }}>A favorite among fans. Yours next?</p>

        </Box>

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
      <Box sx={{ margin: "100px 0" }}></Box>
      <Container>

        <Grid container spacing={2} sx={{ backgroundColor: "GrayText" }}>

          <Grid size={7}>
            <img src={appposter} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </Grid>

          <Grid size={5} sx={{ margin: "auto 0", padding: "50px" }}>
            <h3 style={{ padding: "20px 0" }}>MODERN LIGHTING</h3>
            <h1 style={{ fontSize: "45px" }}>ONLINE DESIGN SERVICES</h1>
            <p style={{ padding: "20px 0", fontSize: "18px", fontWeight: "500" }}>Get free help from our certified lighting design experts with any lighting projects</p>

            <Button variant="contained" sx={{ fontSize: "15px", backgroundColor: "black", borderRadius: "0", padding: "10px 25px", ":hover": { backgroundColor: "white", color: "black" } }}>Make An Appointment</Button>
          </Grid>
        </Grid>

      </Container>

      {/* make an appointment section end */}

      {/* sofa section start */}
      <Box>
        <Container>
          <Box sx={{ textAlign: 'center', padding: '50px 0' }}>
            <h1 className='topic-title' style={{ fontFamily: 'math', borderBottom: '2px solid black', display: "inline-block" }}>
              Shop sofas by color
            </h1>

          </Box>

          <Box>
          <Grid container spacing={2}>

          <Grid size={2} sx={{position:"relative"}}>
            <img src={greensofa} alt="" style={{width:"100%"}} />
            <button style={{position:"absolute"}}>Green Sofa</button>
          </Grid>

            </Grid>
          </Box>
        </Container>
      </Box>


      {/* sofa section end */}

      {/* main end */}

    </>
  )
}


export default App

