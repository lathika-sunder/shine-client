// BookingsChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BookingsChart = ({ bookingsData }) => {

    const chartStyle={
       
        borderRadius: "12px",
        height:"50vh",
        width:"60vh"
    }
  const data = {
    labels: ['Chennai', 'Mumbai', 'Hyderabad'],
    datasets: [
      {
        label: 'Number of Bookings',
        data: bookingsData,
        backgroundColor: ' #cea86b',
        borderColor: '#90754A',
        borderWidth: 1,
        
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Number of Bookings in Different Cities',
      },
    },
  };

  return <Bar data={data} options={options} style={chartStyle} />;
};

export default BookingsChart;
