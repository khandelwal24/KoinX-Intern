import React from 'react';

const Card = ({ title, description, icon, color }) => {
  const iconStyles = `flex items-center justify-center w-10 h-7 rounded-full text-white text-lg mb-4 ${color}`;

  return (
    <div className="w-full bg-white rounded-xl flex shadow-lg p-6">

        <div className={iconStyles}>{icon}</div>

        <div>
        <div className="text-lg font-semibold mb-2">{title}</div>
        <p className="text-gray-600 text-sm">{description}</p>
        </div>
    </div>
  );
};

export default Card;
