import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div className='lg:flex hidden px-32 flex-row gap-7 font-semibold text-base py-4 bg-gray-900 text-white'>
        <a href="#" className='flex flex-row items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-microsoft mr-2 mb-1 mt-1" viewBox="0 0 16 16"><path d="M7.462 0H0v7.19h7.462V0zM16 0H8.538v7.19H16V0zM7.462 8.211H0V16h7.462V8.211zm8.538 0H8.538V16H16V8.211z"></path></svg>LeaderBoard
        </a>
        <a href='#'>Historical Trading</a>
        <a href='#'>Historical Chart</a>
        <a href='#'>Scanners</a>
        <a href='#'>Alerts</a>
        <a href='#'>Basic Backtest</a>
        <a href='#'>Advanced Backtest</a>
        <a href='#'>Pricing</a>
        <a href='#'>My Earnings</a>
      </div>

      {/* Mobile Navbar */}
      <div className='flex lg:hidden flex-col gap-7 font-semibold text-base p-4 bg-gray-900 text-white'>
        <button className='w-12 border rounded py-2 px-3 hover:bg-gray-700 active:bg-gray-800' onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className='flex flex-col items-center gap-3 mt-4'
            >
              <a href="#" className='flex flex-row items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-microsoft mr-2 mb-1 mt-1" viewBox="0 0 16 16"><path d="M7.462 0H0v7.19h7.462V0zM16 0H8.538v7.19H16V0zM7.462 8.211H0V16h7.462V8.211zm8.538 0H8.538V16H16V8.211z"></path></svg>LeaderBoard
              </a>
              <a href='#'>Historical Trading</a>
              <a href='#'>Historical Chart</a>
              <a href='#'>Scanners</a>
              <a href='#'>Alerts</a>
              <a href='#'>Basic Backtest</a>
              <a href='#'>Advanced Backtest</a>
              <a href='#'>Pricing</a>
              <a href='#'>My Earnings</a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default Navbar;
