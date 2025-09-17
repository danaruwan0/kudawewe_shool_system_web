import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

export default function AddStudentPage() {
  const [student, setStudent] = useState({
    name: "",
    phone: "",
    address: "",
    birthday: "",
    grade: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Student Data:", student);
    // 👉 Here you can send data to your backend API
    alert("Student Added Successfully!");
    setStudent({
      name: "",
      phone: "",
      address: "",
      birthday: "",
      grade: "",
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          width: "100%",
          maxWidth: 600,
          p: 3,
          borderRadius: 3,
        }}
      >
        <Typography
          variant="h5"
          align="center"
          sx={{ mb: 3, fontWeight: "bold", color: "primary.main" }}
        >
          Add New Student
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {/* Student Name */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Student Name"
                name="name"
                value={student.name}
                onChange={handleChange}
                required
              />
            </Grid>

            {/* Telephone */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Telephone"
                name="phone"
                type="tel"
                value={student.phone}
                onChange={handleChange}
                required
              />
            </Grid>

            {/* Address */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Address"
                name="address"
                multiline
                rows={2}
                value={student.address}
                onChange={handleChange}
                required
              />
            </Grid>

            {/* Birthday */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Birthday"
                name="birthday"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={student.birthday}
                onChange={handleChange}
                required
              />
            </Grid>

            {/* Current Class/Grade */}
            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                label="Grade"
                name="grade"
                value={student.grade}
                onChange={handleChange}
                required
              >
                {[...Array(13).keys()].slice(1).map((g) => (
                  <MenuItem key={g} value={g}>
                    Grade {g}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ py: 1.2, fontWeight: "bold" }}
              >
                Add Student
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
}
