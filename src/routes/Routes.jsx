import { Routes, Route } from "react-router-dom"

import Home from "../pages/Home.jsx"
import Register from "../pages/Register.jsx"
import Login from "../pages/Login.jsx"
import About from "../pages/About.jsx"
import Movielists from "../pages/Movielists.jsx"
import Contact from "../pages/Contact.jsx"
import Products from "../pages/Products.jsx"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/movies" element={<Movielists />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  )
}

export default AppRoutes