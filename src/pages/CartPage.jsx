// src/pages/CartPage.jsx
import React, { useState } from "react";
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button, IconButton, TextField } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const CartPage = () => {
  // Sample cart data (frontend only)
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Modern Sofa",
      price: 499.99,
      quantity: 1,
      image: "https://via.placeholder.com/150", // replace with actual image URL
    },
    {
      id: 2,
      name: "Classic Armchair",
      price: 299.99,
      quantity: 2,
      image: "https://via.placeholder.com/150",
    },
  ]);

  // Handle quantity change
  const handleQuantityChange = (id, value) => {
    const updatedCart = cartItems.map(item =>
      item.id === id ? { ...item, quantity: Number(value) } : item
    );
    setCartItems(updatedCart);
  };

  // Handle remove item
  const handleRemoveItem = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
  };

  // Calculate total
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography variant="h6">Your cart is empty.</Typography>
      ) : (
        <>
          <Grid container spacing={3}>
            {cartItems.map((item) => (
              <Grid item xs={12} md={6} key={item.id}>
                <Card sx={{ display: "flex", alignItems: "center" }}>
                  <CardMedia
                    component="img"
                    sx={{ width: 150, height: 150, objectFit: "cover" }}
                    image={item.image}
                    alt={item.name}
                  />
                  <CardContent sx={{ flex: 1 }}>
                    <Typography variant="h6">{item.name}</Typography>
                    <Typography variant="body1">${item.price.toFixed(2)}</Typography>
                    <TextField
                      type="number"
                      label="Quantity"
                      size="small"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                      inputProps={{ min: 1 }}
                      sx={{ width: 100, mt: 1 }}
                    />
                  </CardContent>
                  <IconButton color="error" onClick={() => handleRemoveItem(item.id)}>
                    <DeleteIcon />
                  </IconButton>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Typography variant="h5" sx={{ mt: 4 }}>
            Total: ${totalPrice.toFixed(2)}
          </Typography>

          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Proceed to Checkout
          </Button>
        </>
      )}
    </Container>
  );
};

export default CartPage;
