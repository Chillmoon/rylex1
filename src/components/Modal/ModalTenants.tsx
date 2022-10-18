import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Formik, Form } from "formik";
import AddCircleOutline from "../../images/AddCircleOutline";
import Input from "../Input/Input";
import { theme } from "../../styles/Theme";
import { Stack } from "@mui/system";
import { ModalTenantsSchema } from "../ValidationSchema/ValidationSchema";
import ButtonWithIcon from "../Button";
import { addTableData } from "../Axios/Axios";
import { dataTableRedux } from "../../redux/dataTableSlice";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

export type PropsModal = {
  onClose: () => void;
  open: any;
  children: React.FC;
};

export default function ModalTenants({ onClose }: PropsModal) {
  const starStyle = {
    margin: "5px",
    display: "inline",
    color: theme.palette.primary.light,
  };
  const dispatch = useDispatch();

  const { t } = useTranslation();

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
        {t("add_tenants")}
      </Typography>
      <Formik
        initialValues={{
          username: "",
          type: "",
          email: "",

          address: {
            street: "",
            zipCode: "",
            city: "",
            country: "",
          },

          contactInfo: {
            name: "",
            phoneNumber: "",
            emailContact: "",
          },
        }}
        validationSchema={ModalTenantsSchema}
        onSubmit={(values) => {
          addTableData(values);
          dispatch(dataTableRedux());
          onClose();
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
              color={theme.palette.grey.A700}
              justifyContent="end"
            >
              <Stack flexDirection="row">
                <Grid item xs={4} justifyContent="start">
                  <Typography
                    component={"div"}
                    variant="subtitle2"
                    margin="8px 0px 25px 0px"
                  >
                    {t("tenant_name")}:<Box sx={starStyle}>*</Box>
                  </Typography>
                  <Typography component={"div"} variant="subtitle2">
                    {t("type")}:<Box sx={starStyle}>*</Box>
                  </Typography>
                  <Typography
                    component={"div"}
                    variant="subtitle2"
                    sx={{ position: "absolute", top: "190px" }}
                  >
                    {t("support_e-mail")}:<Box sx={starStyle}>*</Box>
                  </Typography>
                </Grid>
                <Grid item xs={8} justifyContent="end" marginRight="10px">
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
                  color: theme.palette.common.black,
                  fontWeight: "400",
                }}
              >
                {t("contact_information")}
              </Typography>
              <Stack flexDirection="row">
                <Grid item xs={4} justifyContent="start">
                  <Typography variant="subtitle2" margin="8px 0px 25px 0px">
                    {t("contact_name")}:
                  </Typography>
                  <Typography variant="subtitle2">
                    {t("phone_number")}:{" "}
                  </Typography>
                  <Typography variant="subtitle2" margin="23px 0px 0px 0px">
                    {t("email")}:
                  </Typography>
                </Grid>
                <Grid item xs={8} justifyContent="end" marginRight="10px">
                  <Input name="name" />
                  <Input name="phoneNumber" />
                  <Input
                    name="emailContact"
                    error={errors?.contactInfo?.emailContact}
                    touched={touched?.contactInfo?.emailContact}
                  />
                </Grid>
              </Stack>
              <Typography
                variant="subtitle1"
                sx={{
                  position: "absolute",
                  top: "445px",
                  color: theme.palette.common.black,
                  fontWeight: "400",
                }}
              >
                {t("address_information")}
              </Typography>
              <Stack flexDirection="row">
                <Grid item xs={3} justifyContent="start">
                  <Typography variant="subtitle2" margin="8px 0px 25px 0px">
                    {t("street")}:
                  </Typography>
                  <Typography variant="subtitle2">
                    {t("postal_code")}:{" "}
                  </Typography>
                  <Typography variant="subtitle2" margin="23px 0px 0px 0px">
                    {t("country")}:
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
                      left: "288px",
                    }}
                  >
                    {t("city")}:{" "}
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
              <ButtonWithIcon text={t("save")} type="submit" />
            </Box>
          </Form>
        )}
      </Formik>
    </>
  );
}
