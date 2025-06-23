import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import MainNavbar from "./MainNavbar";

const Layout = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: globalThis.MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white overflow-hidden relative">
      {/* Mouse Follower Effect - Hidden on mobile */}
      <div
        className="fixed w-6 h-6 bg-blue-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100 ease-out hidden md:block"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: "scale(0.8)",
        }}
      />
      <MainNavbar />
      {/* Page Content */}
      <Outlet />
    </div>
  );
};

export default Layout; 