import React from "react";
import Footer from "../components/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Detail from "../pages/detail/Detail";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<PrivateRouter/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/:id" element={<Register />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
