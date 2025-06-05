import React, { useEffect, useState } from 'react';
import song from '../assets/song.mp3';
const BirthdayMessage: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [typedMessage, setTypedMessage] = useState('');
  
  const fullMessage = `add your msg here`;

  useEffect(() => {
    setVisible(true);
    
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullMessage.length) {
        setTypedMessage(fullMessage.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 20);
    
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className={`absolute z-40 flex md:top-[15vh] left-[5vw] md:left-[20vw] transition-opacity duration-1000 ease-in-out ${visible ? 'opacity-100' : 'opacity-0'} pointer-events-none items-center justify-center`}>
      <audio src={song} autoPlay loop />

      <div className="relative w-[90vw] md:w-[60vw]
        bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl shadow-2xl 
        p-3 sm:p-6 md:p-8 overflow-hidden border-2 border-amber-300 min-h-64">

        {/* Corner decorations */}
        <div className="absolute top-0 left-0 w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 
          bg-gradient-to-br from-amber-800 to-amber-950 rounded-br-3xl opacity-80"></div>
        <div className="absolute top-0 right-0 w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 
          bg-gradient-to-bl from-amber-800 to-amber-950 rounded-bl-3xl opacity-80"></div>
        <div className="absolute bottom-0 left-0 w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 
          bg-gradient-to-tr from-amber-800 to-amber-950 rounded-tr-3xl opacity-80"></div>
        <div className="absolute bottom-0 right-0 w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 
          bg-gradient-to-tl from-amber-800 to-amber-950 rounded-tl-3xl opacity-80"></div>

        {/* Text block */}
        <div className="relative z-10 text-amber-950 font-medium
          text-xs sm:text-sm md:text-lg leading-snug text-center whitespace-pre-line py-2 sm:py-4 md:py-6">
          {typedMessage}<span className='animate-pulse'>|</span>
        </div>
      </div>
    </div>
  );
};

export default BirthdayMessage;
