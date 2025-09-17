import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  MenuItem,
  Typography,
  Paper,
  Grid,
} from "@mui/material";

export default function AddTeachersPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    birthday: "",
    subject: "",
    grade: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Teacher Data:", formData);
    alert("Teacher added successfully!");
    //  Here you can connect with backend (API POST request)
  };

  return (
    <Grid container justifyContent="center" sx={{ mt: 5 }}>
      <Grid item xs={12} sm={10} md={8} lg={6}>
        <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
          <Typography variant="h5" gutterBottom align="center">
            Add New Teacher
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              mt: 2,
            }}
          >
            <TextField
              label="Teacher Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              required
            />
            <TextField
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              fullWidth
              required
            />
            <TextField
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              fullWidth
              multiline
              rows={2}
            />
            <TextField
              label="Birthday"
              name="birthday"
              type="date"
              value={formData.birthday}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
            <TextField
              select
              label="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              fullWidth
            >
              <MenuItem value="Math">Math</MenuItem>
              <MenuItem value="Science">Science</MenuItem>
              <MenuItem value="English">English</MenuItem>
              <MenuItem value="History">History</MenuItem>
            </TextField>
            <TextField
              select
              label="Grade"
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              fullWidth
            >
              {[...Array(11)].map((_, i) => (
                <MenuItem key={i + 1} value={i + 1}>
                  Grade {i + 1}
                </MenuItem>
              ))}
            </TextField>

            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 2, borderRadius: 2, py: 1.2 }}
            >
              Add Teacher
            </Button>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}
