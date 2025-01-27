import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Error from "./Components/Shared/Error";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/HomePage/Home";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./Components/Provider/AuthProvider";
import Login from "./Components/Users/Login";
import Register from "./Components/Users/Register";
import HomeLayout from "./Components/HomePage/HomeLayout";
import Dashboard from "./Components/Dashboard/Dashboard";
import PrivateRoute from "../src/Components/Routes/PrivateRoute";
import MyProfile from "./Components/Dashboard/MyProfile";
import RequestedMeals from "./Components/Dashboard/RequestedMeals";
import Reviews from "./Components/Dashboard/Reviews";
import PaymentHistory from "./Components/Dashboard/PaymentHistory";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Payment from "./Components/Dashboard/Payment";
import ManageUsers from "./Components/Dashboard/AdminPages/ManageUsers";
import AddMeal from "./Components/Dashboard/AdminPages/AddMeal";
import AllMeals from "./Components/Dashboard/AdminPages/AllMeals";
import AllReviews from "./Components/Dashboard/AdminPages/AllReviews";
import ServeMeals from "./Components/Dashboard/AdminPages/ServeMeals";
import Upcoming from "./Components/Dashboard/AdminPages/Upcoming";
import AdminRoute from "../src/Components/Routes/AdminRoute";
import Meals from "../src/Components/AllMeals/Meals";
import UpcomingMeals from "../src/Components/AllMeals/UpcomingMeals";
import MealsDetails from "./Components/AllMeals/MealsDetails";
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <HomeLayout></HomeLayout>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "meals",
        element: <Meals></Meals>,
      },
      {
        path: "meals/:id",
        element: <MealsDetails />,
        loader: ({ params }) =>
          fetch(`https://y-eta-roan.vercel.app/meals/${params.id}`),
      },
      {
        path: "upcoming-meals",
        element: <UpcomingMeals></UpcomingMeals>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        // path: "my-profile",
        index: true,
        element: <MyProfile />,
      },
      {
        path: "requested-meals",
        element: <RequestedMeals />,
      },
      {
        path: "my-reviews",
        element: <Reviews />,
      },
      {
        path: "payment-history",
        element: <PaymentHistory />,
      },
      {
        path: "payment/:packageName",
        element: <Payment />,
      },
      // Admin paths
      {
        path: "admin/manage-users",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
      {
        path: "admin/add-meal",
        element: (
          <AdminRoute>
            <AddMeal />
          </AdminRoute>
        ),
      },
      {
        path: "admin/all-meals",
        element: (
          <AdminRoute>
            <AllMeals />
          </AdminRoute>
        ),
      },
      {
        path: "admin/reviews",
        element: (
          <AdminRoute>
            <AllReviews />
          </AdminRoute>
        ),
      },
      {
        path: "admin/serve-meals",
        element: (
          <AdminRoute>
            <ServeMeals />
          </AdminRoute>
        ),
      },
      {
        path: "admin/upcoming",
        element: (
          <AdminRoute>
            <Upcoming />
          </AdminRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
);
