"use client";

import React, { useEffect, useState } from "react";
import {
  Paper,
  Typography,
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import Layout from "@/app/layout";

// Example routine data
const routine = [
  {
    day: "Monday",
    time: "10:00",
    subject: "Mathematics",
    classroomLink: "https://example.com/classroom/math",
  },
  {
    day: "Wednesday",
    time: "14:00",
    subject: "Science",
    classroomLink: "https://example.com/classroom/science",
  },
];

export default function AttendanceReminders() {
  const [reminders, setReminders] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedReminder, setSelectedReminder] = useState(null);

  useEffect(() => {
    // Simulate notification for demo purposes
    const showDemoNotification = () => {
      const todayReminders = routine.slice(0, 1); // Take the first reminder for demo
      setReminders(todayReminders);
      setSelectedReminder(todayReminders[0]); // Automatically select the first reminder
      setDialogOpen(true);
    };

    // Trigger demo notification on page load
    showDemoNotification();
  }, []);

  const handleDialogClose = () => {
    setDialogOpen(false);
    setSelectedReminder(null);
  };

  return (
  
    <Paper elevation={3} sx={{ padding: 3, borderRadius: 2 }}>
      <Typography variant="h5" gutterBottom>
        Attendance Reminders
      </Typography>
      <Box sx={{ mt: 3 }}>
        <Typography variant="subtitle1" gutterBottom>
          Upcoming Reminders
        </Typography>
        {reminders.length > 0 ? (
          <List>
            {reminders.map((reminder, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={`Subject: ${reminder.subject}`}
                  secondary={`Time: ${reminder.time}`}
                />
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => {
                    setSelectedReminder(reminder);
                    setDialogOpen(true);
                  }}
                >
                  View Details
                </Button>
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography>No reminders at the moment.</Typography>
        )}
      </Box>

      {/* Dialog for Notification */}
      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Class Reminder</DialogTitle>
        <DialogContent>
          {selectedReminder && (
            <>
              <Typography gutterBottom>
                Subject: {selectedReminder.subject}
              </Typography>
              <Typography gutterBottom>
                Time: {selectedReminder.time}
              </Typography>
              <Typography gutterBottom>
                Classroom Link:{" "}
                <a
                  href={selectedReminder.classroomLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "blue" }}
                >
                  {selectedReminder.classroomLink}
                </a>
              </Typography>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} variant="contained" color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>

  );
}
