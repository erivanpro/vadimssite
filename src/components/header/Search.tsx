'use client';
import { SearchProps } from './SearchProps';

export function Search({ setShowSearch, showSearch }: SearchProps) {
  return (
    <div className="relative  hidden lg:block">
      {/* Search Icon Button */}
      <button
        onClick={() => setShowSearch(true)}
        className="p-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="rgba(255,255,255,1)"
        >
          <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z" />
        </svg>
      </button>

      {/* Centered Search Box Modal */}
      {showSearch && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-black p-6 rounded-xl shadow-xl w-full relative">
            {/* Close Button */}
            <button
              onClick={() => setShowSearch(false)}
              className="absolute top-2 right-2 text-white"
            >
              ✕
            </button>


            <input
              type="text"
              placeholder="recherche..."
              className="w-full p-2 mt-4 rounded-md border text-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoFocus />
          </div>
        </div>
      )}
    </div>
  );
}
