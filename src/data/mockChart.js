// Mock chart data for dashboard
export const getChartData = (filter) => {
  const multiplier = filter === '7' ? 0.3 : filter === '30' ? 0.7 : 1;
  
  return {
  // Line chart - Patient visits over time
  patientVisits: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Patient Visits',
        data: [120, 150, 180, 220, 200, 250].map(val => Math.round(val * multiplier)),
        borderColor: 'rgb(20, 184, 166)',
        backgroundColor: 'rgba(20, 184, 166, 0.1)',
        tension: 0.4
      }
    ]
  },

  // Bar chart - Services booked
  servicesBooked: {
    labels: ['Consultation', 'Blood Test', 'X-Ray', 'Therapy', 'Vaccination'],
    datasets: [
      {
        label: 'Services Booked',
        data: [85, 45, 30, 25, 40].map(val => Math.round(val * multiplier)),
        backgroundColor: [
          'rgba(34, 197, 94, 0.8)',
          'rgba(20, 184, 166, 0.8)',
          'rgba(249, 115, 22, 0.8)',
          'rgba(168, 85, 247, 0.8)',
          'rgba(236, 72, 153, 0.8)'
        ]
      }
    ]
  },

  // Pie chart - Patient status distribution
  patientStatus: {
    labels: ['Active', 'Inactive', 'New'],
    datasets: [
      {
        data: [65, 25, 10].map(val => Math.round(val * multiplier)),
        backgroundColor: [
          'rgba(34, 197, 94, 0.8)',
          'rgba(239, 68, 68, 0.8)',
          'rgba(20, 184, 166, 0.8)'
        ]
      }
    ]
  },

  // Doughnut chart - Revenue by service category
  revenueByCategory: {
    labels: ['Consultation', 'Laboratory', 'Imaging', 'Therapy', 'Preventive'],
    datasets: [
      {
        data: [35, 25, 20, 15, 5].map(val => Math.round(val * multiplier)),
        backgroundColor: [
          'rgba(20, 184, 166, 0.8)',
          'rgba(34, 197, 94, 0.8)',
          'rgba(249, 115, 22, 0.8)',
          'rgba(168, 85, 247, 0.8)',
          'rgba(236, 72, 153, 0.8)'
        ]
      }
    ]
  }
  };
};

export const chartData = getChartData('30');

// Stats data for dashboard
export const statsData = [
  {
    title: 'Total Patients',
    value: '1,234',
    change: '+12%',
    trend: 'up',
    color: 'teal'
  },
  {
    title: 'Today\'s Appointments',
    value: '28',
    change: '+5%',
    trend: 'up',
    color: 'green'
  },
  {
    title: 'Revenue',
    value: '$12,450',
    change: '+8%',
    trend: 'up',
    color: 'purple'
  },
  {
    title: 'Services',
    value: '156',
    change: '-2%',
    trend: 'down',
    color: 'orange'
  }
];