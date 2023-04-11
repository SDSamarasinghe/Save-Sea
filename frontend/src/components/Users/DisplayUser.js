import React, { Component } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class DisplayUser extends Component {

  constructor(props) {
    super(props);
    this.state = {
      full_name: "",
      email: "",
      password: "",
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
      full_name,
      email,
      password,
    } = this.state;

    const data = {
      full_name: full_name,
      email: email,
      password: password,
    };
    console.log(data);

    axios.put(`http://localhost:8000/api/users/${id}`, data).then((res) => {
      alert("User updated successfully!");
      window.location.href = "/adminviewuser";
    });
  };

  componentDidMount() {
    const {
      full_name,
      email,
      password,
    } = this.props.params;

    this.setState({
      full_name: full_name,
      email: email,
      password: password,
    });
  }



render() {
    return (
      <div>
      <div class="container mt-4 mb-4 p-3 d-flex justify-content-center"> 
      <div class="card p-4"> <div class=" image d-flex flex-column justify-content-center align-items-center"> 
      <button class="btn btn-secondary"> 
      <img src="https://i.imgur.com/wvxPV9S.png" height="100" width="100" />
      </button>
       <span class="name mt-3"><input
              type="text"
              className="form-control"
              name="description"
              placeholder="description"
              value={this.state.full_name}
              onChange={this.handleInputChange}
            /></span> 
       <span class="name mt-3"><input
              type="text"
              className="form-control"
              name="description"
              placeholder="description"
              value={this.state.email}
              onChange={this.handleInputChange}
            /></span> 
            <span class="name mt-3"><input
              type="text"
              className="form-control"
              name="description"
              placeholder="description"
              value={this.state.password}
              onChange={this.handleInputChange}
            /></span> 
        <div class="d-flex flex-row justify-content-center align-items-center gap-2">
          
            </div>
             <div class="d-flex flex-row justify-content-center align-items-center mt-3">
               </div> 
               <div class=" d-flex mt-2">
               <button
            className="btn btn-warning"
            type="submit"
            style={{ marginTop: "15px",marginBottom:"30px" }}
            onClick={this.onSubmit}
          >
            <i className="far fa-check-square"></i>
            &nbsp; Update
          </button>
                  </div> 
                  <div class="text mt-3">
                     
                      </div>
                       <div class="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center"> 
                       <span><i class="fa fa-twitter"></i></span> 
                       <span><i class="fa fa-facebook-f"></i></span>
                        <span><i class="fa fa-instagram"></i></span>
                         <span><i class="fa fa-linkedin"></i></span> 
                         </div>
                        <div class=" px-2 rounded mt-4 date ">
                      <span class="join">Joined May,2021</span> 
                  </div> 
              </div> 
        </div>
</div>
  
</div>
  )
}
}
export default withParams(DisplayUser);