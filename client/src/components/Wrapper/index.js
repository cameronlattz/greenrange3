import React from "react";
import "./style.css";

function Wrapper(props) {
  return <div className="containner">{props.children}</div>;
}
export default Wrapper;
