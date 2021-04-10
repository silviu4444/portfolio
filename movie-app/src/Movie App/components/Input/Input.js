import React, { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Input.module.scss";
const Input = ({
  onClick,
  onChange,
  value,
  type,
  placeholder,
}, ref) => {
  return (
    <>
      <input
        onClick={onClick}
        onChange={onChange}
        value={value}
        type={type}
        placeholder={placeholder}
        ref={ref}
      />
    </>
  );
};
const forwaredInput = React.forwardRef(Input);

export default forwaredInput;
