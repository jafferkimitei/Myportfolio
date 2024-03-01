import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const MobileNav = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleDarkMode = () => {
    const root = document.documentElement;
    setIsDarkMode(!isDarkMode);

    if (!isDarkMode) {
      root.classList.add('dark-mode');
    } else {
      root.classList.remove('dark-mode');
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };
  useEffect(() => {
    // Check for the user's preference in local storage
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode) {
      setIsDarkMode(storedDarkMode === 'true');
    }
  }, []);

  useEffect(() => {
    // Apply dark mode class to the root element when dark mode is enabled
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark-mode');
    } else {
      root.classList.remove('dark-mode');
    }

    // Save user's preference in local storage
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="bg-black-800 text-white p-4 flex items-center justify-between relative">
      {/* Hamburger Icon - Toggle Menu */}
      <div className="cursor-pointer" onClick={toggleMenu}>
        {isMenuOpen ? (
          // Close Icon
          <span className="block w-6 h-6 bg-white border border-white"></span>
        ) : (
          // Hamburger Icon
          <>
            <span className="block w-6 h-1 bg-white mb-1"></span>
            <span className="block w-6 h-1 bg-white mb-1"></span>
            <span className="block w-6 h-1 bg-white"></span>
          </>
        )}
      </div>

      {/* Logo */}
      <div className="text-xl font-bold">
        <Link href="/" legacyBehavior>
        <img className="w-8 h-8" src="/images/logo-sep.svg" alt="Logo" />
        </Link>
      </div>

      {/* Dark Mode Toggler */}
      {/* <div className="cursor-pointer" onClick={toggleDarkMode}>
        {isDarkMode ? '🌙' : '☀️'}
      </div> */}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-2 flex items-center justify-center z-50">
          {/* Close Button */}
          <div
            className="absolute top-4 right-4 cursor-pointer"
            onClick={closeMenu}
          >
            <span className="block w-3 h-3 bg-white border border-white transform rotate-45"></span>
            <span className="block w-3 h-3 bg-white border border-white -mt-1 transform -rotate-45"></span>
          </div>

          <ul className="text-center font-league-gothic text-4xl text-white block p-4">
            <li>
              <Link
                href="/"
                className={`${
                  router.pathname === '/' ? 'text-e44b37' : 'inherit'
                }`}
                legacyBehavior
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/love"
                className={`${
                  router.pathname === '/love' ? 'text-e44b37' : 'inherit'
                }`}
                legacyBehavior
              >
                Love
              </Link>
            </li>
            <li>
              <Link
                href="/works"
                className={`${
                  router.pathname === '/works' ? 'text-e44b37' : 'inherit'
                }`}
                legacyBehavior
              >
                Works
              </Link>
            </li>
            <li>
              <Link
                href="/rates"
                className={`${
                  router.pathname === '/rates' ? 'text-e44b37' : 'inherit'
                }`}
                legacyBehavior
              >
                Rates
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`${
                  router.pathname === '/contact' ? 'text-e44b37' : 'inherit'
                }`}
                legacyBehavior
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
