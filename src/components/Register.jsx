import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, FormControl } from "@mui/material";
import { Formik, Form } from "formik";
import { signUp } from "./Axios";
import MyInput from "./Input";
import MyPasswordInput from "./Input/MyPasswordInput";
import SignButton from "./Button/SignButton";
import MyCheckbox from "./MyCheckbox";
import PersonOutline from "../images/PersonOutline";
import Email from "../images/Email";
import { SignupSchema } from "./ValidationSchema/ValidationSchema";

export default function Register() {
  const navigate = useNavigate();

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
        signUp(values, () => {
          navigate("/signin");
        });
      }}
    >
      <Form>
        <Grid xs={12} display="flex" flexDirection="column">
          <FormControl sx={{ width: "45ch" }}>
            <MyInput
              placeholder="Name"
              name="username"
              icon={<PersonOutline />}
            />
            <MyInput placeholder="Email" name="email" icon={<Email />} />
            <MyPasswordInput name="password" placeholder="Password" />
          </FormControl>
          <MyPasswordInput
            name="confirmPassword"
            placeholder="Repeat password"
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
