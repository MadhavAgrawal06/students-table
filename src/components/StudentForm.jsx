import { useState, useEffect } from "react";

function StudentForm({ addStudent, editStudent, updateStudent }) {

  const [form, setForm] = useState({
    name: "",
    email: "",
    age: ""
  });

  useEffect(() => {
    if (editStudent) {
      setForm(editStudent);
    }
  }, [editStudent]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.age) {
      alert("All fields required");
      return;
    }

    if (!validateEmail(form.email)) {
      alert("Invalid email");
      return;
    }

    if (editStudent) {
      updateStudent(form);
    } else {
      addStudent(form);
    }

    setForm({ name: "", email: "", age: "" });
  };

  return (
    <div className="card p-3 mb-4">

      <h5>{editStudent ? "Edit Student" : "Add Student"}</h5>

      <form onSubmit={handleSubmit}>

        <div className="row">

          <div className="col-md-4">
            <input
              className="form-control"
              placeholder="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-4">
            <input
              className="form-control"
              placeholder="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-2">
            <input
              className="form-control"
              placeholder="Age"
              name="age"
              value={form.age}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-2">
            <button className="btn btn-primary w-100">
              {editStudent ? "Update" : "Add"}
            </button>
          </div>

        </div>

      </form>

    </div>
  );
}

export default StudentForm;