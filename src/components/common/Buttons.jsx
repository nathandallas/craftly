import React from "react";
import "./Button.css";

const Button = ({ variant = "primary", children, onClick, disabled = false }) => {
  return (
    <button className={`button ${variant}`} onClick={() => console.log("Clicked!")} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
