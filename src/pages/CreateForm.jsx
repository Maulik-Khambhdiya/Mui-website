import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import {
    Box,
    Button,
    Typography,
    TextField,
    InputLabel,

} from '@mui/material';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const CreateForm = () => {

    const history=useHistory()
    const [list,setList]=useState([])
    const [ini, setIni] = useState({
        name: "",
        email: "",
        password: "",
        profile: ""
    })

    const viewData=()=>{
        axios.get("http://localhost:3000/users/signup/")
        .then((res) => {

                setList(res.data.data)
                //console.log(res.data.data);


            })
            .catch((error) => {
                console.log(error);

            })
    }


    const handleSubmit = (values, { resetForm }) => {
       axios.post("http://localhost:3000/users/signup/", values, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(() => {
                    console.log("Data added successfully");
                    resetForm()
                    viewData()
                   
                })

                .catch((error) => {
                    console.log(error);
                })
        }

    

    return (
       <> <Box
            sx={{

                maxWidth: 400,
                margin: 'auto',
                mt: 5,
                p: 3,
                mb: 5,
                boxShadow: 3,
                borderRadius: 2,
                backgroundColor: 'white',
            }}
        >
            <Typography variant="h4" align="center" gutterBottom>
                Create Account
            </Typography>

            <Formik
                initialValues={ini}
                onSubmit={handleSubmit}
            >
                {({ setFieldValue }) => (
                       <Form encType='multipart/form-data'>

                        <Box sx={{ mb: 2 }}>
                            <Field
                                name="name"
                                as={TextField}
                                label="Name"
                                variant="outlined"
                                fullWidth
                            />
                        </Box>

                        <Box sx={{ mb: 2 }}>
                            <Field
                                name="email"
                                as={TextField}
                                label="Email"
                                type="email"
                                variant="outlined"
                                fullWidth

                            />
                        </Box>

                        <Box sx={{ mb: 2 }}>
                            <Field
                                name="password"
                                as={TextField}
                                label="Password"
                                type="password"
                                variant="outlined"
                                fullWidth

                            />
                        </Box>

                        <Box sx={{ mb: 3 }}>
                            <InputLabel htmlFor="profile-upload" sx={{ mb: 1 }}>
                                Upload Profile Picture
                            </InputLabel>
                            <input
                                id="profile-upload"
                                name="profile"
                                type="file"
                                accept="image/*"
                                onChange={(e) => {
                                    setFieldValue('profile', e.target.files[0]);
                                }}
                                style={{ display: 'block' }}
                            />

                        </Box>

                        <Button
                            type="submit"
                            variant="contained"
                            style={{ background: "black", color: "white" }}
                            fullWidth

                        >
                            Create Account
                        </Button>
                    </Form>
                )}
            </Formik>
        </Box></>
    );
};

export default CreateForm;
