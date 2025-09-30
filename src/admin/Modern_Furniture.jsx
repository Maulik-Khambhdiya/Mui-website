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

                    {/* ✅ Title + Add Button (Same Row, Styled) */}
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
                            🛒 Item List
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

                    {/* ✅ Dialog with Formik Form */}
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
                                    <Field
                                        as={TextField}
                                        name="order"
                                        label="Item Order"
                                        placeholder="e.g., 1"
                                        type="number"
                                        fullWidth
                                        variant="outlined"
                                        margin="normal"
                                    />

                                     <input type="file"  name="image" />

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

                    {/* ✅ Your Original Table (Unchanged Layout) */}
                    <Box>
                        <table style={{ width: "100%" }} border={1}>
                            <tr>
                                <th>No</th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Item Path</th>
                                <th>Item Order</th>
                                <th>Remove</th>
                                <th>Change</th>
                            </tr>
                            <tr>
                                <td style={{ textAlign: "center" }}>1</td>
                                <td style={{ textAlign: "center" }}>
                                    <img src="https://via.placeholder.com/80x50" alt="Sample" />
                                </td>
                                <td style={{ textAlign: "center" }}>Chair</td>
                                <td style={{ textAlign: "center" }}>/chair</td>
                                <td style={{ textAlign: "center" }}>1</td>
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
            </Dashboard>
        </>
    );
};

export default Modern_Furniture;
