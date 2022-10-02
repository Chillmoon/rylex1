import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, FormControl } from "@mui/material";
import { Formik, Form } from "formik";
import { signUp } from "../Axios/Axios";
import MyInput from "../Input/index";
import MyPasswordInput from "../Input/MyPasswordInput";
import SignButton from "../Button/SignButton";
import MyCheckbox from "../MyCheckbox/MyCheckbox";
import PersonOutline from "../../images/PersonOutline";
import Email from "../../images/Email";
import { SignupSchema } from "../ValidationSchema/ValidationSchema";

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
      {({ errors, touched }) => (
        <Form>
          <Grid xs={12} display="flex" flexDirection="column">
            <FormControl sx={{ width: "45ch" }}>
              <MyInput
                placeholder="Name"
                name="username"
                icon={<PersonOutline />}
                error={errors.username}
                touched={touched.username}
              />
              <MyInput
                placeholder="Email"
                name="email"
                icon={<Email />}
                error={errors.email}
                touched={touched.email}
              />
              <MyPasswordInput
                name="password"
                placeholder="Password"
                error={errors.password}
                touched={touched.password}
              />
            </FormControl>
            <MyPasswordInput
              name="confirmPassword"
              placeholder="Repeat password"
              error={errors.confirmPassword}
              touched={touched.confirmPassword}
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
      )}
    </Formik>
  );
}
