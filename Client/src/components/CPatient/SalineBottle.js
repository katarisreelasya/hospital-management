import React from 'react';

const getColorByWeight = (weight) => {
  if (weight < 20) return 'bg-red-500'; // Low weight - Red
  if (weight < 40) return 'bg-yellow-500'; // Medium weight - Yellow
  return 'bg-green-500'; // High weight - Green
};

const SalineBottle = ({ weight }) => {
  const colorClass = getColorByWeight(weight);

  return (
    <div className="relative w-16 h-40 border-2 border-gray-300 rounded-lg">
      <div className={`absolute bottom-0 w-full ${colorClass}`} style={{ height: `${weight}%` }}>
        <span className="absolute bottom-2 left-2 text-white font-bold">{weight}kg</span>
      </div>
    </div>
  );
};

export default SalineBottle;
