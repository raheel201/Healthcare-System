import React, { memo } from 'react';
import Topbar from './Topbar';
import Sidebar from './Sidebar';

const MainLayout = memo(({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Topbar />
      <Sidebar />
      <main className="ml-64 pt-16 min-h-screen">
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
});

MainLayout.displayName = 'MainLayout';

export default MainLayout;