import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import PublicLayout from './PublicLayout';


function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}




const Story = () => {
    return (
        <>
<PublicLayout>
            <Container>
                <Box>
                    <div role="presentation" onClick={handleClick}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link sx={{ fontSize: "18px" }} component={RouterLink} to="/" underline="hover" color="black" >
                                Home
                            </Link>
                            <Link
                                underline="hover"
                                color="black"
                                href="/our-story"
                            >
                                About Us
                            </Link>

                        </Breadcrumbs>
                    </div>
                </Box>

                <Box sx={{ textAlign: 'center', padding: '60px 0 50px 0' }}>
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
                                md: '40px',
                            },
                        }}
                    >

                        Our Story – The Essence of Luxi Loom
                    </Typography>

                </Box>


                <Box sx={{ padding: "30px 30px 60px 30px" }}>
                    <Typography sx={{
                        fontFamily: 'math',
                        fontSize: {
                            xs: '14px',
                            sm: '18px',
                            md: '20px',
                        },
                    }}>
                        Welcome to <b>Luxiloom</b>, where craftsmanship meets elegance, and furniture becomes a statement of refined living.
                    </Typography>

                    <br />
                    <Typography sx={{
                        fontFamily: 'math',
                        fontSize: {
                            xs: '14px',
                            sm: '18px',
                            md: '20px',
                        },
                    }}>
                        At Luxiloom, we understand that a home is more than just a place—it’s an experience. Every room tells a story, and every piece of furniture should enhance that story with beauty, comfort, and character. Founded with a deep appreciation for timeless design and quality materials,<b>Luxiloom</b> was created to redefine how people experience luxury in their everyday spaces.
                    </Typography>

                    <h4 style={{ padding: "30px 0 10px 0", fontSize: "18px" }}>Where Style Meets Soul</h4>

                    <Typography sx={{
                        fontFamily: 'math',
                        fontSize: {
                            xs: '14px',
                            sm: '18px',
                            md: '20px',
                        },
                    }}>
                        Our name, Luxiloom, reflects our philosophy: weaving luxury (“luxi”) into the very fabric of your home (“loom”). We draw inspiration from global design trends, classic silhouettes, and the serenity of minimalism to create furniture that feels both modern and enduring. Whether it’s the soft curve of a velvet armchair or the bold lines of a contemporary coffee table, our designs are made to leave an impression.
                    </Typography>

                    <h4 style={{ padding: "30px 0 10px 0", fontSize: "18px" }}>Crafted with Care</h4>

                    <Typography sx={{
                        fontFamily: 'math',
                        fontSize: {
                            xs: '14px',
                            sm: '18px',
                            md: '20px',
                        },
                    }}>
                        Every item in the Luxiloom collection is thoughtfully designed and carefully crafted by skilled artisans. We source only premium, sustainable materials—from ethically harvested wood to rich textiles—to ensure that our furniture doesn’t just look exquisite but also stands the test of time. We believe that true luxury lies in the details: the hand-finished edges, the precision of a seamless joint, the touch of a perfectly upholstered cushion.
                    </Typography>

                    <h4 style={{ padding: "30px 0 10px 0", fontSize: "18px" }}>Sustainability with Sophistication</h4>

                    <Typography sx={{
                        fontFamily: 'math',
                        fontSize: {
                            xs: '14px',
                            sm: '18px',
                            md: '20px',
                        },
                    }}>
                        As a modern brand, we take our environmental responsibility seriously. That’s why we’re committed to sustainable practices, including eco-friendly materials, reduced waste, and smart packaging. We aim to make luxury not just beautiful, but also ethical.
                    </Typography>
                    <h4 style={{ padding: "30px 0 10px 0", fontSize: "18px" }}>Your Space, Your Story</h4>

                    <Typography sx={{
                        fontFamily: 'math',
                        fontSize: {
                            xs: '14px',
                            sm: '18px',
                            md: '20px',
                        },
                    }}>
                        Our customers are at the heart of everything we do. We design our collections to adapt to a range of aesthetics—from cozy and eclectic to sleek and modern—so you can curate a home that reflects who you are. With Luxiloom, you’re not just furnishing a room; you’re creating a living experience full of warmth, elegance, and personality.
                    </Typography>

                </Box>
            </Container>

            </PublicLayout>
        </>
    )
}

export default Story
