import { Button, Typography } from "@mui/material";
import React from "react";
import request_ico from '../../assets/icons/request_icon.svg'

const customBtnStyle = {
  backgroundColor: "#687EFF",
  color: "white",
  borderRadius: "10px",
  padding: "10px 25px",
  width: "100%"
};

const RequestBtn = ({ text, onClick, icon = null, disabled = false }) => {
  return (
    <Button
      style={customBtnStyle}
      startIcon={icon}
      onClick={onClick}
      disabled={disabled}
    >
      <Typography><img src={request_ico} alt="" /> {text}</Typography>
    </Button>
  );
};

export default RequestBtn;
