import React from "react";
const Layout = ({ children }) => {
  return (
    /* relative h-screen */
    <div className="scroll-smooth">
      <main className="w-screen overflow-x-hidden">
        {children}
      </main>
    </div>
  );
};

export default Layout;
