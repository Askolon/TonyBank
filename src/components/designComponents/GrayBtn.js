import { Button, Typography } from "@mui/material";
import React from "react";

const customBtnStyle = {
  backgroundColor: "rgb(247, 247, 247)",
  color: "black",
  borderRadius: "10px",
  padding: "10px 25px",
};

const GrayBtn = ({ text, onClick, icon = null, disabled = false }) => {
  return (
    <Button
      style={customBtnStyle}
      startIcon={icon}
      onClick={onClick}
      disabled={disabled}
    >
      <Typography>{text}</Typography>
    </Button>
  );
};

export default GrayBtn;
