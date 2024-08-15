import React from 'react';
import './footer.scss';
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";  
import { FaPinterest } from "react-icons/fa";
import { FaInfinity } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__section">
        <h2 className="footer__logo">Travel</h2>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="79"
            height="39"
            viewBox="0 0 99 39"
            fill="none"
          >
            <g clip-path="url(#clip0_0_1005)">
              <path
                d="M-0.000159763 15.1231C5.57689 23.1056 29.8412 31.0513 46.1619 30.5526C63.8029 30.0536 73.4634 26.563 92.271 13.7276C92.2164 15.1329 92.0507 16.2766 92.0775 17.3198C92.0581 18.5101 92.0496 19.7684 92.3014 20.9156C92.3556 21.2561 93.063 21.7722 93.4805 21.7757C93.898 21.7792 94.5 21.1947 94.5815 20.8326C95.2819 17.3692 95.8468 13.9275 96.4686 10.4068C96.6344 9.26317 96.0978 8.51044 94.8914 8.35299C90.3125 7.96334 85.7229 7.50557 81.0871 7.19481C80.0379 7.15204 78.8612 7.61838 77.5056 7.83381C79.0555 10.5903 81.4414 9.86198 83.3228 10.3312C85.2827 10.8577 87.3241 11.0221 89.8263 11.4624C84.8067 16.1708 79.4921 19.4596 73.6979 21.9167C52.4894 31.0135 31.4195 29.6133 10.6745 20.2005C7.97467 18.9536 5.43486 17.4019 2.79197 16.0761C1.99227 15.854 1.26034 15.6211 -0.000159763 15.1231Z"
                fill="#DF6951"
              />
            </g>
            <defs>
              <clipPath id="clip0_0_1005">
                <rect
                  width="96.1304"
                  height="23.346"
                  fill="white"
                  transform="matrix(0.987606 -0.156951 -0.156951 -0.987606 3.66406 38.1797)"
                />
              </clipPath>
            </defs>
          </svg>
        <p className="footer__description">
          Travel helps companies manage payments easily.
        </p>
        <div className="footer__social-icons">
          <i className="fab fa-linkedin"></i><FaLinkedin />
          <i className="fab fa-pinterest"></i><FaPinterest />
          <i className="fab fa-twitter"></i> <FaTwitter />
          <i className="fas fa-infinity"></i><FaInfinity />
        </div>
      </div>
      <div className="footer__section">
        <h3>Company</h3>
        <ul>
          <li>About Us</li>
          <li>Careers</li>
          <li>Blog</li>
          <li>Pricing</li>
        </ul>
      </div>
      <div className="footer__section">
        <h3>Destinations</h3>
        <ul>
          <li>Maldives</li>
          <li>Los Angeles</li>
          <li>Las Vegas</li>
          <li>Toronto</li>
        </ul>
      </div>
      <div className="footer__section footer__newsletter">
        <h3>Join Our Newsletter</h3>
        <div className="footer__newsletter-input">
          <input type="email" placeholder="Your email address" />
          <button type="button">Subscribe</button>
        </div>
        <p>* Will send you weekly updates for your better tour packages.</p>
      </div>
    </footer>
  );
};

export default Footer;
