import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, FormControl, Link } from "@mui/material";
import MyInput from "./Input";
import MyPasswordInput from "./Input/MyPasswordInput";
import SignButton from "./Button/SignButton";
import * as Yup from "yup";
import { Formik, Form, ErrorMessage } from "formik";
import { logIn, tableData } from "./Axios";
import PersonOutline from "../images/PersonOutline";

export default function Login() {
  const navigate = useNavigate();
  const LoginSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Password minimum length should be 3")
      .max(20, "It`s too long")
      .required("Required"),
    password: Yup.string()
      .min(8, "Password minimum length should be 8")
      .max(32, "It`s too long")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      validationSchema={LoginSchema}
      onSubmit={(values) => {
        console.log(values);
        logIn(values.username, values.password);
        // setTimeout(tableData, 1000);
        navigate("/tenants");
      }}
    >
      <Form>
        <Grid xs={12} display="flex" flexDirection="column">
          <FormControl sx={{ width: "45ch" }}>
            <MyInput
              placeholder="Name"
              id="username"
              name="username"
              icon={<PersonOutline />}
              helperText={<ErrorMessage name="username" />}
            />
            <MyPasswordInput
              id="password"
              name="password"
              placeholder="Password"
              helperText={<ErrorMessage name="password" />}
            />
            <Link
              href="#"
              sx={{
                textDecoration: "none",
                fontWeight: "700",
                color: "black",
                margin: 3,
              }}
            >
              Forgot your password?
            </Link>
          </FormControl>
          <SignButton text="Sign In" type="submit" />
        </Grid>
      </Form>
    </Formik>
  );
}
