# Students Table – React CRUD Application

## Project Overview
This project is a **Students Table application built using React.js** as part of the technical assignment for SR Integrated Circuit Pvt. Ltd.
It is a **frontend-only implementation** where all CRUD operations are handled using **local JSON data and React state** without any backend.

The application allows users to **add, edit, delete, and view students** in a table format with validation and Excel export functionality.

---

## Live Deployment

- **Link:** https://sr-integrated-students-table.netlify.app/ 

---

## Features

### 1. Student List
- Displays students in a table format.
- Columns included:
  - Name
  - Email
  - Age
  - Actions (Edit/Delete)

### 2. Add Student
- Form to add a new student.
- Validation rules:
  - All fields are mandatory.
  - Email must be in valid format.

### 3. Edit Student
- Existing student details can be edited.
- Form fields are **pre-filled** with current data.
- Same validation rules as Add Student.

### 4. Delete Student
- Students can be deleted from the table.
- A **confirmation dialog** appears before deletion.

### 5. Simulated Loading State
- A loading indicator is shown while fetching or updating data to simulate a real application experience.

### 6. Excel Download
- Users can download:
  - All students data
  - Filtered student data
- File is exported in **Excel format (.xlsx)**.

---

## Tech Stack

- React.js
- Vite
- JavaScript (ES6)
- Bootstrap
- XLSX (for Excel export)

---

## Author

**Madhav Agrawal**  
Full Stack Developer  
React | Java | Spring Boot