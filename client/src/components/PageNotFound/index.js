import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    header: {
        fontSize: 40,
        color: "rgb(159,65,152)",
        textAlign: "center",
        marginTop: "30px"
    }
}));

export default function PageNotFound() {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.header}>
          Page not found.
      </Typography>
    </>
  );
}
