import React, { useState } from 'react'
import Dashboard from './Dashboard';
import { Formik, Form, Field } from 'formik';
import {
  TextField, Typography, Divider,
  Dialog, DialogTitle, DialogContent
} from '@mui/material';

import { Switch, FormControlLabel, Button, Box } from '@mui/material';

const SwitchField = ({ field, form, label }) => {
  return (
    <FormControlLabel
      control={
        <Switch
          checked={field.value}
          onChange={() => form.setFieldValue(field.name, !field.value)}
          color="primary"
        />
      }
      label={label}
    />
  );
};

const BestsellerProduct = () => {


  const [inStock, setInStock] = useState(true);
  const [isBestSeller, setIsBestSeller] = useState(false);

  const handleToggleInStock = () => setInStock((prev) => !prev);
  const handleToggleBestSeller = () => setIsBestSeller((prev) => !prev);

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
              ⭐ Add Best Selling Item
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

                  <br /><br />
                  <input type="file" name="image" required />


                  <Field
                    as={TextField}
                    name="discount price"
                    label="Discount Price"
                    placeholder="e.g., $ 200"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                  />

                  <Field
                    as={TextField}
                    name="original price"
                    label="Original Price"
                    placeholder="e.g., $ 300"
                    fullWidth
                    variant="outlined"
                    margin="normal"
                  />

                  <Field name="inStock" component={SwitchField} label="In Stock" />
                  <Field name="isBestSeller" component={SwitchField} label="Best Seller" />


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
                borderSpacing: "0 10px",
                textAlign: "center",
              }}
            >
              <thead>
                <tr style={{ backgroundColor: "#c8f889ff", height: "50px" }}>
                  <th style={{ fontSize: "14px", padding: "12px" }}>No</th>
                  <th style={{ fontSize: "14px",padding: "12px" }}>Item Name</th>
                  <th style={{ fontSize: "14px",padding: "12px" }}>Item Image</th>
                  <th style={{ fontSize: "14px",padding: "12px" }}>Discount Price</th>
                  <th style={{ fontSize: "14px",padding: "12px" }}>Original Price</th>
                  <th style={{ fontSize: "14px",padding: "12px" }}>Stock Availability</th>
                  <th style={{ fontSize: "14px",padding: "12px" }}>Best Seller</th>
                  <th style={{ fontSize: "14px",padding: "12px" }}>Remove</th>
                  <th style={{ fontSize: "14px",padding: "12px" }}>Change</th>
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
                  <td style={{ padding: "12px" }}>Chair</td>
                  <td style={{ padding: "12px" }}>
                    <img src="https://via.placeholder.com/80x50" alt="Sample" />
                  </td>
                  <td style={{ padding: "12px" }}>$ 200</td>
                  <td style={{ padding: "12px" }}>$ 300</td>
                  <td style={{ padding: "12px" }}>
                    <Switch checked={inStock} onChange={handleToggleInStock} color="primary" />
                  </td>
                  <td style={{ padding: "12px" }}>
                    <Switch checked={isBestSeller} onChange={handleToggleBestSeller} color="secondary" />
                  </td>
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
  )
}

export default BestsellerProduct