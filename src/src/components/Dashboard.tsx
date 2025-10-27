import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, MessageCircle, TrendingUp, Sparkles, Award, Calendar } from 'lucide-react';
interface DashboardProps {
  currentStreak: number;
  onSimulateBlock: () => void;
}
export function Dashboard({
  currentStreak,
  onSimulateBlock
}: DashboardProps) {
  const navigate = useNavigate();
  const motivationalQuotes = ['Every day is a new opportunity to become the person you want to be.', "Progress, not perfection. You're doing great!", 'Your future self will thank you for the choices you make today.', "Strength doesn't come from what you can do, it comes from overcoming the things you thought you couldn't."];
  const todayQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
  return <div className="pb-20 px-4 pt-8">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-2xl font-bold text-gray-800">AI Guardian</h1>
          <Shield className="text-blue-600 w-8 h-8" />
        </div>
        <p className="text-gray-600">Your journey to freedom</p>
      </div>
      {/* Motivational Card */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 mb-6 shadow-lg">
        <div className="flex items-start gap-3 mb-4">
          <Sparkles className="text-white w-6 h-6 flex-shrink-0 mt-1" />
          <p className="text-white text-lg font-medium leading-relaxed">
            {todayQuote}
          </p>
        </div>
        <div className="flex items-center gap-2 text-white/90 text-sm">
          <Calendar className="w-4 h-4" />
          <span>
            {new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric'
          })}
          </span>
        </div>
      </div>
      {/* Streak Counter */}
      <div className="bg-white rounded-2xl p-6 mb-6 shadow-md border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Current Streak
          </h2>
          <Award className="text-yellow-500 w-6 h-6" />
        </div>
        <div className="text-center">
          <div className="text-5xl font-bold text-blue-600 mb-2">
            {currentStreak}
          </div>
          <div className="text-gray-600">days clean</div>
          <div className="mt-4 flex justify-center gap-1">
            {[...Array(7)].map((_, i) => <div key={i} className={`w-8 h-8 rounded-lg ${i < currentStreak ? 'bg-blue-500' : 'bg-gray-200'}`} />)}
          </div>
        </div>
      </div>
      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <button onClick={() => navigate('/chat')} className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all active:scale-95">
          <MessageCircle className="w-8 h-8 mb-3 mx-auto" />
          <div className="font-semibold">Talk to AI</div>
          <div className="text-sm text-blue-100 mt-1">Get support</div>
        </button>
        <button onClick={() => navigate('/progress')} className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all active:scale-95">
          <TrendingUp className="w-8 h-8 mb-3 mx-auto" />
          <div className="font-semibold">Progress</div>
          <div className="text-sm text-purple-100 mt-1">View stats</div>
        </button>
      </div>
      {/* Demo Button */}
      <button onClick={onSimulateBlock} className="w-full bg-gray-100 text-gray-700 rounded-xl p-4 font-medium hover:bg-gray-200 transition-colors">
        Simulate Blocking Intervention (Demo)
      </button>
      {/* Today's Wins */}
      <div className="mt-6 bg-green-50 rounded-2xl p-6 border border-green-100">
        <h3 className="font-semibold text-gray-800 mb-3">Today's Wins</h3>
        <ul className="space-y-2">
          <li className="flex items-center gap-2 text-gray-700">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span>Checked in this morning</span>
          </li>
          <li className="flex items-center gap-2 text-gray-700">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span>Reached out to AI when feeling urges</span>
          </li>
          <li className="flex items-center gap-2 text-gray-700">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span>Stayed strong all day</span>
          </li>
        </ul>
      </div>
    </div>;
}