import React from "react";
import { Spinner } from "./Spinner.styles";

const CodeSpinner = ({ size = 40, color }) => {
  return <Spinner size={size} color={color} />;
};

export default CodeSpinner;
