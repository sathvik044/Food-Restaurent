import type { Restaurant } from "./Types";
import { useNavigate } from "react-router-dom";

const restaurants: Restaurant[] = [
  { id: 1, name: "Burger Hub" },
  { id: 2, name: "Pizza Palace" },
  { id: 3, name: "Fried Chicken" },
  { id: 4, name: "Fast Food Corner" },
  { id: 5, name: "Juices" },
  { id: 6, name: "fruits" }
];

const categoryImages: Record<string, string> = {
  "Burger Hub": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
  "Pizza Palace": "https://plus.unsplash.com/premium_photo-1667682942060-977925f9a54b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGl6emFzfGVufDB8fDB8fHww",
  "Fried Chicken": "https://images.unsplash.com/photo-1562967916-eb82221dfb92",
  "Fast Food Corner": "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bm9vZGxlc3xlbnwwfHwwfHx8MA%3D%3D",
  "Juices": "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8anVpY2VzfGVufDB8fDB8fHww",
  "fruits": "https://images.unsplash.com/photo-1610832958506-aa56368176cf",
};

const Home = () => {
  const navigate = useNavigate();

  const getCategory = (name: string) => {
    if (name === "Burger Hub") return "burger";
    if (name === "Pizza Palace") return "pizza";
    if (name === "Fried Chicken") return "Fried Chicken";
    if (name === "Fast Food Corner") return "Fast Food Corner";
    if (name === "Juices") return "Juices";
    if (name === "fruits") return "fruits";
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="mb-2">
          Welcome to <span style={{ color: 'hsl(var(--primary))' }}>FoodApp</span>
        </h1>
        <p className="text-muted">
          Enjoy quick, tasty, and budget-friendly meals with our fast food selection. From juicy burgers to crispy fries and refreshing drinks, we serve happiness in every bite!
        </p>
      </div>

      <div className="card-grid">
        {restaurants.map((res) => (
          <div key={res.id} className="premium-card">

            <div
              style={{
                height: "160px",
                background: "linear-gradient(45deg, #1a1a1a, #2a2a2a)",
                borderRadius: "calc(var(--radius) - 4px)",
                overflow: "hidden", // important
              }}
            >
              <img
                src={
                  categoryImages[res.name] ||
                  "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
                }
                alt={res.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1504674900247-0877df9cc836";
                }}
              />
            </div>
            <div>
              <h3 className="mb-1" style={{ fontSize: '1.25rem' }}>
                {res.name}
              </h3>
              <div className="d-flex gap-2">
                <span className="badge">Popular</span>
                <span className="badge">4.5 ★</span>
              </div>
            </div>

            {/* ✅ UPDATED BUTTON */}
            <button
              className="btn-primary mt-auto"
              onClick={() => navigate(`/menu/${getCategory(res.name)}`)}
            >
              View Menu
            </button>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;