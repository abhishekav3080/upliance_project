import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";

const UserForm: React.FC = () => {
  const [userData, setUserData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
  });
  const [isSaved, setIsSaved] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    setIsSaved(false);
  };

  const handleSubmit = () => {
    const userID = Date.now().toString();
    const completeUserData = { ...userData, userID };
    console.log("Generated User ID:", userID); // Debugging: Log the generated user ID
    localStorage.setItem(`user_${userID}`, JSON.stringify(completeUserData));
    setIsSaved(true);
    alert("User data saved successfully!");
  };

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (!isSaved) {
        e.preventDefault();
        e.returnValue = "";
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isSaved]);

  return (
    <form>
      <TextField
        name="name"
        label="Name"
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        name="address"
        label="Address"
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        name="email"
        label="Email"
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        name="phone"
        label="Phone"
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Save
      </Button>
    </form>
  );
};

export default UserForm;
