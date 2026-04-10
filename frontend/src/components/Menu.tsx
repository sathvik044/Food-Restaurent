import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type MenuItem = {
  id: number;
  name: string;
  price: number;
  image?: string;
};

import { useCart } from "./CartContext";
import { getAuthHeader } from "../authUtils";

const Menu = () => {
  const { type } = useParams(); // burger / pizza / food
  const [items, setItems] = useState<MenuItem[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`http://localhost:8081/api/menu/${type}`, {
      headers: getAuthHeader()
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch menu");
        return res.json();
      })
      .then((data) => setItems(data))
      .catch((err) => console.error("Menu fetch error:", err));
  }, [type]);


  return (
    <div className="container py-5">

      {/* Title */}
      <h2 className="mb-4 text-center">
        {type?.toUpperCase()} MENU
      </h2>

      {/* Grid */}
      <div className="card-grid">
        {items.map((item) => (
          <div key={item.id} className="premium-card">

            {/* Image */}
            <img
              src={item.image}
              alt={item.name}
              style={{
                height: "150px",
                width: "100%",
                objectFit: "cover",
                borderRadius: "calc(var(--radius) - 4px)",
              }}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = "https://via.placeholder.com/300x200?text=Food+Image";
              }}
            />
            {/* Content */}
            <div>
              <h3 className="mb-1">{item.name}</h3>
              <span style={{ fontWeight: '700', fontSize: '1.25rem', color: 'hsl(var(--primary))' }}>
                ₹{item.price}
              </span>
            </div>

            {/* Button */}
            <button
              className="btn-primary mt-auto"
              onClick={() => addToCart(item)}
            >
              Add to Cart
            </button>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;