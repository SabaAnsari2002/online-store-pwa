import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">Logo</Link>
        <ul className="flex space-x-4">
          <li><Link to="/" className="text-white hover:text-gray-200">Home</Link></li>
          <li><Link to="/login" className="text-white hover:text-gray-200">Login</Link></li>
          <li><Link to="/register" className="text-white hover:text-gray-200">Register</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
