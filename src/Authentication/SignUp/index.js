import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Name :", name);
    console.log("Email :", email);
    console.log("Password :", password);
  };
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
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <TextField
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <Button type="submit" size="small" variant="contained">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
