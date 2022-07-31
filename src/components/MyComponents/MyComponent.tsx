import React from "react";
import { Box, styled, Typography } from "@mui/material";
import {
  myColorMain,
  myColorMyColor,
  upMd,
} from "../../styles/mainTheme.actions";

const StyledBox = styled(Box)`
  width: 1000px;
  height: 500px;
  background: ${myColorMyColor};

  ${upMd} {
    width: 800px;
    height: 400px;
    background: ${myColorMain};
  }
`;

const MyComponent = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <Typography variant="h1">addsdsdfsd</Typography>
      <StyledBox />
    </div>
  );
};

export default MyComponent;
