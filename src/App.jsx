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
import AddProductForm from "./pages/admin/Product/ProductForm";
import OrdersTable from "./pages/admin/Orders/OrdersList";
import StockTable from "./pages/admin/Stock/StockTable";
import ProductView from "./pages/admin/Product/SingleProductView";
import EditProductForm from "./pages/admin/Product/EditProduct";
 

export default function App() {
  const router = createHashRouter(
    createRoutesFromElements(
      <>
        {/* User Routes */}
        <Route  element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ProductPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup/otp" element={<OTPInput />} />
        </Route>

        {/* Admin Routes */}
        <Route element={<AdminLayout />}>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/product" element={<ProductList />} />
        <Route path="/admin/product/add" element={<AddProductForm />} />
        <Route path="/admin/product/:productId" element={<ProductView />} />
        <Route path="/admin/product/:productId/edit" element={<EditProductForm />} />
        <Route path="/admin/stock" element={<StockTable />} />
        {/* <Route path="/admin/product/add" element={<AddProductForm />} /> */}
        <Route path="/admin/orders" element={<OrdersTable />} />
        {/* <Route path="/admin/product/add" element={<AddProductForm />} /> */}
        </Route>
        
        {/* Fallback route */}
        <Route path="*" element={<NotFound />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
}
