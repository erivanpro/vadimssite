import { useState, useEffect } from 'react';

export default function Cookies() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if the user has already made a decision (accepted or rejected cookies)
    const userDecision = localStorage.getItem('cookieConsent');
    
    if (userDecision) {
      setIsVisible(false); // Hide the banner if a decision has already been made
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted'); // Store the user's decision
    setIsVisible(false); // Hide the banner after accepting cookies
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected'); // Store the user's decision
    setIsVisible(false); // Hide the banner after rejecting cookies
  };

  if (!isVisible) return null; // Do not render if the banner is hidden

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 px-6 pb-6">
      <div className="pointer-events-auto ml-auto max-w-xl rounded-xl bg-white p-6 shadow-lg ring-1 ring-gray-900/10">
        
        {/* Siri-like icon */}
        <div className="flex items-center gap-x-2 mb-4">
          <p className="text-sm text-gray-900">
            Ce site utilise des cookies pour compléter un régime équilibré et offrir une récompense bien méritée aux sens après
            avoir consommé des repas fades mais nutritifs. Accepter nos cookies est facultatif mais recommandé, car ils sont
            délicieux. Consultez notre{' '}
            <a href="#" className="font-semibold text-cyan-600">
              politique de cookies
            </a>
            .
          </p>
        </div>

        {/* Accept and Reject buttons */}
        <div className="mt-4 flex items-center gap-x-5">
          <button
            type="button"
            className="rounded-full bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
            onClick={handleAccept}
          >
            Accepter tout
          </button>
          <button
            type="button"
            className="text-sm font-semibold text-gray-900"
            onClick={handleReject}
          >
            Refuser tout
          </button>
        </div>
      </div>
    </div>
  );
}
