import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Register: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("http://localhost:8081/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          age: parseInt(form.age) || 0
        }),
      });

      if (res.ok) {
        setSuccess(true);
        setTimeout(() => navigate("/login"), 2000);
      } else {
        const errorData = await res.text();
        setError(errorData || "Registration failed. Please try again.");
      }
    } catch (err) {
      setError("Server error. Please check if the backend is running.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="login-container">
        <div className="premium-card login-card" style={{ textAlign: "center" }}>
          <h2 style={{ color: "#10b981" }}>Success! ✅</h2>
          <p>Your account has been created. Redirecting to login...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="login-container">
      <div className="premium-card login-card">
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h2>Create Account</h2>
          <p className="text-muted">Join our community today</p>
        </div>

        {error && (
          <div style={{ 
            padding: "0.75rem", 
            backgroundColor: "rgba(239, 68, 68, 0.1)", 
            border: "1px solid rgba(239, 68, 68, 0.2)", 
            borderRadius: "var(--radius)",
            color: "#ef4444",
            marginBottom: "1rem",
            fontSize: "0.875rem"
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input 
              type="text"
              name="name" 
              className="form-input"
              placeholder="John Doe" 
              value={form.name}
              onChange={handleChange} 
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input 
              type="email"
              name="email" 
              className="form-input"
              placeholder="name@example.com" 
              value={form.email}
              onChange={handleChange} 
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input 
              type="password"
              name="password" 
              className="form-input"
              placeholder="••••••••" 
              value={form.password}
              onChange={handleChange} 
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Age</label>
            <input 
              type="number"
              name="age" 
              className="form-input"
              placeholder="25" 
              value={form.age}
              onChange={handleChange} 
              required
            />
          </div>

          <button 
            type="submit" 
            className="btn-primary" 
            style={{ width: "100%", marginTop: "1rem" }}
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Register"}
          </button>
        </form>

        <div style={{ marginTop: "1.5rem", textAlign: "center", fontSize: "0.875rem" }}>
          <span className="text-muted">Already have an account? </span>
          <Link to="/login" style={{ color: "hsl(var(--primary))", textDecoration: "none", fontWeight: "500" }}>
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;