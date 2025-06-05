import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import BirthdayMessage from './BirthdayMessage';
import ChocolateRain from './ChocolateRain';
 // Adjust the path as necessary
const ChocolateBox: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showRain, setShowRain] = useState(false);

  const handleBoxClick = () => {

      setIsOpen(!isOpen);
      setTimeout(() => {
        setShowMessage(!showMessage);
        setTimeout(() => {
          setShowRain(true);
        }, 1000);
      }, 800);
    
  };

  return (
    <div className="flex flex-col items-center justify-center z-30">
      {showRain && <ChocolateRain />}
      
      <div 
        className={`relative cursor-pointer transition-all duration-1000 ease-in-out transform 
          ${isOpen ? 'scale-105 sm:scale-110' : 'hover:scale-105'}`}
        onClick={handleBoxClick}
      >
        {/* Box lid */}
        <div 
          className={`z-10 w-[80vw] h-[20vh] sm:w-[60vw] sm:h-[15vh] md:w-[50vw] md:h-[20vh] lg:w-[40vw] lg:h-[25vh]
            bg-gradient-to-br from-amber-700 to-amber-900 rounded-t-2xl border-2 border-amber-600 
            shadow-xl transition-all duration-1000 ease-in-out origin-bottom transform
            ${isOpen ? 'rotate-x-180 translate-y-[-100%] opacity-90 ' : ''}`}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`transition-opacity duration-1000 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
              <Sparkles className="text-amber-300 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 animate-pulse" />
              <p className="text-amber-200 font-bold text-center mt-2 text-xs sm:text-sm md:text-base">
                Click to open
              </p>
            </div>
          </div>
          
          {/* Ribbon */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 sm:-translate-y-3 
            w-16 sm:w-20 md:w-24 h-8 sm:h-10 md:h-12">
            <div className="absolute w-full h-4 sm:h-5 md:h-6 bg-red-600 rounded"></div>
            <div className="absolute left-1/2 transform -translate-x-1/2 top-2 sm:top-3 
              w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 bg-red-600 rotate-45"></div>
          </div>
        </div>

        {/* Box bottom */}
        <div className="relative w-[80vw] h-[10vh] sm:w-[60vw] sm:h-[15vh] md:w-[50vw] md:h-[20vh] lg:w-[40vw] lg:h-[25vh]
          bg-gradient-to-br from-amber-800 to-amber-950 rounded-b-2xl border-2 border-t-0 
          border-amber-700 shadow-xl overflow-hidden">
          
          {/* Inner chocolates */}
          <div className="absolute inset-2 sm:inset-3 md:inset-4 grid grid-cols-3 gap-1 sm:gap-1.5 md:gap-2 
            transition-opacity duration-500">
            {Array.from({ length: 9 }).map((_, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br from-amber-950 to-amber-900 rounded-lg 
                  border border-amber-800 shadow-inner transition-all duration-1000
                  ${isOpen ? 'opacity-100' : 'opacity-0'}`}
                style={{ 
                  transitionDelay: `${index * 50}ms`,
                  transform: isOpen ? 'translateY(0)' : 'translateY(20px)'
                }}
              ></div>
            ))}
          </div>
          
          {/* Wax paper liner */}
          <div className={`absolute inset-0 bg-amber-100 opacity-20 transition-opacity duration-1000 
            ${isOpen ? 'opacity-20' : 'opacity-0'}`}></div>
        </div>
      </div>
      
      {showMessage && <BirthdayMessage />}
    </div>
  );
};

export default ChocolateBox;