import React from "react";
import { theme } from "./styles/Theme";
import { ThemeProvider } from "@mui/material/styles";
import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Tenants from "./pages/Tenants";

export default function App() {
  return (
    <main>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/tenants" element={<Tenants />} />
        </Routes>
      </ThemeProvider>
    </main>
  );
}
