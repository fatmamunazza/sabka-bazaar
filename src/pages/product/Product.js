import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { requestProduct } from "../../redux/slice/productSlice";

const Product = ({
  selectedCategory,
  setSelectedCategory,
  handleIncrement,
}) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.data);
  const categories = useSelector((state) => state.dashboard.data);
  useEffect(() => {
    dispatch(requestProduct({ category: selectedCategory }));
  }, [dispatch, selectedCategory]);
  const allCategories = categories?.map((category) => category.title);

  // Function to handle changes in the dropdown value
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div style={{ paddingTop: "5px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} style={{ margin: "10px " }}>
          <FormControl
            fullWidth
            variant="outlined"
            sx={{ my: 2, display: { md: "none" } }}
          >
            <InputLabel>Category</InputLabel>
            <Select
              value={selectedCategory}
              onChange={handleCategoryChange}
              label="Category"
            >
              {allCategories?.map((cat) => (
                <MenuItem
                  key={cat}
                  value={cat.toLowerCase().replaceAll(" ", "-")}
                >
                  {cat}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid
          item
          xs={0}
          sm={0}
          md={3}
          lg={2}
          sx={{ display: { xs: "none", sm: "none", md: "block" } }}
          style={{ backgroundColor: "rgb(204, 204, 210)", marginTop: "-20px" }}
        >
          <div
            style={{
              height: "100vh",
              padding: "0px 0px 10px 10px",
            }}
          >
            <ul style={{ listStyle: "none", padding: 0 }}>
              {allCategories.map((cat) => (
                <li
                  style={{
                    marginBottom: "10px",
                    padding: "5px 0px 5px 5px",
                    borderBottom: "1.5px solid rgb(193, 187, 187)",
                  }}
                  key={cat.toLowerCase().replaceAll(" ", "-")}
                  onClick={() => {
                    setSelectedCategory(cat.toLowerCase().replaceAll(" ", "-"));
                  }}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={9}
          lg={10}
          style={{ padding: "20px 20px 20px 40px" }}
        >
          <Grid container spacing={2} style={{ backgroundColor: "white" }}>
            {products.map((product, index) => (
              <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                <ProductCard
                  key={product.id}
                  product={product}
                  handleIncrement={handleIncrement}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Product;
