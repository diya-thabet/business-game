import React from 'react';
import StatCard from './StatCard';
import './StatsContainer.css';

const card1Colors = ['#0D63C6', '#2E90FA', '#82BFFF']; // Dark to light blue
const card2Colors = ['#6B6B3B', '#A1A15C', '#D1D18C']; // Dark to light olive/khaki
const card3Colors = ['#0D63C6', '#2E90FA', '#82BFFF']; // Same as card 1

const statsData = [
  {
    title: "Taux de livraisons à temps",
    value: "$2,420",
    percentage: "3.3%",
    colors: card1Colors,
    // --- NEW: Add legend data for this card ---
    legendData: [
      { name: 'Atelier 1', value: '$7,660', color: card1Colors[0] },
      { name: 'Atelier 2', value: '$2,820', color: card1Colors[1] },
      { name: 'Atelier 3', value: '$5,120', color: card1Colors[2] }
    ]
  },
  {
    title: "Coût logistique par unité",
    value: "$6,420",
    percentage: "3.3%",
    colors: card2Colors,
    legendData: [
      { name: 'Atelier 1', value: '$4,150', color: card2Colors[0] },
      { name: 'Atelier 2', value: '$9,800', color: card2Colors[1] },
      { name: 'Atelier 3', value: '$3,200', color: card2Colors[2] }
    ]
  },
  {
    title: "Taux de remplissage des camions",
    value: "$8,220",
    percentage: "3.3%",
    colors: card3Colors,
    legendData: [
      { name: 'Atelier 1', value: '$12,500', color: card3Colors[0] },
      { name: 'Atelier 2', value: '$1,900', color: card3Colors[1] },
      { name: 'Atelier 3', value: '$4,300', color: card3Colors[2] }
    ]
  }
];

const StatsContainer = () => {
  return (
    <div className="stats-container">
      {statsData.map((stat, index) => (
        <StatCard
          key={index}
          title={stat.title}
          value={stat.value}
          percentage={stat.percentage}
          colors={stat.colors}
          legendData={stat.legendData} // Pass the unique legend data as a prop
        />
      ))}
    </div>
  );
};

export default StatsContainer;