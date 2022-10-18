import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Formik, Form } from "formik";
import Input from "../Input/Input";
import { theme } from "../../styles/Theme";
import { Stack } from "@mui/system";
import { ModalCallConnectSchema } from "../ValidationSchema/ValidationSchema";
import ButtonWithIcon from "../Button";
import { editTenant } from "../Axios/Axios";
import { useTranslation } from "react-i18next";
import Pencil from "../../images/Pencil";
import { useDispatch, useSelector } from "react-redux";
import { selectedTenantRedux } from "../../redux/selectedTenantSlice";

type PropsModalCallConnect = {
  onClose: () => void;
  id: string;
};

export default function ModalCallConnect({ onClose, id }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const tenant = useSelector((state) => state.tenant.selectedTenant);

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
          <Pencil />
        </Box>
        {t("edit_tenants_details")}
      </Typography>
      <Formik
        initialValues={{
          email: tenant?.email,

          street: tenant?.address?.street,
          zipCode: tenant?.address?.zipCode,
          city: tenant?.address?.city,
          country: tenant?.address?.country,

          name: tenant?.contactInfo?.name,
          phoneNumber: tenant?.contactInfo?.phoneNumber,
          emailContact: tenant?.contactInfo?.email,
        }}
        validationSchema={ModalCallConnectSchema}
        onSubmit={(values) => {
          editTenant({ userData: values, id: id, tenantData: tenant });
          dispatch(selectedTenantRedux(id));
          onClose();
        }}
        // validator={() => ({})}
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
                    {t("support_e-mail")}:
                  </Typography>
                </Grid>
                <Grid item xs={8} justifyContent="end" marginRight="10px">
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
                  top: "160px",
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
                    error={errors.emailContact}
                    touched={touched.emailContact}
                  />
                </Grid>
              </Stack>
              <Typography
                variant="subtitle1"
                sx={{
                  position: "absolute",
                  top: "360px",
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
                      bottom: "270px",
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
                      bottom: "256px",
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
