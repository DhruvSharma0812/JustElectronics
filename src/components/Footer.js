import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        <div>
          <h4 className="text-lg font-semibold mb-4">About Us</h4>
          <p className="text-gray-400 text-sm">
            We are a leading electronics e-commerce platform providing a wide range of products to cater to your every need.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link to="/" className="hover:text-gray-200">Home</Link></li>
            <li><Link to="/" className="hover:text-gray-200">Shop</Link></li>
            <li><Link to="/" className="hover:text-gray-200">Contact Us</Link></li>
            <li><Link to="/" className="hover:text-gray-200">About Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <p className="text-gray-400 text-sm">1234 Electronics Avenue, Tech City, TC 12345</p>
          <p className="text-gray-400 text-sm">Email: support@electronics.com</p>
          <p className="text-gray-400 text-sm">Phone: +123 456 7890</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4 text-2xl text-gray-400">
            <a href="https://github.com/DhruvSharma0812" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200"> <FaGithub /> </a>
            <a href="https://leetcode.com/u/dhruv_sharma08/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200"><SiLeetcode /></a>
            
            <a href="https://www.linkedin.com/in/dhruv-sharma-b753b224a/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200"><FaLinkedin /></a>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center mt-8 border-t border-gray-800 pt-4">
        <p className="text-gray-500 text-sm">
          © 2024 Electronics E-commerce. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
