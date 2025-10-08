import React from 'react';
import {
    Container,
    Typography,
    TextField,
    MenuItem,
    Button,
    Box,
} from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import PublicLayout from './PublicLayout';

const appointmentTypes = [
    { label: 'Showroom Visit', value: 'showroom' },
    { label: 'Video Consultation', value: 'video' },
    { label: 'Home Visit', value: 'home' },
];

const AppointmentPage = () => {

    return (
        <>
            <PublicLayout>
                <Container maxWidth="sm" sx={{ py: 5 }}>
                    <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
                        Book an Appointment
                    </Typography>
                    <Typography align="center" color="text.secondary" mb={4}>
                        We'd love to help you design your dream space.
                    </Typography>

                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
                            phone: '',
                            type: '',
                            date: '',
                            notes: '',
                        }}
                        validationSchema={Yup.object({
                            name: Yup.string().required('Required'),
                            email: Yup.string().email('Invalid email').required('Required'),
                            type: Yup.string().required('Select appointment type'),
                            date: Yup.string().required('Please choose a date/time'),
                        })}
                        onSubmit={(values, { resetForm }) => {
                            console.log('Appointment submitted:', values);
                            alert('Thank you! Your appointment has been booked.');
                            resetForm();
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <Field
                                    as={TextField}
                                    name="name"
                                    label="Full Name"
                                    fullWidth
                                    margin="normal"
                                    error={touched.name && !!errors.name}
                                    helperText={touched.name && errors.name}
                                />

                                <Field
                                    as={TextField}
                                    name="email"
                                    label="Email Address"
                                    fullWidth
                                    margin="normal"
                                    error={touched.email && !!errors.email}
                                    helperText={touched.email && errors.email}
                                />

                                <Field
                                    as={TextField}
                                    name="phone"
                                    label="Phone Number"
                                    fullWidth
                                    margin="normal"
                                />

                                <Field
                                    as={TextField}
                                    name="type"
                                    label="Appointment Type"
                                    select
                                    fullWidth
                                    margin="normal"
                                    error={touched.type && !!errors.type}
                                    helperText={touched.type && errors.type}
                                >
                                    {appointmentTypes.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </Field>

                                <Field
                                    as={TextField}
                                    name="date"
                                    type="datetime-local"
                                    label="Preferred Date & Time"
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{ shrink: true }}
                                    error={touched.date && !!errors.date}
                                    helperText={touched.date && errors.date}
                                />

                                <Field
                                    as={TextField}
                                    name="notes"
                                    label="Additional Notes (optional)"
                                    multiline
                                    rows={4}
                                    fullWidth
                                    margin="normal"
                                />

                                <Box textAlign="center" mt={3}>
                                    <Button variant="contained" sx={{ fontSize: "15px", backgroundColor: "black", borderRadius: "0", padding: "10px 25px", ":hover": { backgroundColor: "white", color: "black" } }}>Book Appointment</Button>
                                </Box>
                            </Form>
                        )}
                    </Formik>
                </Container>
            </PublicLayout>
        </>
    );
};

export default AppointmentPage;
