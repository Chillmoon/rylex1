import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Formik, Form } from "formik";
import AddCircleOutline from "../../images/AddCircleOutline";
import Input from "../Input/Input";
import { theme } from "../../styles/Theme";
import { Stack } from "@mui/system";
import { ModalTenantsSchema } from "../ValidationSchema/ValidationSchema";
import ButtonWithIcon from "../Button";
import { addTableData, tableData } from "../Axios/Axios";

export default function ModalTenants(handleClose) {
  const starStyle = {
    margin: "5px",
    display: "inline",
    color: theme.palette.primary.greenActive,
  };

  // const getChangedValues = (values, initialValues) => {
  //   return Object.entries(values).reduce((acc, [key, value]) => {
  //     const hasChanged = initialValues[key] !== value;

  //     if (hasChanged) {
  //       acc[key] = value;
  //     }

  //     return acc;
  //   }, {});
  // };

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

          street: "",
          zipCode: "",
          city: "",
          country: "",

          name: "",
          phoneNumber: "",
          emailContact: "",
        }}
        validationSchema={ModalTenantsSchema}
        onSubmit={(values) => {
          console.log(values);
          addTableData(values);
        }}
      >
        {({ errors, touched }) => (
          <Form autoComplete="off">
            <Grid
              item
              xs={12}
              display="flex"
              flexDirection="column"
              gap="60px"
              color={theme.palette.grey.grey}
              justifyContent="end"
            >
              <Stack flexDirection="row">
                <Grid item xs={3} justifyContent="start">
                  <Typography
                    component={"div"}
                    variant="subtitle2"
                    margin="8px 0px 25px 0px"
                  >
                    Tenant name:<Box sx={starStyle}>*</Box>
                  </Typography>
                  <Typography component={"div"} variant="subtitle2">
                    Type:<Box sx={starStyle}>*</Box>
                  </Typography>
                  <Typography
                    component={"div"}
                    variant="subtitle2"
                    sx={{ position: "absolute", top: "190px" }}
                  >
                    Support e-mail:<Box sx={starStyle}>*</Box>
                  </Typography>
                </Grid>
                <Grid item xs={9} justifyContent="end" marginRight="10px">
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
              <Stack flexDirection="row">
                <Grid item xs={3} justifyContent="start">
                  <Typography variant="subtitle2" margin="8px 0px 25px 0px">
                    Contact name:
                  </Typography>
                  <Typography variant="subtitle2">Phone number: </Typography>
                  <Typography variant="subtitle2" margin="23px 0px 0px 0px">
                    Email:
                  </Typography>
                </Grid>
                <Grid item xs={9} justifyContent="end" marginRight="10px">
                  <Input name="name" />
                  <Input name="phoneNumber" />
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
              <Stack flexDirection="row">
                <Grid item xs={3} justifyContent="start">
                  <Typography variant="subtitle2" margin="8px 0px 25px 0px">
                    Street:
                  </Typography>
                  <Typography variant="subtitle2">Postal code: </Typography>
                  <Typography variant="subtitle2" margin="23px 0px 0px 0px">
                    Country:
                  </Typography>
                </Grid>
                <Grid item xs={9} justifyContent="end" marginRight="10px">
                  <Input name="street" />

                  <Grid item xs={4}>
                    <Input name="zipCode" />
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
                    item
                    xs={4}
                    sx={{
                      position: "absolute",
                      bottom: "172px",
                      right: "50px",
                    }}
                  >
                    <Input name="city" />
                  </Grid>
                  <Input name="country" />
                </Grid>
              </Stack>
            </Grid>
            <Box
              sx={{
                position: "absolute",
                top: "655px",
                left: "423px",
              }}
            >
              <ButtonWithIcon text="Save" type="submit" />
            </Box>
          </Form>
        )}
      </Formik>
    </>
  );
}
