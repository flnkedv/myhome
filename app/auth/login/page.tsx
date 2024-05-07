"use client";
import React from "react";
import { useRef } from "react";
import { signIn } from "next-auth/react";
import Button from "@mui/material/Button";

export default function Page() {
  const username = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const handleLogin = () => {
    signIn("credentials", {
      username: username.current?.value,
      password: password.current?.value,
      redirect: true,
      callbackUrl: "/",
    });
  };
  return (
    <div>
      <h1>Login Page</h1>
      <label>
        Username <br />
        <input name="username" type="text" ref={username} /> <br />
      </label>
      <label>
        Password <br />
        <input name="password" type="password" ref={password} /> <br />
        <Button variant="contained" type="button" onClick={handleLogin}>
          Login
        </Button>
      </label>
    </div>
  );
}
