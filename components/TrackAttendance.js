"use client";

import React from "react";
import { Box, Typography, CircularProgress, LinearProgress, Paper } from "@mui/material";


export default function TrackAttendance() {
  const attendance = 45; // Example value, can be fetched dynamically

  return (
 
    <Paper elevation={3} sx={{ padding: 3, borderRadius: 2, marginBottom: 4 }}>
      <Typography variant="h5" gutterBottom>
        Current Attendance
      </Typography>
      <Box textAlign="center" sx={{ mt: 3 }}>
        <CircularProgress
          variant="determinate"
          value={attendance}
          size={150}
          thickness={5}
          sx={{
            color: attendance >= 75 ? "green" : "red",
            marginBottom: 2,
          }}
        />
        <Typography variant="h6" sx={{ color: attendance >= 75 ? "green" : "red" }}>
          {attendance}% Attendance
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {attendance >= 75
            ? "You are maintaining good attendance!"
            : "Your attendance is below the required threshold!"}
        </Typography>
      </Box>
      <Box sx={{ mt: 5 }}>
        <Typography variant="body1" gutterBottom>
          Monthly Attendance Progress
        </Typography>
        <LinearProgress
          variant="determinate"
          value={attendance}
          sx={{
            height: 10,
            borderRadius: 5,
            backgroundColor: "#f5f5f5",
            "& .MuiLinearProgress-bar": { backgroundColor: attendance >= 75 ? "green" : "red" },
          }}
        />
      </Box>
    </Paper>

  );
}
