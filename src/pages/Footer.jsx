import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import logo from '../image/logo-1.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Grid from '@mui/material/Grid';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import BusinessIcon from '@mui/icons-material/Business';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';

import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";

const branchDetails = {
  Jodhpur: {
    address: "123 Jodhpur St, Rajasthan",
    phone: "+91 12345 67890",
    email: "jodhpur@store.com",
  },
  Hyderabad: {
    address: "456 Hyderabad Rd, Telangana",
    phone: "+91 98765 43210",
    email: "hyderabad@store.com",
  },
  Bengaluru: {
    address: "789 Bengaluru Ave, Karnataka",
    phone: "+91 54321 98765",
    email: "bangalore@store.com",
  },
  Ahmedabad: {
    address: "321 Ahmedabad Blvd, Gujarat",
    phone: "+91 11223 33445",
    email: "ahmedabad@store.com",
  },
  Nagpur: {
    address: "654 Nagpur Lane, Maharashtra",
    phone: "+91 99887 77665",
    email: "nagpur@store.com",
  },
};


const Footer = () => {

  //----------------Branch Detail DailogBox start----------------
  const [open, setOpen] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState(null);

  const handleClick = (branch, e) => {
    e.preventDefault(); // prevent default anchor navigation
    setSelectedBranch(branch);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedBranch(null);
  };
  //----------------Branch Detail DailogBox start----------------
  return (
    <>
      {/* footer start */}

      <Box sx={{ backgroundColor: "black", padding: "80px 0" }}>
        <Container>
          <Box className="footer-detail">


            <Grid container spacing={2}>

              <Grid size={{ lg: 3, md: 3, sm: 12 }} sx={{ borderRight: { xs: "none", sm: "none", md: "1px solid white" } }}>
                <Box>
                  <img className='footer-img' src={logo} alt="" style={{ width: "50%" }} />
                </Box>
                <Box className="Contact-detail">
                  <h1 style={{ color: "white", fontSize: "28px", padding: "25px 0 10px 0", display: "inline-block", borderBottom: "1px solid white" }}>Contact Us :</h1>

                  <span style={{ display: "flex", color: "white", alignItems: "center", paddingTop: "5px" }}> <CallIcon sx={{ padding: "5px", fontSize: "30px", marginRight: "5px", color: "black", backgroundColor: "white", borderRadius: "50%" }} /> +91 9796586501</span>

                  <span style={{ display: "flex", color: "white", alignItems: "center", paddingTop: "5px" }}> <EmailIcon sx={{ padding: "5px", fontSize: "30px", marginRight: "5px", color: "black", backgroundColor: "white", borderRadius: "50%" }} /> luxiloom@gmail.com</span>

                  <h2 style={{ color: "white", fontSize: "28px", padding: "10px 0 10px 0", display: "inline-block", borderBottom: "1px solid white" }}>Address :</h2>
                  <span style={{ display: "flex", color: "white", alignItems: "center", paddingTop: "5px" }}> <BusinessIcon sx={{ padding: "5px", fontSize: "30px", marginRight: "5px", color: "black", backgroundColor: "white", borderRadius: "50%" }} /> B-45,Central Park,Surat</span>
                </Box>

              </Grid>


              <Grid size={{ lg: 9, md: 9, sm: 12 }}>
                <Grid container spacing={2}>

                  <Grid size={{ lg: 4, md: 4, sm: 12 }}>
                    <h3 style={{ padding: "0px 5px", display: "inline-block", color: "black", fontSize: "28px", marginBottom: "30px", backgroundColor: "white" }}>Information</h3>
                    <ul>
                      <li style={{ padding: "8px 0" }}><a href="/customerStory" style={{ color: "white", fontFamily: "system-ui", fontSize: "16px", fontWeight: "500" }}>Customer Stories</a></li>

                      <li style={{ padding: "8px 0" }}><a href="/event" style={{ color: "white", fontFamily: "system-ui", fontSize: "16px", fontWeight: "500" }}>Events</a></li>
                      <li style={{ padding: "8px 0" }}><a href="/featuredProject" style={{ color: "white", fontFamily: "system-ui", fontSize: "16px", fontWeight: "500" }}>Featured Projects</a></li>
                      <li style={{ padding: "8px 0" }}><a href="/our-story" style={{ color: "white", fontFamily: "system-ui", fontSize: "16px", fontWeight: "500" }}>About Us</a></li>
                      <li style={{ padding: "8px 0" }}><a href="/helppage" style={{ color: "white", fontFamily: "system-ui", fontSize: "16px", fontWeight: "500" }}>FAQs</a></li>
                      {/* <li style={{ padding: "8px 0" }}><a href="" style={{ color: "white", fontFamily: "system-ui", fontSize: "16px", fontWeight: "500" }}>Gifting</a></li> */}
                    </ul>
                  </Grid>

                  <Grid size={{ lg: 4, md: 4, sm: 12 }}>
                    <h3 style={{ padding: "0px 5px", display: "inline-block", color: "black", fontSize: "28px", marginBottom: "30px", backgroundColor: "white" }}>Category</h3>
                    <ul>
                      <li style={{ padding: "8px 0" }}><a href="/furniture" style={{ color: "white", fontFamily: "system-ui", fontSize: "16px", fontWeight: "500" }}>Furniture</a></li>
                      <li style={{ padding: "8px 0" }}><a href="/lighting" style={{ color: "white", fontFamily: "system-ui", fontSize: "16px", fontWeight: "500" }}>Lighting</a></li>
                      <li style={{ padding: "8px 0" }}><a href="/decor" style={{ color: "white", fontFamily: "system-ui", fontSize: "16px", fontWeight: "500" }}>Decor</a></li>

                    </ul>
                  </Grid>
                  <Grid container spacing={2} >
                    <Grid item lg={4} md={4} sm={12}>
                      <h3 style={{ color: "black", fontSize: 28, marginBottom: 30, backgroundColor: "white", padding: "0 5px" }}>
                        Our Stores
                      </h3>

                      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                        {Object.keys(branchDetails).map((branch) => (
                          <li key={branch} style={{ padding: "8px 0" }}>
                            <a
                              href="#"
                              onClick={(e) => handleClick(branch, e)}
                              style={{ color: "white", fontFamily: "system-ui", fontSize: 16, fontWeight: 500, cursor: "pointer" }}
                            >
                              {branch}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </Grid>

                    {/* Dialog showing branch details */}
                    <Dialog open={open} onClose={handleClose} >

                      <DialogTitle>{selectedBranch} Branch Details</DialogTitle>
                      <DialogContent dividers>
                        {selectedBranch && (
                          <div style={{ minWidth: 300 }}>
                            <p><strong>Address:</strong> {branchDetails[selectedBranch].address}</p>
                            <p><strong>Phone:</strong> {branchDetails[selectedBranch].phone}</p>
                            <p><strong>Email:</strong> {branchDetails[selectedBranch].email}</p>
                          </div>
                        )}
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleClose} variant="contained" color="primary">
                          Close
                        </Button>
                      </DialogActions>
                    </Dialog>

                  </Grid>


                </Grid>
              </Grid>

            </Grid>


          </Box>
          <hr style={{ color: "white", margin: "15px 0" }} />


          <Box>
            <Box className="social-app" sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>

              <a href="" style={{ padding: "0 15px" }}><InstagramIcon sx={{
                color: "white", fontSize: "35px", ":hover": { color: "blueviolet" }
              }} /></a>
              <a href="" style={{ padding: "0 15px" }}><WhatsAppIcon sx={{ color: "white", fontSize: "35px", ":hover": { color: "blueviolet" } }} /></a>
              <a href="" style={{ padding: "0 15px" }}><LinkedInIcon sx={{ color: "white", fontSize: "35px", ":hover": { color: "blueviolet" } }} /></a>
              <a href="" style={{ padding: "0 15px" }}> <PinterestIcon sx={{ color: "white", fontSize: "35px", ":hover": { color: "blueviolet" } }} /></a>
              <a href="" style={{ padding: "0 15px" }}><TelegramIcon sx={{ color: "white", fontSize: "35px", ":hover": { color: "blueviolet" } }} /></a>
              <a href="" style={{ padding: "0 15px" }}><YouTubeIcon sx={{ color: "white", fontSize: "35px", ":hover": { color: "blueviolet" } }} /></a>

            </Box>
            <Box className="last-detail" sx={{ textAlign: "center", paddingTop: "10px" }}>
              <p style={{ color: "white" }}>Copyright 2025 <span style={{ fontFamily: "cursive", fontWeight: "600", padding: "0 8px" }}>Luxi-Loom</span> PVT. LTD. | <a href="/termsandcondition" style={{ color: "white" }}>Terms & Conditions</a> | <a href="/shippingandreturn" style={{ color: "white" }}>Shipping & Return</a> | <a href="/sitemap" style={{ color: "white" }}>Sitemap</a></p>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* footer end */}


    </>
  )
}

export default Footer
