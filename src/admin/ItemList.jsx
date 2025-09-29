import React from 'react'
import Dashboard from './Dashboard'
import { Formik, Form, Field } from 'formik';
import { TextField, Box, Typography, Divider } from '@mui/material';

const ItemList = () => {
    return (
        <>
            <Dashboard>
                <Box>

                    <Typography sx={{ backgroundColor: "skyblue", color: "seashell", padding: "5px 0" }} variant="h4" align="center">Header Offer</Typography>
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

                        <br />

                    </Box>

                    <Box>
                        <table style={{ width: "100%" }} border={1}>
                            <tr>
                                <th>No</th>
                                <th>Offer Details</th>
                                <th>Remove</th>
                                <th>Change</th>
                            </tr>


                        </table>
                    </Box>

                </Box>
            </Dashboard>
        </>
    )
}

export default ItemList
