"use client";

import React, { useState, useEffect } from "react";
import { Paper, Typography, Box } from "@mui/material";


export default function PasswordGenerator({ onPasswordGenerated }) {
  const [password, setPassword] = useState("");

  useEffect(() => {
    const generatePassword = () => {
      const newPassword = Math.floor(100000 + Math.random() * 900000).toString();
      setPassword(newPassword);
      console.log("Generated password:", newPassword); // Debugging log
      if (typeof onPasswordGenerated === "function") {
        onPasswordGenerated(newPassword);
      }
    };

    generatePassword(); // Generate the first password immediately
    const interval = setInterval(generatePassword, 10000); // Update every 10 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [onPasswordGenerated]);

  return (

    <Paper elevation={3} sx={{ padding: 3, borderRadius: 2, marginBottom: 4 }}>
      <Typography variant="h5" gutterBottom>
        Current Password
      </Typography>
      <Box
        sx={{
          mt: 2,
          padding: 2,
          backgroundColor: "#f0f0f0",
          textAlign: "center",
          borderRadius: "10px",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          {password}
        </Typography>
        <Typography variant="caption" color="textSecondary">
          (This password is valid for 10 seconds)
        </Typography>
      </Box>
    </Paper>

  );
}
