import React from "react";
import "./style.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  footer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(231,230,233)",
    height: "100px",
    textAlign: "center",
    marginTop: "50px"
  }
}));

function Footer() {
  const classes = useStyles();

  return (
    <footer>
      <div className={classes.footer}>
        <a href="#www.google.com"> Code on Github</a>
      </div>
    </footer>
  );
}

export default Footer;
