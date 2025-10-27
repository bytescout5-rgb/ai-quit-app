import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, MessageCircle, TrendingUp, Settings } from 'lucide-react';
export function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const navItems = [{
    path: '/',
    icon: Home,
    label: 'Home'
  }, {
    path: '/chat',
    icon: MessageCircle,
    label: 'Chat'
  }, {
    path: '/progress',
    icon: TrendingUp,
    label: 'Progress'
  }, {
    path: '/settings',
    icon: Settings,
    label: 'Settings'
  }];
  return <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-md mx-auto px-4 py-2">
        <div className="flex justify-around items-center">
          {navItems.map(item => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return <button key={item.path} onClick={() => navigate(item.path)} className={`flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition-all ${isActive ? 'text-blue-600' : 'text-gray-600 hover:text-gray-800'}`}>
                <Icon className={`w-6 h-6 ${isActive ? 'scale-110' : ''}`} />
                <span className="text-xs font-medium">{item.label}</span>
                {isActive && <div className="w-1 h-1 bg-blue-600 rounded-full mt-0.5" />}
              </button>;
        })}
        </div>
      </div>
    </nav>;
}