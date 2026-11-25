import { useState } from 'react';
import '../App.css'; 

const Title = () => {
const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
<div>
      <svg>
    <defs>
    <filter id="outline">
 <feFlood floodColor="#c21f83" floodOpacity="0.9" result="RED" />
      <feFlood floodColor="#5e29f1" floodOpacity="0.6" result="GREEN" />
      <feFlood floodColor="#83e962" floodOpacity="0.6" result="BLUE" />
      <feComposite operator="in" in="RED" in2="SourceAlpha" result="RED_TEXT"/>
      <feComposite operator="in" in="GREEN" in2="SourceAlpha" result="GREEN_TEXT"/>
      <feComposite operator="in" in="BLUE" in2="SourceAlpha" result="BLUE_TEXT"/>
      <feOffset in="RED_TEXT" dx="-15" dy="0" result="RED_TEXT_OFF"/>
      <feOffset in="GREEN_TEXT" dx="15" dy="0"  result="GREEN_TEXT_OFF"/>
      <feOffset in="BLUE_TEXT" dx="0" dy="0"  result="BLUE_TEXT_OFF"/>
      <feMerge>
              <feMergeNode in="RED_TEXT_OFF" />
              <feMergeNode in="GREEN_TEXT_OFF"/>
              <feMergeNode in="BLUE_TEXT_OFF"/>
      </feMerge>
</filter>

    </defs>
</svg>
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="title-container"
    >
    <p
    className= 'title-text'
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    filter={isHovered ? "url(#outline)" : "none"}
    >boopington</p>
 
    </div>
    </div>
  );
};


export default Title;