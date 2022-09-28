import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, FormControl, Link } from "@mui/material";
import MyInput from "./Input";
import MyPasswordInput from "./Input/MyPasswordInput";
import SignButton from "./Button/SignButton";
import { LoginSchema } from "./ValidationSchema/ValidationSchema";
import { Formik, Form } from "formik";
import { logIn } from "./Axios";
import PersonOutline from "../images/PersonOutline";

export default function Login() {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      validationSchema={LoginSchema}
      onSubmit={(values) => {
        console.log(values);
        logIn(values.username, values.password, () => {
          navigate("/tenants");
        });
        // setTimeout(tableData, 1000);
      }}
    >
      {({ errors, touched }) => (
        <Form autoComplete="off">
          <Grid xs={12} display="flex" flexDirection="column">
            <FormControl sx={{ width: "45ch" }}>
              <MyInput
                touched={touched.username}
                error={errors.username}
                placeholder="Name"
                name="username"
                icon={<PersonOutline />}
              />

              <MyPasswordInput
                name="password"
                placeholder="Password"
                error={errors.password}
                touched={touched.password}
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
            <SignButton type="submit" text="Sign In" />
          </Grid>
        </Form>
      )}
    </Formik>
  );
}
