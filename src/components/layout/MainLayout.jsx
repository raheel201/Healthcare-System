import React, { memo } from 'react';
import Topbar from './Topbar';
import Sidebar from './Sidebar';

const MainLayout = memo(({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Topbar />
      <Sidebar />
      <main className="lg:ml-64 pt-16 min-h-screen">
        <div className="p-4 lg:p-6">
          {children}
        </div>
      </main>
      
      {/* Mobile overlay */}
      <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-20 hidden" id="mobile-overlay" onClick={() => {
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('mobile-overlay');
        if (sidebar && overlay) {
          sidebar.classList.add('-translate-x-full');
          overlay.classList.add('hidden');
        }
      }}></div>
    </div>
  );
});

MainLayout.displayName = 'MainLayout';

export default MainLayout;