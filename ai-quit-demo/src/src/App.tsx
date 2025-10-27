import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import { ChatAssistant } from './components/ChatAssistant';
import { ProgressTracker } from './components/ProgressTracker';
import { Settings } from './components/Settings';
import { Onboarding } from './components/Onboarding';
import { BlockingModal } from './components/BlockingModal';
import { Navigation } from './components/Navigation';
export function App({
  'data-id': dataId
}: {
  'data-id'?: string;
}) {
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);
  const [showBlockingModal, setShowBlockingModal] = useState(false);
  const [currentStreak, setCurrentStreak] = useState(7);
  const handleCompleteOnboarding = () => {
    setHasCompletedOnboarding(true);
  };
  const simulateBlockAttempt = () => {
    setShowBlockingModal(true);
  };
  if (!hasCompletedOnboarding) {
    return <Onboarding onComplete={handleCompleteOnboarding} />;
  }
  return <Router>
      <div data-id={dataId} className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-md mx-auto min-h-screen bg-white shadow-xl relative">
          <Routes>
            <Route path="/" element={<Dashboard currentStreak={currentStreak} onSimulateBlock={simulateBlockAttempt} />} />
            <Route path="/chat" element={<ChatAssistant />} />
            <Route path="/progress" element={<ProgressTracker currentStreak={currentStreak} />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Navigation />
          {showBlockingModal && <BlockingModal onClose={() => setShowBlockingModal(false)} />}
        </div>
      </div>
    </Router>;
}