import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom"
import "./style.css";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    fontSize: "30px"
  },
  navBar: {
    backgroundColor: "rgb(206,219,48)"
  }
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.navBar} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Green Range
          </Typography>
          <Typography href="/login" variant="h6" className={classes.title}>
            Green Range
          </Typography>
          <Button href="/plans" color="inherit">
            Plans
          </Button>
          <Button href="/login" color="inherit">
            Login
          </Button>
          <Button color="inherit">
            <Link to="/plans">Plans</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
