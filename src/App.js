import React from "react";
import { theme } from "./styles/Theme";
import { ThemeProvider } from "@mui/material/styles";
import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Tenants from "./pages/Tenants";
import CallConnect from "./pages/CallConnect";
import PrivateRoutes from "./components/ReactRouter/PrivateRoutes";
import { Provider } from "react-redux";
import PhoneNumbers from "./pages/PhoneNumbers";

export default function App({ rowData }) {
  return (
    <main>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/tenants" element={<Tenants />} />
            <Route path="/callconnect" element={<CallConnect />} />
            <Route path="/callconnect/:id" element={<CallConnect />} />
            <Route
              path="/callconnect/:id/phonenumbers"
              element={<PhoneNumbers />}
            />
          </Route>
          <Route path="/" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </ThemeProvider>
    </main>
  );
}
