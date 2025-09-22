import React, { useState } from 'react'
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
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Field, Form, Formik } from 'formik';
import CloseIcon from '@mui/icons-material/Close';
import { color } from 'framer-motion';




const pages = [{ page: 'HOME', path: '/' },
{ page: 'FURNITURE', path: '/furniture' },
{ page: 'LIGHTING', path: '/lighting' },
{ page: 'DECOR', path: '/decor' },
{ page: 'Rugs And Mats', path: '/rugsandmats' },
{ page: 'OUR STORY', path: '/our-story' },
]




const Header = () => {

  const [ini, setIni] = useState({
    email: "",
    password: ""
  })


  //-----------------------------add to cart drawer start----------------//
  const [cartDrawerOpen, setCartDrawerOpen] = React.useState(false);
  const toggleCartDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setCartDrawerOpen(open);
  };

  //-----------------------------add to cart drawer end----------------//




  //-----------------------------silder code start----------------//

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
  //-----------------------------silder code end----------------//

  //-----------------------------sigup form menu start----------------//

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //-----------------------------sigup form menu start----------------//


  //------------------------help amd track section start--------------//

  const [openDialog, setOpenDialog] = useState(null); // 'help' or 'track'

  const handleOpen = (type) => () => setOpenDialog(type);
  const handleClose1 = () => setOpenDialog(null);
  //------------------------help amd track section start--------------//


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
                <Link href={page.path} sx={{ textDecoration: "none" }}> <Button
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
                <li style={{ margin: '0 10px' }}>
                  <Tooltip title="My Profile">
                    <React.Fragment>
                      <Button onClick={handleClickOpen} sx={{ backgroundColor: "transparent", border: "none" }}>
                        <AccountCircleIcon sx={{ padding: "5px", fontSize: 35, color: 'black', ":hover": { backgroundColor: "black", color: "white", borderRadius: "50%" } }} />

                      </Button>

                      <Dialog
                        open={open}
                        onClose={handleClose}
                        maxWidth="sm"
                        fullWidth
                        
                        PaperProps={{
                          sx: {
                            backgroundColor: '#ffffffff',
                            borderRadius: 3,
                            padding: 3,
                            boxShadow: '0 8px 24px rgba(255, 255, 255, 0.1)',
                            color: 'white',
                          },
                        }}
                      >
                        <DialogTitle
                          sx={{
                            textAlign: "center",
                            fontWeight: 'bold',
                            color: 'black',
                            fontSize: '2.2rem',
                            position: 'relative',
                          }}
                          id="alert-dialog-title"
                        >
                          {"Sign In"}
                          <IconButton
                            aria-label="close"
                            onClick={handleClose}
                            sx={{

                              position: 'absolute',
                              right: 8,
                              top: 8,
                              color: 'black',
                            }}
                          >
                            <CloseIcon />
                          </IconButton>
                        </DialogTitle>

                        <DialogContent>
                          <DialogContentText id="alert-dialog-description" sx={{ textAlign: "center", mb: 2, color: 'white' }}>
                            <Formik initialValues={ini}>
                              <Form style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                <Field
                                  name='email'
                                  placeholder="Email"
                                  style={{
                                    background: "#000000ea",
                                    color: "white",
                                    width: '100%',
                                    padding: '10px',
                                    fontSize: '16px',
                                    marginBottom: '16px',
                                    borderRadius: '6px',
                                    border: '1px solid #ccc',
                                  }}
                                />
                                <Field
                                  name='password'
                                  placeholder="Password"
                                  type="password"
                                  style={{
                                    background: "#000000ea",
                                    color: "white",
                                    width: '100%',
                                    padding: '10px',
                                    fontSize: '16px',
                                    marginBottom: '24px',
                                    borderRadius: '6px',
                                    border: '1px solid #ccc',
                                  }}
                                />


                                <input style={{ color: "black" }} type="file" name="" id="" />
                                <br />

                                <button
                                  type="submit"
                                  className="submit-btn"
                                >
                                  Submit
                                </button>
                              </Form>
                            </Formik>
                            <Typography sx={{ marginTop: "25px", fontSize: "14px", color: "black" }}>Not a memeber? <Link sx={{
                              fontWeight: "500", padding: "5px", borderRadius: "5px", ":hover": {
                                cursor: "pointer",
                                backgroundColor: "black",
                                color: "white"
                              }
                            }}>Signup Now</Link></Typography>
                          </DialogContentText>


                        </DialogContent>
                      </Dialog>

                    </React.Fragment>
                  </Tooltip>

                </li>

                <li style={{ margin: '0 10px' }}>
                  <Button onClick={() => setCartDrawerOpen(true)} sx={{ backgroundColor: "transparent", border: "none", minWidth: 0 }}>
                    <Tooltip title="Cart">
                      <Badge badgeContent={4} color="secondary">
                        <ShoppingCartIcon
                          sx={{
                            padding: "5px",
                            fontSize: 35,
                            color: 'black',
                            ":hover": { backgroundColor: "black", color: "white", borderRadius: "50%" }
                          }}
                        />
                      </Badge>
                    </Tooltip>
                  </Button>
                </li>

                <SwipeableDrawer
                  anchor="right"
                  open={cartDrawerOpen}
                  onClose={toggleCartDrawer(false)}
                  onOpen={toggleCartDrawer(true)}
                >
                  <Box
                    sx={{
                      width: 300,
                      padding: 2,
                      backgroundColor: 'black', // background
                      height: '100%',
                      color: 'white',           // text color
                    }}
                    role="presentation"
                    onClick={toggleCartDrawer(false)}
                    onKeyDown={toggleCartDrawer(false)}
                  >
                    <Typography variant="h6" gutterBottom sx={{ color: 'white' }}>
                      Your Cart
                    </Typography>
                    <List>
                      <ListItem>
                        <ListItemText primary="Item 1" secondary="Quantity: 1" sx={{ color: 'white' }} />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Item 2" secondary="Quantity: 2" sx={{ color: 'white' }} />
                      </ListItem>
                    </List>
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{
                        backgroundColor: 'white',
                        color: 'black',
                        fontWeight: 'bold',
                        '&:hover': {
                          backgroundColor: '#f5f5f5',
                        },
                      }}
                    >
                      Checkout
                    </Button>
                  </Box>

                </SwipeableDrawer>


                <li style={{ margin: '0 10px' }}><a href="">
                  <Button sx={{ backgroundColor: "transparent", border: "none", minWidth: 0 }}>
                    <Tooltip title="Favourite">
                      <Badge badgeContent={2} color="primary">
                        <FavoriteBorderIcon
                          sx={{
                            padding: "5px",
                            fontSize: 35,
                            color: 'black',
                            ":hover": { backgroundColor: "black", color: "white", borderRadius: "50%" }
                          }}
                        />
                      </Badge>
                    </Tooltip>
                  </Button>
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
          {/* Help Button */}
          <Tooltip title="Help">
            <h3 style={{ margin: 0, cursor: 'pointer' }} onClick={handleOpen('help')}>
              <InfoIcon className='header-icon' sx={{ fontSize: '35px', padding: '5px', color: 'white' }} />
            </h3>
          </Tooltip>

          {/* Track My Order Button */}
          <Tooltip title="Track My Order">
            <h3 style={{ margin: 0, cursor: 'pointer' }} onClick={handleOpen('track')}>
              <LocalShippingIcon className='header-icon' sx={{ fontSize: '35px', padding: '5px', color: 'white' }} />
            </h3>
          </Tooltip>

          {/* Help Dialog */}
          <Dialog open={openDialog === 'help'} onClose={handleClose1}>
            <DialogTitle>
              Help
              <IconButton
                aria-label="close"
                onClick={handleClose1}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent dividers>
              <Typography>
                <Link href='/helppage'>Click here to get Help....</Link>
              </Typography>
            </DialogContent>
          </Dialog>

          {/* Track My Order Dialog */}
          <Dialog open={openDialog === 'track'} onClose={handleClose1}>
            <DialogTitle>
              Track My Order
              <IconButton
                aria-label="close"
                onClick={handleClose1}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
                }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent dividers>
              <Typography>
                This is the Track My Order dialog. You can put order tracking UI or input here.
              </Typography>
            </DialogContent>
          </Dialog>
        </Box>
      </AppBar>


      {/* header end */}
    </>
  )
}

export default Header
