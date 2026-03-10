import { useState, useEffect } from "react";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";
import studentsData from "./data/students.json";

function App() {

  const [students, setStudents] = useState([]);
  const [editStudent, setEditStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setStudents(studentsData);
      setLoading(false);
    }, 1000);
  }, []);

  const addStudent = (student) => {
    setStudents([...students, { ...student, id: Date.now() }]);
  };

  const updateStudent = (student) => {
    setStudents(
      students.map((s) => (s.id === student.id ? student : s))
    );
    setEditStudent(null);
  };

  const deleteStudent = (id) => {
    if (window.confirm("Delete student?")) {
      setStudents(students.filter((s) => s.id !== id));
    }
  };

  return (
    <div className="container mt-4">

      <h2 className="text-center mb-4">Students Table</h2>

      {loading ? (
        <div className="text-center">
          <div className="spinner-border"></div>
        </div>
      ) : (
        <>
          <StudentForm
            addStudent={addStudent}
            editStudent={editStudent}
            updateStudent={updateStudent}
          />

          <StudentTable
            students={students}
            deleteStudent={deleteStudent}
            setEditStudent={setEditStudent}
          />
        </>
      )}

    </div>
  );
}

export default App;