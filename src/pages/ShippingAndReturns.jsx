import React from 'react';
import { Box, Container, Typography, Divider } from '@mui/material';
import PublicLayout from './PublicLayout';

const ShippingAndReturns = () => {
    return (

        <>

            <PublicLayout>

                <Box sx={{ backgroundColor: '#fdfdfd', py: 6 }}>
                    <Container maxWidth="md">
                        {/* Page Title */}
                        <Typography variant="h4" component="h1" fontWeight="bold" textAlign="center" gutterBottom>
                            Shipping & Returns
                        </Typography>

                        <Typography variant="subtitle1" textAlign="center" color="text.secondary" mb={4}>
                            Everything you need to know about delivery, returns, and refunds.
                        </Typography>

                        <Divider sx={{ mb: 4 }} />

                        {/* Shipping Information */}
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                            Shipping Policy
                        </Typography>
                        <Typography variant="body1" paragraph>
                            At Luxi Loom, we aim to deliver your furniture safely and on time. Orders are typically processed within 2–4 business days.
                            Once shipped, you'll receive a tracking link via email.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            <strong>Estimated Delivery Time:</strong><br />
                            • Metro Cities: 5–7 business days<br />
                            • Other Locations: 7–12 business days
                        </Typography>
                        <Typography variant="body1" paragraph>
                            <strong>Shipping Charges:</strong> We offer free shipping on all orders above ₹5,000. For orders below this amount, a standard shipping fee of ₹299 applies.
                        </Typography>

                        {/* Divider */}
                        <Divider sx={{ my: 4 }} />

                        {/* Returns Policy */}
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                            Return & Refund Policy
                        </Typography>
                        <Typography variant="body1" paragraph>
                            We hope you love your Luxi Loom furniture, but if you're not completely satisfied, we offer a 14-day return policy from the date of delivery.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            <strong>Return Conditions:</strong>
                            <ul>
                                <li>Item must be unused and in original condition</li>
                                <li>Original packaging and invoice must be retained</li>
                                <li>Custom or made-to-order items are non-returnable</li>
                            </ul>
                        </Typography>
                        <Typography variant="body1" paragraph>
                            <strong>Refund Process:</strong> Once your return is approved and the product is collected, refunds will be processed within 7–10 business days to the original payment method.
                        </Typography>

                        {/* Divider */}
                        <Divider sx={{ my: 4 }} />

                        {/* Important Notes */}
                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                            Important Notes
                        </Typography>
                        <Typography variant="body1" paragraph>
                            • Products damaged due to misuse are not eligible for return.<br />
                            • Ensure the delivery address and contact number are accurate to avoid delivery delays.<br />
                            • In case of shipping damage, please notify us within 48 hours of delivery with photos.
                        </Typography>

                        {/* Contact Info */}
                        <Typography variant="h6" fontWeight="bold" gutterBottom mt={4}>
                            Need Help?
                        </Typography>
                        <Typography variant="body1">
                            Our customer support team is happy to assist you with any questions about shipping or returns.<br />
                            <strong>Email:</strong> support@luxiloom.com<br />
                            <strong>Phone:</strong> +91 98765 43210
                        </Typography>
                    </Container>
                </Box>
            </PublicLayout>
        </>
    );
};

export default ShippingAndReturns;
