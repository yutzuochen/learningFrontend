import React from 'react';

const ProfileHeader = ({ name = '陳昱佐', email = 'XXXOOOO@gmail.com', avatarUrl = null }) => {
  return (
    <div className="bg-white border-b border-gray-200 py-6 px-8">
      <div className="flex items-center space-x-4">
        {/* Avatar */}
        <div className="w-16 h-16 rounded-full bg-gray-300 overflow-hidden flex items-center justify-center">
          {avatarUrl ? (
            <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
          ) : (
            <svg className="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          )}
        </div>

        {/* Name and Email */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
          <p className="text-gray-600">{email}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
