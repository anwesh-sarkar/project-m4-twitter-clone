import React from "react";
import ReactLoading from "react-loading";
import { COLORS } from "./constants";

const LoadingSpinner = () => {
  return (
    <ReactLoading
      type="spin"
      color={COLORS.primary}
      height={"15%"}
      width={"10%"}
    />
  );
};

export default LoadingSpinner;
