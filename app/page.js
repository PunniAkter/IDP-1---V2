


"use client";

import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { useRouter } from "next/navigation"; // For navigation
import Grid from "@mui/material/Grid";


export default function Home() {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <div>
    <Box sx={{ flexGrow: 1, padding: 4 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#3f51b5" }}
      >
        Dashboard Navigation
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {/* Box 1 */}
        <Grid item xs={12} sm={4}>
          <Paper
            elevation={4}
            onClick={() => handleNavigation("/teacher")}
            sx={{
              padding: 3,
              textAlign: "center",
              cursor: "pointer",
              borderRadius: 2,
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#f0f4ff",
                transform: "scale(1.05)",
              },
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
              Teacher
            </Typography>
          </Paper>
        </Grid>

        {/* Box 2 */}
        <Grid item xs={12} sm={4}>
          <Paper
            elevation={4}
            onClick={() => handleNavigation("/students")}
            sx={{
              padding: 3,
              textAlign: "center",
              cursor: "pointer",
              borderRadius: 2,
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#f0f4ff",
                transform: "scale(1.05)",
              },
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
              Students
            </Typography>

          </Paper>
        </Grid>

        {/* Box 3 */}
        <Grid item xs={12} sm={4}>
          <Paper
            elevation={4}
            onClick={() => handleNavigation("/admin")}
            sx={{
              padding: 3,
              textAlign: "center",
              cursor: "pointer",
              borderRadius: 2,
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#f0f4ff",
                transform: "scale(1.05)",
              },
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
              Admin
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
    </div>
  );
}
