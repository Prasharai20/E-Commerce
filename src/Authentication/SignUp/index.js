import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("Name :", name);
    // console.log("Email :", email);
    // console.log("Password :", password);

    const newErrors = {};
    //Name Validate
    if (!name) {
      newErrors.name = "Name is Required";
    }

    //Email Validate
    if (!email) {
      newErrors.email = "Email is Required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is Invalid";
    }

    //password validate
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 Characters";
    }
    if (Object.keys(newErrors).length === 0) {
      toast.success("Form Submitted Successfully");
      setEmail("");
      setName("");
      setPassword("");
    } else {
      toast.error("Enter all required fields");
    }

    setErrors(newErrors);
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
            label="Name*"
            placeholder="Enter Name"
            value={name}
            // helperText={errors.name}
            onChange={(event) => setName(event.target.value)}
          />
          {errors.name ? (
            <div className="text-red-500 text-xs">*{errors.name}</div>
          ) : null}
          <TextField
            type="text"
            placeholder="Enter Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          {errors.email ? (
            <div className="text-red-500 text-xs">*{errors.email}</div>
          ) : null}
          <TextField
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {errors.password ? (
            <div className="text-red-500 text-xs">*{errors.password}</div>
          ) : null}

          <Button type="submit" size="small" variant="contained">
            Submit
          </Button>
        </form>
      </div>
      <ToastContainer pauseOnHover={false} limit={2} />
    </div>
  );
};

export default SignUp;
