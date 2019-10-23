import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import ButtonSignUp from "../ButtonSignUp";
import imageLogo from "../../img/logo/green-range-logo12.8.png";
import "./style.css";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%"
  },
  menuButton: {
    marginCenter: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    fontSize: "30px",
    fontFamily: "Chewy",
    color: "white",
    textDecoration: "none"
  },
  subtitle: {
    fontSize: "18px",
    padding: "15px",
    fontFamily: "Didact Gothic",
    textDecoration: "none",
    color: "white"
  },
  navBar: {
    backgroundColor: "rgb(206,219,48)",
    padding: "10px",
    textDecoration: "none",
    visited: "white"
  }
}));

export default function NavBar() {
  // const [landing, setLanding] = useState(false);
  // const [howItWorks, setHowItWorks] = useState(false);
  // const [plans, setPlans] = useState(false);
  // const [aboutUs, setAboutUs] = useState(false);
  // const [login, setLogin] = useState(false);
  let location = useLocation();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.navBar} position="static">
        <Toolbar>
          <img src={imageLogo} alt="Logo" style={{ width: 70, height: 70 }} />
          <Typography variant="h6" className={classes.title}>
            <Link className={classes.title} to="/">
              Green Range
            </Link>
          </Typography>
          {location.pathname !== "/howitworks" && (
            <Link
              // onClick={setHowItWorks(true)}
              className={classes.subtitle}
              to="/howitworks"
            >
              How it works
            </Link>
          )}
          {/* <Typography
            href="/howitworks"
            variant="h6"
            className={classes.subtitle}
          >
            <Link className={classes.subtitle} to="/howitworks">
              {" "}
              How it works
            </Link>
          </Typography> */}
          {location.pathname !== "/plans" && (
            <Link
              // onClick={setPlans(true)}
              className={classes.subtitle}
              to="/plans"
            >
              Meal Plans
            </Link>
          )}
          {/* <Typography variant="h6" className={classes.subtitle}>
            <Link className={classes.subtitle} to="/plans">
              Meal Plans
            </Link>
          </Typography> */}

          {location.pathname !== "/aboutus" && (
            <Link
              // onClick={setAboutUs(true)}
              className={classes.subtitle}
              to="/aboutus"
            >
              About us
            </Link>
          )}
          {/* <Typography href="/aboutus" variant="h6" className={classes.subtitle}>
            <Link className={classes.subtitle} to="/aboutus">
              About us
            </Link>
          </Typography> */}
          {location.pathname !== "/login" && (
            <ButtonSignUp href="/login"></ButtonSignUp>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
