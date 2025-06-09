// components/CircularText.js
import './CircularText.css';
const CircularText = () => {
  return (
    <div className="circular-text-wrapper">
      <svg viewBox="0 0 300 300" className="rotating-svg">
        <defs>
          <path
            id="circlePath"
            d="M 150, 150
               m -100, 0
               a 100,100 0 1,1 200,0
               a 100,100 0 1,1 -200,0"
          />
        </defs>
        <text fill="white" fontSize="20" fontWeight="bold">
          <textPath href="#circlePath" startOffset="0%">
          DIGITAL DESIGNER VADIMS MARTINEZ•    DIGITAL DESIGNER VADIMS MARTINEZ •    DIGITAL DESIGNER VADIMS MARTINEZ •
          </textPath>
        </text>
      </svg>
      <div className="center-dot"></div>
    </div>
  );
};

export default CircularText;
