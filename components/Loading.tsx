import React from 'react';

const Loading = () => {
  return (
    <div className="content-center flex justify-center items-center min-h-screen">
        <button type="button" className="bg-indigo-500 text-white px-4 py-2 rounded-md flex items-center" disabled>
          <svg className="mr-3 w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              fill="currentColor"
              d="M4 12a8 8 0 1 0 16 0 8 8 0 1 0-16 0z"
              className="opacity-25"
            />
          </svg>
          Loading...
        </button>
    </div>
  );
};

export default Loading;