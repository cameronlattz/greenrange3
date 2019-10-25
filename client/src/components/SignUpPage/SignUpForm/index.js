import React, { useState } from "react";
import API from "../../../utils/API";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  container: {
    padding: "40px",
    borderRadius: "10px",
    width: "80%",
    marginTop: "5%"
  },
  title: {},
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "rgb(159,65,152)",
    "&:hover": {
      backgroundColor: "rgb(209,176,212)"
    }
  }
}));

export default function AddressForm(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [userId, setUserId] = useState("");

  function handleFormSubmit(event) {
    event.preventDefault();
    setFormSubmitted(true);
    if (
      firstName !== "" &&
      lastName !== "" &&
      address !== "" &&
      email !== "" &&
      city !== "" &&
      state !== "" &&
      country !== "" &&
      zip !== "" &&
      password !== ""
    ) {
      API.saveUser({
        firstName,
        lastName,
        address,
        email,
        password
      })
        .then(function(res) {
          props.setUserId(res.data._id);
          setUserId(res.data._id);
        })
    }
  }

  const classes = useStyles();

  if (userId) {
    return <Redirect to="/home" />;
  }
  return (
    <Container className={classes.container}>
      <div>keys:{props.test}</div>
      <React.Fragment>
        <Typography className={classes.title} variant="h6" gutterBottom>
          Shipping address
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First name"
              onChange={event => setFirstName(event.target.value)}
              fullWidth
              autoComplete="fname"
              value={firstName}
              error={firstName === "" && formSubmitted}
              helperText={firstName === "" && formSubmitted ? "First name is required" : " "}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last name"
              onChange={event => setLastName(event.target.value)}
              fullWidth
              autoComplete="lname"
              value={lastName}
              error={lastName === "" && formSubmitted}
              helperText={lastName === "" && formSubmitted ? "Last name is required" : " "}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              onChange={event => setEmail(event.target.value)}
              fullWidth
              autoComplete="email"
              value={email}
              error={email === "" && formSubmitted}
              helperText={email === "" && formSubmitted ? "Email is required" : " "}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              onChange={event => setPassword(event.target.value)}
              fullWidth
              autoComplete="password"
              value={password}
              error={password === "" && formSubmitted}
              helperText={password === "" ? "Password is required" : " "}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address1"
              name="address1"
              label="Address"
              onChange={event => setAddress(event.target.value)}
              fullWidth
              autoComplete="billing address-line1"
              value={address}
              error={address === "" && formSubmitted}
              helperText={address === "" && formSubmitted ? "Address is required" : " "}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="City"
              onChange={event => setCity(event.target.value)}
              fullWidth
              autoComplete="billing address-level2"
              value={city}
              error={city === "" && formSubmitted}
              helperText={city === "" && formSubmitted ? "City is required" : " "}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="state"
              name="state"
              label="State"
              onChange={event => setState(event.target.value)}
              fullWidth
              autoComplete="state"
              value={state}
              error={state === "" && formSubmitted}
              helperText={state === "" && formSubmitted ? "State is required" : " "}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip"
              name="zip"
              label="Zip / Postal code"
              onChange={event => setZip(event.target.value)}
              fullWidth
              autoComplete="billing postal-code"
              value={zip}
              error={zip === "" && formSubmitted}
              helperText={zip === "" && formSubmitted ? "Zip is required" : " "}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="country"
              name="country"
              label="Country"
              onChange={event => setCountry(event.target.value)}
              fullWidth
              autoComplete="billing country"
              value={country}
              error={country === "" && formSubmitted}
              helperText={country === "" ? "Country is required" : " "}
            />
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleFormSubmit}
          >
            Sign Up
          </Button>
        </Grid>
      </React.Fragment>
    </Container>
  );
}
