import { useEffect, useState } from "react";

type ProductType = {
  id: number;
  name: string;
  price: number;
  image?: string;
};

import { useCart } from "./CartContext";

import { getAuthHeader } from "../authUtils";

const Product = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("https://restaurent-backend-u62e.onrender.com/api/products", {
      headers: getAuthHeader(),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data) => setProducts(data))
      .catch((err) => console.error("Product fetch error:", err));
  }, []);

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-end mb-4">
        <div>
          <h2 className="mb-0">Featured Products</h2>
          <p className="text-muted">Handpicked deliciousness just for you</p>
        </div>
        <div className="badge">{products.length} Items Available</div>
      </div>

      <div className="card-grid">
        {products.map((p) => (
          <div key={p.id} className="premium-card">
            <div
              style={{
                height: "140px",
                background:
                  "linear-gradient(135deg, hsl(var(--primary) / 0.2), transparent)",
                borderRadius: "calc(var(--radius) - 4px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2.5rem",
              }}
            >
              🍔
            </div>

            <div>
              <h4 className="mb-1" style={{ fontSize: "1.1rem" }}>
                {p.name}
              </h4>
              <p className="text-muted small mb-2">
                Delicious freshly prepared meal.
              </p>

              <div className="d-flex justify-content-between align-items-center">
                <span
                  style={{
                    fontWeight: "700",
                    fontSize: "1.25rem",
                    color: "hsl(var(--primary))",
                  }}
                >
                  ₹{p.price}
                </span>
                <button
                  className="btn-primary"
                  style={{
                    padding: "0.25rem 0.75rem",
                    fontSize: "0.875rem",
                  }}
                  onClick={() => addToCart(p)}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;