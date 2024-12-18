"use client";

import React, { useState, useEffect } from "react";
import { Paper, Typography, Box, Button, Alert, CircularProgress } from "@mui/material";


// Function to calculate distance using Haversine formula
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371e3; // Radius of the Earth in meters
  const φ1 = (lat1 * Math.PI) / 180;
  const φ2 = (lat2 * Math.PI) / 180;
  const Δφ = ((lat2 - lat1) * Math.PI) / 180;
  const Δλ = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(Δφ / 2) ** 2 +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // Distance in meters
};

export default function GeoFencingComponent({ adminGeoFence }) {
  // Provide fallback default values
  const defaultGeoFence = {
    latitude: 23.829517426731908,
    longitude: 90.56631363765501,
    radius: 20000, // Default radius in meters
  };

  const geoFence = adminGeoFence || defaultGeoFence;

  const [currentLocation, setCurrentLocation] = useState(null);
  const [distance, setDistance] = useState(null);
  const [isInsideGeoFence, setIsInsideGeoFence] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchLocation = () => {
    setLoading(true);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ latitude, longitude });

          // Calculate distance and check against geo-fence
          const dist = calculateDistance(
            latitude,
            longitude,
            geoFence.latitude,
            geoFence.longitude
          );
          setDistance(dist);
          setIsInsideGeoFence(dist <= geoFence.radius);
          setLoading(false);
        },
        (err) => {
          setError("Unable to fetch location. Ensure location services are enabled.");
          setLoading(false);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLocation(); // Fetch location when the component mounts
  }, []); // No dependency here to avoid unnecessary re-renders

  return (
    <Paper elevation={3} sx={{ padding: 3, borderRadius: 2 }}>
      <Typography variant="h5" gutterBottom>
        Geo-Fencing Status
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Alert severity="error">{error}</Alert>
      ) : currentLocation ? (
        <>
          <Typography>
            <strong>Your Location:</strong> {currentLocation.latitude}, {currentLocation.longitude}
          </Typography>
          <Typography>
            <strong>Admin Geo-Fence:</strong> {geoFence.latitude}, {geoFence.longitude}
          </Typography>
          <Typography>
            <strong>Distance:</strong> {distance !== null ? `${distance.toFixed(2)} meters` : "Calculating..."}
          </Typography>
          <Alert severity={isInsideGeoFence ? "success" : "warning"} sx={{ mt: 2 }}>
            {isInsideGeoFence
              ? "You are inside the geo-fence."
              : "You are outside the geo-fence."}
          </Alert>
        </>
      ) : (
        <Typography>Location data not available.</Typography>
      )}
      <Button variant="contained" color="primary" onClick={fetchLocation} sx={{ mt: 2 }}>
        Refresh Location
      </Button>
    </Paper>

  );
}
