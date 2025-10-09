import React, { useEffect, useState } from 'react';
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
import axios from 'axios';

const Offer = () => {
    const [offers, setOffers] = useState([]);

    const [openDialog, setOpenDialog] = useState(false);

    const combinedOffers = offers.map((offer) => {
        let typeLabel = "";
        if (offer.offerType === "headerOffer") typeLabel = "Header Offer";
        else if (offer.offerType === "heroBanner") typeLabel = "Hero Banner";
        else if (offer.offerType === "mainBanner") typeLabel = "Main Banner";

        return { ...offer, type: typeLabel };
    });



    // Handle form submission based on offerType


    const fetchOffers = async () => {
        try {
            const response = await axios.get("http://localhost:3000/offer/");
            setOffers(response.data.data);
        } catch (error) {
            console.error("Error fetching offers:", error);
        }
    };

    useEffect(() => {
        fetchOffers();
    }, []);

    const handleSubmit = async (values, { resetForm }) => {
        try {
            const formData = new FormData();
            formData.append("offerType", values.offerType);

            if (values.offerType === "headerOffer") {
                formData.append("text", values.text);
            } else {
                const file = values[values.offerType];
                formData.append("image", file);
            }

            await axios.post("http://localhost:3000/offer/", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            resetForm();
            setOpenDialog(false);
            fetchOffers();
        } catch (error) {
            console.error("Error adding offer:", error);
        }
    };

    const handleDelete = (deleteId) => {
        axios.delete(`http://localhost:3000/offer/${deleteId}`)
            .then((res) => {
                console.log("offer deleted successfully");
                fetchOffers();
            })
            .catch((error) => {
                console.log(error);

            })
    }

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
                                            onClick={() => handleDelete(offer._id)}
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
