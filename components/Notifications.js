"use client";

import React, { useMemo } from "react";
import {
  Paper,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@mui/material";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import EventNoteIcon from "@mui/icons-material/EventNote";
import AccessTimeIcon from "@mui/icons-material/AccessTime";


export default function Notifications() {
  const demoSchedule = [
    { subject: "Mathematics", time: "09:00 AM", location: "Room 101" },
    { subject: "Physics", time: "10:30 AM", location: "Room 202" },
    { subject: "Chemistry", time: "12:00 PM", location: "Room 303" },
    { subject: "English", time: "02:00 PM", location: "Room 404" },
    { subject: "Computer Science", time: "04:00 PM", location: "Room 505" },
  ];

  // Get the immediate next class
  const now = new Date();
  const nextClass = useMemo(() => {
    const currentTime = now.getHours() * 60 + now.getMinutes();
    return demoSchedule.find((classItem) => {
      const [hours, minutes] = classItem.time
        .replace("AM", "")
        .replace("PM", "")
        .trim()
        .split(":")
        .map(Number);
      const classMinutes = (classItem.time.includes("PM") && hours !== 12 ? hours + 12 : hours) * 60 + minutes;
      return classMinutes > currentTime;
    });
  }, [demoSchedule, now]);

  return (
    <Paper elevation={3} sx={{ padding: 3, borderRadius: 2, marginTop: 4 }}>
      <Typography variant="h5" gutterBottom>
        Today's Routine
      </Typography>
      <List>
        {demoSchedule.map((classItem, index) => {
          const isNextClass = nextClass && nextClass.subject === classItem.subject;

          return (
            <React.Fragment key={index}>
              <ListItem
                sx={{
                  bgcolor: isNextClass ? "#e3f2fd" : "transparent",
                  borderRadius: "8px",
                  mb: 1,
                  boxShadow: isNextClass ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "none",
                }}
              >
                <ListItemIcon>
                  {isNextClass ? (
                    <NotificationsActiveIcon color="primary" />
                  ) : (
                    <EventNoteIcon color="action" />
                  )}
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: isNextClass ? "bold" : "normal",
                      }}
                    >
                      {classItem.subject}
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2" color="text.secondary">
                      {classItem.time} - {classItem.location}
                    </Typography>
                  }
                />
              </ListItem>
              {index < demoSchedule.length - 1 && <Divider />}
            </React.Fragment>
          );
        })}
      </List>
    </Paper>
  );
}
