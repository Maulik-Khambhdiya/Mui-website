import React from 'react';
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
} from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';


function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}



// Sample data for featured projects
const featuredProjects = [
  {
    id: 1,
    title: 'Modern Minimalist Sofa',
    description: 'Sleek and space-saving sofa perfect for urban living rooms.',
    image: 'https://images.unsplash.com/photo-1582582494703-c55f5c9c086e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Handcrafted Oak Dining Table',
    description: 'Custom-made oak table designed with precision and care.',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Eco-Friendly Bookshelf',
    description: 'Made from sustainable materials to keep your home green.',
    image: 'https://images.unsplash.com/photo-1509228627152-74a9f748f2d8?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'Cozy Armchair',
    description: 'Comfort meets style with this plush armchair.',
    image: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    title: 'Minimalist Coffee Table',
    description: 'Simple, modern coffee table to complete your living room.',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80',
  },
];

const FeaturedProject = () => {
  return (

    <>
      <Container sx={{ paddingY: 6 }}>

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
               Featured Projects
              </Link>

            </Breadcrumbs>
          </div>
        </Box>


        <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 'bold',
              borderBottom: '3px solid #1976d2',
              display: 'inline-block',
              paddingBottom: 1,
            }}
          >
            Featured Projects
          </Typography>
          <Typography sx={{ marginTop: 1, color: 'text.secondary', maxWidth: 600, marginX: 'auto' }}>
            Explore our best furniture designs, crafted with quality and style to transform your spaces.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {featuredProjects.map(({ id, title, description, image }) => (
            <Grid item key={id} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease',
                  ':hover': {
                    transform: 'scale(1.05)',
                    boxShadow: 6,
                  },
                }}
                elevation={3}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={image}
                  alt={title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="h2" fontWeight="bold">
                    {title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" variant="outlined" fullWidth>
                    View Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      </>
      );
};

      export default FeaturedProject;
