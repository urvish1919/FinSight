import "./App.css";
import { useState } from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from "recharts";

const categoryData = [
  { category: "Furniture", sales: 5100 },
  { category: "Office", sales: 2600 },
  { category: "Technology", sales: 11200 }
];

const regionData = [
  { region: "East", sales: 5350 },
  { region: "North", sales: 3950 },
  { region: "South", sales: 4050 },
  { region: "West", sales: 5550 }
];

const forecastData = [
  { month: "Jan", sales: 1200 },
  { month: "Feb", sales: 1350 },
  { month: "Mar", sales: 1250 },
  { month: "Apr", sales: 1520 },
  { month: "May", sales: 1440 }
];

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042"
];

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "container dark" : "container"}>
      <div className="navbar">
        <h1>FinSight Dashboard</h1>

        <button
          className="toggle-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>

      <div className="cards">
        <div className="card">
          <h2>Total Sales</h2>
          <p>₹18,900</p>
        </div>

        <div className="card">
          <h2>Forecast Sales</h2>
          <p>₹1432.86</p>
        </div>

        <div className="card">
          <h2>Top Category</h2>
          <p>Technology</p>
        </div>

        <div className="card">
          <h2>Top Region</h2>
          <p>West</p>
        </div>
      </div>

      <div className="chart-container">
        <h2>Category Sales</h2>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={categoryData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="#4F46E5" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-container">
        <h2>Regional Sales</h2>

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={regionData}
              dataKey="sales"
              nameKey="region"
              outerRadius={110}
              label
            >
              {regionData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-container">
        <h2>Sales Forecast</h2>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={forecastData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#10B981"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default App;