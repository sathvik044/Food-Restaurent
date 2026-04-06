import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const response = await fetch("http://localhost:8081/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Login successful:", data);
                localStorage.setItem("user", JSON.stringify(data));
                navigate("/Home");
            } else if (response.status === 401) {
                setError("Invalid email or password");
            } else {
                setError("An error occurred during login. Please try again.");
            }
        } catch (err) {
            console.error("Login error:", err);
            setError("Connection failed. Is the backend running?");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-container">
            <div className="premium-card login-card">
                <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
                    <h1 style={{ marginBottom: "0.5rem" }}>Welcome Back</h1>
                    <p className="text-muted">Enter your credentials to access your account</p>
                </div>
                
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label" htmlFor="email">Email Address</label>
                        <input
                            id="email"
                            type="email"
                            className="form-input"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    
                    <div className="form-group">
                        <label className="form-label" htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            className="form-input"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {error && (
                        <div style={{ 
                            padding: "0.75rem", 
                            backgroundColor: "rgba(239, 68, 68, 0.1)", 
                            border: "1px solid rgba(239, 68, 68, 0.2)",
                            borderRadius: "var(--radius)",
                            color: "#ef4444", 
                            fontSize: "0.875rem", 
                            marginBottom: "1.5rem",
                            textAlign: "center"
                        }}>
                            {error}
                        </div>
                    )}

                    <button 
                        type="submit" 
                        className="btn-primary" 
                        style={{ 
                            width: "100%", 
                            padding: "0.75rem",
                            fontSize: "1rem",
                            marginTop: "0.5rem",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "0.5rem"
                        }}
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                <span className="loader" style={{ 
                                    width: "18px", 
                                    height: "18px", 
                                    border: "2px solid #fff", 
                                    borderBottomColor: "transparent", 
                                    borderRadius: "50%", 
                                    display: "inline-block",
                                    animation: "rotation 1s linear infinite"
                                }}></span>
                                Signing in...
                            </>
                        ) : "Sign In"}
                    </button>
                    
                    <div style={{ marginTop: "1.5rem", textAlign: "center", fontSize: "0.875rem" }}>
                        <span className="text-muted">Don't have an account? </span>
                        <a href="/register" style={{ color: "hsl(var(--primary))", textDecoration: "none", fontWeight: "600" }}>Sign Up</a>
                    </div>
                </form>
            </div>

            <style>{`
                @keyframes rotation {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
}

export default Login;