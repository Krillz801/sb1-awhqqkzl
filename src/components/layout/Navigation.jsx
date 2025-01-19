import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { path: '/', label: 'Journal', icon: '📔' },
  { path: '/check-in', label: 'Check-in', icon: '✨' },
  { path: '/weekly', label: 'Weekly', icon: '📊' },
  { path: '/monthly', label: 'Monthly', icon: '📅' },
];

function Navigation() {
  const location = useLocation();

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto">
        <div className="flex justify-around">
          {navItems.map(({ path, label, icon }) => (
            <Link
              key={path}
              to={path}
              className={`p-4 flex flex-col items-center transition-colors
                ${location.pathname === path 
                  ? 'text-purple-600 border-b-2 border-purple-600' 
                  : 'text-gray-600 hover:text-purple-500'}`}
            >
              <span className="text-xl mb-1">{icon}</span>
              <span className="text-sm">{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;