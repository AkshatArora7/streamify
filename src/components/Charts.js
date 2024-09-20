// src/components/Charts.js
import React from 'react';
import { Line, Pie, Bar } from 'react-chartjs-2';
import { userGrowthData, revenueDistribution, topSongs } from '../data/mockData';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement, BarElement } from 'chart.js';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement, BarElement);

function Charts() {
  return (
    <div className="grid grid-cols-2 gap-4 mb-5">
      <div className="bg-white p-5 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">User Growth</h2>
        <Line data={userGrowthData} />
      </div>
      <div className="bg-white p-5 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Revenue Distribution</h2>
        <Pie data={revenueDistribution} />
      </div>
      <div className="col-span-2 bg-white p-5 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Top 5 Streamed Songs</h2>
        <Bar
          data={{
            labels: topSongs.map((song) => song.name),
            datasets: [
              {
                label: "Streams",
                data: topSongs.map((song) => song.streams),
                backgroundColor: '#60A5FA',
              },
            ],
          }}
        />
      </div>
    </div>
  );
}

export default Charts;