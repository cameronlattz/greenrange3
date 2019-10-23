import React from "react";
import "./style.css";
import ButtonSignUp from "../../ButtonSignUp";

function Header(props) {
  return (
    <div className="jumbotron-fluid">
      <div className="jumbotron-content">
        <br />
        <h1 className="display-4">Choose your weekly meal and cook at home</h1>
        <h4>Let's make cooking an amazing moment!</h4>
        <br />
        <ButtonSignUp href="/login"></ButtonSignUp>
      </div>
    </div>
  );
}
export default Header;
