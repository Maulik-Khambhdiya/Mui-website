import React from 'react'
import Dashboard from './Dashboard'
import { Formik, Form, Field } from 'formik';
import { TextField, Box, Typography, Divider } from '@mui/material';


const NavigationMenu = () => {
    return (
        <>

            <Dashboard>
                <Box>

                    <Typography sx={{ backgroundColor: "skyblue", color: "seashell", padding: "5px 0" }} variant="h4" align="center">Navigation Menu</Typography>
                    <Box sx={{ textAlign: "center", maxWidth: 400, margin: '40px auto', padding: 3, boxShadow: 3, borderRadius: 2 }}>


                        <Typography variant="h5" align="center" gutterBottom>
                            Add Nav Label
                        </Typography>
                        <Formik

                        >

                            <Form>
                                <Field
                                    as={TextField}
                                    name="text"
                                    label="Nav-Label"
                                    placeholder="e.g., Best Seller"
                                    fullWidth
                                    variant="outlined"
                                    margin="normal"

                                />

                                <Field
                                    as={TextField}
                                    name="text"
                                    label="Nav-Path"
                                    placeholder="e.g., /bestseller"
                                    fullWidth
                                    variant="outlined"
                                    margin="normal"

                                />

                                <button type="submit" className="submit-button">Add Label</button>

                            </Form>

                        </Formik>

                        <br />

                    </Box>

                    <Box>
                        <table style={{ width: "100%" }} border={1}>
                            <tr>
                                <th>No</th>
                                <th>Label Name</th>
                                <th>Label Path</th>
                                <th>Remove</th>
                                <th>Change</th>
                            </tr>


                        </table>
                    </Box>

                </Box>
                <br />
                <Divider sx={{
                    borderStyle: 'dotted',
                    borderColor: 'black',
                    borderWidth: '2px',
                }}></Divider>
                <br />

            </Dashboard>

        </>
    )
}

export default NavigationMenu
