import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  // ✅ Calculate total
  const total = cart.reduce(
    (sum, item) => sum + item.menu.price * item.quantity,
    0
  );

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>My Cart</h2>
        {cart.length > 0 && (
          <button className="btn btn-outline-danger btn-sm" onClick={clearCart}>
            Clear Cart
          </button>
        )}
      </div>

      {cart.length === 0 ? (
        <div className="text-center py-5">
          <p className="lead text-muted">Your cart is empty</p>
          <Link to="/Home" className="btn-primary" style={{ textDecoration: 'none' }}>
            Go to Menu
          </Link>
        </div>
      ) : (
        <div className="row">
          <div className="col-lg-8">
            {cart.map((item) => (
              <div key={item.id} className="premium-card mb-3 d-flex align-items-center justify-content-between p-3">
                
                <div className="d-flex align-items-center gap-3">
                  <div style={{ fontSize: '1.5rem' }}>🍔</div>

                  <div>
                    <h5 className="mb-0">{item.menu.name}</h5>
                    <p className="text-muted mb-0">
                      ₹{item.menu.price} x {item.quantity}
                    </p>
                  </div>
                </div>

                <button 
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>

              </div>
            ))}
          </div>
          
          <div className="col-lg-4">
            <div className="premium-card p-4">
              <h4 className="mb-4">Order Summary</h4>

              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal</span>
                <span>₹{total}</span>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <span>Taxes (5%)</span>
                <span>₹{(total * 0.05).toFixed(2)}</span>
              </div>

              <hr />

              <div className="d-flex justify-content-between mb-4 fw-bold fs-5">
                <span>Total</span>
                <span>₹{(total * 1.05).toFixed(2)}</span>
              </div>

              <button className="btn-primary w-100">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;