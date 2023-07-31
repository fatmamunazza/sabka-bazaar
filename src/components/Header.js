import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";

const useStyles = makeStyles((theme) => ({
  header1: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "1px 1px 10px 1px gray",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "10px",
    padding: "10px",
  },
  logo: {
    height: "auto",
    width: "auto",
  },
  actions: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    marginRight: "10px",
  },
  cartIcon: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "gray",
    borderRadius: "50px",
    padding: "5px 10px",
    color: "white",
  },
}));

const Header = ({
  onHomeClick,
  onProductClick,
  onSignInClick,
  onRegisterClick,
  onLogOutClick,
  onCartClick,
  cartItems,
  isAuthenticated,
  userName,
  setSelectedCategory,
}) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.header1}>
      <Grid item md={2} />
      <Grid item xs={12} md={8} className={classes.header}>
        <div className={classes.logo}>
          <img
            src="https://sabkabazaar-shopping.netlify.app/8481ee8780730d370ae0083ec252362a.png"
            alt="Logo"
            style={{ height: "6vh" }}
          />
          <Button
            color="inherit"
            className={classes.button}
            onClick={onHomeClick}
          >
            Home
          </Button>
          <Button
            color="inherit"
            className={classes.button}
            onClick={() => {
              setSelectedCategory("allProduct");
              onProductClick();
            }}
          >
            Product
          </Button>
        </div>
        <div className={classes.actions}>
          <div>
            <Button
              color="inherit"
              className={classes.button}
              onClick={() => {
                if (!isAuthenticated) {
                  onSignInClick();
                }
              }}
            >
              {isAuthenticated ? userName : "Sign In"}
            </Button>
            <Button
              color="inherit"
              className={classes.button}
              onClick={isAuthenticated ? onLogOutClick : onRegisterClick}
            >
              {isAuthenticated ? "Logout" : "Register"}
            </Button>
          </div>
          <div className={classes.cartIcon} onClick={onCartClick}>
            <ShoppingCartIcon fontSize="large" />
            <span style={{ marginLeft: "5px" }}>
              {cartItems.length} {cartItems.length === 1 ? "item" : "items"}
            </span>
          </div>
        </div>
      </Grid>
      <Grid item md={2} />
    </Grid>
  );
};

export default Header;
