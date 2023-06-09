import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Admins.css";

const AdminViewPost = () => {
  const [adsr, setAdsr] = useState(undefined);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/CM/all`).then((res) => {
      setAdsr(res.data);
    });
  }, []);

  const onDelete = (id) => {
    axios.delete(`http://localhost:8000/api/CM/${id}`).then((res) => {
      alert("Advertisement deleted successfully!");
    });
  };

  return (
    <div className="col-md-8 mt-4 mx-auto" style={{marginBottom:"20px"}}>
      <table className="table table-hover" style={{ marginTop: "40px" }}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Topic</th>
            <th scope="col">Description</th>
            <th scope="col">image</th>
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
                    to={`/CM/post/${adr._id}/${adr.topic}/${adr.description}/${encodeURIComponent(adr.img)}`}
                    style={{ textDecoration: "none" }}
                  >
                    {adr.topic}
                  </Link>
                </td>
                <td>{adr.description}</td>
                <td><img
                        src={adr.img}
                        style={{
                          width: "40px",
                          height: "40px",
                          objectFit: "cover",
                          borderRadius: "8px",
                          marginRight: "20px",
                        }}
                      /></td>
                <td>
                  <Link
                    className="btn btn-warning"
                    to={`/CM/edit/${adr._id}/${adr.topic}/${adr.description}/${encodeURIComponent(adr.img)}`}
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
          to="/postform"
          style={{ extDecoration: "none", color: "white" }}
        >
          Create New Post
        </Link>
        <br />
      </button>
      <br />
    </div>
  );
};
export default AdminViewPost;
