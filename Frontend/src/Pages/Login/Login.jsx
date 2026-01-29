import React, { useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import { postApi } from "../../utils/network";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    identifier: "sanay0203@demo.com", // Pre-filled with dummy email
    password: "sanay0203", // Pre-filled with dummy password
  });
  const navigation = useNavigation();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError(""); // Clear error on input change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await postApi("users/login", {
        username: formData.identifier,
        email: formData.identifier,
        password: formData.password,
      });

      if (response?.data?.success) {
        // Store token and user data in localStorage
        localStorage.setItem("token", response.data.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.data));

        // Redirect to home or dashboard
        navigate("/home");
        setError(response?.data?.message || "Login failed");
      }
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Connection error. Please check if the server is running.",
      );
      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-left">
        <h1>
          Find Your Perfect <br />
          Career Path with AI
        </h1>

        <div className="login-card">
          <h2>Welcome Back!</h2>
          <p>Log in to your AI Career Guide account</p>

          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="identifier"
              placeholder="Email or Username"
              value={formData.identifier}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <button type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Log In"}
            </button>
          </form>

          <div className="login-footer">
            <span>Forgot Password?</span>
            <span>
              Don't have an account? <a href="#">Sign Up</a>
            </span>
          </div>

          <div className="demo-credentials">
            <small>
              Demo: Email "sanay0203@demo.com" & Password "sanay0203"
            </small>
          </div>
        </div>
      </div>

      <div className="login-right">
        {/* Illustration image */}
        <img src="/login-illustration.png" alt="Career AI" />
      </div>
    </div>
  );
};

export default Login;
