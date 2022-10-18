import React from "react";
import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Box from "@mui/system/Box";
import LogoWithName from "../components/LogoWithName/LogoWithName";
import Login from "../components/Login/Login";
//@ts-ignore
import patternSecond from "../images/patternSecond.svg";
import SignButton from "../components/Button/SignButton";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import { theme } from "../styles/Theme";

export default function SignIn() {
  const navigate = useNavigate();
  return (
    <>
      <Grid container height={"100vh"}>
        <Grid item xs={12} sm={7}>
          <LogoWithName color="black" />
          <Box
            sx={{ height: "80%", minHeight: "600px", mt: "60px" }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Typography
              variant="h3"
              fontWeight="800"
              color={theme.palette.primary.main}
              sx={{ mt: 2 }}
            >
              Sign in to Rylex
            </Typography>
            <SocialLinks />
            <Typography
              variant="subtitle1"
              mb={3}
              color={theme.palette.grey.A700}
            >
              or use your email account
            </Typography>
            <Login />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={5}
          display="flex"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          sx={{
            backgroundImage: `url(${patternSecond})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right top",
            minHeight: "600px",
          }}
        >
          <Box className="left-block">
            <Typography
              variant="h3"
              mb={3}
              fontWeight="800"
              color={theme.palette.common.white}
            >
              Hello, Friend!
            </Typography>

            <Typography
              variant="subtitle1"
              mb={3}
              color={theme.palette.common.white}
              fontWeight="400"
            >
              Enter your personal details <br /> and start journey with us
            </Typography>

            <SignButton
              text="Sign Up"
              onClick={() => {
                navigate("/");
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
