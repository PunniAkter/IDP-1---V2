"use client";

import React, { useState, useMemo } from "react";
import {
  Paper,
  Typography,
  Box,
  TextField,
  Button,
  Slider,
  Divider,
} from "@mui/material";
import GeoFencingComponent from "./GeoFencingComponent";


export default function AdminGeoFenceComponent() {
  const [latitude, setLatitude] = useState(23.829517426731908);
  const [longitude, setLongitude] = useState(90.56631363765501);
  const [radius, setRadius] = useState(5000);

  // Memoize the geo-fence object to prevent unnecessary re-renders
  const geoFence = useMemo(() => {
    return { latitude, longitude, radius };
  }, [latitude, longitude, radius]);

  const handleSave = () => {
    console.log("Geo-Fence Defined by Admin:", geoFence);
    alert(`Geo-Fence Updated:\n${JSON.stringify(geoFence, null, 2)}`);
  };

  return (
   
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <Paper elevation={4} sx={{ padding: 4, borderRadius: 3 }}>
        <Typography variant="h4" align="center" sx={{ color: "#3f51b5", mb: 3 }}>
          Admin: Define Geo-Fence Boundaries
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            label="Latitude"
            variant="outlined"
            type="number"
            value={latitude}
            onChange={(e) => setLatitude(parseFloat(e.target.value))}
            fullWidth
          />
          <TextField
            label="Longitude"
            variant="outlined"
            type="number"
            value={longitude}
            onChange={(e) => setLongitude(parseFloat(e.target.value))}
            fullWidth
          />
          <Box>
            <Typography gutterBottom>Radius (meters): {radius}</Typography>
            <Slider
              value={radius}
              min={100}
              max={20000}
              step={100}
              onChange={(e, value) => setRadius(value)}
              valueLabelDisplay="auto"
            />
          </Box>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSave}
            sx={{ alignSelf: "center" }}
          >
            Save Geo-Fence
          </Button>
        </Box>
      </Paper>

      {/* Pass memoized geo-fence to the child component */}
      <GeoFencingComponent adminGeoFence={geoFence} />
    </Box>
  
  );
}
