import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {/* Total Patients Card */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl shadow-xl p-6 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-4 right-4 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
              </div>
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-purple-200 text-purple-700 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M12 20a8 8 0 100-16 8 8 0 000 16z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mt-2">Total Patients</h3>
              <p className="text-3xl font-extrabold text-gray-800 mt-1">2,456</p>
              <div className="flex items-center mt-3">
                <span className="text-sm text-green-500 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  +2.1%
                </span>
                <span className="text-sm text-gray-500 ml-2">(150 more than Yesterday)</span>
              </div>
            </div>

            {/* Appointments Card */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-xl p-6 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-4 right-4 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
              </div>
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-200 text-blue-700 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mt-2">Appointments</h3>
              <p className="text-3xl font-extrabold text-gray-800 mt-1">1,234</p>
              <div className="flex items-center mt-3">
                <span className="text-sm text-red-500 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                  -1.5%
                </span>
                <span className="text-sm text-gray-500 ml-2">(15 more than Yesterday)</span>
              </div>
            </div>

            {/* Bed Room Card */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl shadow-xl p-6 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-4 right-4 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
              </div>
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-yellow-200 text-yellow-700 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm0 0V9a2 2 0 00-2-2H7a2 2 0 00-2 2v2M12 20v-6" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mt-2">Bed Room</h3>
              <p className="text-3xl font-extrabold text-gray-800 mt-1">567</p>
              <div className="flex items-center mt-3">
                <span className="text-sm text-green-500 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  +2.1%
                </span>
                <span className="text-sm text-gray-500 ml-2">(260 more than Yesterday)</span>
              </div>
            </div>

            {/* Total Invoice Card */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-xl p-6 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-4 right-4 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
              </div>
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-200 text-blue-700 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mt-2">Total Invoice</h3>
              <p className="text-3xl font-extrabold text-gray-800 mt-1">$15,000</p>
              <div className="flex items-center mt-3">
                <span className="text-sm text-green-500 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  +2.1%
                </span>
                <span className="text-sm text-gray-500 ml-2">(1050 more than Yesterday)</span>
              </div>
            </div>
          </div>

          {/* Patient Health and Total Revenue sections */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            {/* Patient Health Card */}
            <div className="lg:col-span-2 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-xl p-6 relative overflow-hidden">
              <div className="absolute top-4 right-4 text-gray-400 flex items-center space-x-2">
                <button className="p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-5v4m0 0h-4m4 0l-5 5M19 16v4m0 0h-4m4 0l-5-5M5 16v4m0 0h4m-4 0l5-5" />
                  </svg>
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                  </svg>
                </button>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Patient Health</h3>
              <p className="text-sm text-gray-600 mt-1">From Patient</p>
              <div className="mt-8 flex flex-col items-center justify-center">
                <img src="/images/lungs.png" alt="Lungs Diagram" className="h-64 object-contain" /> {/* Placeholder for lungs image */}
                <div className="absolute bottom-20 right-20 bg-white rounded-lg shadow-md px-3 py-2 flex items-center text-gray-800 text-sm font-semibold">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  108 bpm
                </div>

                <div className="flex justify-center w-full mt-6 space-x-4">
                  {/* Dr. Ishita Datta Card */}
                  <div className="flex items-center bg-white rounded-lg shadow-md p-3">
                    <img src="https://via.placeholder.com/30" alt="Dr. Ishita Datta" className="h-8 w-8 rounded-full mr-2 object-cover" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Dr. Ishita Datta</p>
                      <p className="text-xs text-gray-500">Pulmonary</p>
                      <p className="text-xs text-gray-500">Today</p>
                      <p className="text-sm font-medium text-gray-900">01:15 PM - 02:00 PM</p>
                    </div>
                  </div>
                  {/* Jeffrey Hessel Card */}
                  <div className="relative flex flex-col items-start bg-white rounded-lg shadow-md p-3 space-y-2 w-48">
                    <div className="absolute top-2 right-2 text-gray-400">
                      <button className="focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    <div className="flex items-center">
                      <img src="https://via.placeholder.com/20" alt="Jeffrey Hessel" className="h-6 w-6 rounded-full mr-2 object-cover" />
                      <p className="text-sm font-medium text-gray-900">Jeffrey Hessel</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Temperature</p>
                      <p className="text-lg font-bold text-gray-800">45.06° C</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Heart rate</p>
                      <p className="text-lg font-bold text-gray-800">108 bpm</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Blood</p>
                      <p className="text-lg font-bold text-gray-800">96%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Total Revenue Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">Total Revenue</h3>
                <select className="text-sm text-gray-600 border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-0">
                  <option>Monthly</option>
                  <option>Quarterly</option>
                  <option>Annually</option>
                </select>
              </div>
              <p className="text-sm text-gray-600 mt-1">01.07.2025</p>
              <div className="flex items-center space-x-4 mt-6">
                <button className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200 focus:outline-none focus:ring-0">Expense</button>
                <button className="px-4 py-2 rounded-lg bg-indigo-100 text-indigo-700 text-sm font-medium hover:bg-indigo-200 focus:outline-none focus:ring-0">Income</button>
        </div>
              {/* Chart */}
              <div className="h-48 mt-4 relative flex items-end">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 150" preserveAspectRatio="none">
                  {/* Horizontal grid lines */}
                  <line x1="0" y1="140" x2="300" y2="140" stroke="#e0e0e0" strokeWidth="1" />
                  <line x1="0" y1="100" x2="300" y2="100" stroke="#e0e0e0" strokeWidth="1" />
                  <line x1="0" y1="60" x2="300" y2="60" stroke="#e0e0e0" strokeWidth="1" />
                  <line x1="0" y1="20" x2="300" y2="20" stroke="#e0e0e0" strokeWidth="1" />

                  {/* Vertical grid lines (simplified for months) */}
                  <line x1="40" y1="0" x2="40" y2="150" stroke="#f0f0f0" strokeWidth="1" />
                  <line x1="80" y1="0" x2="80" y2="150" stroke="#f0f0f0" strokeWidth="1" />
                  <line x1="120" y1="0" x2="120" y2="150" stroke="#f0f0f0" strokeWidth="1" />
                  <line x1="160" y1="0" x2="160" y2="150" stroke="#f0f0f0" strokeWidth="1" />
                  <line x1="200" y1="0" x2="200" y2="150" stroke="#f0f0f0" strokeWidth="1" />
                  <line x1="240" y1="0" x2="240" y2="150" stroke="#f0f0f0" strokeWidth="1" />
                  <line x1="280" y1="0" x2="280" y2="150" stroke="#f0f0f0" strokeWidth="1" />

                  {/* Income Line (Purple/Blue) - Adjusted for visual match */}
                  <path d="M0 100 C 25 80, 50 120, 75 90 S 125 60, 150 85 S 200 110, 225 70 S 275 100, 300 90" fill="none" stroke="#a78bfa" strokeWidth="2" />
                  {/* Expense Line (Yellow) - Adjusted for visual match */}
                  <path d="M0 60 C 25 70, 50 40, 75 55 S 125 30, 150 50 S 200 80, 225 40 S 275 60, 300 50" fill="none" stroke="#facc15" strokeWidth="2" />

                  {/* Circle on the income line for Jun */}
                  <circle cx="160" cy="85" r="4" fill="#a78bfa" />
                </svg>
              </div>
              <div className="flex justify-between text-sm mt-4 -mx-2">
                <p className="text-gray-500 text-xs text-center w-full px-2">Jan</p>
                <p className="text-gray-500 text-xs text-center w-full px-2">Apr</p>
                <p className="text-gray-500 text-xs text-center w-full px-2">May</p>
                <p className="text-gray-500 text-xs text-center w-full px-2 bg-yellow-200 rounded-lg py-1">Jun</p>
                <p className="text-gray-500 text-xs text-center w-full px-2">Jul</p>
                <p className="text-gray-500 text-xs text-center w-full px-2">Sep</p>
                <p className="text-gray-500 text-xs text-center w-full px-2">Dec</p>
              </div>
              <div className="flex justify-between text-sm mt-4 pt-4 border-t border-gray-100">
                <div>
                  <p className="text-gray-500 text-sm">Hospital Total Income</p>
                  <p className="font-bold text-gray-800 text-xl">$7,12,3264</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Hospital Total Expense</p>
                  <p className="font-bold text-gray-800 text-xl">$14,965,5476</p>
                </div>
              </div>
            </div>
          </div>

          {/* Today Appointments section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <div className="bg-white rounded-2xl shadow-xl p-6 relative overflow-hidden">
              <div className="absolute top-4 right-4 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Today</h3>
              <p className="text-sm text-gray-600 mt-1">01:15 PM - 02:00 PM</p>
              <div className="mt-4 flex items-center space-x-3">
                <img src="https://via.placeholder.com/40" alt="Doctor Avatar" className="h-10 w-10 rounded-full object-cover shadow-md" />
                <div>
                  <p className="font-medium text-gray-900">Dr. Ishita Datta</p>
                  <p className="text-sm text-gray-500">Pulmonary</p>
                </div>
              </div>
          </div>
        </div>
      </main>
      </div>
    </div>
  );
};

export default Dashboard; 