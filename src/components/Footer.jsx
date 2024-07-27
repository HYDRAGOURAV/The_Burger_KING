import React from "react";
import "../../public/css/footer.css";
function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-column">
            <h3>About Us</h3>
            <p>Have it your way</p>
          </div>
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Contact Us</h3>
            <p>Email: info@example.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; Burger King All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
