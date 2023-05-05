import React from "react";
import LogoHome from "./LogoHome";
import SearchBox from "./SearchBox";

import { AppBar, Box, Toolbar } from "@mui/material";
import RightBar from "./RightBar";


const Navbar = () => {
  return (
    <>
      <AppBar  >
        <Toolbar sx={{display:"flex", justifyContent:"space-between"}}>
        <Box sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          <LogoHome />
          <SearchBox />
        </Box>
        <Box sx={{display:"flex", justifyContent:"space-around", alignItems:"center", minWidth:100}}>
          <RightBar/>
        </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
