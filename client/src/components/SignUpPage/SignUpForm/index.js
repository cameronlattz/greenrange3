import React, { useState } from 'react';
import API from "../../../utils/API"
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  container: {
    padding: "40px",
    borderRadius: "10px",
    width: "80%",
    marginTop: "5%"
  },
  title: {
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "rgb(159,65,152)",
    '&:hover': {
      backgroundColor: "rgb(209,176,212)"
    }
  },
}));

export default function AddressForm() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleFormSubmit(event) {
    console.log("great");
    event.preventDefault();
    console.log(firstName, lastName)
    if (firstName !== "" && lastName !== "" && address !== "" && email !== "" && password !== "") {
      API.saveUser({
        firstName,
        lastName,
        address,
        email,
        password,
      }).then(function (res) { console.log("test 2", res);
      return res.status(200) }
      )
      
        .catch(err => console.log(err));
    }
  }

  const classes = useStyles();
  return (
    <Container className={classes.container} >
      <React.Fragment>
        <Typography className={classes.title} variant="h6" gutterBottom>
          Shipping address
      </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} >
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First name"
              onChange={(event) => setFirstName(event.target.value)}
              fullWidth
              autoComplete="fname"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last name"
              onChange={(event) => setLastName(event.target.value)}
              fullWidth
              autoComplete="lname"
            />
          </Grid>
          <Grid item xs={12} sm={6} >
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              onChange={(event) => setEmail(event.target.value)}
              fullWidth
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12} sm={6} >
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              onChange={(event) => setPassword(event.target.value)}
              fullWidth
              autoComplete="password"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address1"
              name="address1"
              label="Address"
              onChange={(event) => setAddress(event.target.value)}
              fullWidth
              autoComplete="billing address-line1"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="City"
              fullWidth
              autoComplete="billing address-level2"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="state"
              name="state"
              label="State"
              fullWidth
              autoComplete="state"
              />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip"
              name="zip"
              label="Zip / Postal code"
              fullWidth
              autoComplete="billing postal-code"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="country"
              name="country"
              label="Country"
              fullWidth
              autoComplete="billing country"
            />
          </Grid>
          <Button
            href="/home"
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