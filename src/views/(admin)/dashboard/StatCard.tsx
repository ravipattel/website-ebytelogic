import React from 'react'

const StatCard = ({ title, value, icon }: { title: string; value: string; icon: React.ReactNode }) => {
  return (
    <div className="bg-white p-6 shadow-sm rounded-xl">
      <p className="text-gray-500 text-sm">{title}</p>
      <h3 className="text-2xl font-semibold mt-2">{value}</h3>
      <div className="text-blue-600 text-3xl w-5 h-5 flex items-center justify-center mt-2">{icon}</div>
    </div>
  );
}
export default StatCard;

