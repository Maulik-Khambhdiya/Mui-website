import React from 'react';
import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Button,
    Container,
} from '@mui/material';
import admin1 from '../image/admin1.jpg'
import admin2 from '../image/admin2.jpg'
import admin3 from '../image/admin3.jpg'

const testimonials = [
    {
        name: 'Endorson R.',
        location: 'Toronto, ON',
        product: 'The Vienna Velvet Sectional',
        quote:
            'Luxe Loom exceeded my expectations. It’s luxurious, soft, and incredibly comfortable. Guests always ask where it’s from.',
        image: admin1,
    },
    {
        name: 'Maya T.',
        location: 'Vancouver, BC',
        product: 'The Aspen Walnut Platform Bed',
        quote:
            'We searched for months. Luxe Loom’s Aspen bed is sturdy, stylish, and totally elevated our master bedroom.',
        image: admin2,
    },
    {
        name: 'Priya N.',
        location: 'Calgary, AB',
        product: 'The Marlow Dining Set',
        quote:
            'The craftsmanship is unreal. Every detail feels intentional and luxe. It’s the heart of our home.',
        image: admin3,
    },
];

const quickReviews = [
    {
        name: 'Ahmed M.',
        comment:
            'Delivery was smooth. The media console arrived in perfect shape.',
    },
    {
        name: 'Sophie L.',
        comment:
            'Accent chairs added elegance to my office. Excellent quality.',
    },
    {
        name: 'Carla F.',
        comment:
            'Great support. Got fabric swatch answers within hours.',
    },
];

const CustomerStories = () => {
    return (
        <Box sx={{ textAlign: "center", bgcolor: '#fff', color: '#111', py: 8 }}>
            <Container maxWidth="lg">
                <Typography
                    variant="h3"
                    align="center"
                    sx={{
                        fontFamily: 'Playfair Display, serif',
                        fontWeight: 700,
                        mb: 2,
                    }}
                >
                    Customer Stories
                </Typography>
                <Typography
                    variant="h6"
                    align="center"
                    sx={{ color: '#555', mb: 6, maxWidth: '700px', mx: 'auto' }}
                >
                    At Luxe Loom, our furniture lives in beautiful spaces and tells meaningful stories. Here's how our pieces have transformed homes across Canada.
                </Typography>

                {/* Testimonials */}
                <Grid container spacing={4}>
                    {testimonials.map((story, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <Card
                                sx={{
                                    bgcolor: '#f9f9f9',
                                    boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                                    border: '1px solid #e0e0e0',
                                    height: '100%',
                                }}
                            >
                                <CardMedia
                                    component="img"

                                    image={story.image}
                                    alt={`Photo from ${story.name}`}
                                    sx={{
                                        width: "30%"
                                    }}
                                />
                                <CardContent>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                        {story.name}
                                    </Typography>
                                    <Typography
                                        variant="subtitle2"
                                        sx={{ color: '#777', mb: 1 }}
                                    >
                                        {story.location} • {story.product}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{ color: '#444', fontStyle: 'italic' }}
                                    >
                                        “{story.quote}”
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {/* Quick Reviews */}
                <Box mt={8}>
                    <Typography
                        variant="h5"
                        sx={{
                            fontFamily: 'Playfair Display, serif',
                            mb: 3,
                            textAlign: 'center',
                        }}
                    >
                        More Love from Our Customers
                    </Typography>
                    <Grid container spacing={3}>
                        {quickReviews.map((review, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <Card
                                    sx={{
                                        bgcolor: '#fafafa',
                                        border: '1px solid #eaeaea',
                                        height: '100%',
                                    }}
                                >
                                    <CardContent>
                                        <Typography
                                            variant="body1"
                                            sx={{ mb: 1, fontStyle: 'italic', color: '#333' }}
                                        >
                                            “{review.comment}”
                                        </Typography>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{ color: '#666' }}
                                        >
                                            – {review.name}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* CTA */}
                <Box mt={10} textAlign="center">
                    <Typography
                        variant="h5"
                        sx={{
                            fontFamily: 'Playfair Display, serif',
                            mb: 2,
                            fontWeight: 'medium',
                        }}
                    >
                        Share Your Luxe Loom Story
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#666', mb: 3 }}>
                        Tag us on Instagram <strong>@luxeloomhome</strong> or use{' '}
                        <strong>#MyLuxeLoom</strong> to get featured.
                    </Typography>
                    <Button
                        variant="outlined"
                        href="mailto:stories@luxeloom.ca"
                        sx={{
                            borderColor: '#111',
                            color: '#111',
                            px: 4,
                            py: 1.5,
                            '&:hover': {
                                bgcolor: '#111',
                                color: '#fff',
                            },
                        }}
                    >
                        Submit Your Story
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default CustomerStories;
