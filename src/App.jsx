import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  createHashRouter,
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

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* User Routes */}
        <Route element={<UserLayout />}>
          <Route path="/Furniro" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<Dashboard />} />

        {/* Fallback route */}
        <Route path="*" element={<NotFound />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
}
