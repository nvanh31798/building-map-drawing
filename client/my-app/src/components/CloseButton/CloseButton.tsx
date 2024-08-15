import { IconButton } from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import React from "react";

export const CloseButton = () => {
  return (
    <IconButton
      size="small"
      sx={{
        position: "absolute",
        top: 0,
        right: 0,
      }}
    >
      <CancelOutlinedIcon fontSize="small" />
    </IconButton>
  );
};
