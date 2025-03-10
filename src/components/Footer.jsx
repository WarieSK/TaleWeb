import React from 'react';
import "../styles/Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Divadlo Teatrálnej Skratky (DTS) Všetky práva vyhradené.</p>
    </footer>
  );
};

export default Footer;
