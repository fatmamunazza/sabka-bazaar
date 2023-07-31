import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const CategoryCard = ({
  title,
  description,
  linkText,
  category,
  imageUrl,
  imagePosition,
  clickHandler,
  setSelectedCategory,
}) => {
  return (
    <Card
      variant="elevation"
      elevation={1}
      style={{
        marginBottom: "100px",
        boxShadow: "1px 20px 10px -17px gray",
      }}
    >
      <CardContent
        style={{
          display: "flex",
          flexDirection: imagePosition === "left" ? "row" : "row-reverse",
          alignItems: "center",
        }}
      >
        <div style={{ flex: 1, padding: "10px" }}>
          <img
            src={imageUrl}
            alt={title}
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </div>
        <div
          style={{
            flex: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            component="div"
            style={{ marginBottom: "2%" }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ marginBottom: "2%", textAlign: "center" }}
          >
            {description}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setSelectedCategory(category);
              clickHandler();
            }}
          >
            {linkText}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
