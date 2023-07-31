import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#ddd",
    padding: "10px",
    textAlign: "center",
    fontSize: "14px",
    color: "#000000",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      Copyright © 2011-2018 Sabka Baazar Gorcery Supplies Pvt. Ltd.
    </footer>
  );
};

export default Footer;
