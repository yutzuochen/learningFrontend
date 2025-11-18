import React from 'react';

const JobCard = ({ job, onEdit, onDelete }) => {
  const { title, level, years, stats, services, color = 'orange' } = job;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 relative">
      {/* Header Section */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-orange-600 mb-1">{title}</h3>
          <p className="text-sm text-gray-500">{level}</p>
        </div>

        {/* Edit Icon Button */}
        <button
          onClick={() => onEdit(job)}
          className="text-gray-400 hover:text-orange-500 transition-colors p-2"
          aria-label="Edit job"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </button>
      </div>

      {/* Years Badge */}
      <div className="mb-4">
        <span className="inline-block bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
          年資 {years}
        </span>
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b border-gray-200">
        <div>
          <p className="text-xs text-gray-500 mb-1">累積客量</p>
          <p className="text-sm font-semibold text-gray-700">{stats.totalClients.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-1">累積業績</p>
          <p className="text-sm font-semibold text-gray-700">{stats.totalRevenue.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-1">累積時數</p>
          <p className="text-sm font-semibold text-gray-700">{stats.totalHours.toLocaleString()}</p>
        </div>
      </div>

      {/* Services Price List */}
      <div className="space-y-2">
        <p className="text-xs text-gray-500 font-medium mb-3">服務內容</p>
        <div className="grid grid-cols-2 gap-3">
          {services.map((service, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-sm text-gray-700">{service.name}</span>
              <span className="text-sm font-semibold text-gray-800">${service.price}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Delete Button (optional, bottom right corner) */}
      {onDelete && (
        <button
          onClick={() => onDelete(job.id)}
          className="absolute bottom-4 right-4 text-red-400 hover:text-red-600 transition-colors text-xs"
          aria-label="Delete job"
        >
          刪除
        </button>
      )}
    </div>
  );
};

export default JobCard;
