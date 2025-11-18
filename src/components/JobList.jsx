import React from 'react';
import JobCard from './JobCard';

const JobList = ({ jobs, onEdit, onDelete, onAddNew }) => {
  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4">
      {/* Header with Title and Add Button */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex justify-between items-center gap-4">
          <h2 className="text-3xl font-bold text-gray-800">職業</h2>
          {onAddNew && (
            <button
              onClick={onAddNew}
              className="bg-orange-500 hover:bg-orange-600 
              text-white px-6 py-2 rounded-lg font-medium transition-colors 
              duration-200 flex items-center space-x-2 flex-shrink-0"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span className="whitespace-nowrap break-keep">新增職業</span>
            </button>
          )}
        </div>
      </div>

      {/* Job Cards Grid */}
      <div className="max-w-7xl mx-auto">
        {jobs.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">目前沒有職業資料</p>
            {onAddNew && (
              <button
                onClick={onAddNew}
                className="mt-4 text-orange-500 hover:text-orange-600 font-medium"
              >
                點擊新增第一個職業
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default JobList;
