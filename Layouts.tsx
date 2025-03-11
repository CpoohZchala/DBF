// Layout.tsx
import React, { ReactNode } from "react";
import Navbar from "./src/section/main/navbar";
import Footer from "./src/section/main/footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer/>
      
    </div>
  );
};

export default Layout;
