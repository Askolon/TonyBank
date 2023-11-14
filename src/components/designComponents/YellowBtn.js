import { Button, Typography } from "@mui/material";
import React from "react";
import send_ico from '../../assets/icons/send_icon.svg'

const customBtnStyle = {
  backgroundColor: "#F8BB18",
  color: "black",
  borderRadius: "10px",
  padding: "10px 25px",
  width: "100%",
};

const YellowBtn = ({ text, onClick, icon = null, disabled = false }) => {
  return (
    <Button
      style={customBtnStyle}
      startIcon={icon}
      onClick={onClick}
      disabled={disabled}
    >
      <Typography><img src={send_ico} alt="" /> {text}</Typography>
    </Button>
  );
};

export default YellowBtn;
