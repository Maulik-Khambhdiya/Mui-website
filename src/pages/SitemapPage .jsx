import React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Link,
    Divider
} from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link as RouterLink } from 'react-router-dom';
import PublicLayout from './PublicLayout';


function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}


const SitemapPage = () => {
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
                                href="/sitemap"
                            >
                                sitemap
                            </Link>

                        </Breadcrumbs>
                    </div>
                </Box>

                <Box sx={{ backgroundColor: '#fafafa', py: 6 }}>
                    <Container maxWidth="md">
                        <Typography variant="h4" fontWeight="bold" gutterBottom textAlign="center">
                            Sitemap
                        </Typography>
                        <Typography variant="subtitle1" textAlign="center" color="text.secondary" mb={4}>
                            Easily explore all areas of Luxi Loom
                        </Typography>

                        <Divider sx={{ mb: 4 }} />

                        <Grid container spacing={4}>
                            {/* Main Pages */}
                            <Grid item xs={12} sm={6}>
                                <Typography variant="h5" fontWeight="bolder" gutterBottom>
                                    Main Pages
                                </Typography>
                                <Box component="ul" sx={{ pl: 2, m: 0 }}>
                                    <li><Link sx={{ color: "black" }} href="/" underline="hover">Home</Link></li>
                                    <li><Link sx={{ color: "black" }} href="/about" underline="hover">About Us</Link></li>
                                    <li><Link sx={{ color: "black" }} href="/contact" underline="hover">Contact Us</Link></li>
                                    <li><Link sx={{ color: "black" }} href="/gifting" underline="hover">Gifting</Link></li>
                                    <li><Link sx={{ color: "black" }} href="/faq" underline="hover">FAQs</Link></li>
                                </Box>
                            </Grid>

                            {/* Shop Categories */}
                            <Grid item xs={12} sm={6}>
                                <Typography variant="h5" fontWeight="bolder" gutterBottom>
                                    Shop Categories
                                </Typography>
                                <Box component="ul" sx={{ pl: 2, m: 0 }}>
                                    <li><Link sx={{ color: "black" }} href="/bedroom" underline="hover">Bedroom Furniture</Link></li>
                                    <li><Link sx={{ color: "black" }} href="/living-room" underline="hover">Living Room</Link></li>
                                    <li><Link sx={{ color: "black" }} href="/dining-room" underline="hover">Dining Room</Link></li>
                                    <li><Link sx={{ color: "black" }} href="/office" underline="hover">Office Furniture</Link></li>
                                    <li><Link sx={{ color: "black" }} href="/decor" underline="hover">Home Decor</Link></li>
                                </Box>
                            </Grid>

                            {/* Customer Info */}
                            <Grid item xs={12} sm={6}>
                                <Typography variant="h5" fontWeight="bolder" gutterBottom>
                                    Customer Information
                                </Typography>
                                <Box component="ul" sx={{ pl: 2, m: 0 }}>
                                    <li><Link sx={{ color: "black" }} href="/returns" underline="hover">Returns & Refunds</Link></li>
                                    <li><Link sx={{ color: "black" }} href="/shipping" underline="hover">Shipping Info</Link></li>
                                    <li><Link sx={{ color: "black" }} href="/terms" underline="hover">Terms & Conditions</Link></li>
                                    <li><Link sx={{ color: "black" }} href="/privacy" underline="hover">Privacy Policy</Link></li>
                                </Box>
                            </Grid>

                            {/* Account Pages */}
                            <Grid item xs={12} sm={6}>
                                <Typography variant="h5" fontWeight="bolder" gutterBottom>
                                    My Account
                                </Typography>
                                <Box component="ul" sx={{ pl: 2, m: 0 }}>
                                    <li><Link sx={{ color: "black" }} href="/login" underline="hover">Login</Link></li>
                                    <li><Link sx={{ color: "black" }} href="/signup" underline="hover">Register</Link></li>
                                    <li><Link sx={{ color: "black" }} href="/account" underline="hover">My Account</Link></li>
                                    <li><Link sx={{ color: "black" }} href="/wishlist" underline="hover">Wishlist</Link></li>
                                    <li><Link sx={{ color: "black" }} href="/cart" underline="hover">Cart</Link></li>
                                    <li><Link sx={{ color: "black" }} href="/checkout" underline="hover">Checkout</Link></li>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Container>

            </PublicLayout>
        </>
    );
};

export default SitemapPage;
