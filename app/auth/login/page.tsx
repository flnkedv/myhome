"use client";
import React from "react";
import { useRef } from "react";
import { signIn } from "next-auth/react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Divider from "@mui/material/Divider";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { PaletteMode, Card as MuiCard } from "@mui/material";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";

import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";

const SignInContainer = styled(Stack)(({ theme }) => ({
  height: "auto",
  padingBottom: theme.spacing(12),
  backgroundImage:
    theme.palette.mode === "light"
      ? "radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))"
      : "radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.3), hsl(220, 30%, 5%))",
  backgroundRepeat: "no-repeat",
  [theme.breakpoints.up("sm")]: {
    paddingBottom: 0,
    height: "100dvh",
  },
}));

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  gap: theme.spacing(4),
  width: "100%",
  padding: theme.spacing(2),
  boxShadow:
    theme.palette.mode === "light"
      ? "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px, hsla(220, 30%, 5%, 0.05) 0px 0px 0px 1px"
      : "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px, hsla(220, 30%, 5%, 0.05) 0px 0px 0px 1px",
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(4),
    width: "450px",
  },
}));

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  console.log({
    email: data.get('email'),
    password: data.get('password'),
  });
};



export default function Page() {
  const username = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const handleLogin = () => {
    signIn("credentials", {
      username: username.current?.value,
      password: password.current?.value,
      redirect: true,
      callbackUrl: "/",
    });
  };
  return (
    <SignInContainer direction="column" justifyContent="space-between">
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{
          position: { xs: "static", sm: "fixed" },
          width: "100%",
          p: { xs: 2, sm: 4 },
        }}
      >
        <Button
          startIcon={<ArrowBackRoundedIcon />}
          component="a"
          href="/"
        >
          Back
        </Button>
      </Stack>
      <Stack
        justifyContent="center"
        sx={{ height: { xs: "100%", sm: "100dvh" }, p: 2 }}
      >
        <Card>
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
          >
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              gap: 2,
            }}
          >
            <h1>Login Page</h1>
            <label>
              Username <br />
              <input name="username" type="text" ref={username} /> <br />
            </label>
            <label>
              Password <br />
              <input name="password" type="password" ref={password} /> <br />
              <Button variant="contained" type="button" onClick={handleLogin}>
                Login
              </Button>
            </label>
          </Box>
        </Card>
      </Stack>
    </SignInContainer>
  );
}
