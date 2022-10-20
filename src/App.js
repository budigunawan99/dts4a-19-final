import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "@emotion/styled";
import AuthLayout from "./pages/Auth/AuthLayout";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Profile from "./pages/Profile";
import Fallback from "./pages/Fallback";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ThemeWrapper>
          <Routes>
            <Route element={<AuthLayout />}>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Fallback />} />
          </Routes>
        </ThemeWrapper>
      </BrowserRouter>
    </>
  );
};

const ThemeWrapper = styled.div`
  background-color: #141414;
  height: 100%;
`;

export default App;
