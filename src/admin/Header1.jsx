import React, { useState } from 'react';
import Dashboard from './Dashboard';
import { Formik, Form, Field } from 'formik';
import {
    TextField,
    Box,
    Typography,
    Divider,
    Button,
    Dialog,
    DialogTitle,
    DialogContent
} from '@mui/material';
import "../admin/Page's CSS/header1.css";

const Header1 = () => {
    // Dialog states
    const [openHeaderDialog, setOpenHeaderDialog] = useState(false);
    const [openHeroDialog, setOpenHeroDialog] = useState(false);
    const [openMainDialog, setOpenMainDialog] = useState(false);

    return (
        <Dashboard>
            <>

                {/* ========== HEADER OFFER SECTION ========== */}
                <Box>
                    <Box display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{
                            backgroundColor: "#1976d2",
                            padding: "12px 24px",
                            borderRadius: 2,
                            boxShadow: 3
                        }}>
                        <Typography variant="h5" sx={{ color: "#ffffff", fontWeight: 500 }}>👉 Header Offer</Typography>
                        <Button variant="contained"

                            sx={{
                                backgroundColor: "#ffffff",
                                color: "#1976d2",
                                fontWeight: 'bold',
                                '&:hover': {
                                    backgroundColor: "#e3f2fd"
                                }
                            }}
                            onClick={() => setOpenHeaderDialog(true)}>
                            + Add
                        </Button>
                    </Box>

                    {/* Dialog for Header Offer */}
                    <Dialog open={openHeaderDialog} onClose={() => setOpenHeaderDialog(false)}>
                        <DialogTitle>Add New Offer</DialogTitle>
                        <DialogContent>
                            <Formik
                                initialValues={{ text: '' }}
                                onSubmit={(values) => {
                                    console.log("Header Offer Submitted", values);
                                    setOpenHeaderDialog(false);
                                }}
                            >
                                <Form>
                                    <Field
                                        as={TextField}
                                        name="text"
                                        label="Offer Details"
                                        placeholder="e.g., Buy 1 Get 1 on chairs"
                                        fullWidth
                                        variant="outlined"
                                        margin="normal"
                                    />
                                    <button type="submit" className="submit-button">Add Offer</button>
                                </Form>
                            </Formik>
                        </DialogContent>
                    </Dialog>
                    <br />

                    {/* Sample Table */}


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
                                    <th style={{ padding: "12px" }}>Offer Details</th>
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
                                    <td style={{ padding: "12px" }}>Buy 1 Get 1 Free on Chairs</td>
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

                <br />
                <Divider sx={{ borderStyle: 'dotted', borderColor: 'black', borderWidth: '2px' }} />
                <br />

                {/* ========== HERO BANNER SECTION ========== */}
                <Box>
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{
                            backgroundColor: "#1976d2",
                            padding: "12px 24px",
                            borderRadius: 2,
                            boxShadow: 3
                        }}
                    >
                        <Typography
                            variant="h5" sx={{ color: "#ffffff", fontWeight: 500 }}
                        >
                            👉 Banner Offer (Hero Section)
                        </Typography>

                        <Button
                            variant="contained"

                            sx={{
                                backgroundColor: "#ffffff",
                                color: "#1976d2",
                                fontWeight: 'bold',
                                '&:hover': {
                                    backgroundColor: "#e3f2fd"
                                }
                            }}
                            onClick={() => setOpenHeroDialog(true)}
                        >
                            + Add
                        </Button>
                    </Box>


                    {/* Dialog for Hero Banner */}
                    <Dialog open={openHeroDialog} onClose={() => setOpenHeroDialog(false)}>
                        <DialogTitle>Add New Hero Banner</DialogTitle>
                        <DialogContent>
                            <Formik
                                initialValues={{}}
                                onSubmit={(values) => {
                                    console.log("Hero Banner Submitted", values);
                                    setOpenHeroDialog(false);
                                }}
                            >
                                <Form>
                                    <input type="file" name="heroBanner" />
                                    <button type="submit" className="submit-button">Add Banner</button>
                                </Form>
                            </Formik>
                        </DialogContent>
                    </Dialog>
                    <br />
                    {/* Sample Table */}
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
                                    <th style={{ padding: "12px" }}>Banner Image</th>
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
                                    <td style={{ padding: "12px" }}></td>
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

                <br />
                <Divider sx={{ borderStyle: 'dotted', borderColor: 'black', borderWidth: '2px' }} />
                <br />

                {/* ========== MAIN BANNER SECTION ========== */}
                <Box>
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{
                            backgroundColor: "#1976d2",
                            padding: "12px 24px",
                            borderRadius: 2,
                            boxShadow: 3
                        }}
                    >
                        <Typography variant="h5" sx={{ color: "#ffffff", fontWeight: 500 }}>
                            👉 Banner Offer (Main Section)
                        </Typography>

                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: "#ffffff",
                                color: "#1976d2",
                                fontWeight: 'bold',
                                '&:hover': {
                                    backgroundColor: "#e3f2fd"
                                }
                            }}
                            onClick={() => setOpenMainDialog(true)}
                        >
                            + Add
                        </Button>
                    </Box>

                    {/* Dialog for Main Banner */}
                    <Dialog open={openMainDialog} onClose={() => setOpenMainDialog(false)}>
                        <DialogTitle>Add New Main Banner</DialogTitle>
                        <DialogContent>
                            <Formik
                                initialValues={{}}
                                onSubmit={(values) => {
                                    console.log("Main Banner Submitted", values);
                                    setOpenMainDialog(false);
                                }}
                            >
                                <Form>
                                    <input type="file" name="mainBanner" />
                                    <button type="submit" className="submit-button">Add Banner</button>
                                </Form>
                            </Formik>
                        </DialogContent>
                    </Dialog><br />

                    {/* Sample Table */}
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
                                    <th style={{ padding: "12px" }}>Banner Image</th>
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
                                    <td style={{ padding: "12px" }}></td>
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

            </>
        </Dashboard>
    );
};

export default Header1;
