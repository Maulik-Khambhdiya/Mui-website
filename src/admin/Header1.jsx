import React from 'react'
import Dashboard from './Dashboard'
import { Formik, Form, Field } from 'formik';
import { TextField, Box, Typography } from '@mui/material';
import "../admin/Page's CSS/header1.css"

const Header1 = () => {
    return (

        <Dashboard>
            <>

                <Typography sx={{ backgroundColor: "black", color: "white", padding: "5px 0" }} variant="h4" align="center">Header Offer</Typography>
                <Box sx={{ textAlign: "center", maxWidth: 400, margin: '40px auto', padding: 3, boxShadow: 3, borderRadius: 2 }}>




                    <Typography variant="h5" align="center" gutterBottom>
                        Add New Offer
                    </Typography>
                    <Formik

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
                </Box>


                <Typography sx={{ backgroundColor: "black", color: "white", padding: "5px 0" }} variant="h4" align="center">Banner Offer</Typography>

                <Box sx={{ textAlign: "center", maxWidth: 400, margin: '40px auto', padding: 3, boxShadow: 3, borderRadius: 2 }}>




                    <Typography variant="h5" align="center" gutterBottom>
                        Add New Banner
                    </Typography>
                    <Formik

                    >

                        <Form>
                            <input type="file" name="" id="" />

                            <button type="submit" className="submit-button">Add Banner</button>

                        </Form>

                    </Formik>
                </Box>

            </>
        </Dashboard>

    )
}

export default Header1
