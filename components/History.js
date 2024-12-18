"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Collapse,
  Button,
  Link,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";


// Sample local JSON data
const attendanceRecords = [
  {
    date: "2024-12-01",
    status: "Present",
    details: {
      topicsCovered: ["Introduction to Algebra", "Basic Equations"],
      homework: "Complete exercises 1.1 and 1.2 from the textbook.",
      classroomLink: "https://example.com/classroom/algebra",
      assignments: ["Assignment 1: Algebra Basics"],
    },
  },
  {
    date: "2024-12-02",
    status: "Absent",
    details: {
      topicsCovered: ["Introduction to Geometry"],
      homework: "Review Chapter 2: Geometry Basics.",
      classroomLink: "https://example.com/classroom/geometry",
      assignments: [],
    },
  },
  {
    date: "2024-12-03",
    status: "Late",
    details: {
      topicsCovered: ["Advanced Equations"],
      homework: "Solve problems 5, 6, and 7 in exercise 1.3.",
      classroomLink: "https://example.com/classroom/advanced-equations",
      assignments: ["Assignment 2: Advanced Equations"],
    },
  },
];

export default function History() {
  const [expandedRow, setExpandedRow] = useState(null);

  const handleRowClick = (index) => {
    setExpandedRow((prev) => (prev === index ? null : index));
  };

  return (

    <Paper elevation={3} sx={{ padding: 3, borderRadius: 2, marginBottom: 4 }}>
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
                <Typography variant="subtitle1">Status</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="subtitle1">Details</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {attendanceRecords.map((record, index) => (
              <React.Fragment key={index}>
                {/* Main Row */}
                <TableRow
                  hover
                  onClick={() => handleRowClick(index)}
                  sx={{ cursor: "pointer" }}
                >
                  <TableCell>{record.date}</TableCell>
                  <TableCell>
                    <Typography
                      sx={{
                        color:
                          record.status === "Present"
                            ? "green"
                            : record.status === "Late"
                            ? "orange"
                            : "red",
                      }}
                    >
                      {record.status}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    {expandedRow === index ? (
                      <ExpandLessIcon />
                    ) : (
                      <ExpandMoreIcon />
                    )}
                  </TableCell>
                </TableRow>

                {/* Expanded Details */}
                <TableRow>
                  <TableCell colSpan={3} sx={{ p: 0 }}>
                    <Collapse in={expandedRow === index} timeout="auto" unmountOnExit>
                      <Box sx={{ padding: 2, backgroundColor: "#f9f9f9" }}>
                        <Typography variant="subtitle1" gutterBottom>
                          Topics Covered:
                        </Typography>
                        <ul>
                          {record.details.topicsCovered.map((topic, i) => (
                            <li key={i}>
                              <Typography variant="body2">{topic}</Typography>
                            </li>
                          ))}
                        </ul>
                        <Typography variant="subtitle1" gutterBottom>
                          Homework:
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          {record.details.homework}
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                          Classroom Link:
                        </Typography>
                        <Link
                          href={record.details.classroomLink}
                          target="_blank"
                          rel="noopener"
                        >
                          {record.details.classroomLink}
                        </Link>
                        <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
                          Assignments:
                        </Typography>
                        {record.details.assignments.length > 0 ? (
                          <ul>
                            {record.details.assignments.map((assignment, i) => (
                              <li key={i}>
                                <Typography variant="body2">{assignment}</Typography>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <Typography variant="body2">No assignments.</Typography>
                        )}
                      </Box>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>

  );
}
