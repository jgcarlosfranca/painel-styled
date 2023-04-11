import React from "react";
import { Spinner } from "./Spinner.styles";

export const CodeSpinner = ({ size = 40, color = "#000" }) => {
  return <Spinner size={size} color={color} />;
};
