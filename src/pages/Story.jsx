import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const Story = () => {
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
                    Our Story – The Essence of Luxiloom
                    </Typography>

                </Box>
                </Container> 
   </>
  )
}

export default Story
