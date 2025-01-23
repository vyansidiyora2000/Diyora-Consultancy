import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    {
      name: 'Services',
      path: '/services',
      dropdownItems: [
        { name: 'Education Loan', path: '/education-loan' },
        { name: 'Home Loan', path: '/home-loan' },
        { name: 'Business Loan', path: '/business-loan' },
        { name: 'Personal Loan', path: '/personal-loan' },
        { name: 'Mortgage Loan', path: '/mortgage-loan' },
        { name: 'Other Services', path: '/other-services' }
      ]
    },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="fixed top-0 w-full bg-brown-800 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className="text-white font-bold text-xl md:text-2xl hover:text-brown-200 transition-colors"
            >
              Diyora Consultancy
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => 
                link.dropdownItems ? (
                  <div 
                    key={link.name}
                    className="relative group"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button
                      className="text-white hover:text-brown-200 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                    >
                      {link.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 invisible group-hover:visible">
                      <div className="py-1">
                        {link.dropdownItems.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`${
                      location.pathname === link.path
                        ? 'text-brown-200 border-b-2 border-brown-200'
                        : 'text-white hover:text-brown-200'
                    } px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
                  >
                    {link.name}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-brown-200 focus:outline-none"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:hidden bg-brown-800 shadow-lg`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) =>
            link.dropdownItems ? (
              <div key={link.name} className="space-y-1">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="text-white hover:text-brown-200 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                >
                  {link.name}
                </button>
                {dropdownOpen && (
                  <div className="pl-4 space-y-1">
                    {link.dropdownItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className={`${
                  location.pathname === link.path
                    ? 'text-brown-200'
                    : 'text-white hover:text-brown-200'
                } block px-3 py-2 rounded-md text-base font-medium`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;