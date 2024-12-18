"use client";

import React, { useState } from "react";
import {
  Paper,
  Typography,
  Box,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";


export default function PinBasedAttendance({ activePassword, onAttendanceMarked }) {
  const [inputPassword, setInputPassword] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = () => {
    if (inputPassword === activePassword) {
      setIsSuccess(true);
      setErrorMessage("");
      onAttendanceMarked();
    } else {
      setErrorMessage("Incorrect password. Please try again.");
      setIsSuccess(false);
    }
  };

  const handleCloseDialog = () => {
    setIsSuccess(false);
    setInputPassword("");
  };

  return (

    <Paper elevation={3} sx={{ padding: 3, borderRadius: 2 }}>
      <Typography variant="h5" gutterBottom>
        PIN-Based Attendance
      </Typography>
      <Box sx={{ mt: 3 }}>
        <TextField
          label="Enter 6-Digit Password"
          variant="outlined"
          fullWidth
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
          error={!!errorMessage}
          helperText={errorMessage}
        />
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={handleSubmit}
          disabled={!inputPassword}
        >
          Submit
        </Button>
      </Box>

      {/* Success Dialog */}
      <Dialog open={isSuccess} onClose={handleCloseDialog}>
        <DialogTitle>Attendance Recorded</DialogTitle>
        <DialogContent>
          <Typography>Your attendance has been successfully recorded!</Typography>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="primary" onClick={handleCloseDialog}>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>

  );
}
