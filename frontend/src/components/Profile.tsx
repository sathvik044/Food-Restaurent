import { useEffect, useState } from "react";

import { getAuthHeader } from "../authUtils";

const Profile = () => {
  const [profile, setProfile] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://restaurent-backend-u62e.onrender.com/api/users", {
      headers: getAuthHeader(),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch users");
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setProfile(data);
        } else {
          console.error("API response is not an array:", data);
        }
      })
      .catch((err) => console.error("Profile fetch error:", err));
  }, []);

  return (
    <div className="container py-5 d-flex justify-content-center">
      <div className="premium-card" style={{ maxWidth: '450px', width: '100%', textAlign: 'center', gap: '1.5rem', padding: '3rem 2rem' }}>
        <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'linear-gradient(var(--primary), #8b5cf6)', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', boxShadow: '0 0 20px hsl(var(--primary) / 0.3)' }}>
          👤
        </div>
        
        <div>
          <h2 className="mb-1">User Profiles</h2>
          <p className="text-muted">Manage your account information</p>
        </div>

        <div className="d-flex flex-column gap-3 mt-2">
          {Array.isArray(profile) && profile.map((p: any) => (
            <div key={p.id} style={{ background: 'hsl(var(--background))', padding: '1rem', borderRadius: 'var(--radius)', border: '1px solid hsl(var(--border))', textAlign: 'left' }}>
              <div className="d-flex justify-content-between">
                <span className="fw-bold">{p.name}</span>
                <span className="badge">ID: {p.id}</span>
              </div>
              <div className="text-muted small">{p.email}</div>
              <div className="mt-2 small">Age: <span className="text-foreground">{p.age}</span></div>
            </div>
          ))}
        </div>

        <button className="btn-primary w-100 mt-4">Edit All Profiles</button>
      </div>
    </div>
  );
};

export default Profile;