import React, { memo, useMemo } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Line, Bar, Pie, Doughnut } from 'react-chartjs-2';
import ChartCard from './ChartCard';
import { getChartData } from '../../data/mockChart';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const DashboardCharts = memo(({ filter }) => {
  const chartOptions = useMemo(() => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  }), []);

  const pieOptions = useMemo(() => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  }), []);

  // Filter data based on selected period
  const filteredData = useMemo(() => {
    return getChartData(filter);
  }, [filter]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <ChartCard title="Patient Visits">
        <Line data={filteredData.patientVisits} options={chartOptions} />
      </ChartCard>

      <ChartCard title="Services Booked">
        <Bar data={filteredData.servicesBooked} options={chartOptions} />
      </ChartCard>

      <ChartCard title="Patient Status">
        <Pie data={filteredData.patientStatus} options={pieOptions} />
      </ChartCard>

      <ChartCard title="Revenue by Category">
        <Doughnut data={filteredData.revenueByCategory} options={pieOptions} />
      </ChartCard>
    </div>
  );
});

DashboardCharts.displayName = 'DashboardCharts';

export default DashboardCharts;