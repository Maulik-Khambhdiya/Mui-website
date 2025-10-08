import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Box, Grid, Typography, Button, TextField, Paper } from "@mui/material";
import PublicLayout from "./PublicLayout";

const BuyNowPage = () => {
  const location = useLocation();
  const product = location.state?.product;

  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(product?.price || 0);

  useEffect(() => {
    if (product) setTotal(product.price * quantity);
  }, [product, quantity]);

  if (!product) {
    return (
      <Box sx={{ textAlign: "center", mt: 10 }}>
        <Typography variant="h5">No product selected!</Typography>
      </Box>
    );
  }

  return (

    <>
      <PublicLayout>

        <Box sx={{ p: { xs: 2, md: 6 }, backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
          <Typography variant="h4" sx={{ textAlign: "center", mb: 6, fontWeight: "bold", color: "#333" }}>
            Checkout
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {/* Product Image */}
            <Grid item xs={12} md={5}>
              <Paper elevation={6} sx={{ borderRadius: 3, overflow: "hidden", "&:hover": { transform: "scale(1.03)" }, transition: "transform 0.3s" }}>
                <img src={product.image} alt={product.name} style={{ width: "100%", height: "auto" }} />
              </Paper>
            </Grid>

            {/* Product Details */}
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>{product.name}</Typography>

                {product.category && (
                  <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
                    {product.category}
                  </Typography>
                )}

                <Typography variant="h6" color="primary" sx={{ mb: 3, fontWeight: "bold" }}>
                  ₹{product.price}
                </Typography>

                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle1" sx={{ mb: 1 }}>Quantity:</Typography>
                  <TextField
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    inputProps={{ min: 1 }}
                    size="small"
                    sx={{ width: 100 }}
                  />
                </Box>

                <Typography variant="h6" sx={{ mb: 4, fontWeight: "bold" }}>Total: ₹{total}</Typography>

                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                  <Button variant="contained" color="success" size="small" sx={{ flex: 1, borderRadius: 2 }} onClick={() => alert("Proceeding to Checkout...")}>
                    Proceed to Checkout
                  </Button>
                  <Button variant="outlined" color="secondary" size="small" sx={{ flex: 1, borderRadius: 2 }} onClick={() => window.history.back()}>
                    Back
                  </Button>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </PublicLayout>
    </>
  );
};

export default BuyNowPage;
