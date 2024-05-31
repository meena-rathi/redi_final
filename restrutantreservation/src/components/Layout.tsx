import React, { useState } from 'react';
import Footer from './Footer';
import NavBar from './NavBar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <NavBar />
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

