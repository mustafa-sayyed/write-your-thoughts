import React, { useRef, useState } from "react";
import { Input, Button } from "./index";
import authService from "../appwrite/auth";
import { login } from "../store/authSlice";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function SignupForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const [error, setError] = useState("");

  const signup = async (data) => {
    setError("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const user = await authService.getCurrentUser();
        if (user) {
          dispatch(login(user));
          navigate("/");
        }
      }
    } catch (error) {
      setError("Error in signup", error);
    }
  };

  return (
    <div className="w-full bg-[var(--base-200)] border-2 border-[var(--base-300)] max-w-md p-8 rounded-lg shadow-lg">
      <form
        onSubmit={handleSubmit(signup)}
        className="flex flex-col items-center justify-center gap-y-3"
      >
        <h1 className="my-5 text-3xl">Create an Account</h1>
        <Input
          type="text"
          placeholder="Enter Name"
          ref={name}
          {...register("name", {
            required: true,
          })}
        />
        <Input
          type="email"
          placeholder="Enter Email"
          ref={email}
          {...register("email", {
            required: true,
          })}
        />
        <Input
          type="password"
          placeholder="Enter Password"
          ref={password}
          {...register("password", {
            required: true,
            min: 8,
          })}
        />
        <Button type="submit">Submit</Button>
      </form>
      {error && <div className="text-red-400 text-2xl mt-4 text-center">{error}</div>}
      <div className="text-center mt-4">
        <span>Already have an account?</span>
        <Link to={"/login"} className="hover:underline duration-200 ml-1">
          Login
        </Link>
      </div>
    </div>
  );
}

export default SignupForm;
