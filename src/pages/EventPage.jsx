import React from 'react'
import { Container, Typography, Grid, Card, CardContent, Button, Box } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';


function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}


const events = [
    {
        id: 1,
        title: 'Luxe Loom Autumn Collection Launch',
        date: 'October 15, 2025',
        time: '6:00 PM - 9:00 PM',
        venue: 'Luxe Loom Flagship Store, NYC',
        description: 'Join us for an exclusive unveiling of our Autumn furniture collection featuring bespoke designs and sustainable materials.',
    },
    {
        id: 2,
        title: 'Furniture Craftsmanship Workshop',
        date: 'November 5, 2025',
        time: '2:00 PM - 5:00 PM',
        venue: 'Luxe Loom Studio, Brooklyn',
        description: 'Learn the art of handcrafted furniture making with our master artisans. Limited seats available.',
    },
    {
        id: 3,
        title: 'Holiday Season Sale Preview',
        date: 'December 1, 2025',
        time: '10:00 AM - 6:00 PM',
        venue: 'Online & In-store',
        description: 'Get a first look at our holiday discounts and exclusive offers on Luxe Loom’s signature collections.',
    }
];



const EventPage = () => {
    return (
        <>
        <Container maxWidth="lg" sx={{ py: 8 }}>

            <Box>
                    <div role="presentation" onClick={handleClick}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link sx={{ fontSize: "18px" }} component={RouterLink} to="/" underline="hover" color="black" >
                                Home
                            </Link>
                            <Link
                                underline="hover"
                                color="black"
                                href="/event"
                            >
                                Event
                            </Link>

                        </Breadcrumbs>
                    </div>
                </Box>

            {/* Hero Section */}
            <Box
                sx={{
                    textAlign: 'center',
                    mb: 6,
                    bgcolor: 'aquamarine',
                    py: 8,
                    borderRadius: 2,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                }}
            >
                <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2, color: '#3a3a3a' }}>
                    Upcoming Events at Luxe Loom
                </Typography>
                <Typography variant="h6" sx={{ color: '#777' }}>
                    Discover, learn, and experience the art of luxury furniture with our exclusive events.
                </Typography>
            </Box>

            {/* Events List */}
            <Grid container spacing={4}>
                {events.map(event => (
                    <Grid item xs={12} md={4} key={event.id}>
                        <Card sx={{ backgroundColor: "beige", height: '100%', display: 'flex', flexDirection: 'column', p: 3 }}>
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1, color: '#222' }}>
                                    {event.title}
                                </Typography>
                                <Typography variant="subtitle1" sx={{ color: '#555', mb: 0.5 }}>
                                    📅 {event.date} | ⏰ {event.time}
                                </Typography>
                                <Typography variant="subtitle2" sx={{ color: '#777', mb: 2 }}>
                                    📍 {event.venue}
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#444', fontStyle: 'italic' }}>
                                    {event.description}
                                </Typography>
                            </CardContent>
                            <Box sx={{ mt: 'auto', textAlign: 'center' }}>
                                <Button variant="outlined" color="primary" size="medium"
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
                                    Learn More
                                </Button>
                            </Box>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
        </>
    )
}

export default EventPage
