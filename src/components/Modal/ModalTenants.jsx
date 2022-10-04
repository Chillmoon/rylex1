import React from "react";
import { Box, FormControl, Grid, Typography } from "@mui/material";
import { Formik, Form } from "formik";
import AddCircleOutline from "../../images/AddCircleOutline";
import Input from "../Input/Input";
import { theme } from "../../styles/Theme";
import { Stack } from "@mui/system";
import { ModalTenantsSchema } from "../ValidationSchema/ValidationSchema";
import ButtonWithIcon from "../Button";

export default function ModalTenants(onClose) {
  const starStyle = {
    margin: "5px",
    display: "inline",
    color: theme.palette.primary.greenActive,
  };

  return (
    <>
      <Typography
        sx={{
          fontSize: "20px",
          display: "flex",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <Box
          sx={{
            fill: theme.palette.primary.main,
            "& path": {
              fill: theme.palette.primary.main,
            },
            paddingRight: "10px",
            width: "25px",
            height: "25px",
          }}
        >
          <AddCircleOutline />
        </Box>
        Add tenants
      </Typography>
      <Formik
        initialValues={{
          username: "",
          type: "",
          email: "",
          name: "",
          phoneNumber: "",
          emailContact: "",
          zipCode: "",
          city: "",
          country: "",
        }}
        validationSchema={ModalTenantsSchema}
        // onSubmit={(values) => {
        //   console.log(values);
        //   signUp(values, () => {
        //     navigate("/signin");
        //   });
        // }}
      >
        {({ errors, touched }) => (
          <Form>
            <Grid
              xs={12}
              display="flex"
              flexDirection="column"
              gap="60px"
              color={theme.palette.grey.grey}
              justifyContent="end"
            >
              <Stack flexDirection="row">
                <Grid xs={3} justifyContent="start">
                  <Typography variant="subtitle2" margin="8px 0px 25px 0px">
                    Tenant name:<Box sx={starStyle}>*</Box>
                  </Typography>
                  <Typography variant="subtitle2">
                    Type:<Box sx={starStyle}>*</Box>
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ position: "absolute", top: "190px" }}
                  >
                    Support e-mail:<Box sx={starStyle}>*</Box>
                  </Typography>
                </Grid>
                <Grid xs={9} justifyContent="end" marginRight="10px">
                  <Input
                    name="username"
                    error={errors.username}
                    touched={touched.username}
                  />
                  <Input
                    name="type"
                    error={errors.type}
                    touched={touched.type}
                  />
                  <Input
                    name="email"
                    error={errors.email}
                    touched={touched.email}
                  />
                </Grid>
              </Stack>
              <Typography
                variant="subtitle1"
                sx={{
                  position: "absolute",
                  top: "247px",
                  color: theme.palette.primary.black,
                  fontWeight: "400",
                }}
              >
                Contact information
              </Typography>
              <Stack gap="5px" flexDirection="row">
                <Grid xs={3} justifyContent="start">
                  <Typography variant="subtitle2" margin="8px 0px 25px 0px">
                    Contact name:
                  </Typography>
                  <Typography variant="subtitle2">Phone number: </Typography>
                  <Typography variant="subtitle2" margin="23px 0px 0px 0px">
                    Tenant name:
                  </Typography>
                </Grid>
                <Grid xs={9} justifyContent="end" marginRight="10px">
                  <Input
                    name="name"
                    error={errors.name}
                    touched={touched.name}
                  />
                  <Input
                    name="phoneNumber"
                    error={errors.phoneNumber}
                    touched={touched.phoneNumber}
                  />
                  <Input
                    name="emailContact"
                    error={errors.emailContact}
                    touched={touched.emailContact}
                  />
                </Grid>
              </Stack>
              <Typography
                variant="subtitle1"
                sx={{
                  position: "absolute",
                  top: "445px",
                  color: theme.palette.primary.black,
                  fontWeight: "400",
                }}
              >
                Address information
              </Typography>
              <Stack gap="5px" flexDirection="row">
                <Grid xs={3} justifyContent="start">
                  <Typography variant="subtitle2" margin="8px 0px 25px 0px">
                    Street:
                  </Typography>
                  <Typography variant="subtitle2">Postal code: </Typography>
                  <Typography variant="subtitle2" margin="23px 0px 0px 0px">
                    Country:
                  </Typography>
                </Grid>
                <Grid xs={9} justifyContent="end" marginRight="10px">
                  <Input
                    name="street"
                    error={errors.street}
                    touched={touched.street}
                  />

                  <Grid xs={4}>
                    <Input
                      name="zipCode"
                      error={errors.zipCoder}
                      touched={touched.zipCode}
                    />
                  </Grid>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      position: "absolute",
                      bottom: "187px",
                      left: "295px",
                    }}
                  >
                    City:{" "}
                  </Typography>
                  <Grid
                    xs={4}
                    sx={{
                      position: "absolute",
                      bottom: "172px",
                      right: "50px",
                    }}
                  >
                    <Input
                      name="zipCode"
                      error={errors.city}
                      touched={touched.city}
                    />
                  </Grid>
                  <Input
                    name="emailContact"
                    error={errors.country}
                    touched={touched.country}
                  />
                </Grid>
              </Stack>
            </Grid>
          </Form>
        )}
      </Formik>
    </>
  );
}
