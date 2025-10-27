import React from 'react';
import { Shield, MessageCircle, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
interface BlockingModalProps {
  onClose: () => void;
}
export function BlockingModal({
  onClose
}: BlockingModalProps) {
  const navigate = useNavigate();
  const handleTalkToAI = () => {
    onClose();
    navigate('/chat');
  };
  return <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl animate-in fade-in zoom-in duration-300">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-t-3xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8" />
              <h2 className="text-xl font-bold">Guardian Alert</h2>
            </div>
            <button onClick={onClose} className="p-1 hover:bg-white/20 rounded-lg transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
        {/* Content */}
        <div className="p-6">
          <div className="mb-6">
            <p className="text-gray-800 text-lg font-medium mb-3">
              I know this is tough, but you've done so well today!
            </p>
            <p className="text-gray-600 leading-relaxed">
              You're currently on a{' '}
              <span className="font-semibold text-blue-600">7-day streak</span>.
              That's amazing progress! Let's stay strong together and keep
              moving forward.
            </p>
          </div>
          {/* Motivational Box */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 mb-6 border border-blue-200">
            <p className="text-sm text-gray-700 italic">
              "Every time you resist, you're building the person you want to
              become. This moment will pass, but your strength will remain."
            </p>
          </div>
          {/* Actions */}
          <div className="space-y-3">
            <button onClick={handleTalkToAI} className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Talk to AI Guardian
            </button>
            <button onClick={onClose} className="w-full bg-gray-100 text-gray-700 py-4 rounded-xl font-semibold hover:bg-gray-200 transition-colors">
              Go Back
            </button>
          </div>
          {/* Quick Tips */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm font-medium text-gray-700 mb-3">
              Quick coping strategies:
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                Take 5 deep breaths
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                Go for a short walk
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                Call a friend or family member
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>;
}