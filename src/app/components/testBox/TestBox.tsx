import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

export default function TestBox() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("posts");

  const closeBox = () => {
    setIsOpen(false);
  };

  const openAppleTestFlight = () => {
    // Here we are opening the Apple TestFlight link in a new tab
    window.open("https://testflight.apple.com/join/3pPhveH2", "_blank", "noopener noreferrer");
  };

  const openAndroidAPK = () => {
    // Here we are opening the Android APK link in a new tab
    window.open("https://drive.google.com/file/d/1e182N79kh86xK0xpLCfpuLoMUUBT0uJM/view?usp=drive_link", "_blank", "noopener noreferrer");
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-slate-900/25 z-50 transition-opacity duration-500 ease-in-out opacity-100">
<div className="p-8 bg-white backdrop-blur-md border border-black/10 rounded-xl shadow-lg w-96 transition-transform transform hover:scale-105 hover:shadow-2xl">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              {t('test_box_title')}
            </h3>
            <button
              onClick={closeBox}
              className="text-gray-600 hover:text-gray-800 text-lg font-bold"
            >
              X
            </button>
          </div>
          <div className="flex flex-col items-center mb-6">
            <p className="text-sm text-gray-600 text-center leading-relaxed">
              {t('app_ready_message')}
            </p>
          </div>
          <button
            onClick={openAppleTestFlight}
            className="mt-4 w-full bg-[#52bf88] text-white p-3 rounded-[8px] hover:bg-[#2f8d61] transition duration-300 transform hover:scale-105 focus:outline-none shadow-md hover:shadow-lg"
          >
            IOS Testflight
          </button>
          <button
            onClick={openAndroidAPK}
            className="mt-4 w-full bg-white text-[#142019] border border-black/10 p-3 rounded-[8px] hover:border-[#52bf88] transition duration-300 transform hover:scale-105 focus:outline-none shadow-md hover:shadow-lg"
          >
            Android APK
          </button>
        </div>
      </div>
    )
  );
}
