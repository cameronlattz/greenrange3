import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
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
          Choose your plan
        </Button>
      </div>
    </div>
  );
}
