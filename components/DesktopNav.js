import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const DesktopNav = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
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
    <div className="bg-black-800  p-4 flex items-center justify-between" >
      {/* Logo */}
      <div className="text-xl font-bold text-white hover:text-red-800">
        <Link  href="/"  legacyBehavior>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M58 117H0L67.5 0H126.5L58 117Z" fill="white"/>
<path d="M121 165H63L130.5 48H189.5L121 165Z" fill="white"/>
</svg>

        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-6 text-white">
        <li>
        <Link
  href="/love"
  className={`
    ${router.pathname === '/love' ? 'text-red' : ''}
    hover:text-red-800 hover:rounded-full
  `}
  legacyBehavior
>
  Love
</Link>
        </li>
        <li>
        <Link
  href="/works"
  className={`
    ${router.pathname === '/works' ? 'text-red' : ''}
    hover:text-red-800 hover:rounded-full
  `}
  legacyBehavior
>
  Works
</Link>
        </li>
        <li>
        <Link
  href="/rates"
  className={`
    ${router.pathname === '/rates' ? 'text-red' : ''}
    hover:text-red-800 hover:rounded-full
  `}
  legacyBehavior
>
  Rates
</Link>
        </li>
        <li>
        <Link
  href="/contact"
  className={`
    ${router.pathname === '/contact' ? 'text-red' : ''}
    hover:text-red-800 hover:rounded-full
  `}
  legacyBehavior
>
 Contact
</Link>
        </li>
      </ul>

      {/* Dark Mode Toggler */}
      {/* <div className="cursor-pointer" onClick={toggleDarkMode}>
        {isDarkMode ? '🌙' : '☀️'}
      </div> */}
    </div>
  );
};

export default DesktopNav;
