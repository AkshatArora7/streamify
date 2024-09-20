export const metrics = {
    totalUsers: 10000,
    activeUsers: 3400,
    totalStreams: 150000,
    revenue: 95000,
    topArtist: "The Weeknd",
  };
  
  export const userGrowthData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Total Users",
        data: [500, 800, 1200, 1700, 2100, 2600, 3000, 4000, 4500, 6000, 8000, 10000],
        borderColor: "#4ADE80",
        fill: false,
      },
      {
        label: "Active Users",
        data: [100, 200, 300, 500, 600, 800, 1000, 1300, 1800, 2300, 2800, 3400],
        borderColor: "#60A5FA",
        fill: false,
      },
    ],
  };
  
  export const revenueDistribution = {
    labels: ["Subscriptions", "Ads"],
    datasets: [
      {
        data: [60000, 35000],
        backgroundColor: ["#FBBF24", "#F43F5E"],
      },
    ],
  };
  
  export const topSongs = [
    { name: "Blinding Lights", artist: "The Weeknd", streams: 50000 },
    { name: "Levitating", artist: "Dua Lipa", streams: 45000 },
    { name: "Save Your Tears", artist: "The Weeknd", streams: 40000 },
    { name: "Good 4 U", artist: "Olivia Rodrigo", streams: 35000 },
    { name: "Peaches", artist: "Justin Bieber", streams: 30000 },
  ];
  
  export const recentStreams = [
    { song: "Blinding Lights", artist: "The Weeknd", date: "2024-09-10", streams: 1000, userId: "U123" },
    { song: "Levitating", artist: "Dua Lipa", date: "2024-09-09", streams: 900, userId: "U124" },
    { song: "Good 4 U", artist: "Olivia Rodrigo", date: "2024-09-08", streams: 850, userId: "U125" },
    { song: "Peaches", artist: "Justin Bieber", date: "2024-09-07", streams: 800, userId: "U126" },
  ];