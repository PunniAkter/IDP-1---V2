"use client";

import React from "react";
import {
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";


export default function PastAttendance({ attendanceRecords = [] }) {
  return (

    <Paper elevation={3} sx={{ padding: 3, borderRadius: 2, marginTop: 4 }}>
      <Typography variant="h5" gutterBottom>
        Past Attendance Records
      </Typography>
      <TableContainer sx={{ mt: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="subtitle1">Date</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle1">Time</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle1">Subject</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle1">Status</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {attendanceRecords.map((record, index) => (
              <TableRow key={index}>
                <TableCell>{record.date}</TableCell>
                <TableCell>{record.time}</TableCell>
                <TableCell>{record.subject}</TableCell>
                <TableCell>
                  <Typography
                    sx={{
                      color: record.status === "Present" ? "green" : "red",
                    }}
                  >
                    {record.status}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>

  );
}
