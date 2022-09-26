import React from "react";
import { Grid, FormControl } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MyInput from "./Input";
import PersonOutline from "../images/PersonOutline";
import MyPasswordInput from "./Input/MyPasswordInput";
import Email from "../images/Email";
import SignButton from "./Button/SignButton";
import MyCheckbox from "./MyCheckbox";
import * as Yup from "yup";
import { Formik, Form, ErrorMessage } from "formik";
import { signUp } from "./Axios";

export default function Register() {
  const navigate = useNavigate();
  const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Password minimum length should be 3")
      .max(20, "It`s too long")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(8, "Password minimum length should be 8")
      .max(32, "It`s too long")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Password not matched")
      .required("Required"),
  });
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        console.log(values);
        signUp(values);
        navigate("/signin");
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
            <MyInput
              placeholder="Email"
              id="email"
              name="email"
              icon={<Email />}
              helperText={<ErrorMessage name="email" />}
            />
            <MyPasswordInput
              id="password"
              name="password"
              placeholder="Password"
              helperText={<ErrorMessage name="password" />}
            />
          </FormControl>
          <MyPasswordInput
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Repeat password"
            helperText={<ErrorMessage name="confirmPassword" />}
          />
          <MyCheckbox name="termsAndConditions" />
        </Grid>
        <SignButton
          text="Sign Up"
          type="submit"
          s
          // icon={<Facebook />}
        />
      </Form>
    </Formik>
  );
}
