import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import CartPage from './components/cart';
import Profile from './components/Profile';
import Login from './components/Login';
import Register from './components/Register';
import Product from './components/Product';
import { Routes, Route, Navigate } from 'react-router-dom';


function App(){
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/menu/:type" element={<Menu />} />
        <Route path="/products" element={<Product />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Login" element={<Navigate to="/login" replace />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}
export default App;