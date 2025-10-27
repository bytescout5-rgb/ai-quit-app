import React, { useState } from 'react';
import { Shield, MessageCircle, TrendingUp, Bell, ChevronRight } from 'lucide-react';
interface OnboardingProps {
  onComplete: () => void;
}
export function Onboarding({
  onComplete
}: OnboardingProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [{
    icon: Shield,
    title: 'Welcome to AI Guardian',
    description: 'Your personal AI companion to help you break free from unwanted habits and build a better future.',
    color: 'from-blue-500 to-blue-600'
  }, {
    icon: MessageCircle,
    title: '24/7 AI Support',
    description: 'Chat anytime you need support. Our AI is here to listen, encourage, and help you through difficult moments.',
    color: 'from-purple-500 to-purple-600'
  }, {
    icon: Shield,
    title: 'Smart Protection',
    description: "We'll help block harmful content and provide encouraging messages when you need them most.",
    color: 'from-green-500 to-green-600'
  }, {
    icon: TrendingUp,
    title: 'Track Your Progress',
    description: 'See your streaks, celebrate milestones, and visualize your journey to freedom.',
    color: 'from-orange-500 to-orange-600'
  }];
  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onComplete();
    }
  };
  const currentSlideData = slides[currentSlide];
  const Icon = currentSlideData.icon;
  return <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Progress Bar */}
          <div className="h-1 bg-gray-200">
            <div className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300" style={{
            width: `${(currentSlide + 1) / slides.length * 100}%`
          }} />
          </div>
          {/* Content */}
          <div className="p-8">
            <div className={`w-20 h-20 bg-gradient-to-br ${currentSlideData.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
              <Icon className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
              {currentSlideData.title}
            </h2>
            <p className="text-gray-600 text-center leading-relaxed mb-8">
              {currentSlideData.description}
            </p>
            {/* Dots */}
            <div className="flex justify-center gap-2 mb-8">
              {slides.map((_, index) => <div key={index} className={`h-2 rounded-full transition-all ${index === currentSlide ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300'}`} />)}
            </div>
            {/* Button */}
            <button onClick={handleNext} className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2">
              {currentSlide < slides.length - 1 ? 'Next' : 'Get Started'}
              <ChevronRight className="w-5 h-5" />
            </button>
            {currentSlide < slides.length - 1 && <button onClick={onComplete} className="w-full text-gray-600 py-3 mt-3 font-medium hover:text-gray-800 transition-colors">
                Skip
              </button>}
          </div>
        </div>
      </div>
    </div>;
}