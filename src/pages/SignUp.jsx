import React from "react";
import { Grid, Typography } from "@mui/material";
import Box from "@mui/system/Box";
import Register from "../components/Register";
import LogoWithName from "../components/LogoWithName";
import SocialLinks from "../components/SocialLinks";
import pattern from "../images/pattern.svg";
import SignButton from "../components/Button/SignButton";
import { useNavigate } from "react-router-dom";
import { theme } from "../styles/Theme";

export default function SignUp() {
  const navigate = useNavigate();
  return (
    <>
      <Grid container height={"100vh"}>
        <Grid
          xs={12}
          sm={5}
          sx={{
            backgroundImage: `url(${pattern})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left bottom",
          }}
        >
          <LogoWithName color="white" />
          <Box
            sx={{ height: "80%", minHeight: "500px" }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Typography
              variant="h3"
              mb={3}
              fontWeight="800"
              color={theme.palette.primary.white}
            >
              Welcome Back!
            </Typography>

            <Typography
              variant="subtitle1"
              mb={3}
              color={theme.palette.primary.white}
              fontWeight="400"
            >
              To keep connected with us please <br /> login with your personal
              info
            </Typography>

            <SignButton
              text="Sign In"
              onClick={() => {
                navigate("/signin");
              }}
            />
          </Box>
        </Grid>
        <Grid
          xs={12}
          sm={7}
          display="flex"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          flexDirection="column"
          sx={{ minHeight: "700px" }}
        >
          <div className="right-block">
            <Typography
              variant="h3"
              fontWeight="800"
              color={theme.palette.primary.main}
              sx={{ mt: 3 }}
            >
              Create Account
            </Typography>
            <SocialLinks />
            <Typography
              variant="subtitle1"
              mb={3}
              color={theme.palette.grey.grey}
            >
              or use your email for registration
            </Typography>
            <Register />
          </div>
        </Grid>
      </Grid>
    </>
  );
}
