import React, { memo, useState, useCallback } from 'react';
import StatCard from '../components/dashboard/StatCard';
import DashboardCharts from '../components/dashboard/DashboardCharts';
import Select from '../components/common/Select';
import { statsData } from '../data/mockChart';

const Dashboard = memo(() => {
  const [timeFilter, setTimeFilter] = useState('30');

  const filterOptions = [
    { value: '7', label: 'Last 7 days' },
    { value: '30', label: 'Last 30 days' },
    { value: '90', label: 'Last 90 days' }
  ];

  const handleFilterChange = useCallback((e) => {
    setTimeFilter(e.target.value);
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-gray-100">Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400">Welcome to Jhilmil Homecare Dashboard</p>
        </div>
        <div className="w-full lg:w-48">
          <Select
            options={filterOptions}
            value={timeFilter}
            onChange={handleFilterChange}
            placeholder="Select time period"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {statsData.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            trend={stat.trend}
            color={stat.color}
          />
        ))}
      </div>

      <DashboardCharts filter={timeFilter} />
    </div>
  );
});

Dashboard.displayName = 'Dashboard';

export default Dashboard;