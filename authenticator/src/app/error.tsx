"use client"
import React from 'react';

const ErrorPage = ({ statusCode } : { statusCode: number }) => {
  return (
    <div className="error-container flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold text-red-500 mb-4">
        {statusCode ? `An error occurred: ${statusCode}` : 'An error occurred'}
      </h1>
      <p className="text-gray-600">Something went wrong. Please try again later.</p>
    </div>
  );
};

ErrorPage.getInitialProps = ({ res, err }: { res: any; err: any }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
