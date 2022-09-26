import React from "react";
import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Box from "@mui/system/Box";
import LogoWithName from "../components/LogoWithName";
import Login from "../components/Login";
import pattern2 from "../images/pattern2.svg";
import SignButton from "../components/Button/SignButton";
import SocialLinks from "../components/SocialLinks";

export default function SignIn() {
  const navigate = useNavigate();
  return (
    <>
      <Grid container height={"100vh"}>
        <Grid xs={12} sm={7}>
          <LogoWithName color="black" />
          <Box
            sx={{ height: "80%", minHeight: "600px", mt: "90px" }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
          >
            <Typography
              variant="h3"
              fontWeight="800"
              color="primary"
              sx={{ mt: 2 }}
            >
              Sign in to Rylex
            </Typography>
            <SocialLinks />
            <Typography variant="subtitle1" mb={3} color="#949494">
              or use your email account
            </Typography>
            <Login />
          </Box>
        </Grid>
        <Grid
          xs={12}
          sm={5}
          display="flex"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          sx={{
            backgroundImage: `url(${pattern2})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right top",
            minHeight: "600px",
          }}
        >
          <Box className="left-block">
            <Typography variant="h3" mb={3} fontWeight="800" color="secondary">
              Hello, Friend!
            </Typography>

            <Typography
              variant="subtitle1"
              mb={3}
              color="secondary"
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
