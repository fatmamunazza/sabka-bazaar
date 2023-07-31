import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import { makeStyles } from "@mui/styles";
import theme from "../theme";
import { ThemeProvider } from "@mui/material/styles";
import MinusIcon from "@mui/icons-material/IndeterminateCheckBox";
import AddBoxIcon from "@mui/icons-material/AddBox";

const useStyles = makeStyles((theme) => ({
  cartPopup: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    zIndex: 9999,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    "& .MuiPaper-root": {
      backgroundColor: "#ddd",
    },
  },
  cartHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "black",
    color: "white",
    padding: "5px 15px 5px 15px",
    "& .MuiSvgIcon-root": {
      color: "white",
    },
  },
  cartContent: {
    backgroundColor: "#ddd",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    display: "flex",
    flexDirection: "column",
    height: "80vh",
    overflowY: "auto",
    justifyContent: "center",
    textAlign: "center",
  },
  cartItems: {
    backgroundColor: "white",
    overflow: "auto",
  },
  cartFooter: {
    marginTop: "auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "white",
    flexDirection: "column",
  },
  buttonText: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  proceedButton: {
    backgroundColor: "pink",
    color: "#fff",
    width: "100%",
  },
  banner: {
    display: "flex",
    alignItems: "center",
    margin: "10px",
    backgroundColor: "white",
    padding: "10px 20px 10px 20px",
  },
  bannerImage: {
    marginRight: "10px",
    maxWidth: "100px",
  },
}));

const CartPopup = ({
  onClose,
  cartItems,
  handleIncrement,
  handleDecrement,
}) => {
  const classes = useStyles();

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.cartPopup}>
        <Card className={classes.cartContent}>
          <div className={classes.cartHeader}>
            <Typography variant="h6">
              My Cart ({cartItems.length}{" "}
              {cartItems.length === 1 ? "item" : "items"})
            </Typography>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </div>
          <Divider />
          {cartItems.length !== 0 ? (
            <>
              <CardContent className={classes.cartItems}>
                {cartItems.map((item) => (
                  <Grid
                    container
                    spacing={2}
                    key={item.id}
                    style={{ padding: "10px" }}
                  >
                    <Grid item xs={3}>
                      <CardMedia
                        component="img"
                        image={item.image}
                        alt={item.name}
                        style={{
                          height: "10vh",
                        }}
                      />
                    </Grid>
                    <Grid item xs={9}>
                      <Grid item xs={12} style={{ textAlign: "left" }}>
                        <Typography variant="h10">{item.name}</Typography>
                      </Grid>

                      <Grid item xs={12}>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            "& .MuiButtonBase-root": {
                              padding: "0px",
                            },
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "space-between",
                              "& .MuiButtonBase-root": {
                                padding: "0px",
                              },
                            }}
                          >
                            <MinusIcon
                              variant="contained"
                              color="secondary"
                              onClick={() => handleDecrement(item)}
                            />
                            <Typography
                              variant="h7"
                              style={{ padding: "10px" }}
                            >
                              {item.quantity}
                            </Typography>
                            <AddBoxIcon
                              variant="contained"
                              color="secondary"
                              onClick={() => handleIncrement(item)}
                            />
                            <Typography
                              variant="subtitle1"
                              style={{ padding: "10px" }}
                            >
                              X Rs. {item.price}
                            </Typography>
                          </div>

                          <div>
                            <Typography variant="subtitle1">
                              Rs. {item.quantity * item.price}
                            </Typography>
                          </div>
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                ))}
              </CardContent>

              <div className={classes.banner}>
                <img
                  src="https://sabkabazaar-shopping.netlify.app/62c4b65ddae9127b0672975ef9034a8a.png" // Add the banner image URL here
                  alt="Banner"
                  className={classes.bannerImage}
                />
                <Typography variant="body2">
                  You won't find it cheaper anywhere
                </Typography>
              </div>
            </>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
                textAlign: "center",
                height: "100%",
                backgroundColor: "white",
              }}
            >
              <Typography
                variant="h9"
                style={{
                  fontWeight: "bold",
                  paddingBottom: "10px",
                }}
              >
                No items in your cart
              </Typography>
              <Typography variant="h11">
                Your favourite items are just a click away
              </Typography>
            </div>
          )}

          <div className={classes.cartFooter}>
            {cartItems.length !== 0 ? (
              <>
                <Typography variant="body2">
                  Promo code can be applied on the payment page
                </Typography>
                <Button
                  className={classes.proceedButton}
                  endIcon={<ArrowForwardIosIcon />}
                  variant="contained"
                  color={"secondary"}
                >
                  <div className={classes.buttonText}>
                    <span> Proceed to Checkout </span>
                    <span> Rs. {totalPrice} </span>
                  </div>
                </Button>
              </>
            ) : (
              <Button
                className={classes.proceedButton}
                variant="contained"
                color={"secondary"}
                onClick={onClose}
              >
                Start Shopping
              </Button>
            )}
          </div>
        </Card>
      </div>
    </ThemeProvider>
  );
};

export default CartPopup;
