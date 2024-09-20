// src/components/RecentStreamsTable.js
import React, { useState } from 'react';
import { recentStreams } from '../data/mockData';

function RecentStreamsTable() {
  const [filter, setFilter] = useState('');
  const [sortField, setSortField] = useState('');
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' or 'desc'

  const filteredStreams = recentStreams.filter(stream =>
    stream.song.toLowerCase().includes(filter.toLowerCase()) ||
    stream.artist.toLowerCase().includes(filter.toLowerCase())
  );

  const handleSort = (field) => {
    const order = sortField === field && sortOrder === 'asc' ? 'desc' : 'asc';
    setSortField(field);
    setSortOrder(order);
  };

  const sortedStreams = [...filteredStreams].sort((a, b) => {
    if (sortField) {
      const fieldA = a[sortField];
      const fieldB = b[sortField];

      if (typeof fieldA === 'string') {
        return sortOrder === 'asc' ? fieldA.localeCompare(fieldB) : fieldB.localeCompare(fieldA);
      } else {
        return sortOrder === 'asc' ? fieldA - fieldB : fieldB - fieldA;
      }
    }
    return 0;
  });

  const renderSortArrow = (field) => {
    if (sortField !== field) return null;
    return sortOrder === 'asc' ? '↑' : '↓';
  };

  return (
    <div className="bg-white p-5 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Recent Streams</h2>
      <input
        type="text"
        className="border mb-3 p-2 w-full"
        placeholder="Filter by Song or Artist..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      {/* Hint Text */}
      <div className="text-sm text-gray-500 mb-3">
        <em>Click on column headers to sort the table.</em>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 cursor-pointer" onClick={() => handleSort('song')}>
              Song Name {renderSortArrow('song')}
            </th>
            <th className="py-2 cursor-pointer" onClick={() => handleSort('artist')}>
              Artist {renderSortArrow('artist')}
            </th>
            <th className="py-2 cursor-pointer" onClick={() => handleSort('date')}>
              Date Streamed {renderSortArrow('date')}
            </th>
            <th className="py-2 cursor-pointer" onClick={() => handleSort('streams')}>
              Streams {renderSortArrow('streams')}
            </th>
            <th className="py-2 cursor-pointer" onClick={() => handleSort('userId')}>
              User ID {renderSortArrow('userId')}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedStreams.map((stream, idx) => (
            <tr key={idx} className="text-center">
              <td className="py-2">{stream.song}</td>
              <td className="py-2">{stream.artist}</td>
              <td className="py-2">{stream.date}</td>
              <td className="py-2">{stream.streams}</td>
              <td className="py-2">{stream.userId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentStreamsTable;