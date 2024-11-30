import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

const Chart = ({ transactions }) => {
  // Get total amount per category
  const categories = ['Food', 'Rent', 'Utilities', 'Entertainment'];
  const categoryData = categories.map((cat) =>
    transactions.filter((trans) => trans.category === cat).reduce((total, trans) => total + trans.amount, 0)
  );

  const data = {
    labels: categories,
    datasets: [
      {
        data: categoryData,
        backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56'],
      },
    ],
  };

  return <Pie data={data} />;
};

export default Chart;
