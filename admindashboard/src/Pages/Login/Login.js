import React, { useState } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import "./login.css";

export default function Login() {
  const [formData, setFormData] = useState();
  const [errorMsg, setErrorMsg] = useState();

  const handleChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (formData.username == "admin") {
      if (formData.password == "admin") {
        localStorage.setItem("token", "xyz2394");
        navigate("/");
      } else {
        setErrorMsg("username or password is incorrect");
      }
    } else {
      setErrorMsg("No user found");
    }
    console.log(formData.username);
  };

  return (
    <>
      <div className="login-container">
        <Box>
          <Grid
            container
            item
            sm={4}
            md={5}
            component={Paper}
            elevation={8}
            square
            sx={{
              ml: 20,
              backgroundImage:
                "url(https://www.freevector.com/uploads/vector/preview/30349/Abstract_background_vector_1.jpg)",

              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Box
              sx={{
                mt: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h6" variant="h6">
                Sign in
              </Typography>
              <Box component="form" sx={{ mt: 2, width: "80%" }}>
                <TextField
                  required
                  size="small"
                  label="User Name"
                  name="username"
                  onChange={handleChange}
                  autoFocus
                />
                <br></br>
                <br></br>
                <TextField
                  required
                  size="small"
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onChange={handleChange}
                />
                <Typography
                  variant="caption"
                  display="block"
                  sx={{ mt: 1, ml: 2, color: "red" }}
                >
                  {errorMsg}
                </Typography>
                <Button
                  variant="contained"
                  sx={{ mt: 2, mb: 2, ml: 8 }}
                  onClick={handleSubmit}
                >
                  Sign In
                </Button>

                <Grid container sx={{ mt: 2, mb: 2 }}>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Box>
      </div>
    </>
  );
}
