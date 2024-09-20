# Streamify Analytics Dashboard

## Overview

Streamify is a fictional music streaming analytics dashboard that provides insights into user activity, revenue, and content performance for a music streaming service. This single-page application (SPA) is built using React and incorporates responsive design principles for a user-friendly experience. The dashboard features key metrics, data visualizations, and a dark mode option.

## Features

- **Key Metrics**:
  - Total Users
  - Active Users
  - Total Streams
  - Revenue
  - Top Artist

- **Data Visualization**:
  - User Growth Chart (Line Chart)
  - Revenue Distribution (Pie Chart)
  - Top 5 Streamed Songs (Bar Chart)

- **Data Table**:
  - Displays recent stream information including Song Name, Artist, Date Streamed, Stream Count, and User ID.
  - Sorting and filtering functionalities for the data table.
<!-- 
- **Dark Mode**:
  - Toggle switch to switch between light and dark themes. -->

## Technologies Used

- React
- Tailwind CSS (or another preferred CSS framework)
- Chart.js (for data visualizations)
- JSON Server (for mock data, if applicable)

## Getting Started

### Prerequisites

- Node.js (v12 or higher)
- npm (Node Package Manager)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/akshatarora7/streamify.git
2. **Navigate to the project directory:**:
   ```bash
   cd streamify
3. **Install the dependencies**:
    ```bash
    npm install
### Running the Application
To start the development server, run:
    
    npm start

This will open the application in your default web browser at http://localhost:3000.

Usage

 - Navigate through the dashboard to view key metrics and data visualizations.
 - Use the filter input to search for specific songs or artists in the recent streams table.
 - Click on the table headers to sort the data by the respective columns.
 - Toggle the dark mode switch to switch between light and dark themes.


### Directory Structure

```
streamify-analytics-dashboard/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/           # React components
│   ├── data/                # Mock data files
│   ├── App.js               # Main application file
│   ├── index.js             # Entry point
│   └── ...
├── .gitignore                # Files to ignore in Git
├── package.json              # Project dependencies
└── README.md                 # Project documentation
```