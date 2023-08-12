import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Your Second-Hand Marketplace is dedicated to providing a seamless platform for buying and selling preloved items.</p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: contact@secondhandmarketplace.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>Stay updated with our latest deals and news on social media:</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <p className="footer-bottom">&copy; 2023 Your Second-Hand Marketplace. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
