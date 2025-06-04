
import React, { useState } from "react";
import axios from "axios";

const LoginSignup = ({ setToken }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleMode = () => setIsLogin(!isLogin);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isLogin ? "/api/auth/login" : "/api/auth/signup";
    try {
      const res = await axios.post(url, { email, password });
      if (res.data.token) {
        setToken(res.data.token);
        localStorage.setItem("token", res.data.token);
        alert("Logged in successfully!");
      } else {
        alert(res.data.message || "Signup successful!");
        setIsLogin(true);
      }
    } catch (err) {
      alert(err.response?.data?.message || "Error occurred");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>{isLogin ? "Login" : "Signup"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br /><br />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br /><br />
        <button type="submit">{isLogin ? "Login" : "Signup"}</button>
      </form>
      <p onClick={toggleMode} style={{ cursor: "pointer", color: "blue" }}>
        {isLogin ? "Need an account? Sign up" : "Already have an account? Login"}
      </p>
    </div>
  );
};

export default LoginSignup;
