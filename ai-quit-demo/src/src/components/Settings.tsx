import React, { useState } from 'react';
import { ArrowLeft, Bell, Shield, Volume2, Moon, Globe, Info, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export function Settings() {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState(true);
  const [blocking, setBlocking] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  return <div className="pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-6 shadow-lg">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate('/')} className="p-1 hover:bg-white/20 rounded-lg transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div>
            <h2 className="font-semibold text-xl">Settings</h2>
            <p className="text-sm text-purple-100">Customize your experience</p>
          </div>
        </div>
      </div>
      <div className="px-4 py-6 space-y-6">
        {/* Notifications Section */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
          <div className="p-4 bg-gray-50 border-b border-gray-200">
            <h3 className="font-semibold text-gray-800 flex items-center gap-2">
              <Bell className="w-5 h-5 text-blue-600" />
              Notifications
            </h3>
          </div>
          <div className="p-4 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-gray-800">Daily Reminders</div>
                <div className="text-sm text-gray-600">
                  Receive motivational messages
                </div>
              </div>
              <button onClick={() => setNotifications(!notifications)} className={`w-12 h-6 rounded-full transition-colors ${notifications ? 'bg-blue-500' : 'bg-gray-300'}`}>
                <div className={`w-5 h-5 bg-white rounded-full transition-transform ${notifications ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>
            <div className="pt-4 border-t border-gray-200">
              <div className="font-medium text-gray-800 mb-3">
                Reminder Time
              </div>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>9:00 AM</option>
                <option>12:00 PM</option>
                <option>6:00 PM</option>
                <option>9:00 PM</option>
              </select>
            </div>
            <div className="pt-4 border-t border-gray-200">
              <div className="font-medium text-gray-800 mb-3">Message Tone</div>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Encouraging</option>
                <option>Friendly</option>
                <option>Firm</option>
                <option>Gentle</option>
              </select>
            </div>
          </div>
        </div>
        {/* Protection Section */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
          <div className="p-4 bg-gray-50 border-b border-gray-200">
            <h3 className="font-semibold text-gray-800 flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-600" />
              Protection
            </h3>
          </div>
          <div className="p-4 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-gray-800">
                  Website Blocking
                </div>
                <div className="text-sm text-gray-600">
                  Block harmful content
                </div>
              </div>
              <button onClick={() => setBlocking(!blocking)} className={`w-12 h-6 rounded-full transition-colors ${blocking ? 'bg-blue-500' : 'bg-gray-300'}`}>
                <div className={`w-5 h-5 bg-white rounded-full transition-transform ${blocking ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>
            <div className="pt-4 border-t border-gray-200">
              <button className="text-blue-600 font-medium text-sm hover:underline">
                Manage Blocked Sites
              </button>
            </div>
          </div>
        </div>
        {/* App Preferences */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
          <div className="p-4 bg-gray-50 border-b border-gray-200">
            <h3 className="font-semibold text-gray-800 flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-600" />
              App Preferences
            </h3>
          </div>
          <div className="p-4 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-gray-800">Sound Effects</div>
                <div className="text-sm text-gray-600">
                  Play sounds for actions
                </div>
              </div>
              <button onClick={() => setSoundEnabled(!soundEnabled)} className={`w-12 h-6 rounded-full transition-colors ${soundEnabled ? 'bg-blue-500' : 'bg-gray-300'}`}>
                <div className={`w-5 h-5 bg-white rounded-full transition-transform ${soundEnabled ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>
            <div className="pt-4 border-t border-gray-200">
              <div className="font-medium text-gray-800 mb-3">Language</div>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
              </select>
            </div>
          </div>
        </div>
        {/* Account Section */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
          <div className="p-4 space-y-3">
            <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <Info className="w-5 h-5 text-gray-600" />
              <span className="font-medium text-gray-800">About & Help</span>
            </button>
            <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <LogOut className="w-5 h-5 text-red-600" />
              <span className="font-medium text-red-600">Sign Out</span>
            </button>
          </div>
        </div>
        {/* Version Info */}
        <div className="text-center text-sm text-gray-500">
          AI Guardian v1.0.0
        </div>
      </div>
    </div>;
}