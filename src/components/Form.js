import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme"; // Import the theme from the new file
import { useRadioGroup } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    // maxWidth: "400px",
    padding: "0px 20px 20px 0px",
    "& .MuiFormControl-root": {
      marginBottom: "10px",
    },
    "& .MuiButtonBase-root": {
      marginTop: "10px",
    },
  },
  textField: {
    width: "100%",
  },
  button: {
    backgroundColor: "#00a2be",
    color: "#fff",
    width: "100%",
  },
}));

const Form = ({ type, handleAuth }) => {
  const classes = useStyles();

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Function to handle input changes in the text fields
  const handleChange = (event) => {
    console.log("munazza", type);
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleAuthentication = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email format
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Regular expression for password format (minimum eight characters, at least one letter and one number)

    if (!emailRegex.test(userData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (type === "signin") {
      // Perform validation for signin (email and password only)
      if (!userData.email || !userData.password) {
        alert("Please fill in all the fields.");
        return;
      }

      // Pass only required fields to handleAuth
      const { email, password } = userData;
      handleAuth({ email, password });
    } else {
      // Perform validation for signup (all fields)
      if (
        !userData.firstName ||
        !userData.lastName ||
        !userData.email ||
        !userData.password ||
        !userData.confirmPassword
      ) {
        alert("Please fill in all the fields.");
        return;
      }
      if (!passwordRegex.test(userData.password)) {
        alert(
          "Password must be at least 8 characters long and contain at least one letter and one number."
        );
        return;
      }
      if (userData.password !== userData.confirmPassword) {
        alert("Password and Confirm Password do not match.");
        return;
      }

      // Pass all fields to handleAuth
      const { firstName, lastName, email, password } = userData;
      handleAuth({ name: `${firstName} ${lastName}`, email, password });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.formContainer}>
        {type !== "signin" && (
          <>
            <TextField
              name="firstName"
              label="First Name"
              className={classes.textField}
              variant="standard"
              value={userData.firstName}
              onChange={handleChange}
            />
            <TextField
              name="lastName"
              label="Last Name"
              className={classes.textField}
              variant="standard"
              value={userData.lastName}
              onChange={handleChange}
            />
          </>
        )}

        <TextField
          name="email"
          label="Email"
          className={classes.textField}
          variant="standard"
          value={userData.email}
          onChange={handleChange}
        />
        <TextField
          name="password"
          label="Password"
          className={classes.textField}
          variant="standard"
          value={userData.password}
          onChange={handleChange}
        />
        {type !== "signin" && (
          <TextField
            name="confirmPassword"
            label="Confirm Password"
            className={classes.textField}
            variant="standard"
            value={userData.confirmPassword}
            onChange={handleChange}
          />
        )}

        <Button
          variant="contained"
          className={classes.button}
          color={"secondary"}
          onClick={handleAuthentication}
        >
          {type === "signin" ? "Login" : "SignUp"}
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default Form;
