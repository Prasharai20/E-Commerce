import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const SignUp2 = () => {
  const [formData, setFormData] = useState([]);
  const [checked, setChecked] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Name :", formData.name);
    console.log("Email :", formData.email);
    console.log("Password :", formData.password);
    console.log("Phone :", formData.phone);
    console.log("Gender :", formData.gender);
  };
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };
  console.log(formData);
  console.log(checked);

  return (
    <div className="flex h-screen">
      <div className="w-1/2">
        <img
          src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7865.jpg?w=740&t=st=1683615930~exp=1683616530~hmac=8c14907f7d16d50f6b9ac45ab2e55576ecebd843d761627023a57ac344382be2"
          alt=""
        />
      </div>

      <div className="w-1/2 flex flex-col h-full">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center h-full justify-center gap-5"
        >
          <TextField
            required
            type="text"
            id="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            required
            id="email"
            type="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            required
            id="password"
            type="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
          />
          <TextField
            id="phone"
            type="number"
            placeholder="Enter Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
          <select
            id="gender"
            className="p-2 px-4 border-2 rounded w-60"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input
            type="checkbox"
            id="remember"
            value={checked}
            onChange={(event) => setChecked(event.target.checked)}
          />

          <Button
            disabled={checked && formData.email ? false : true}
            type="submit"
            size="small"
            variant="contained"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignUp2;
