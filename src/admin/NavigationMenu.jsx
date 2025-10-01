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

                    {/*  YOUR ORIGINAL TABLE (UNCHANGED) */}
                    <Box>

                        <table
                            style={{
                                width: "100%",
                                borderCollapse: "separate",
                                borderSpacing: "0 10px", // vertical spacing between rows
                                textAlign: "center",     // center all content by default
                            }}
                        >
                            <thead>
                                <tr style={{ backgroundColor: "#c8f889ff", height: "50px" }}>
                                    <th style={{ padding: "12px" }}>No</th>
                                    <th style={{ padding: "12px" }}>Label Name</th>
                                    <th style={{ padding: "12px" }}>Label Path</th>
                                    <th style={{ padding: "12px" }}>Remove</th>
                                    <th style={{ padding: "12px" }}>Change</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    style={{
                                        backgroundColor: "#ffffff",
                                        boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
                                        borderRadius: "8px",
                                        height: "60px",
                                    }}
                                >
                                    <td style={{ padding: "12px" }}>1</td>
                                    <td style={{ padding: "12px" }}>Best Seller</td>
                                    <td style={{ padding: "12px" }}>/bestseller</td>
                                    <td style={{ padding: "12px" }}>
                                        <Button size="small" variant="outlined" color="error">
                                            Remove
                                        </Button>
                                    </td>
                                    <td style={{ padding: "12px" }}>
                                        <Button size="small" variant="outlined" color="secondary">
                                            Change
                                        </Button>
                                    </td>
                                </tr>
                            </tbody>
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
