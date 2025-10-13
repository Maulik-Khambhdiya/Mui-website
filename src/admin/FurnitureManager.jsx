import React, { useState } from "react";
import Dashboard from "./Dashboard";
import { Formik, Form, Field } from "formik";
import {
  TextField,
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  FormControlLabel,
  Switch,
  MenuItem,
} from "@mui/material";

const SwitchField = ({ field, form, label }) => (
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

const FurnitureManager = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [items, setItems] = useState([]);

  const handleOpen = () => setOpenDialog(true);
  const handleClose = () => setOpenDialog(false);

  return (
    <Dashboard>
      <Box>
        {/* Header */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            backgroundColor: "#1976d2",
            padding: "12px 20px",
            borderRadius: "8px",
            marginBottom: "20px",
          }}
        >
          <Typography variant="h5" sx={{ color: "#fff", fontWeight: "bold" }}>
            🪑 Furniture Manager
          </Typography>

          <Button
            variant="contained"
            sx={{ backgroundColor: "#fff", color: "#1976d2", fontWeight: "bold" }}
            onClick={handleOpen}
          >
            + Add Item
          </Button>
        </Box>

        {/* Dialog Form */}
        <Dialog open={openDialog} onClose={handleClose}>
          <DialogTitle>Add New Furniture</DialogTitle>
          <DialogContent>
            <Formik
              initialValues={{
                category: "modern",
                name: "",
                discountPrice: "",
                originalPrice: "",
                description: "",
                inStock: true,
                image: null,
              }}
              onSubmit={async (values, { resetForm }) => {
                
                const formData = new FormData();
                formData.append("category", values.category);
                formData.append("name", values.name);
                formData.append("discountPrice", values.discountPrice);
                formData.append("originalPrice", values.originalPrice);
                formData.append("description", values.description);
                formData.append("inStock", values.inStock);
                formData.append("image", values.image); 

                try {
                  const res = await fetch("http://localhost:3000/furnituremanager/", { // Adjust your backend URL
                    method: "POST",
                    body: formData,
                  });

                  const data = await res.json();

                  if (res.ok) {
                    console.log("Furniture added:", data);
                    // Assuming backend returns the created item with id and imageUrl
                    setItems([...items, data]);
                    resetForm();
                    handleClose();
                  } else {
                    console.error("Server error:", data.error);
                  }
                } catch (err) {
                  console.error("Upload failed:", err);
                }
              }}
            >
              {({ values, setFieldValue }) => (
                <Form encType="multipart/form-data" style={{ marginTop: 10 }}>
                  {/* Category */}
                  <Field
                    as={TextField}
                    select
                    name="category"
                    label="Category"
                    fullWidth
                    margin="normal"
                  >
                    <MenuItem value="modern">Modern</MenuItem>
                    <MenuItem value="classic">Classic</MenuItem>
                    <MenuItem value="rustic">Rustic</MenuItem>
                  </Field>

                  <Field
                    as={TextField}
                    name="name"
                    label="Item Name"
                    fullWidth
                    margin="normal"
                  />

                  {/* Image Upload */}
                  <Box mt={2}>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(event) => {
                        const file = event.currentTarget.files[0];
                        if (file) {
                          setFieldValue("image", file); // Store File object
                        }
                      }}
                    />
                    {/* Preview */}
                    {values.image && (
                      <Box mt={2}>
                        <img
                          src={URL.createObjectURL(values.image)}
                          alt="Preview"
                          style={{ width: "100px", borderRadius: "8px" }}
                        />
                      </Box>
                    )}
                  </Box>

                  <Field
                    as={TextField}
                    name="discountPrice"
                    label="Discount Price"
                    fullWidth
                    margin="normal"
                  />

                  <Field
                    as={TextField}
                    name="originalPrice"
                    label="Original Price"
                    fullWidth
                    margin="normal"
                  />

                  <Field name="inStock" component={SwitchField} label="In Stock" />

                  <Field
                    as={TextField}
                    name="description"
                    label="Description"
                    multiline
                    rows={3}
                    fullWidth
                    margin="normal"
                  />

                  <Box textAlign="center" mt={2}>
                    <button type="submit" className="submit-button">
                      Add Item
                    </button>
                  </Box>
                </Form>
              )}
            </Formik>
          </DialogContent>
        </Dialog>

        {/* Table */}
        <Box mt={3}>
          <table style={{ width: "100%", textAlign: "center" }}>
            <thead>
              <tr style={{ backgroundColor: "#c8f889ff", height: "50px" }}>
                <th>No</th>
                <th>Category</th>
                <th>Name</th>
                <th>Image</th>
                <th>Discount Price</th>
                <th>Original Price</th>
                <th>Stock</th>
                <th>Description</th>
                <th>Remove</th>
                <th>Change</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={item.id || index} style={{ backgroundColor: "#fff" }}>
                  <td>{index + 1}</td>
                  <td>{item.category}</td>
                  <td>{item.name}</td>
                  <td>
                    <img
                      src={item.imageUrl || "https://via.placeholder.com/60"}
                      alt={item.name}
                      style={{ width: "60px", borderRadius: "4px" }}
                    />
                  </td>
                  <td>${item.discountPrice}</td>
                  <td>${item.originalPrice}</td>
                  <td>{item.inStock ? "✅ Yes" : "❌ No"}</td>
                  <td>{item.description}</td>
                  <td style={{ padding: "12px" }}>
                    <Button
                      size="small"
                      variant="outlined"
                      color="error"
                      onClick={() =>
                        setItems(items.filter((_, i) => i !== index))
                      }
                    >
                      Remove
                    </Button>
                  </td>
                  <td style={{ padding: "12px" }}>
                    <Button size="small" variant="outlined" color="secondary">
                      Change
                    </Button>
                  </td>
                </tr>
              ))}

              {/* Sample fallback row if no items */}
              {items.length === 0 && (
                <tr style={{ backgroundColor: "#fff" }}>
                  <td>1</td>
                  <td>Modern</td>
                  <td>Chair</td>
                  <td>
                    <img
                      src="https://via.placeholder.com/60"
                      alt="Chair"
                      style={{ width: "60px", borderRadius: "4px" }}
                    />
                  </td>
                  <td>$200</td>
                  <td>$300</td>
                  <td>✅ Yes</td>
                  <td>A sleek modern chair with premium finish.</td>
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
              )}
            </tbody>
          </table>
        </Box>
      </Box>
    </Dashboard>
  );
};

export default FurnitureManager;
