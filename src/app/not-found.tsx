'use client';
import React from 'react';
import Link from 'next/link';
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-white dark:bg-gray-900">
      <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
        Sorry, the page you're looking for doesn't exist.
      </p>
      <Link
        href="/"
        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-lg underline"
      >
        Go back to home
      </Link>
    </div>
  );
};

export default NotFound;
