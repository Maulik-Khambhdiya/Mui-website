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
import logo from '../image/logo-1.jpg';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import InfoIcon from '@mui/icons-material/Info';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Tooltip from '@mui/material/Tooltip';
import { Link } from '@mui/material';


const pages = [{ page: 'HOME', path: '/' },
    { page: 'FURNITURE', path: '/furniture' },
    { page: 'LIGHTING', path: '/lighting' },
    { page: 'DECOR', path: '/decor' },
    { page: 'COLLECTION', path: '/collection' },
    { page: 'OUR STORY', path: '/our-story' }];

const Header = () => {

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


  return (
    <>
     {/* header section start */}
      <AppBar position="static" color="white" sx={{
        backgroundColor: 'black', boxShadow: 'none', color: 'white', padding: '5px 0', '@media (max-width:1140px)': {
          display: 'none',
        }
      }}>
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
                    <Typography sx={{ textAlign: 'center' }}>{page.page}</Typography>
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
                <Link href={page.path} sx={{textDecoration:"none"}}> <Button 
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'black', display: 'block', fontWeight: 'bold', borderRadius: '0px', ":hover": { background: 'linear-gradient(to right, black,grey, black)', color: 'white', borderRadius: '0px' }, fontFamily: 'sans-serif', }}

                >
                {page.page}
                </Button></Link>
              ))}
            </Box>

            <Box>
              <ul style={{ display: 'flex', flexWrap: 'flex-wrap' }}>
                <li style={{ margin: '0 10px' }}><a href="">
                  <Tooltip title="My Profile">
                    <AccountCircleIcon sx={{ padding: "5px", fontSize: 35, color: 'black', ":hover": { backgroundColor: "black", color: "white", borderRadius: "50%" } }} />
                  </Tooltip>

                </a></li>

                <li style={{ margin: '0 10px' }}><a href="">
                  <Tooltip title="Cart">
                    <Badge badgeContent={4} color="secondary">
                      <ShoppingCartIcon sx={{ padding: "5px", fontSize: 35, color: 'black', ":hover": { backgroundColor: "black", color: "white", borderRadius: "50%" } }} />
                    </Badge>
                  </Tooltip>
                </a></li>

                <li style={{ margin: '0 10px' }}><a href="">
                  <Tooltip title="Favourite">
                    <Badge badgeContent={2} color="primary">
                      <FavoriteBorderIcon sx={{ padding: "5px", fontSize: 35, color: 'black', ":hover": { backgroundColor: "black", color: "white", borderRadius: "50%" } }} />
                    </Badge>
                  </Tooltip>
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
          <h3 style={{ margin: 0, cursor: 'pointer' }}>
            <Tooltip title="Help">
              <InfoIcon className='header-icon' sx={{ fontSize: '35px', padding: '5px', color: 'white' }} />
            </Tooltip>
          </h3>

          <h3 style={{ margin: 0, cursor: 'pointer' }}>
            <Tooltip title="Track My Order">
              <LocalShippingIcon className='header-icon' sx={{ fontSize: '35px', padding: '5px', color: 'white' }} />
            </Tooltip>
          </h3>
        </Box>
      </AppBar>
      {/* header end */}
    </>
  )
}

export default Header
