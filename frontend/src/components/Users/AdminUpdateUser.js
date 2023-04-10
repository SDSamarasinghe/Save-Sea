import React, { Component } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class AdminUpdateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: "",
      description: "",
      img: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const id = this.props.params.id;

    const {
      topic,
      description,
      img,
    } = this.state;

    const data = {
      topic: topic,
      description: description,
      img: img,
    };
    console.log(data);

    axios.put(`http://localhost:8000/api/CM/${id}`, data).then((res) => {
      alert("Post updated successfully!");
      window.location.href = "/CM/AdminViewPost";
    });
  };

  componentDidMount() {
    const {
      topic,
      description,
      img,

    } = this.props.params;

    this.setState({
      topic: topic,
      description: description,
      img: img,
    });
  }

  render() {
    return (
      <div className="col-md-8 mt-4 mx-auto" style={{marginBottom:"40px",marginTop:"200px", border:"2px solid black"}}>
        
        
        
        <form className="needs-validation" style={{marginLeft:"30px", marginRight:"30px",marginTop:"30px"}}>
        <h1
          style={{
            color: "#111",
            fontFamily: "Helavetica Neue",
            fontSize: "60px",
            fontWeight: "bold",
            letterSpacing: "-1px",
            marginBottom:"50px",
            lineHeight: "1",
            textAlign: "center",
          }}
        >
          <span className="p-1 px-4 rounded text-white" style={{backgroundColor:"#76ad3b"}}>
          Edit Advertisment
          </span>
        </h1>
          <div className="form-group" style={{ marginBottom: "15px" }}>
          <span class="bg-secondary p-1 px-4 rounded text-white">Topic</span>
            <input
              type="text"
              className="form-control"
              name="topic"
              placeholder="Topic"
              value={this.state.topic}
              onChange={this.handleInputChange}
            />
          </div>

         

          

          <div className="form-group" style={{ marginBottom: "15px" }}>
          <span class="bg-secondary p-1 px-4 rounded text-white">Description</span>
            <input
            style={{height:"100px"}}
              type="text"
              className="form-control"
              name="description"
              placeholder="description"
              value={this.state.description}
              onChange={this.handleInputChange}
            />
          </div>
         
          <div className="form-group" style={{ marginBottom: "15px" }}>
          <span class="bg-secondary p-1 px-4 rounded text-white">ImageURL</span>
            <input
              type="text"
              className="form-control"
              name="img"
              placeholder="img"
              value={this.state.img}
              onChange={this.handleInputChange}
            />
          </div>
          <center>
          <button
            className="btn btn-warning"
            type="submit"
            style={{ marginTop: "15px",marginBottom:"30px" }}
            onClick={this.onSubmit}
          >
            <i className="far fa-check-square"></i>
            &nbsp; Update
          </button>
          </center>
        </form>
      </div>
    );
  }
}

export default withParams(AdminUpdateUser);
