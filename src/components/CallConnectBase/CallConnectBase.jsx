import {
  Typography,
  Box,
  Grid,
  List,
  ListItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import React from "react";
import ArrowSelect from "../../images/ArrowSelect";
import { theme } from "../../styles/Theme";
import { accordion } from "./Styles";

export default function CallConnectBase() {
  return (
    <Box
      sx={{
        margin: "0 8% 0 2%",
      }}
    >
      <Typography variant="h5" sx={{ margin: "40px 0px" }}>
        Call connect
      </Typography>
      <Typography variant="subtitle1">Details</Typography>
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
        <Grid
          container
          sx={{ display: "flex", flexDirection: "row", padding: "15px " }}
        >
          <Grid item xs={5}>
            <List
              style={{
                listStyle: "none",
                padding: "0px",
                color: theme.palette.grey.grey,
              }}
            >
              <ListItem>Domain:</ListItem>
              <ListItem>Type:</ListItem>
              <ListItem>Tenant name:</ListItem>
              <ListItem>Support e-mail:</ListItem>
              <ListItem>Account status:</ListItem>
            </List>
          </Grid>
          <Grid item xs={7}>
            <List
              style={{
                listStyle: "none",
                padding: "0px",
                color: theme.palette.primary.black,
              }}
            >
              <ListItem>natexis.uk</ListItem>
              <ListItem>Enterprise</ListItem>
              <ListItem>CallConnect</ListItem>
              <ListItem>Smth</ListItem>
              <ListItem sx={{ color: theme.palette.primary.main }}>
                active
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <Grid container flexDirection="column">
          <Accordion className={accordion.root}>
            <AccordionSummary expandIcon={<ArrowSelect />}>
              <Typography sx={{ paddingLeft: "10px" }}>Main contact</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Grid item xs={5}>
                  <List
                    style={{
                      listStyle: "none",
                      padding: "0px",
                      color: theme.palette.grey.grey,
                    }}
                  >
                    <ListItem>Contact name:</ListItem>
                    <ListItem>Phone number:</ListItem>
                    <ListItem>Email:</ListItem>
                  </List>
                </Grid>
                <Grid item xs={7}>
                  <List
                    style={{
                      listStyle: "none",
                      padding: "0px",
                      color: theme.palette.primary.black,
                    }}
                  >
                    <ListItem>Max</ListItem>
                    <ListItem>+35812458996</ListItem>
                    <ListItem>callconnect@mail.com</ListItem>
                  </List>
                </Grid>
              </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion className={accordion.root}>
            <AccordionSummary expandIcon={<ArrowSelect />}>
              <Typography sx={{ paddingLeft: "10px" }}>
                Address information
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Grid item xs={5}>
                  <List
                    style={{
                      listStyle: "none",
                      padding: "0px",
                      color: theme.palette.grey.grey,
                    }}
                  >
                    <ListItem>Street:</ListItem>
                    <ListItem>Postal code:</ListItem>
                    <ListItem>City:</ListItem>
                    <ListItem>Country:</ListItem>
                  </List>
                </Grid>
                <Grid item xs={7}>
                  <List
                    style={{
                      listStyle: "none",
                      padding: "0px",
                      color: theme.palette.primary.black,
                    }}
                  >
                    <ListItem>17A Fitzroy Square</ListItem>
                    <ListItem>W1T 6EG</ListItem>
                    <ListItem>London</ListItem>
                    <ListItem>Great Britain</ListItem>
                  </List>
                </Grid>
              </Box>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </Box>
  );
}
