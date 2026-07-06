import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4">
      {/* Main Content Box */}
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl max-w-3xl w-full p-10 border border-white/20 transition-all hover:shadow-3xl">
        
        {/* Profile Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            JD
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">John Doe</h1>
            <p className="text-gray-500">Product Designer & Creative Thinker</p>
          </div>
        </div>

        {/* About Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">About Me</h2>
          <p className="text-gray-600 leading-relaxed">
            I'm a passionate product designer with 8+ years of experience in creating 
            meaningful digital experiences. I believe in designing products that solve 
            real problems while being aesthetically pleasing and intuitive to use.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">Skills & Expertise</h2>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-50 p-3 rounded-xl">
              <p className="font-medium text-gray-700">🎨 UI/UX Design</p>
              <p className="text-sm text-gray-500">Figma, Sketch, Adobe XD</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-xl">
              <p className="font-medium text-gray-700">💻 Frontend Dev</p>
              <p className="text-sm text-gray-500">React, Vue.js, Tailwind</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-xl">
              <p className="font-medium text-gray-700">📱 Mobile Design</p>
              <p className="text-sm text-gray-500">iOS, Android, Flutter</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-xl">
              <p className="font-medium text-gray-700">🧠 Design Thinking</p>
              <p className="text-sm text-gray-500">Workshops, Prototyping</p>
            </div>
          </div>
        </div>

        {/* Experience Highlight */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-xl mb-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Current Position</p>
              <p className="font-semibold text-gray-800">Senior Product Designer</p>
              <p className="text-sm text-gray-600">DesignStudio · Remote</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Experience</p>
              <p className="font-semibold text-gray-800">8+ Years</p>
              <p className="text-sm text-gray-600">50+ Projects</p>
            </div>
          </div>
        </div>

        {/* Recent Project */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">🌟 Recent Project</h2>
          <div className="border border-gray-200 rounded-xl p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-medium text-gray-800">EcoTrack App</p>
                <p className="text-sm text-gray-500">Sustainability tracking mobile app</p>
              </div>
              <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full">
                Live on App Store
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Designed a complete mobile experience helping users track their carbon 
              footprint and make sustainable lifestyle choices.
            </p>
          </div>
        </div>

        {/* Connect Section */}
        <div className="flex flex-wrap gap-3 pt-2 border-t border-gray-200 pt-4">
          <p className="text-sm text-gray-500 w-full mb-1">📫 Connect with me:</p>
          <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-all shadow-md hover:shadow-lg flex items-center gap-2">
            <span>📧</span> Email
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-xl hover:bg-gray-900 transition-all shadow-md hover:shadow-lg flex items-center gap-2">
            <span>💼</span> LinkedIn
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-pink-600 rounded-xl hover:bg-pink-700 transition-all shadow-md hover:shadow-lg flex items-center gap-2">
            <span>📸</span> Instagram
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-gray-700 rounded-xl hover:bg-gray-800 transition-all shadow-md hover:shadow-lg flex items-center gap-2">
            <span>🐦</span> Twitter
          </button>
        </div>

        {/* Footer Note */}
        <p className="text-xs text-gray-400 text-center mt-6">
          © 2026 John Doe · Available for freelance projects
        </p>
      </div>
    </div>
  );
};

export default App;