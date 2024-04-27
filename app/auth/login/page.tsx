"use client";
import React from "react";
import { useRef } from "react";
import { signIn } from "next-auth/react";

export default function Page() {
    const username = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)

    const handleLogin = () => {
        signIn("credentials",{
            username: username.current?.value,
            password: password.current?.value,
            redirect: true,
            callbackUrl: '/'
        })
    }
  return (
    <div>
      <h1>Login Page</h1>
      <label>
        Username
        <input name="username" type="text" ref={username} />
      </label>
      <label>
        Password
        <input name="password" type="password" ref={password} />
        <button type="button" onClick={handleLogin}>Login</button>
      </label>
    </div>
  );
}
