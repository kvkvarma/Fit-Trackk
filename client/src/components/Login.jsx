import React, { useState } from "react";
import { auth } from "../firebase";
import {GoogleAuthProvider,signInWithPopup,createUserWithEmailAndPassword,signInWithEmailAndPassword,} from "firebase/auth";
import axios from "axios";

const provider = new GoogleAuthProvider();

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const token = await result.user.getIdToken();
      const res = await axios.post("http://localhost:8005/authapi/google", { token });
      console.log("Login successful:", res.data.user);
      localStorage.setItem("user", JSON.stringify(res.data.user));
    } catch (err) {
      console.error("Google login error:", err);
    }
  };

  const handleEmailRegister = async () => {
    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      const token = await userCred.user.getIdToken();
      await axios.post("http://localhost:8005/authapi/email/register", { token });
    } catch (err) {
      console.error("Registration Error:", err);
    }
  };

  const handleEmailLogin = async () => {
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      const token = await userCred.user.getIdToken();
      const user = await axios.post("http://localhost:8005/authapi/email/login", { token });
      console.log(user.data.firebaseId,user.data.email)
    } catch (err) {
      console.error("Login Error:", err);
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <button onClick={handleGoogleLogin}>Continue with Google</button>
      <hr />
      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br />
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br />
      <button onClick={handleEmailRegister}>Register With Email</button>
      <button onClick={handleEmailLogin}>Login with Email</button>
    </div>
  );
};

export default Login;
