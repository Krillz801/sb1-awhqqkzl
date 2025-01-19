import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from './Navigation';

function Layout({ children }) {
  const [isInnerChildMode, setIsInnerChildMode] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-purple-50">
      <header className="bg-purple-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Soul Haven</h1>
          <button
            onClick={() => setIsInnerChildMode(!isInnerChildMode)}
            className="text-2xl"
          >
            {isInnerChildMode ? '🧸' : '📝'}
          </button>
        </div>
      </header>

      <Navigation />

      <main className="container mx-auto p-4">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </main>
    </div>
  );
}

export default Layout;