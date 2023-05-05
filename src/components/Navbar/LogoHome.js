import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
const LogoHome = () => {
  return (
  <>
  <NavLink to={"/"}
  style={({ isActive, isPending }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isPending ? "red" : "white",
    };
  }}>

  <IconButton size="large" color="inherit" children={<HomeIcon />} />
  </NavLink>
  </>
  )
}

export default LogoHome;
