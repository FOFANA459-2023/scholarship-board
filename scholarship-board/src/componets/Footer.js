import React from "react";
import { FaFacebook } from "react-icons/fa"; // Import Facebook icon from react-icons

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-900 to-red-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* Facebook Link */}
          <a
            href="https://www.facebook.com/yourpage" // Replace with your Facebook page link
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-gray-300 transition-colors duration-300"
          >
            <FaFacebook className="w-6 h-6" />
            <span>Follow us on Facebook</span>
          </a>

          {/* Copyright Notice */}
          <p className="text-sm text-center">
            &copy; {new Date().getFullYear()} LibScholars Desk. All rights
            reserved.
          </p>

          {/* Optional: Additional Links */}
          <div className="flex space-x-4">
            <a
              href="/privacy-policy"
              className="text-sm hover:text-gray-300 transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="text-sm hover:text-gray-300 transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;