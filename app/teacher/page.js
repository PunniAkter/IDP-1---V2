import React from 'react';
import { Typography, Accordion, AccordionSummary, AccordionDetails, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const courses = [
  {
    id: 1,
    title: 'IDP',
    students: [
      { id: 101, name: 'Rahim Uddin', entryTime: '10:05 AM', password: '123456', classwork: 'Submitted' },
      { id: 102, name: 'Karim Mia', entryTime: '10:10 AM', password: '654321', classwork: 'Not Submitted' },
      // More students
    ]
  },
  {
    id: 2,
    title: 'Data Structure',
    students: [
      { id: 201, name: 'Ayesha Siddiqa', entryTime: '10:15 AM', password: '112233', classwork: 'Submitted' },
      { id: 202, name: 'Fatema Begum', entryTime: '10:20 AM', password: '221100', classwork: 'Submitted' },
      // More students
    ]
  },
  {
    id: 3,
    title: 'Algorithm',
    students: [
      { id: 301, name: 'Monir Khan', entryTime: '10:25 AM', password: '333444', classwork: 'Not Submitted' },
      { id: 302, name: 'Jasim Uddin', entryTime: '10:30 AM', password: '444555', classwork: 'Submitted' },
      // More students
    ]
  },
];

export default function Teacher() {
  return (

    <div>
      <Typography variant="h4" sx={{ margin: 2 }}>Today's Class Overview</Typography>
      {courses.map(course => (
        <Accordion key={course.id}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{course.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
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
                      <TableCell component="th" scope="row">{student.id}</TableCell>
                      <TableCell>{student.name}</TableCell>
                      <TableCell>{student.entryTime}</TableCell>
                      <TableCell>{student.password}</TableCell>
                      <TableCell>{student.classwork}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
