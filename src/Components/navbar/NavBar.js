import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import sus from "../../assets/sus.png";
import myStyle from "./styles";
import { Link, useLocation } from "react-router-dom";

const NavBar = ({ totalUniqueItems }) => {
  const location = useLocation();
  const classes = myStyle();
  return (
    <>
      <AppBar position="fixed" className={classes.AppBar} color="inherit">
        <Toolbar style={{backgroundColor:'#FEFCFC'}}>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img src={sus} height="45px" alt="logo" className={classes.image} />
            SUS MARKET
          </Typography>
          <div className={classes.grow} />
          {location.pathname === "/" && (
            <div className={totalUniqueItems ? classes.button : classes.empt}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show cart items"
                color={totalUniqueItems ?'inherit':'default'}
              >
                <Badge badgeContent={totalUniqueItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
