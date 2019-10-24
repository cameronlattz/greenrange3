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
    fontSize: "22px",
    padding: "15px",
    fontFamily: "Didact Gothic",
    textDecoration: "none",
    color: "white",
    "&[disabled]": {
      color: "lavender"
    }
  },
  navBar: {
    backgroundColor: "rgb(206,219,48)",
    padding: "10px",
    textDecoration: "none",
    visited: "white"
  }
}));

export default function NavBar(props) {
  let location = useLocation();
  const classes = useStyles();

  function getDisabled(pathName) {
    console.log(location.pathname.substring(1), pathName);
    return location.pathname.substring(1) === pathName;
  }

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
          <Link
            className={classes.subtitle}
            disabled={getDisabled("howitworks")}
            to="/howitworks"
          >
            How it works
          </Link>

          <Link
            className={classes.subtitle}
            disabled={getDisabled("plans")}
            to="/plans"
          >
            Meal Plans
          </Link>
          <ButtonSignUp userId={props.userId} href="/login"></ButtonSignUp>
        </Toolbar>
      </AppBar>
    </div>
  );
}
