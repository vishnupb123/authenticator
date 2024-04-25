import React from 'react';

const Loader = () => {
  return (
    <div className="loader">
      <div className="dot bg-white h-4 w-4 rounded-full animate-ping"></div>
      <div className="dot bg-white h-4 w-4 rounded-full animate-ping delay-100"></div>
      <div className="dot bg-white h-4 w-4 rounded-full animate-ping delay-200"></div>
    </div>
  );
};

export default Loader;
