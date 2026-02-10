import React, { useEffect, useState } from "react";
import authService from "./appwrite/auth";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/authSlice";
import { Footer, Header, Login } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .catch((err) => {
        console.log("User not found: ", err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-[var(--base-100)] text-[var(--base-content)]">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-b-[var(--primary-content)]"></div>
        <div className="mt-4 text-lg">Loading......</div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-[var(--base-100)] text-[var(--base-content)]">
      <main>
        <Header />
        <Outlet />
        <Footer />
      </main>
    </div>
  );
}

export default App;
