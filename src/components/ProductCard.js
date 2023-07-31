import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import theme from "../theme";
import { ThemeProvider } from "@mui/material/styles";

const ProductCard = ({ product, handleIncrement }) => {
  return (
    <ThemeProvider theme={theme}>
      <Card>
        <CardContent>
          <Typography
            variant="h7"
            component="div"
            style={{ fontWeight: "bold" }}
          >
            {product.name}
          </Typography>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "5px",
              flexDirection: "column",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "50%", height: "50%" }}
            />
          </div>

          <Typography
            variant="body2"
            color="text.secondary"
            style={{
              marginBottom: "10px",
              backgroundColor: "#ddd",
              color: "#000",
              padding: "10px",
            }}
          >
            {product.description}
          </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="body3" color="text.secondary">
              MRP Rs.{product.price}
            </Typography>
            <Button
              variant="contained"
              color={"secondary"}
              onClick={() => handleIncrement(product)}
            >
              Buy Now
            </Button>
          </div>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
};

export default ProductCard;
