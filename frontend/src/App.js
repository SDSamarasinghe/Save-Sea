import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import "./App.css";


import Navigator from "./components/Navigator/Navigator";
import Footer from "./components/Footer";
import PostForm from "./components/ChallengeManagement/PostForm";
import AdminView from "./components/ChallengeManagement/AdminViewPost";
import AdminUpdate from "./components/ChallengeManagement/AdminUpdatePost"
import DisplayAd from "./components/ChallengeManagement/DisplayAd";




import Login from "./components/Users/Login";
import Register from "./components/Users/Register";
import Profile from "./components/Users/Profile";


function App() {
  useEffect(() => {}, []);

  return (
    <BrowserRouter>
      <Navigator />
      <Routes>
        <Route path="/postform" element={<PostForm />} />
        <Route path="/adminview" element={<AdminView />} />
        
        <Route
          path="/CM/edit/:id/:topc/:descrption/:image"
          element={<AdminUpdate />}
        />
        <Route
          path="/CM/post/:id/:topc/:descrption/:image"
          element={<DisplayAd />}
        />

        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
