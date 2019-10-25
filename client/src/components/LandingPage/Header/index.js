import React from "react";
import "./style.css";
import ButtonSignUp from "../../ButtonSignUp";
import { Button } from "@material-ui/core";

function Header(props) {
  return (
    <div className="jumbotron-fluid">
      <div className="jumbotron-content">
        <h1 className="display-4">Choose your weekly meal and cook at home</h1>
        <h4>Let's make cooking an amazing moment!</h4>
        <br />
        <ButtonSignUp href="/login"></ButtonSignUp>
        <Button
        variant="contained"
        size="medium"
        color="secondary"
        style={{textShadow: "none"}}
        href="/signup">
          Register
        </Button>
      </div>
    </div>
  );
}
export default Header;
