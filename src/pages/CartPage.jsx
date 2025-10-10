import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useHistory } from "react-router-dom";
import PublicLayout from "./PublicLayout";
import { useCart } from "../context/Cartcontext";

const CartPage = () => {
  const history = useHistory();
  const { cartItems } = useCart();

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

    {cartItems.length === 0 ? (
      <>
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
      </>
    ) : (
      <>
        <Box sx={{ textAlign: "left", maxWidth: 600, margin: "0 auto" }}>
          {cartItems.map((item, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: "white",
                marginBottom: "15px",
                padding: "15px",
                borderRadius: "8px",
                boxShadow: "0 0 5px rgba(0,0,0,0.1)",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {item.product}
              </Typography>
              <Typography variant="body2" sx={{ color: "#777" }}>
                Price: {item.price}
              </Typography>
            </Box>
          ))}
        </Box>

        <Button
          variant="contained"
          sx={{
            marginTop: "30px",
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
          onClick={() => alert("Proceeding to buy...")}
        >
          Buy Now
        </Button>
      </>
    )}
  </Box>
</PublicLayout>

    </>
  );
};

export default CartPage;
