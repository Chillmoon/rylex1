import { FormControl, Grid, Link } from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import PersonOutline from "../../images/PersonOutline";
import SignButton from "../Button/SignButton";
import MyInput from "../Input/index";
import MyPasswordInput from "../Input/MyPasswordInput";
import { LoginSchema } from "../ValidationSchema/ValidationSchema";
import { logIn } from "../Axios/Axios";

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
      }}
    >
      {({ errors, touched }) => (
        <Form autoComplete="off">
          <Grid item xs={12} display="flex" flexDirection="column">
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
