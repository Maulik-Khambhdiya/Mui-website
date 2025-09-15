import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Button, Link } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Helppage = () => {
  return (
    <Box sx={{ maxWidth: 800, margin: 'auto', padding: 4 }}>
      <Typography variant="h3" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold' }}>
        Welcome Our Help Center
      </Typography>
      <Typography variant="subtitle1" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
        Your go-to place for all questions about our premium furniture.
      </Typography>

      {/* FAQ Section */}
      <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
        Frequently Asked Questions
      </Typography>

      <Accordion sx={{ backgroundColor: "black", color: "white" }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}>
          <Typography >How can I place an order?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "skyblue", color: "black" }}>
          <Typography>
            To place an order, browse our catalog, select the furniture you like, add it to your cart, and follow the checkout process.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: "white", color: "balck" }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>What payment methods do you accept?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "skyblue", color: "black" }}>
          <Typography>
            We accept all major credit/debit cards, PayPal, and bank transfers.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: "black", color: "white" }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}>
          <Typography>Can I track my order?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "skyblue", color: "black" }}>
          <Typography>
            Yes, after placing your order, you'll receive a tracking number via email to follow your shipment.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ backgroundColor: "white", color: "balck" }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>How do I care for my furniture?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "skyblue", color: "black" }}>
          <Typography>
            Our furniture care guide recommends cleaning with a soft cloth and avoiding harsh chemicals. For specific materials, please check the product details.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Contact Support Section */}
      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Need More Help?
        </Typography>
        <Typography sx={{ mb: 2 }}>
          Contact our customer support team — we’re happy to assist!
        </Typography>
        <Button
          sx={{
            mb: 1,
            backgroundColor: 'black',
            color: 'white',
            '&:hover': {
              backgroundColor: '#333', // dark grey on hover for subtle effect
              color: 'white',
            },
          }}
          href="mailto:support@luxiloom.com"
        >
          Email Support
        </Button>
        <br />
        <Link href="tel:+1234567890" underline="none" sx={{ fontSize: '1rem', color: 'primary.main' }}>
          Call Us: +1 (234) 567-890
        </Link>
      </Box>

      {/* Additional Resources */}
      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Typography variant="h6">
          Helpful Resources
        </Typography>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li><Link href="/shipping-policy" underline="hover">Shipping Policy</Link></li>
          <li><Link href="/return-policy" underline="hover">Return & Refund Policy</Link></li>
          <li><Link href="/product-care" underline="hover">Product Care Guides</Link></li>
        </ul>
      </Box>
    </Box>
  );
};

export default Helppage;
