import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import imagehowitworks from "../../img/logo/howitworks.jpg";
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
  }
}));

export default function HowItWorks() {
  const classes = useStyles();
  return (
    <Container className="container-main">
      <Typography className={classes.title}>How it works</Typography>
      <Card className="container-img">
        <img
          src={imagehowitworks}
          alt="How it works"
          style={{ width: "auto", height: "400px" }}
        />
      </Card>
      <Container className={classes.description}>
        <Typography className={classes.paragraph}>
          Our mission is to make your dinner time more enjoyable by delivering
          everything you need to cook chef inspired meals right to your front
          door, without the waste and for less money.
        </Typography>
        <Typography className={classes.paragraph}>
          If you like to cook but don't have time to shop for groceries, and you
          care about how much waste is sitting in a landfill, Green Range is
          here to help.
        </Typography>
        <Typography className={classes.paragraph}>
          After signing up you'll have access to our weekly meal plans, with
          recipes designed by world renowned chefs. Every ingredient needed to
          make these meals will be delivered to your front door from the grocery
          store of your choosing.
        </Typography>
        <Typography className={classes.paragraph}>
          Each week there are new exciting recipes to choose from. Enjoy it!
        </Typography>
      </Container>
    </Container>
  );
}
