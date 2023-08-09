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
import axios from "axios";
import "../Login/login.css";

export default function Logout() {
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
        "http://localhost:8082/login/signup",
        formData
      );
      if (result.status == 200) {
        console.log(result.data);
        console.log("register Successfull");
        navigate("/login");
      }
    } catch (e) {
      console.log("catch", e);
      if (e.response.status == 408) {
        setErrorMsg("email is invalid format");
      } else {
        setErrorMsg(e.response.data.msg);
      }
    }
  };

  return (
    <>
      <div>
        <Box className="logout-container">
          <Grid
            container
            item
            sm={4}
            md={7}
            component={Paper}
            elevation={8}
            square
            sx={{
              backgroundImage:
                "url(https://www.freevector.com/uploads/vector/preview/30349/Abstract_background_vector_1.jpg)",

              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Box
              sx={{
                mt: 2,
                ml: 12,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h6" variant="h6">
                Sign up
              </Typography>
              <Box component="form" sx={{ mt: 2, width: "80%" }}>
                <TextField
                  required
                  fullWidth
                  size="small"
                  label="User Name"
                  name="userId"
                  onChange={handleChange}
                  autoFocus
                />
                <br></br>
                <br></br>
                <div className="fullname">
                  <TextField
                    required
                    size="small"
                    label="First Name"
                    name="firstName"
                    onChange={handleChange}
                  />

                  <br></br>
                  <br></br>
                  <TextField
                    required
                    size="small"
                    label="Last Name"
                    name="lastName"
                    onChange={handleChange}
                  />
                </div>
                <br></br>
                <div className="fullname">
                  <TextField
                    required
                    size="small"
                    label="E-Mail"
                    name="email"
                    onChange={handleChange}
                  />

                  <br></br>
                  <br></br>
                  <TextField
                    required
                    size="small"
                    label="City"
                    name="city"
                    onChange={handleChange}
                  />
                </div>
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
                  sx={{ mt: 2, mb: 1, ml: 8 }}
                  onClick={handleSubmit}
                >
                  Register
                </Button>

                <Grid container sx={{ mt: 1, mb: 4 }}>
                  <Grid item>
                    <Link href="/login" variant="body2">
                      {"Already have an account? Sign In"}
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
