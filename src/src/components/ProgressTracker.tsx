import React from 'react';
import { ArrowLeft, TrendingUp, Award, Calendar, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
interface ProgressTrackerProps {
  currentStreak: number;
}
export function ProgressTracker({
  currentStreak
}: ProgressTrackerProps) {
  const navigate = useNavigate();
  const progressData = [{
    day: 'Mon',
    score: 85
  }, {
    day: 'Tue',
    score: 90
  }, {
    day: 'Wed',
    score: 88
  }, {
    day: 'Thu',
    score: 95
  }, {
    day: 'Fri',
    score: 92
  }, {
    day: 'Sat',
    score: 97
  }, {
    day: 'Sun',
    score: 100
  }];
  const milestones = [{
    days: 1,
    title: 'First Day',
    achieved: true
  }, {
    days: 3,
    title: '3 Days Strong',
    achieved: true
  }, {
    days: 7,
    title: 'One Week',
    achieved: true
  }, {
    days: 14,
    title: 'Two Weeks',
    achieved: false
  }, {
    days: 30,
    title: 'One Month',
    achieved: false
  }, {
    days: 90,
    title: 'Three Months',
    achieved: false
  }];
  return <div className="pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-6 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={() => navigate('/')} className="p-1 hover:bg-white/20 rounded-lg transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <TrendingUp className="w-8 h-8" />
          <div>
            <h2 className="font-semibold text-xl">Progress Tracker</h2>
            <p className="text-sm text-purple-100">Your journey at a glance</p>
          </div>
        </div>
      </div>
      <div className="px-4 py-6 space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 text-white shadow-md">
            <Calendar className="w-6 h-6 mb-2" />
            <div className="text-3xl font-bold">{currentStreak}</div>
            <div className="text-sm text-blue-100">Day Streak</div>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-4 text-white shadow-md">
            <Target className="w-6 h-6 mb-2" />
            <div className="text-3xl font-bold">14</div>
            <div className="text-sm text-green-100">Next Goal</div>
          </div>
        </div>
        {/* Weekly Progress Chart */}
        <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            Weekly Progress
          </h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={progressData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="day" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Line type="monotone" dataKey="score" stroke="#3b82f6" strokeWidth={3} dot={{
              fill: '#3b82f6',
              r: 4
            }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        {/* Milestones */}
        <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-yellow-500" />
            Milestones
          </h3>
          <div className="space-y-3">
            {milestones.map(milestone => <div key={milestone.days} className={`flex items-center justify-between p-4 rounded-xl ${milestone.achieved ? 'bg-gradient-to-r from-green-50 to-blue-50 border border-green-200' : 'bg-gray-50 border border-gray-200'}`}>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${milestone.achieved ? 'bg-green-500' : 'bg-gray-300'}`}>
                    {milestone.achieved ? <Award className="w-5 h-5 text-white" /> : <span className="text-white font-bold">
                        {milestone.days}
                      </span>}
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">
                      {milestone.title}
                    </div>
                    <div className="text-sm text-gray-600">
                      {milestone.days} days
                    </div>
                  </div>
                </div>
                {milestone.achieved && <div className="text-green-600 font-semibold text-sm">
                    Achieved!
                  </div>}
              </div>)}
          </div>
        </div>
        {/* Insights */}
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 border border-purple-200">
          <h3 className="font-semibold text-gray-800 mb-3">Insights</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5" />
              <span>
                You're 50% more likely to succeed when you check in daily
              </span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5" />
              <span>Your strongest days are weekends - keep it up!</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5" />
              <span>
                Talking to AI during urges has helped you stay on track
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>;
}