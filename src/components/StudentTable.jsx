import DownloadExcel from "./DownloadExcel";

function StudentTable({ students, deleteStudent, setEditStudent }) {

  return (
    <div className="card p-3">

      <div className="d-flex justify-content-between mb-3">
        <h5>Student List</h5>
        <DownloadExcel data={students} />
      </div>

      <table className="table table-bordered table-striped">

        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {students.map((student) => (

            <tr key={student.id}>

              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.age}</td>

              <td>

                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => setEditStudent(student)}
                >
                  Edit
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteStudent(student.id)}
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default StudentTable;