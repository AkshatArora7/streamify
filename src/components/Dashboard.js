// src/components/Dashboard.js
import React from 'react';
import Metrics from './Metrics';
import Charts from './Charts';
import RecentStreamsTable from './RecentStreamsTable';

function Dashboard() {
  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-5">Streamify Analytics Dashboard</h1>
      <Metrics />
      <Charts />
      <RecentStreamsTable />
    </div>
  );
}

export default Dashboard;