import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get current path
  const path = location.pathname;

  return (
    <header className="bg-gray-300 text-black px-[50px] h-[80px] shadow-md flex justify-between items-center">
      {/* Logo always visible */}
      <button onClick={() => navigate("/")}>
        <h1 className="cursor-pointer text-2xl font-bold">
          Gaming<span className="text-red-500 italic">BAZAAR</span>
        </h1>
      </button>

      {/* Middle section */}
      {path !== "/signin" && path !== "/signup" && <SearchBar />}

      {/* Right buttons */}
      <div className="flex space-x-6">
        {path === "/signin" && (
          <button onClick={() => navigate("/signup")}>
            <h3 className="cursor-pointer hover:underline">Sign Up</h3>
          </button>
        )}

        {path === "/signup" && (
          <button onClick={() => navigate("/signin")}>
            <h3 className="cursor-pointer hover:underline">Sign In</h3>
          </button>
        )}

        {path !== "/signin" && path !== "/signup" && (
          <>
            <button onClick={() => navigate("/signin")}>
              <h3 className="cursor-pointer hover:underline">Sign In</h3>
            </button>
            <button onClick={() => navigate("/signup")}>
              <h3 className="cursor-pointer hover:underline">Sign Up</h3>
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
