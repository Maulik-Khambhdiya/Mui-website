import React, { useState } from 'react';
import Dashboard from './Dashboard';
import { Formik, Form, Field } from 'formik';
import {
    TextField,
    Box,
    Typography,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    MenuItem,
    Select,
    InputLabel,
    FormControl,
} from '@mui/material';
import "../admin/Page's CSS/offer.css";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const Offer = () => {
    // State for each offer type
    const [headerOffers, setHeaderOffers] = useState([
        { id: 1, text: 'Buy 1 Get 1 Free on Chairs' },
    ]);
    const [heroBanners, setHeroBanners] = useState([
        { id: 1, imageUrl: null },
    ]);
    const [mainBanners, setMainBanners] = useState([
        { id: 1, imageUrl: null },
    ]);
    const [openDialog, setOpenDialog] = useState(false);

    // Combine all offers into one array for displaying
    const combinedOffers = [
        ...headerOffers.map((offer) => ({ ...offer, type: 'Header Offer' })),
        ...heroBanners.map((banner) => ({ ...banner, type: 'Hero Banner' })),
        ...mainBanners.map((banner) => ({ ...banner, type: 'Main Banner' })),
    ];

    // Handle form submission based on offerType
    const handleSubmit = (values, { resetForm }) => {
        if (values.offerType === 'headerOffer') {
            setHeaderOffers((prev) => [
                ...prev,
                { id: prev.length + 1, text: values.text },
            ]);
        } else if (values.offerType === 'heroBanner') {
            setHeroBanners((prev) => [
                ...prev,
                { id: prev.length + 1, imageUrl: values.heroBanner },
            ]);
        } else if (values.offerType === 'mainBanner') {
            setMainBanners((prev) => [
                ...prev,
                { id: prev.length + 1, imageUrl: values.mainBanner },
            ]);
        }
        resetForm();
        setOpenDialog(false);
    };

    return (
        <Dashboard>
            <>
                {/* Button to open the dialog */}
                <Box sx={{ mb: 3, textAlign: "end" }}>
                    <Button
                        variant="contained"
                        onClick={() => setOpenDialog(true)}
                        sx={{
                            fontWeight: 'bold',
                            backgroundColor: '#e63946',   // Vibrant red
                            '&:hover': {
                                backgroundColor: '#d62828',
                            },
                        }}
                    >
                        + Add Offer / Banner
                    </Button>
                </Box>

                {/* Add Offer/Banner Dialog */}
                <Dialog
                    open={openDialog}
                    onClose={() => setOpenDialog(false)}
                    maxWidth="sm"
                    fullWidth
                >
                    <DialogTitle>Add New Offer/Banner</DialogTitle>
                    <DialogContent>
                        <Formik
                            initialValues={{
                                offerType: 'headerOffer',
                                text: '',
                                heroBanner: null,
                                mainBanner: null,
                            }}
                            onSubmit={handleSubmit}
                        >
                            {({ values, setFieldValue }) => (
                                <Form>
                                    <FormControl fullWidth margin="normal">
                                        <InputLabel id="offer-type-label">Offer Type</InputLabel>
                                        <Select
                                            labelId="offer-type-label"
                                            id="offerType"
                                            name="offerType"
                                            value={values.offerType}
                                            label="Offer Type"
                                            onChange={(e) => setFieldValue('offerType', e.target.value)}
                                        >
                                            <MenuItem value="headerOffer">Header Offer (Text)</MenuItem>
                                            <MenuItem value="heroBanner">Hero Banner Offer (Image)</MenuItem>
                                            <MenuItem value="mainBanner">Main Banner Offer (Image)</MenuItem>
                                        </Select>
                                    </FormControl>

                                    {/* Show text input if header offer */}
                                    {values.offerType === 'headerOffer' && (
                                        <Field
                                            as={TextField}
                                            name="text"
                                            label="Offer Details"
                                            placeholder="e.g., Buy 1 Get 1 Free on Chairs"
                                            fullWidth
                                            variant="outlined"
                                            margin="normal"
                                            required
                                        />
                                    )}

                                    {/* Show file input if banner */}
                                    {(values.offerType === 'heroBanner' ||
                                        values.offerType === 'mainBanner') && (
                                            <Box margin="normal">
                                                <input
                                                    id={values.offerType}
                                                    name={values.offerType}
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={(event) => {
                                                        setFieldValue(values.offerType, event.currentTarget.files[0]);
                                                    }}
                                                    required
                                                />
                                            </Box>
                                        )}

                                    <button type="submit" className="submit-button">
                                        Add
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </DialogContent>
                </Dialog>

                {/* Combined Offers Table */}
                <Box mb={4}>
                    <Typography
                        sx={{ fontWeight: "600", backgroundColor: 'sandybrown', padding: '8px 5px' }}
                        variant="h6"
                        mb={1}
                    >
                        <LocalOfferIcon /> All Offers
                    </Typography>
                    <table
                        style={{
                            width: '100%',
                            borderCollapse: 'separate',
                            borderSpacing: '0 10px',
                            textAlign: 'center',
                        }}
                    >
                        <thead>
                            <tr style={{ backgroundColor: '#c8f889ff', height: '40px' }}>
                                <th>No</th>
                                <th>Type</th>
                                <th>Offer / Banner</th>
                                <th>Remove</th>
                                <th>Change</th>
                            </tr>
                        </thead>
                        <tbody>
                            {combinedOffers.map((offer, idx) => (
                                <tr
                                    key={`${offer.type}-${offer.id}`}
                                    style={{
                                        backgroundColor: '#ffffff',
                                        boxShadow: '0px 2px 8px rgba(0,0,0,0.1)',
                                        borderRadius: '8px',
                                        height: '50px',
                                    }}
                                >
                                    <td>{idx + 1}</td>
                                    <td>{offer.type}</td>
                                    <td>
                                        {offer.type === 'Header Offer' ? (
                                            offer.text
                                        ) : offer.imageUrl ? (
                                            <img
                                                src={
                                                    typeof offer.imageUrl === 'object'
                                                        ? URL.createObjectURL(offer.imageUrl)
                                                        : offer.imageUrl
                                                }
                                                alt={`${offer.type}`}
                                                width="100"
                                            />
                                        ) : (
                                            'No Image'
                                        )}
                                    </td>
                                    <td>
                                        <Button
                                            size="small"
                                            variant="outlined"
                                            color="error"
                                            onClick={() => {
                                                if (offer.type === 'Header Offer') {
                                                    setHeaderOffers((prev) =>
                                                        prev.filter((o) => o.id !== offer.id)
                                                    );
                                                } else if (offer.type === 'Hero Banner') {
                                                    setHeroBanners((prev) =>
                                                        prev.filter((b) => b.id !== offer.id)
                                                    );
                                                } else if (offer.type === 'Main Banner') {
                                                    setMainBanners((prev) =>
                                                        prev.filter((b) => b.id !== offer.id)
                                                    );
                                                }
                                            }}
                                        >
                                            Remove
                                        </Button>
                                    </td>
                                    <td>
                                        <Button size="small" variant="outlined" color="secondary">
                                            Change
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Box>
            </>
        </Dashboard>
    );
};

export default Offer;
