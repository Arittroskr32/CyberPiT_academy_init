import React from 'react';
import { Clock, Wrench, Code, BookOpen, Users } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/logo.jpg" 
              alt="CyberPiT Logo" 
              className="h-8 w-8 rounded object-cover"
            />
            <h1 className="text-2xl font-bold text-white">CyberPiT Academy</h1>
          </div>
          <a 
            href="https://www.cyberpit.live" 
            className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            ← Back to Main Site
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex items-center justify-center min-h-[80vh] px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo/Icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center animate-float">
                <Wrench className="h-16 w-16 text-white animate-glow" />
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce-slow">
                <Clock className="h-4 w-4 text-yellow-900" />
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Under
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Construction</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We're building something amazing! CyberPiT Academy is coming soon with cutting-edge cybersecurity education.
          </p>

          {/* Countdown Timer */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-6">Launching In:</h2>
            <div className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg animate-glow">
              Very Soon...
            </div>
          </div>

          {/* Features Preview */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-8">What's Coming:</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <Code className="h-8 w-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Hands-on Labs</h3>
                <p className="text-gray-300 text-sm">Interactive cybersecurity challenges and real-world scenarios</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <BookOpen className="h-8 w-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Expert Courses</h3>
                <p className="text-gray-300 text-sm">Comprehensive curriculum from industry professionals</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <Users className="h-8 w-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Community</h3>
                <p className="text-gray-300 text-sm">Connect with fellow cybersecurity enthusiasts</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 p-6 mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            © 2025 CyberPiT Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
