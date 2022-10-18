import {
  Typography,
  Box,
  Grid,
  List,
  ListItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { selectedTenantRedux } from "../../redux/selectedTenantSlice";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import ArrowSelect from "../../images/ArrowSelect";
import { theme } from "../../styles/Theme";
import { accordion, useStyles } from "./Styles";
import { useParams } from "react-router-dom";
import Pencil from "../../images/Pencil";
import { useButtonStyles } from "../Button/styles";
import Modal from "../Modal/Modal";
import ModalCallConnect from "../Modal/ModalCallConnect";

export default function CallConnectBase() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const style = useStyles();
  const classes = useButtonStyles();
  const { id } = useParams();
  const styles2 = accordion();

  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleClick = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    if (id) {
      dispatch(selectedTenantRedux(id));
    }
  }, []);
  const tenant = useSelector<any, any>((state) => state.tenant.selectedTenant);

  return (
    <Box
      sx={{
        margin: "0 8% 0 2%",
      }}
    >
      <Typography variant="h5" sx={{ margin: "40px 0px" }}>
        {t("call_connect")}
      </Typography>
      <Typography variant="subtitle1">{t("details")}</Typography>
      <div
        style={{
          borderTop: `1px solid ${theme.palette.secondary.main}`,
          margin: "7px 0px",
        }}
      ></div>
      <Grid
        container
        sx={{
          display: "flex",
          flesDirection: "column",
          marginTop: "15px",

          border: `1px solid ${theme.palette.secondary.main}`,
          width: "480px",
        }}
      >
        <IconButton
          onClick={handleClick}
          sx={classes.iconButton}
          style={{
            paddingBottom: "0 !important",
          }}
        >
          <Pencil />
        </IconButton>
        <Grid
          container
          sx={{ display: "flex", flexDirection: "row", padding: "15px " }}
        >
          <Grid item xs={5}>
            <List sx={style.listItemType}>
              <ListItem>{t("domain")}:</ListItem>
              <ListItem>{t("type")}:</ListItem>
              <ListItem>{t("tenant_name")}:</ListItem>
              <ListItem>{t("support_e-mail")}:</ListItem>
              <ListItem>{t("account_status")}:</ListItem>
            </List>
          </Grid>
          <Grid item xs={7}>
            <List sx={style.listItemState}>
              <ListItem>{id}</ListItem>
              <ListItem>{tenant?.type}</ListItem>
              <ListItem>{tenant?.name}</ListItem>
              <ListItem>{tenant?.email}</ListItem>
              <ListItem sx={{ color: theme.palette.primary.main }}>
                {t("active")}
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <Grid container flexDirection="column">
          <Accordion square={true} className={styles2.root}>
            <AccordionSummary expandIcon={<ArrowSelect />}>
              <Typography sx={{ paddingLeft: "10px" }}>
                {t("main_contact")}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Grid item xs={5}>
                  <List sx={style.listItemType}>
                    <ListItem>{t("contact_name")}:</ListItem>
                    <ListItem>{t("phone_number")}:</ListItem>
                    <ListItem>{t("email")}:</ListItem>
                  </List>
                </Grid>
                <Grid item xs={7}>
                  <List sx={style.listItemState}>
                    <ListItem>{tenant?.contactInfo?.name}</ListItem>
                    <ListItem>{tenant?.contactInfo?.phoneNumber}</ListItem>
                    <ListItem>{tenant?.contactInfo?.email}</ListItem>
                  </List>
                </Grid>
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion className={styles2.root}>
            <AccordionSummary expandIcon={<ArrowSelect />}>
              <Typography sx={{ paddingLeft: "10px" }}>
                {t("address_information")}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Grid item xs={5}>
                  <List sx={style.listItemType}>
                    <ListItem>{t("street")}:</ListItem>
                    <ListItem>{t("postal_code")}:</ListItem>
                    <ListItem>{t("city")}:</ListItem>
                    <ListItem>{t("country")}:</ListItem>
                  </List>
                </Grid>
                <Grid item xs={7}>
                  <List sx={style.listItemState}>
                    <ListItem>{tenant?.address?.street}</ListItem>
                    <ListItem>{tenant?.address?.zipCode}</ListItem>
                    <ListItem>{tenant?.address?.city}</ListItem>
                    <ListItem>{tenant?.address?.country}</ListItem>
                  </List>
                </Grid>
              </Box>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
      <Modal open={isOpen} onClose={handleClose}>
        <ModalCallConnect onClose={handleClose} id={id} />
      </Modal>
    </Box>
  );
}
