import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import "./App.css";


import Navigator from "./components/Navigator/Navigator";
import Footer from "./components/Footer";
import PostForm from "./components/ChallengeManagement/PostForm";
import AdminView from "./components/ChallengeManagement/AdminViewPost";
import AdminUpdate from "./components/ChallengeManagement/AdminUpdatePost"
import DisplayAd from "./components/ChallengeManagement/DisplayPost";
import PropertyCatalog from "./components/ChallengeManagement/PostCatalog";

import AdminViewUsers from "./components/Users/AdminViewUser";
import AdminUpdateUsers from "./components/Users/AdminUpdateUser";





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
          path="/CM/edit/:id/:topic/:description/:img"
          element={<AdminUpdate />}
        />
        <Route
          path="/CM/post/:id/:topic/:description/:img"
          element={<DisplayAd />}
        />

        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/CM/properties" element={<PropertyCatalog />} />

        <Route path="/adminviewuser" element={<AdminViewUsers />} />

        <Route
          path="/users/edit/:id/:full_name/:email/:password"
          element={<AdminUpdate />}
        />

       
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
