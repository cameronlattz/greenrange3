import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import imagehowitworks from "./howitworks.jpg";
import "./style.css";
import { Container, Typography, Card } from "@material-ui/core";

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
    fontSize: "40px",
    padding: "10px",
    fontWeight: "bold",
    fontFamily: "Didact Gothic",
    textAlign: "center",
    color: "darkorchid"
  },
  paragraph: {
    fontSize: "25px",
    padding: "10px",
    fontWeight: "bold",
    fontFamily: "Didact Gothic",
    textAlign: "center",
    color: "wisteria",
    width: "900px",
    alignContent: "center",
    margin: "0 auto"
  },
  description: {
    fontSize: "25px",
    padding: "10px",
    fontFamily: "Didact Gothic",
    textAlign: "center",
    color: "asbestos",
    backgroundColor: "rgba(255,255,255,.6)",
    marginTop: "20px",
    marginBottom: "20px",
    alignContent: "center"
  },
  containermain: {
    width: "auto",
    height: "100%",
    margin: "auto",
    marginTop: "10px",
    display: "flex"
  },
  containerimg: {
    margin: "auto",
    marginTop: "5px",
    alignContent: "center",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  }
}));

export default function HowItWorks() {
  const classes = useStyles();
  return (
    <Container className="containermain">
      <Typography className={classes.title}>How it works</Typography>
      <Card className="containerimg">
        <img
          src={imagehowitworks}
          alt="howitworks"
          style={{ width: "auto", height: "400px" }}
        />
      </Card>
    </Container>
  );
}
