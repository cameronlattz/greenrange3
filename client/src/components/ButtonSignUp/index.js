import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  },
  link: {
    textDecoration: "none",
    color: "white"
  }
}));

export default function ButtonSingUp() {
  const classes = useStyles();

  return (
    <div>
      <div>
        <Button
          variant="contained"
          size="medium"
          color="secondary"
          className={classes.margin}
        >
          <Link className={classes.link} to="/login">
            Sign In
          </Link>
        </Button>
      </div>
    </div>
  );
}
