import Nav from "@/components/Nav";
import React from "react";
const Layout = ({ children }) => {
  return (
    /* relative h-screen */
    <div className="scroll-smooth">
        < Nav />
      <main className="w-screen overflow-x-hidden">
        {children}
      </main>
    </div>
  );
};

export default Layout;
