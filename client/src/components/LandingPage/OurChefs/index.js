import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import chefOne from "../OurChefs/img/chef1.jpeg";
import chefTwo from "../OurChefs/img/chef2.jpeg";
import chefThree from "../OurChefs/img/chef3.jpeg";
import chefFour from "../OurChefs/img/chef4.jpeg";
import "./style.css";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    textAlign: "center",
    fontStyle: "normal",
    fontFamily: "Didact Gothic",
    width: "210px",
    alignItems: "center"
  },
  p: {
    fontSize: "18px",
    padding: "10px",
    fontStyle: "normal",
    fontFamily: "Didact Gothic"
  },
  subtitle: {
    fontSize: "15px",

    fontStyle: "normal",
    fontFamily: "Didact Gothic"
  },
  title: {
    fontSize: "30px",
    padding: "10px",
    fontWeight: "bold",
    fontFamily: "Didact Gothic",
    textAlign: "center"
  }
}));

export default function OurChefs() {
  const classes = useStyles();
  return (
    <div className="container-chefs">
      <h1 className={classes.title}>Meet our chefs</h1>
      <div className="container-card">
        <div className="comment-card">
          <Paper className={classes.root}>
            <img
              src={chefOne}
              alt="Chef"
              style={{ width: "auto", height: 150 }}
            />
            <Typography component="p" className={classes.p}>
              <strong>Cristyan Barrios</strong>
            </Typography>
            <Typography component="p" className={classes.subtitle}>
              Especialized in latin food.
            </Typography>
          </Paper>
        </div>
        <div className="comment-card">
          <Paper className={classes.root}>
            <img
              src={chefTwo}
              alt="Chef"
              style={{ width: "auto", height: 150 }}
            />
            <Typography component="p" className={classes.p}>
              <strong>Marilyn Danevaur</strong>
            </Typography>
            <Typography component="p" className={classes.subtitle}>
              French food and amazing cakes.
            </Typography>
          </Paper>
        </div>
        <div className="comment-card">
          <Paper className={classes.root}>
            <img
              src={chefThree}
              alt="Chef"
              style={{ width: "auto", height: 150 }}
            />
            <Typography component="p" className={classes.p}>
              <strong>Shankar Absar</strong>
            </Typography>
            <Typography component="p" className={classes.subtitle}>
              Indian food and spices.
            </Typography>
          </Paper>
        </div>
        <div className="comment-card">
          <Paper className={classes.root}>
            <img
              src={chefFour}
              alt="Chef"
              style={{ width: "auto", height: 150 }}
            />
            <Typography component="p" className={classes.p}>
              <strong>Dario Vicenzo</strong>
            </Typography>
            <Typography component="p" className={classes.subtitle}>
              Pasta and american food.
            </Typography>
          </Paper>
        </div>
      </div>
    </div>
  );
}
