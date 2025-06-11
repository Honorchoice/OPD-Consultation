import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H3zm0 13V5h16v11H3zM12 9a1 1 0 00-1 1v4a1 1 0 001 1h2a1 1 0 001-1v-4a1 1 0 00-1-1h-2z" clipRule="evenodd" />
      </svg>
    ), path: '/dashboard' },
    { name: 'Appointments', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ), path: '/dashboard/appointments' },
    { name: 'Patients', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M12 20a8 8 0 100-16 8 8 0 000 16z" />
      </svg>
    ), path: '/dashboard/patients' },
  ];

  const otherMenuItems = [
    { name: 'Doctors', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M12 20a8 8 0 100-16 8 8 0 000 16z" />
      </svg>
    ), path: '/dashboard/doctors' },
    { name: 'Department', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ), path: '/dashboard/department' },
    { name: 'Doctor Schedule', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ), path: '/dashboard/doctor-schedule' },
    { name: 'Payments', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 6V4a2 2 0 012-2h6a2 2 0 012 2v2M7 14h10" />
      </svg>
    ), path: '/dashboard/payments' },
    { name: 'Calendar', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ), path: '/dashboard/calendar' },
    { name: 'Inventory', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm0 0V9a2 2 0 00-2-2H7a2 2 0 00-2 2v2M12 20v-6" />
      </svg>
    ), path: '/dashboard/inventory' },
  ];

  return (
    <div className="flex flex-col w-64 bg-white border-r border-gray-200 shadow-md">
      <div className="flex items-center justify-center h-16 border-b border-gray-200">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/images/logo.png" alt="HavenMed Logo" className="h-8 w-auto" />
          <span className="ml-2 text-xl font-bold text-gray-800">HavenMed</span>
        </div>
      </div>
      <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
        <div className="flex items-center flex-shrink-0 px-4">
          <p className="text-sm font-semibold text-gray-500">Main Menu</p>
        </div>
        <nav className="mt-5 flex-1 px-2 bg-white space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${item.name === 'Dashboard' ? 'bg-black text-white' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`}
            >
              {item.icon}
              <span className="ml-3">{item.name}</span>
            </Link>
          ))}
        </nav>
        <div className="flex items-center flex-shrink-0 px-4 mt-8">
          <p className="text-sm font-semibold text-gray-500">Other Menu</p>
        </div>
        <nav className="mt-5 flex-1 px-2 bg-white space-y-1">
          {otherMenuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            >
              {item.icon}
              <span className="ml-3">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex items-center justify-center h-16 border-t border-gray-200">
        {/* Help Center */}
        <Link to="/dashboard/help" className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9.292a1.001 1.001 0 000 1.414l.94.94a1 1 0 001.414 0l.94-.94a1.001 1.001 0 000-1.414l-.94-.94a1.001 1.001 0 00-1.414 0l-.94.94zM12 6.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 18.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
          Help Center
        </Link>
      </div>
    </div>
  );
};

export default Sidebar; 