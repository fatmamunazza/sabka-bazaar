import React, { useEffect } from "react";
import CategoryCard from "../../components/CategoryCard";
import SaleCarousel from "../../components/SaleCarousel";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { requestDashboard } from "../../redux/slice/dashboardSlice";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
}));
const Home = ({ onCategoryClick, setSelectedCategory }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.dashboard.data);
  useEffect(() => {
    dispatch(requestDashboard());
  }, [dispatch]);
  return (
    <div className={classes.container}>
      <Grid container spacing={2}>
        <Grid item md={2} />

        <Grid item xs={12} md={8}>
          <SaleCarousel />
          {categories.map((category, index) => (
            <CategoryCard
              key={category.title}
              {...category}
              imagePosition={index % 2 === 0 ? "left" : "right"}
              clickHandler={onCategoryClick}
              setSelectedCategory={setSelectedCategory}
            />
          ))}
        </Grid>

        <Grid item md={2} />
      </Grid>
    </div>
  );
};

export default Home;
