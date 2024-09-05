import React from "react";
import {
  createHashRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pages/user/Home/Home";
import Dashboard from "./pages/admin/Dashboard/Dashboard";
import NotFound from "./pages/user/NotFound/NotFound";
import UserLayout from "./components/userLayout/UserLayout";
import Shop from "./pages/user/Shop/Shop";
import AboutUs from "./pages/user/AboutUs/AboutUs";
import Contact from "./pages/user/Contact/Contact";
import Profile from "./pages/user/Profile/Profile";
import Wishlist from "./pages/user/Wishlist/Wishlist";
import Cart from "./pages/user/Cart/Cart";
import ProductPage from "./pages/user/Shop/ProductDetails"; 
import Signup from "./pages/user/Auth/Signup";
import Login from "./pages/user/Auth/Signin";
import OTPInput from "./components/Auth/OtpInput";
import AdminLayout from "./components/AdminLayout.jsx/AdminLayout";
import ProductList from "./pages/admin/Product/ProductList";

export default function App() {
  const router = createHashRouter(
    createRoutesFromElements(
      <>
        {/* User Routes */}
        <Route element={<UserLayout />}>
          <Route path="/Furniro" element={<Home />} />
          <Route path="/Furniro/shop" element={<Shop />} />
          <Route path="/Furniro/shop/:id" element={<ProductPage />} />
          <Route path="/Furniro/about" element={<AboutUs />} />
          <Route path="/Furniro/contact" element={<Contact />} />
          <Route path="/Furniro/profile" element={<Profile />} />
          <Route path="/Furniro/wishlist" element={<Wishlist />} />
          <Route path="/Furniro/cart" element={<Cart />} />
          <Route path="/Furniro/signin" element={<Login />} />
          <Route path="/Furniro/signup" element={<Signup />} />
          <Route path="/Furniro/signup/otp" element={<OTPInput />} />
        </Route>

        {/* Admin Routes */}
        <Route element={<AdminLayout />}>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/product" element={<ProductList />} />
        </Route>
        
        {/* Fallback route */}
        <Route path="*" element={<NotFound />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
}
