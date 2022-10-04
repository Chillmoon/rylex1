import React from "react";
import { Grid, Typography } from "@mui/material";
import { Formik, Form } from "formik";
import AddCircleOutline from "../../images/AddCircleOutline";
import Input from "../Input/Input";

export default function ModalTenants() {
  return (
    <>
      <Typography sx={{ fontSize: "20px" }}>
        <AddCircleOutline /> Add tenants
      </Typography>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        // validationSchema={SignupSchema}
        // onSubmit={(values) => {
        //   console.log(values);
        //   signUp(values, () => {
        //     navigate("/signin");
        //   });
        // }}
      >
        {({ errors, touched }) => (
          <Form>
            <Grid xs={12} display="flex" flexDirection="column">
              <Input
                name="username"
                error={errors.username}
                touched={touched.username}
              />
            </Grid>
          </Form>
        )}
      </Formik>
    </>
  );
}
