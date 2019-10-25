import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import imageLogo from "../../img/logo/green-range-logo12.8.png";
import "./style.css";
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
    width: "100%"
  },
  card: {
    flex: 1,
    backgroundColor: "rgb(206,219,48)",
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
        <FaEnvelope style={{ width: 40, height: 40 }} />
        <FaFacebookSquare style={{ width: 40, height: 40 }} />
        <FaInstagram style={{ width: 40, height: 40 }} />
      </div>
    </div>
  );
}

export default Footer;
