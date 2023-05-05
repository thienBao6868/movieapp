import React from "react";
import StarIcon from "@mui/icons-material/Star";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import MoreIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import LogoutIcon from '@mui/icons-material/Logout';
const RightBar = () => {
  const { user, signout, signin } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleLogout = () => {
    handleMenuClose();
    signout(() => {});
  };
  const handleLogin = () => {
    handleMenuClose();
    signin(() => {});
  };
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {/* chinh sua cho nay khi login va log out */}
      {user ? (
        <>
          <MenuItem onClick={handleMenuClose}>{user}</MenuItem>
          <MenuItem onClick={handleLogout}>LogOut</MenuItem>
        </>
      ) : (
        <MenuItem component={Link} to="/form">
          Login
        </MenuItem>
      )}
    </Menu>
  );
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem component={Link} to={"/favorite"}>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <StarIcon />
        </IconButton>
        <p>Favorite</p>
      </MenuItem>
      <MenuItem component={Link} to="/discovery/1">
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <MovieFilterIcon />
        </IconButton>
        <p>Discovery</p>
      </MenuItem>
      {!user ? (
        <MenuItem component={Link} to="/form">
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircleIcon />
          </IconButton>
          <p>Login</p>
        </MenuItem>
      ) : (
        <>
          <Grid>
          <MenuItem >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircleIcon />
            </IconButton>
            <p>{user}</p>
          </MenuItem>
          <MenuItem onClick={handleLogout}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <LogoutIcon />
            </IconButton>
            <p>Logout</p>
          </MenuItem>
          
          </Grid>
        </>
      )}
    </Menu>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <NavLink
          to={"/favorite"}
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "white",
            };
          }}
        >
          <IconButton size="large" color="inherit">
            <StarIcon />
          </IconButton>
        </NavLink>
        <NavLink
          to={"discovery/:pageId"}
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "white",
            };
          }}
        >
          <IconButton size="large" color="inherit">
            <MovieFilterIcon />
          </IconButton>
        </NavLink>
        <IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          aria-controls={menuId}
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
          color="inherit"
        >
          <AccountCircleIcon />
        </IconButton>
      </Box>
      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="show more"
          aria-controls={mobileMenuId}
          aria-haspopup="true"
          onClick={handleMobileMenuOpen}
          color="inherit"
        >
          <MoreIcon />
        </IconButton>
      </Box>
      {renderMobileMenu}
      {renderMenu}
    </>
  );
};

export default RightBar;
