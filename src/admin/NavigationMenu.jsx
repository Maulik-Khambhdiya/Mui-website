import React, { useState } from 'react';
import Dashboard from './Dashboard';
import { Formik, Form, Field } from 'formik';
import {
    TextField, Box, Typography, Divider, Button,
    Dialog, DialogTitle, DialogContent
} from '@mui/material';

const NavigationMenu = () => {
    const [openDialog, setOpenDialog] = useState(false);

    const handleOpen = () => setOpenDialog(true);
    const handleClose = () => setOpenDialog(false);

    return (
        <>
            <Dashboard>
                <Box>

                    {/* 🔵 TITLE + ADD BUTTON */}
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{
                            backgroundColor: "#1976d2",
                            padding: "12px 20px",
                            borderRadius: "8px",
                            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                            marginBottom: "20px"
                        }}
                    >
                        <Typography
                            variant="h5"
                            sx={{
                                color: "#ffffff",
                                fontWeight: "bold",
                                display: "flex",
                                alignItems: "center",
                                gap: "8px"
                            }}
                        >
                            📌 Navigation Menu
                        </Typography>

                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: "#ffffff",
                                color: "#1976d2",
                                fontWeight: "bold",
                                textTransform: "none",
                                '&:hover': {
                                    backgroundColor: "#e3f2fd"
                                }
                            }}
                            onClick={handleOpen}
                        >
                            + Add
                        </Button>
                    </Box>

                    {/* 🔵 DIALOG WITH FORMIK FORM */}
                    <Dialog open={openDialog} onClose={handleClose}>
                        <DialogTitle>Add Nav Label</DialogTitle>
                        <DialogContent>
                            <Formik
                                initialValues={{ label: '', path: '' }}
                                onSubmit={(values) => {
                                    console.log("Submitted:", values);
                                    handleClose();
                                }}
                            >
                                <Form style={{ marginTop: 20 }}>
                                    <Field
                                        as={TextField}
                                        name="label"
                                        label="Nav-Label"
                                        placeholder="e.g., Best Seller"
                                        fullWidth
                                        variant="outlined"
                                        margin="normal"
                                    />
                                    <Field
                                        as={TextField}
                                        name="path"
                                        label="Nav-Path"
                                        placeholder="e.g., /bestseller"
                                        fullWidth
                                        variant="outlined"
                                        margin="normal"
                                    />

                                    <Box textAlign="center" mt={2}>
                                        <button
                                            type="submit"
                                            className="submit-button"
                                            
                                        >
                                            Add Label
                                        </button>
                                    </Box>
                                </Form>
                            </Formik>
                        </DialogContent>
                    </Dialog>

                    {/* 🔵 YOUR ORIGINAL TABLE (UNCHANGED) */}
                    <Box>
                        <table style={{ width: "100%" }} border={1}>
                            <tr>
                                <th>No</th>
                                <th>Label Name</th>
                                <th>Label Path</th>
                                <th>Remove</th>
                                <th>Change</th>
                            </tr>
                            <tr>
                                <td style={{ textAlign: "center" }}>1</td>
                                <td style={{ textAlign: "center" }}>Best Seller</td>
                                <td style={{ textAlign: "center" }}>/bestseller</td>
                                <td style={{ textAlign: "center" }}>
                                    <Button size="small" variant="outlined" color="error">Remove</Button>
                                </td>
                                <td style={{ textAlign: "center" }}>
                                    <Button size="small" variant="outlined" color="secondary">Change</Button>
                                </td>
                            </tr>
                        </table>
                    </Box>
                </Box>

                {/* 🔵 DOTTED DIVIDER */}
                <br />
                <Divider sx={{
                    borderStyle: 'dotted',
                    borderColor: 'black',
                    borderWidth: '2px',
                }} />
                <br />
            </Dashboard>
        </>
    );
};

export default NavigationMenu;
