import React from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Form from "../../components/Form";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    padding: "20px",
    marginTop: "5px",
  },
}));

const UserAccess = ({ handleAuth, currentPage, title, desc }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid container spacing={2}>
        <Grid item md={1} sm={2} lg={3} />
        <Grid item xs={12} sm={8} md={10} lg={6}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              style={{ justifyContent: "center" }}
            >
              <Typography variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="h9" color="text.primary">
                {desc}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Form type={currentPage} handleAuth={handleAuth} />
            </Grid>
          </Grid>
        </Grid>

        <Grid item md={1} sm={2} lg={3} />
      </Grid>
    </div>
  );
};

export default UserAccess;
