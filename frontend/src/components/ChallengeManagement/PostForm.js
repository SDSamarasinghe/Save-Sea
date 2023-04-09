import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import adformback2 from "./img/adformback2.jpg";
import swal from "sweetalert";

const AdvertiserForm = () => {
  const [listOfAds, setListOfAdvertisement] = useState([]);
  const [topic, setTopic] = useState("");
  const [description, setdescription] = useState("");
  const [img, setImg] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate());
    setIsSubmit(true);
    sub();
  };

  const validate = () => {
    const errors = {};
    if (!topic) {
      errors.topic = "topic is required!";
    }
    if (!description) {
        errors.description = "topic is required!";
    }
    if (!img) {
      errors.img = "Image is required!";
    }
    return errors;
  };

  const sub = () => {
    if (Object.keys(formErrors).length == 0 && isSubmit) {
      createAd();
    }
  };

  const createAd = () => {
    axios
      .post("http://localhost:8000/api/CM/", {
        topic,
        description,
        img,
      })
      .then((response) => {
        setListOfAdvertisement([
          ...listOfAds,
          {
            topic,
            description,
            img,
          },
        ]);
      });
    swal({
      title: "Post Added Successfuly!",
      icon: "success",
      confirmButtonText: "OK",
    }).then(function () {
      // Redirect the user
      window.location.href = "/Ads/AdminView";
    });
  };

  return (
    <div
      style={{
        backgroundImage: `url(${adformback2})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <br />
      <h1
        style={{
          fontFamily: "Georgia",
          fontSize: "100px",
          textAlign: "center",
          color: "white",
        }}
      >
        Advertiser Form
      </h1>
      <br />
      <div style={{ backgroundColor: "black" }}></div>
      <div
        className="col-md-8 mt-4 mx-auto"
        style={{
          fontWeight: "bold",
          fontFamily: "sans-serif",
          borderRadius: "30px",
          border: "3px solid green",
          margin: "2px",
        }}
      >
        <br />
        <form style={{ margin: "20px" }}>
          <br />
          <div className="row mb-3">
            <label class="col-sm-2 col-form-label" style={{ color: "#D3D3D3" }}>
              Topic
            </label>
            <div className="col-sm-10">
              <input
                style={{ backgroundColor: "#D3D3D3" }}
                type="text"
                className="form-control"
                required
                onChange={(e) => {
                  setTopic(e.target.value);
                }}
              />
              <p class="alert-txt">{formErrors.town}</p>
            </div>
          </div>

          
          
          <div className="row mb-3">
            <label
              for="inputEmail3"
              class="col-sm-2 col-form-label"
              style={{ color: "#D3D3D3" }}
            >
              Description
            </label>
            <div className="col-sm-10">
              <input
                style={{ backgroundColor: "#D3D3D3" }}
                type="text"
                className="form-control"
                required
                onChange={(e) => {
                  setdescription(e.target.value);
                }}
              />
              <p class="alert-txt">{formErrors.description}</p>
            </div>
          </div>
          <br />
          <div className="form-group my-4">
            <label className="my-1" style={{ color: "#D3D3D3" }}>
              Image
            </label>
            <input
              style={{ backgroundColor: "#D3D3D3" }}
              type="text"
              className="form-control"
              placeholder="Image"
              value={img}
              required
              onChange={(e) => {
                setImg(e.target.value);
              }}
            />
            <p class="alert-txt">{formErrors.img}</p>
          </div>

          <div class="row justify-content-end" id="add-btn">
            <center>
              <Link to="/Ads/AdminView">
                {" "}
                <button
                  type="button"
                  onClick={handleSubmit}
                  class="btn-block btn-primary"
                  style={{ backgroundColor: "#1bb004" }}
                >
                  Submit
                </button>
              </Link>{" "}
            </center>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdvertiserForm;
