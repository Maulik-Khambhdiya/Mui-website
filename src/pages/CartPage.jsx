import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import PublicLayout from "./PublicLayout";

const CartPage = () => {
  const history = useHistory();

  return (
<>
        <PublicLayout>
        
    <Box
      sx={{
        padding: "60px 20px",
        textAlign: "center",
        backgroundColor: "#f7f7f7",
        minHeight: "100vh",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          fontFamily: "sans-serif",
          marginBottom: "20px",
        }}
      >
        🛒 Your Shopping Cart
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontFamily: "sans-serif",
          color: "#555",
          fontSize: "18px",
          marginBottom: "30px",
        }}
      >
        Your cart is currently empty. Start adding your favorite furniture!
      </Typography>

      <Button
        variant="contained"
        sx={{
          backgroundColor: "black",
          color: "white",
          padding: "10px 25px",
          borderRadius: "8px",
          textTransform: "none",
          fontSize: "16px",
          fontFamily: "sans-serif",
          "&:hover": {
            backgroundColor: "#333",
          },
        }}
        onClick={() => history.push("/")}
      >
        Continue Shopping
      </Button>
    </Box>
</PublicLayout>
    </>
  );
};

export default CartPage;
