import React from 'react';

const Layout = ({ children }) => (
  <div className="container">
    <header>
      <h1>Welcome</h1>
    </header>
    <main>{children}</main>
    <footer>
      <p>Punni</p>
    </footer>
  </div>
);

export default Layout;
