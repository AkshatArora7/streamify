// src/components/Metrics.js
import React from 'react';
import { metrics } from '../data/mockData';

function Metrics() {
  return (
    <div className="grid grid-cols-2 gap-4 mb-5">
      <div className="bg-white p-5 rounded shadow">
        <h2 className="text-lg font-semibold">Total Users</h2>
        <p className="text-2xl">{metrics.totalUsers}</p>
      </div>
      <div className="bg-white p-5 rounded shadow">
        <h2 className="text-lg font-semibold">Active Users</h2>
        <p className="text-2xl">{metrics.activeUsers}</p>
      </div>
      <div className="bg-white p-5 rounded shadow">
        <h2 className="text-lg font-semibold">Total Streams</h2>
        <p className="text-2xl">{metrics.totalStreams}</p>
      </div>
      <div className="bg-white p-5 rounded shadow">
        <h2 className="text-lg font-semibold">Revenue</h2>
        <p className="text-2xl">${metrics.revenue}</p>
      </div>
    </div>
  );
}

export default Metrics;