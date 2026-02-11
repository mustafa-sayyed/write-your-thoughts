import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, LogoutBtn } from "../index";

function Header() {
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);

  const navItems = [
    {
      name: "Home",
      path: "/",
      active: authStatus,
    },
    {
      name: "All Post",
      path: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      path: "/add-post",
      active: authStatus,
    },
    {
      name: "Login",
      path: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      path: "/signup",
      active: !authStatus,
    },
  ];
  return (
    <header className="h-16 bg-(--base-200) flex items-center justify-center">
      <Container>
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold italic">
            <Link to="/">Write Your Thoughts</Link>
          </div>
          <ul className="flex items-center gap-6">
            {navItems.map((item, index) =>
              item.active ?
                <li key={index} className="hover:underline underline-offset-2">
                  <Link to={item.path}>{item.name}</Link>
                </li>
              : null,
            )}
          </ul>
          {authStatus && <LogoutBtn />}
        </nav>
      </Container>
    </header>
  );
}

export default Header;
