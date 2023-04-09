import React, { Component } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class DisplayAd extends Component {

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
    <div style={{marginTop: '20px'}}>
      <div >
          <br/>
          <div class="d-grid gap-2 d-md-block" style={{marginLeft:"-240px"}}>
  <button class="btn btn-primary" type="button" style={{marginLeft:"22rem", marginBottom:"30px", width:"150px", height:"50px",backgroundColor:"#12af39", fontWeight:"700"}}>Back</button>
</div>
    <div class="text-center" style={{border:"2px solid black", marginRight:"110px",marginLeft:"110px"}}>
    
        <br/>
        
        <br/>
        
  <img  class="rounded" src={this.state.img} alt="..." style={{ width: "40rem" }} />

  <br/>
  <br/>
  <div className="btn-group" style={{ marginLeft: "30rem" }}>
  <button type="button" className="btn btn-success">
   Share
  </button>
</div>
<div className="btn-group" style={{ marginLeft: "2rem" }}>
  <button type="button" className="btn btn-warning">
   Print
  </button>
</div>
<br/>
  <hr></hr>
  <br/>
  <div style={{marginRight: "21rem", fontWeight:"700"}}>
  <blockquote class="blockquote" style={{float: "right"}}>
  <p className="mb-0" style={{marginRight:"-70px"}}>Topic : <span className="bg-secondary p-1 px-4 rounded text-white">{this.state.topic}</span></p>
</blockquote>

</div>
<br/>
<hr></hr>
<div style={{marginRight: "19rem"}}>
<h1 style={{marginRight: "1.5rem", fontWeight:"700"}}>Descrption</h1>
<br/>
<p style={{marginLeft:"125px", width:"70rem"}}>{this.state.description}</p>
<p></p>
</div>
<br/>

</div>
<br/>
</div>
</div>
  )
}
}
export default withParams(DisplayAd);