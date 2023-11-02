import React, { useState } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";

export default function Login() {
  const [formData, setFormData] = useState();
  const [errorMsg, setErrorMsg] = useState();
  const navigate = useNavigate();
  const handleChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const result = await axios.post(
        "http://localhost:8083/login/login-api",
        formData
      );
      if (result.status == 200) {
        localStorage.setItem("token", result.data.token);
        navigate("/");
      }
    } catch (e) {
      if (e.response.status == 401) {
        setErrorMsg("username or password is incorrect");
      } else if (e.response.status == 403) {
        setErrorMsg("No user found");
      } else {
        setErrorMsg(e.response.data.msg);
      }
    }
  };

  return (
    <>
      <div className="logout-box">
        <div className="logout-container">
          <div className="input-container">
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h6" variant="h6">
              Sign in
            </Typography>
            <Box component="form" sx={{ mt: 2, width: "70%" }}>
              <TextField
                required
                size="small"
                label="User Name"
                name="userId"
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

              <Grid container sx={{ mt: 1, mb: 3 }}>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
}
