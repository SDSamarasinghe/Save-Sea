import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Admins.css";

const AdminViewUser = () => {
  const [adsr, setUsersr] = useState(undefined);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/users/all`).then((res) => {
      setUsersr(res.data);
    });
  }, []);

  const onDelete = (id) => {
    axios.delete(`http://localhost:8000/api/users/${id}`).then((res) => {
      alert("Advertisement deleted successfully!");
    });
  };

  return (
    <div className="col-md-8 mt-4 mx-auto" style={{marginBottom:"20px"}}>
      <table className="table table-hover" style={{ marginTop: "40px" }}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">FullName</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {adsr &&
            adsr.map((adr, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>
                  <Link
                    to={`/users/post/${adr._id}/${adr.full_name}/${adr.email}/${adr.password}`}
                    style={{ textDecoration: "none" }}
                  >
                    {adr.full_name}
                  </Link>
                </td>
                <td>{adr.email}</td>
                <td>{adr.password}</td>
                <td>
                  <Link
                    className="btn btn-warning"
                    to={`/users/edit/${adr._id}/${adr.full_name}/${adr.email}/${adr.password}`}
                  >
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </Link>
                  &nbsp;
                  <Link
                    className="btn btn-danger"
                    to="#"
                    onClick={() => onDelete(adr._id)}
                  >
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <button className="btn btn-success">
        {" "}
        <Link
          to="/sign-up"
          style={{ extDecoration: "none", color: "white" }}
        >
          Register New User
        </Link>
        <br />
      </button>
      <br />
    </div>
  );
};
export default AdminViewUser;
