"use client"

import React, { useState } from 'react';
import { Typography, Accordion, AccordionSummary, AccordionDetails, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SaveIcon from '@mui/icons-material/Save';


const initialCourses = [
  {
    id: 1,
    title: 'Mathematics',
    students: [
      { id: 101, name: 'Rahim Uddin', entryTime: '10:05 AM', password: '123456', classwork: 'Submitted' },
      { id: 102, name: 'Karim Mia', entryTime: '10:10 AM', password: '654321', classwork: 'Not Submitted' },
    ]
  },
  {
    id: 2,
    title: 'Science',
    students: [
      { id: 201, name: 'Ayesha Siddiqa', entryTime: '10:15 AM', password: '112233', classwork: 'Submitted' },
      { id: 202, name: 'Fatema Begum', entryTime: '10:20 AM', password: '221100', classwork: 'Submitted' },
    ]
  },
  {
    id: 3,
    title: 'History',
    students: [
      { id: 301, name: 'Monir Khan', entryTime: '10:25 AM', password: '333444', classwork: 'Not Submitted' },
      { id: 302, name: 'Jasim Uddin', entryTime: '10:30 AM', password: '444555', classwork: 'Submitted' },
    ]
  },
];

export default function AdminPage() {
  const [courses, setCourses] = useState(initialCourses);

  const handleInputChange = (courseId, studentId, field, value) => {
    const updatedCourses = courses.map(course => {
      if (course.id === courseId) {
        return {
          ...course,
          students: course.students.map(student => {
            if (student.id === studentId) {
              return { ...student, [field]: value };
            }
            return student;
          })
        };
      }
      return course;
    });
    setCourses(updatedCourses);
  };

  const saveChanges = () => {
    // Here you would typically send the data to the backend
    console.log('Saved data:', courses);
    alert('Changes have been saved!');
  };

  return (

    <div>
      <Typography variant="h4" sx={{ margin: 2 }}>Admin Panel - Edit Attendance</Typography>
      {courses.map(course => (
        <Accordion key={course.id}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{course.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer component={Paper}>
              <Table aria-label="editable table">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Attendance Entry Time</TableCell>
                    <TableCell>Used OTP</TableCell>
                    <TableCell>Classwork Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {course.students.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell>{student.id}</TableCell>
                      <TableCell>
                        <TextField
                          value={student.name}
                          onChange={(e) => handleInputChange(course.id, student.id, 'name', e.target.value)}
                          size="small"
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          value={student.entryTime}
                          onChange={(e) => handleInputChange(course.id, student.id, 'entryTime', e.target.value)}
                          size="small"
                        />
                      </TableCell>
                      <TableCell>{student.password}</TableCell>
                      <TableCell>
                        <TextField
                          value={student.classwork}
                          onChange={(e) => handleInputChange(course.id, student.id, 'classwork', e.target.value)}
                          size="small"
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
      ))}
      <Button startIcon={<SaveIcon />} variant="contained" color="primary" sx={{ mt: 2 }} onClick={saveChanges}>
        Save All Changes
      </Button>
      </div>
  );
}
