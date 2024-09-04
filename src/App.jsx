import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pages/user/Home/Home";
import Dashboard from "./pages/admin/Dashboard/Dashboard";
import NotFound from "./pages/user/NotFound/NotFound";
import UserLayout from "./components/userLayout/UserLayout";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* User Routes */}
        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
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
