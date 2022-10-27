import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      justifyContent="flex-end"
      {...props}
    >
      {"Copyright © "}

      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function LoginPage({ setLogged }) {
  const navigate = useNavigate();
  const navigateToTableList = () => {
    navigate("/tablelist");
  };
  const notify = () =>
    toast.error("Email və ya Şifrə doğru deyil", {
      position: toast.POSITION.TOP_CENTER,
    });
  const [loginForm, setLoginForm] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const handleOnLogin = () => {
    console.log("clicked");
    if (
      loginForm.email === "" ||
      loginForm.email === undefined ||
      loginForm.password === "" ||
      loginForm.password === undefined
    ) {
      notify();
      return;
    }
    const localStorageDatas = JSON.parse(localStorage.getItem("formData"));
    const datas = localStorageDatas.find(
      (item) =>
        item.email === loginForm.email && item.password === loginForm.password
    );
    if (datas) {
      navigateToTableList();
    } else {
      return;
    }
    setLogged(true);
  };

  const handleOnChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={handleOnChange}
              value={loginForm.email}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleOnChange}
              value={loginForm.password}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={handleOnLogin}
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <ToastContainer />
      <Copyright sx={{ mt: 54.1, background: "#04517D", color: "#fff" }} />
    </ThemeProvider>
  );
}
