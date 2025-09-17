import React from 'react';
import { Box, Container, Typography, Divider } from '@mui/material';

const TermsAndConditions = () => {
  return (
    <Box sx={{ backgroundColor: '#fdfdfd', py: 6 }}>
      <Container maxWidth="md">
        {/* Page Title */}
        <Typography
          variant="h4"
          component="h1"
          fontWeight="bold"
          textAlign="center"
          gutterBottom
        >
          Terms & Conditions
        </Typography>

        {/* Divider */}
        <Divider sx={{ my: 3 }} />

        {/* Section 1: Introduction */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          1. Introduction
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to Luxi Loom! These Terms and Conditions outline the rules and regulations for the use of our website and services.
          By accessing this site, you agree to comply with and be bound by the following terms.
        </Typography>

        {/* Section 2: Orders and Payments */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          2. Orders & Payments
        </Typography>
        <Typography variant="body1" paragraph>
          All orders placed through Luxi Loom are subject to product availability and confirmation of the order price. 
          We reserve the right to refuse any order. Payment must be made in full at the time of purchase.
        </Typography>

        {/* Section 3: Shipping & Delivery */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          3. Shipping & Delivery
        </Typography>
        <Typography variant="body1" paragraph>
          Delivery times may vary depending on product availability and location. Luxi Loom is not responsible for delays caused by third-party shipping providers.
        </Typography>

        {/* Section 4: Returns & Refunds */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          4. Returns & Refunds
        </Typography>
        <Typography variant="body1" paragraph>
          If you are not completely satisfied with your purchase, you may return it within 14 days of delivery. Products must be unused and in original packaging.
          Custom or made-to-order items are not eligible for return unless damaged.
        </Typography>

        {/* Section 5: Intellectual Property */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          5. Intellectual Property
        </Typography>
        <Typography variant="body1" paragraph>
          All content on this site, including images, text, logos, and designs, is the property of Luxi Loom and is protected by copyright and trademark laws.
          Unauthorized use is strictly prohibited.
        </Typography>

        {/* Section 6: Limitation of Liability */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          6. Limitation of Liability
        </Typography>
        <Typography variant="body1" paragraph>
          Luxi Loom shall not be held liable for any indirect, incidental, or consequential damages arising out of the use or inability to use our products or website.
        </Typography>

        {/* Section 7: Changes to Terms */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          7. Changes to These Terms
        </Typography>
        <Typography variant="body1" paragraph>
          Luxi Loom reserves the right to revise these terms at any time. Continued use of the website following any changes implies acceptance of the updated terms.
        </Typography>

        {/* Section 8: Contact */}
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          8. Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          If you have any questions about these Terms & Conditions, please contact us at:
        </Typography>
        <Typography variant="body2">
          Email: support@luxiloom.com<br />
          Phone: +91 98765 43210
        </Typography>
      </Container>
    </Box>
  );
};

export default TermsAndConditions;
