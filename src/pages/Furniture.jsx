import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import modern from '../image/modern.jpg'
import classic from '../image/classic.jpg'
import rustic from '../image/rustic.jpg'

const Furniture = () => {
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
            Explore Our Category
          </Typography>
        </Box>

        <Box>
          <Typography sx={{
            fontFamily: 'math',
            fontSize: {
              xs: '14px',
              sm: '18px',
              md: '20px',
            },
            padding: "20px 30px"
          }}>
            "Explore our wide range of high-quality furniture for every room in your home. Whether you're looking for modern, rustic, or classic styles, we've got something to suit every taste and budget."
          </Typography>
        </Box>

        <Box sx={{ padding: {lg:'50px 0 60px 0',md:'40px 0 30px 0'} }}>
          <Grid container spacing={2}>
            <Grid size={{lg:4,md:6,xs:12}}>
              <Box
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  "&:hover .image": {
                    filter: "blur(5px)",
                  },
                  "&:hover .hover-text": {
                    opacity: 1,
                    visibility: "visible",
                  },
                }}
              >
                <img
                  src={modern}
                  alt="Modern Furniture"
                  className="image"
                  style={{
                    width: "100%",
                 
                    transition: "filter 0.3s ease",
                  }}
                />

                <Box
                  className="hover-text"
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: "white",
                    backgroundColor: "#8b4513",
                    padding: "10px 20px",
                    borderRadius: "8px",
                    opacity: 0,
                    visibility: "hidden",
                    transition: "opacity 0.3s ease, visibility 0.3s ease",
                    textAlign: "center",
                  }}
                >
                  <h1 style={{ margin: 0 }}>Modern Furniture</h1>
                </Box>
              </Box>
            </Grid>


            <Grid size={{lg:4,md:6,xs:12}}>
              <Box
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  "&:hover .image": {
                    filter: "blur(5px)",
                  },
                  "&:hover .hover-text": {
                    opacity: 1,
                    visibility: "visible",
                  },
                }}
              >
                <img
                  src={classic}
                  alt="Modern Furniture"
                  className="image"
                  style={{
                    width: "100%",
                    
                    transition: "filter 0.3s ease",
                  }}
                />

                <Box
                  className="hover-text"
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: "white",
                    backgroundColor: "#708090",
                    padding: "10px 20px",
                    borderRadius: "8px",
                    opacity: 0,
                    visibility: "hidden",
                    transition: "opacity 0.3s ease, visibility 0.3s ease",
                    textAlign: "center",
                  }}
                >
                  <h1 style={{ margin: 0 }}>Classic Furniture</h1>
                </Box>
              </Box>
            </Grid>



            <Grid size={{lg:4,md:6,xs:12}}>
              <Box
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  "&:hover .image": {
                    filter: "blur(5px)",
                  },
                  "&:hover .hover-text": {
                    opacity: 1,
                    visibility: "visible",
                  },
                }}
              >
                <img
                  src={rustic}
                  alt="Modern Furniture"
                  className="image"
                  style={{
                    width: "100%",
                    // filter: "blur(0px)",
                    transition: "filter 0.3s ease",
                  }}
                />

                <Box
                  className="hover-text"
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: "white",
                    backgroundColor: "#8b4513",
                    padding: "10px 20px",
                    borderRadius: "8px",
                    opacity: 0,
                    visibility: "hidden",
                    transition: "opacity 0.3s ease, visibility 0.3s ease",
                    textAlign: "center",
                  }}
                >
                  <h1 style={{ margin: 0 }}>Rustic Furniture</h1>
                </Box>
              </Box>
            </Grid>


          </Grid>
        </Box>
      </Container>
    </>
  )
}

export default Furniture
