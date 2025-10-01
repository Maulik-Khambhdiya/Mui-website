import React, { useState } from 'react';
import Dashboard from './Dashboard';
import { Formik, Form, Field } from 'formik';
import {
    TextField, Box, Typography, Divider, Button,
    Dialog, DialogTitle, DialogContent
} from '@mui/material';
import ModernFurniture from '../pages/ModernFurniture';

const Modern_Furniture = () => {
    const [openDialog, setOpenDialog] = useState(false);

    const handleOpen = () => setOpenDialog(true);
    const handleClose = () => setOpenDialog(false);

    return (
        <>
            <Dashboard>
                <Box>

                    {/*  Title + Add Button (Same Row, Styled) */}
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
                          🏙️ Add Modern Item 
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

                    {/* Dialog with Formik Form */}
                    <Dialog open={openDialog} onClose={handleClose}>
                        <DialogTitle>Add New Item</DialogTitle>
                        <DialogContent>
                            <Formik
                                initialValues={{
                                    image: '',
                                    name: '',
                                    path: '',
                                    order: ''
                                }}
                                onSubmit={(values) => {
                                    console.log("Submitted:", values);
                                    handleClose();
                                }}
                            >
                                <Form style={{ marginTop: 20 }}>

                                    <Field
                                        as={TextField}
                                        name="name"
                                        label="Item Name"
                                        placeholder="e.g., Chair"
                                        fullWidth
                                        variant="outlined"
                                        margin="normal"
                                    />



                                    <Field
                                        as={TextField}
                                        name="path"
                                        label="Item Path"
                                        placeholder="e.g., /chair"
                                        fullWidth
                                        variant="outlined"
                                        margin="normal"
                                    />
                                    <br /><br />

                                    <input type="file" name="image" required />

                                    <Box textAlign="center" mt={2}>
                                        <button
                                            type="submit"
                                            className="submit-button"

                                        >
                                            Add Item
                                        </button>
                                    </Box>
                                </Form>
                            </Formik>
                        </DialogContent>
                    </Dialog>

                    {/*Your Original Table (Unchanged Layout) */}
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
                                    <th style={{ padding: "12px" }}>Item Image</th>
                                    <th style={{ padding: "12px" }}>Item Name</th>
                                    <th style={{ padding: "12px" }}>Item Path</th>
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
                                    <td style={{ padding: "12px" }}>
                                        <img src="https://via.placeholder.com/80x50" alt="Sample" />
                                    </td>
                                    <td style={{ padding: "12px" }}>Chair</td>
                                    <td style={{ padding: "12px" }}>/chair</td>
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
            </Dashboard>
        </>
    );
};

export default Modern_Furniture;
