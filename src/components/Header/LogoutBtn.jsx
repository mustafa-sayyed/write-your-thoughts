import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

function LogoutBtn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    authService
      .logout()
      .then(() => {
        dispatch(logout());
        navigate("/login");
      })
      .catch((error) => {
        console.log("Logout Error", error);
      });
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-transparent border-2 py-1.5 px-6 text-(--base-content) border-(--base-300) hover:bg-error/10 flex items-center hover:bg-(--base-300) gap-2 rounded-md cursor-pointer"
    >
      <LogOut size={16} />
      Logout
    </button>
  );
}

export default LogoutBtn;
