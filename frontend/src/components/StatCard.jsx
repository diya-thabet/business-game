import { PieChart, Pie, Cell } from "recharts";
import "./StatCard.css";

// This function converts the legend data into data the chart can read
const processChartData = (legendData) => {
  return legendData.map((item) => ({
    ...item,
    // Convert '$7,660' into the number 7660
    numericValue: parseFloat(item.value.replace(/[^0-9.-]+/g, "")),
  }));
};

const StatCard = ({ title, value, percentage, colors, legendData }) => {
  // Process the data to be used in the chart
  const chartData = processChartData(legendData);

  return (
    <div className="stat-card">
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
        <span className="card-options">...</span>
      </div>

      <div className="card-body">
        <p className="card-value">{value}</p>
        <span className="percentage-pill">{percentage}</span>
      </div>

      <div className="card-footer">
        <div className="chart-container">
          <PieChart width={120} height={120}>
            <Pie
              // --- THIS IS THE KEY CHANGE ---
              data={chartData} // Use our real, processed data
              dataKey="numericValue" // Tell the chart to use the number value for size
              // --- END OF KEY CHANGE ---
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={55}
              fill="#8884d8"
              paddingAngle={0}
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                  strokeWidth={0}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
        <div className="legend-container">
          <ul className="legend">
            {legendData.map((item, index) => (
              <li key={index} className="legend-item">
                <div className="legend-label">
                  <span
                    className="legend-dot"
                    style={{ backgroundColor: item.color }}
                  ></span>
                  <span>{item.name}</span>
                </div>
                <span className="legend-value">{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
