import { Link, useLocation } from "react-router-dom";

import { useCart } from "./CartContext";

const Navbar = () => {
  const { cart } = useCart();
  const cartCount = cart.reduce((count, item) => count + (item.quantity || 1), 0);
  const location = useLocation();
  const pathname = location.pathname.toLowerCase();
  const isAuthPage = pathname === "/login" || pathname === "/register";
  const hideCartButton = isAuthPage;
  const navClassName = `glass-nav py-3${isAuthPage ? " auth-nav" : ""}`;

  return (
    <nav className={navClassName}>
      <div className="container d-flex justify-content-between align-items-center">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/" style={{ fontSize: '1.5rem', fontWeight: '800', textDecoration: 'none', color: 'inherit' }}>
          <span style={{ filter: 'drop-shadow(0 0 8px hsl(var(--primary)))' }}>🍔</span>
          <span style={{ background: 'linear-gradient(to right, var(--text-h), hsl(var(--primary)))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            FoodApp
          </span>
        </Link>

        <div className="d-flex gap-4">
          <Link className="nav-link" to="/" style={{ color: 'inherit', textDecoration: 'none', fontWeight: '500' }}>Home</Link>
          <Link className="nav-link" to="/products" style={{ color: 'inherit', textDecoration: 'none', fontWeight: '500' }}>Best Seller</Link>
          <Link className="nav-link" to="/profile" style={{ color: 'inherit', textDecoration: 'none', fontWeight: '500' }}>Profile</Link>
          <Link className="nav-link" to="/Login" style={{ color: 'inherit', textDecoration: 'none', fontWeight: '500' }}>Logout</Link>
        </div>

        {!hideCartButton && (
          <Link to="/cart" className="btn-primary d-none d-md-block" style={{ textDecoration: 'none', position: 'relative' }}>
            View Cart
            {cartCount > 0 && (
              <span 
                className="badge bg-danger rounded-pill position-absolute top-0 start-100 translate-middle"
                style={{ fontSize: '0.7rem' }}
              >
                {cartCount}
              </span>
            )}
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;