import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import imageLogo from "../../img/logo/green-range-logo12.8.png";
import "./style.css";
import Typography from "@material-ui/core/Typography";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const useStyles = makeStyles(theme => ({
  footer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100px",
    textAlign: "center",
    marginTop: "20px",
    backgroundColor: "rgb(206,219,48)",
    alignContent: "center",
    display: "flex",
    left: "0",
    bottom: "0",
    width: "100%"
  },
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "80px",
    textAlign: "center",
    backgroundColor: "rgb(206,219,48)",
    display: "flex",
    alignContent: "center",
    textDecoration: "none",
    fontFamily: "Didact Gothic",
    color: "white",
    fontSize: "18px"
  }
}));

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <div className={classes.card}>
        <img src={imageLogo} alt="Logo" style={{ width: 70, height: 70 }} />
      </div>
      <div className={classes.card}>
        <Typography variant="h6" className={classes.card}>
          <Link className={classes.card} to="/">
            Home
          </Link>
        </Typography>
        <br />

        <Typography variant="h6" className={classes.card}>
          <Link className={classes.card} to="/plans">
            Meal Plans
          </Link>
        </Typography>
        <br />

        <br />
      </div>
      <div className={classes.card}>
        <FaEnvelope style={{ width: 40, height: 40 }} />
        <br />
        <br />
        <FaFacebookSquare style={{ width: 40, height: 40 }} />
        <br />
        <br />
        <FaInstagram style={{ width: 40, height: 40 }} />
      </div>
    </div>
  );
}

export default Footer;
