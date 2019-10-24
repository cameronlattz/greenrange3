import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import imagehowitworks from "./howitworks.jpg";
import "./style.css";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    textAlign: "center",
    fontStyle: "italic",
    fontFamily: "Didact Gothic",
    width: "250px",
    alignItems: "center"
  },
  title: {
    fontSize: "30px",
    padding: "10px",
    fontWeight: "bold",
    fontFamily: "Didact Gothic",
    textAlign: "center"
  }
}));

export default function HowItWorks() {
  const classes = useStyles();
  return (
    <div className="container">
      <h1 className={classes.title}>How it works</h1>
      <div className="container-card">
        <img
          src={imagehowitworks}
          alt="How it works"
          style={{ width: "auto", height: "500px" }}
        />
      </div>
    </div>
  );
}
