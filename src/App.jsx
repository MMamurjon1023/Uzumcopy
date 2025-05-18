import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import NotFound from "./Components/NotFound/NotFound";
import ProductInfo from "./Components/ProductInfo/ProductInfo";
import Auth from "./pages/Auth/Auth";
import Favorite from "./pages/Favorite/Favorite";
import Home from "./pages/Home/Home";
import SignIn from "./pages/Auth/SignIn/SignIn";
import SignUp from "./pages/Auth/SignUp/SignUp";

function App() {
  return (
    <div className="dark:bg-dark dark:text-white min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/auth/signup" Component={SignUp} />
        <Route path="/auth/signin" Component={SignIn} />
        <Route path="/favorite" Component={Favorite} />
        <Route path="/Product/:id" Component={ProductInfo} />
        <Route path="*" Component={NotFound} />
      </Routes>
    </div>
  );
}

export default App;
